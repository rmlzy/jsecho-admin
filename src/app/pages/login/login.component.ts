import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@/services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  submitting = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

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
    await this.authService.login(this.loginForm.value);
    this.submitting = false;
  }
}
