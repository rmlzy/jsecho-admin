import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { NzMessageService } from "ng-zorro-antd/message";
import { ActivatedRoute, Router } from "@angular/router";
import { IMeta } from "@/interfaces";

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
  currentMid: string | null = "";
  parentEnums: IMeta[] = [];

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
      slug: [""],
      parent: [0],
      description: [""],
    });
    this.route.paramMap.subscribe((params) => {
      this.currentMid = params.get("mid");
      if (this.currentMid) {
        this.fetchMeta();
      }
    });
  }

  async fetchMeta() {
    this.spinning = true;
    try {
      const res = await this.http
        .get<IResponse>(`${environment.baseUrl}/metas/${this.currentMid}`)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      const { name, slug, parent, description } = res.data;
      this.updateForm.get("name")?.setValue(name);
      this.updateForm.get("slug")?.setValue(slug);
      this.updateForm.get("parent")?.setValue(parent);
      this.updateForm.get("description")?.setValue(description);
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
    if (this.currentMid) {
      await this.update();
    } else {
      await this.create();
    }
  }

  async create() {
    this.submitting = true;
    try {
      const fd = {
        ...this.updateForm.value,
        type: "category",
      };
      const res = await this.http
        .post<IResponse>(`${environment.baseUrl}/metas`, fd)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.router.navigateByUrl("/category/list");
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.submitting = false;
    }
  }

  async update() {
    this.submitting = true;
    try {
      const fd = {
        ...this.updateForm.value,
        type: "category",
      };
      const res = await this.http
        .patch<IResponse>(`${environment.baseUrl}/metas/${this.currentMid}`, fd)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.router.navigateByUrl("/category/list");
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.submitting = false;
    }
  }
}
