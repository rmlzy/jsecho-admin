import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { NzMessageService } from "ng-zorro-antd/message";
import { ActivatedRoute, Router } from "@angular/router";

interface IResponse {
  code: number;
  message: string;
  data: any;
}

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.less"],
})
export class UpdateComponent implements OnInit {
  spinning = false;
  submitting = false;
  updateForm!: FormGroup;
  groupEnums = [
    { label: "关注者", value: "subscriber" },
    { label: "贡献者", value: "contributor" },
    { label: "编辑", value: "editor" },
    { label: "管理员", value: "administrator" },
  ];
  currentUid: string | null = "";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: ["", [Validators.required]],
      mail: ["", [Validators.required]],
      screenName: [""],
      password: ["", [Validators.required]],
      confirm: ["", [Validators.required]],
      url: [""],
      group: ["subscriber", [Validators.required]],
    });
    this.route.paramMap.subscribe((params) => {
      this.currentUid = params.get("uid");
      if (this.currentUid) {
        this.updateForm.get("password")?.clearValidators();
        this.updateForm.get("password")?.markAsPristine();
        this.updateForm.get("confirm")?.clearValidators();
        this.updateForm.get("confirm")?.markAsPristine();
        this.fetchUser();
      }
    });
  }

  async fetchUser() {
    this.spinning = true;
    try {
      const res = await this.http
        .get<IResponse>(`${environment.baseUrl}/users/${this.currentUid}`)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      const { name, mail, screenName, url, group } = res.data;
      this.updateForm.get("name")?.setValue(name);
      this.updateForm.get("mail")?.setValue(mail);
      this.updateForm.get("screenName")?.setValue(screenName);
      this.updateForm.get("url")?.setValue(url);
      this.updateForm.get("group")?.setValue(group);
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.spinning = false;
    }
  }

  async submit() {
    for (const i in this.updateForm.controls) {
      this.updateForm.controls[i].markAsDirty();
      this.updateForm.controls[i].updateValueAndValidity();
    }
    if (!this.updateForm.valid) {
      return;
    }
    const { password, confirm } = this.updateForm.value;
    if (password && password !== confirm) {
      this.message.warning("两次输入的密码不一致");
      return;
    }
    if (this.currentUid) {
      await this.update();
    } else {
      await this.create();
    }
  }

  async create() {
    this.submitting = true;
    try {
      const { confirm, ...fd } = this.updateForm.value;
      const res = await this.http
        .post<IResponse>(`${environment.baseUrl}/users`, fd)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.router.navigateByUrl("/user/list");
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.submitting = false;
    }
  }

  async update() {
    this.submitting = true;
    try {
      const { confirm, ...fd } = this.updateForm.value;
      const res = await this.http
        .patch<IResponse>(`${environment.baseUrl}/users/${this.currentUid}`, fd)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.router.navigateByUrl("/user/list");
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.submitting = false;
    }
  }
}
