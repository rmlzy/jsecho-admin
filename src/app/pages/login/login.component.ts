import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { CookieService } from "ngx-cookie-service";
import { IResponse } from "./login.interface";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  submitting = false;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private message: NzMessageService,
    private cookie: CookieService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  async submit(): Promise<void> {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (!this.loginForm.valid) {
      return;
    }
    this.submitting = true;
    try {
      const res = await this.http
        .post<IResponse>(`${environment.baseUrl}/auth/login`, this.loginForm.value)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.cookie.set("token", res.data);
      await this.router.navigateByUrl("/");
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.submitting = false;
    }
  }
}
