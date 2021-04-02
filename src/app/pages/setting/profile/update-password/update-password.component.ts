import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from '@environments/environment';
import { IResponse } from '@/interfaces';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.less'],
})
export class UpdatePasswordComponent implements OnInit {
  submitting = false;
  passwordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private message: NzMessageService,
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  async submit() {
    for (const i in this.passwordForm.controls) {
      this.passwordForm.controls[i].markAsDirty();
      this.passwordForm.controls[i].updateValueAndValidity();
    }
    if (!this.passwordForm.valid) {
      return;
    }
    const { password, confirm } = this.passwordForm.value;
    if (password !== confirm) {
      this.message.warning('两次输入的密码不一致');
      return;
    }
    this.submitting = true;
    try {
      const res = await this.http
        .patch<IResponse<void>>(`${environment.baseUrl}/updatePassword`, { password })
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.message.success('密码已经成功修改');
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.submitting = false;
    }
  }
}
