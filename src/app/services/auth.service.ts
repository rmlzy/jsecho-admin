import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
import { IUserProfile } from '@/interfaces';
import { ConfigService } from '@/services/config.service';

interface ILoginFormData {
  name: string;
  password: string;
}

interface IUserProfileResponse {
  code: number;
  message: string;
  data: IUserProfile;
}

interface ILoginResponse {
  code: number;
  message: string;
  data: string;
}

interface ILogoutResponse {
  code: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService,
    private configService: ConfigService,
    private cookieService: CookieService,
  ) {}

  async login(loginFormData: ILoginFormData) {
    try {
      const res = await this.http
        .post<ILoginResponse>(`${environment.baseUrl}/login`, loginFormData)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.cookieService.set('token', res.data);
      await this.router.navigateByUrl('/');
    } catch (e) {
      this.message.warning(e.message);
    }
  }

  async logout() {
    try {
      await this.http.get<ILogoutResponse>(`${environment.baseUrl}/logout`).toPromise();
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.cookieService.delete('token');
      await this.router.navigateByUrl('/login');
    }
  }

  async fetchUserProfile() {
    try {
      const res = await this.http
        .get<IUserProfileResponse>(`${environment.baseUrl}/profile`)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.configService.setUserProfile(res.data);
      return res.data;
    } catch (e) {
      this.message.warning(e.message);
    }
    return null;
  }
}
