import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { NzMessageService } from "ng-zorro-antd/message";

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
  submitting = false;
  updateForm!: FormGroup;
  groupEnums = [
    { label: "关注者", value: "subscriber" },
    { label: "贡献者", value: "contributor" },
    { label: "编辑", value: "editor" },
    { label: "管理员", value: "administrator" },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
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
  }

  async submit() {
    for (const i in this.updateForm.controls) {
      this.updateForm.controls[i].markAsDirty();
      this.updateForm.controls[i].updateValueAndValidity();
    }
    if (!this.updateForm.valid) {
      return;
    }
    this.submitting = true;
    try {
      const fd = {
        ...this.updateForm.value,
      };
      const res = await this.http
        .post<IResponse>(`${environment.baseUrl}/users`, fd)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.submitting = false;
    }
  }
}
