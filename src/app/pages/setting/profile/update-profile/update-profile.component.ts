import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IResponse, IUserProfile } from '@/interfaces';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.less'],
})
export class UpdateProfileComponent implements OnInit {
  spinning = false;
  submitting = false;
  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService,
  ) {
    this.profileForm = this.fb.group({
      screenName: [''],
      url: [''],
      mail: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchProfile();
  }

  async fetchProfile() {
    this.spinning = true;
    try {
      const res = await this.http
        .get<IResponse<IUserProfile>>(`${environment.baseUrl}/profile`)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      const { screenName, url, mail } = res.data;
      this.profileForm.get('screenName')?.setValue(screenName);
      this.profileForm.get('url')?.setValue(url);
      this.profileForm.get('mail')?.setValue(mail);
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.spinning = false;
    }
  }

  async submit() {
    for (const i in this.profileForm.controls) {
      this.profileForm.controls[i].markAsDirty();
      this.profileForm.controls[i].updateValueAndValidity();
    }
    if (!this.profileForm.valid) {
      return;
    }
    this.submitting = true;
    try {
      const res = await this.http
        .patch<IResponse<void>>(`${environment.baseUrl}/updateProfile`, this.profileForm.value)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.message.success('您的档案已经更新');
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.submitting = false;
    }
  }
}
