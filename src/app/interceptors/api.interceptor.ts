import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private cookie: CookieService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.cookie.get("token");
    if (token) {
      request = request.clone({
        setHeaders: {
          token,
        },
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.code === 401) {
            this.router.navigateByUrl("/login");
          }
        }
        return event;
      })
    );
  }
}
