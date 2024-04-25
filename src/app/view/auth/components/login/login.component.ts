import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  value!: string;
  promptLabel!: string;
  weakLabel!: string;
  mediumLabel!: string;
  strongLabel!: string;
  key = 0;
  loginForm!: FormGroup;
  iconPosition: 'left' | 'right' = 'left';
  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef,private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm();
    this.translateLabels();
    this.translate.onLangChange.subscribe(() => {
      this.translateLabels();
      this.initForm();
    });
    this.setDirectionality(this.translate.currentLang);
    this.translate.onLangChange.subscribe(event => {
      this.setDirectionality(event.lang);
    });

  }
  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }
  private translateLabels() {
    this.translate.get(['CHOOSE_PASSWORD', 'PASSWORD_TOO_SIMPLE', 'PASSWORD_AVERAGE_COMPLEXITY', 'PASSWORD_COMPLEX'])
      .subscribe(translations => {
        this.promptLabel = translations['CHOOSE_PASSWORD'];
        this.weakLabel = translations['PASSWORD_TOO_SIMPLE'];
        this.mediumLabel = translations['PASSWORD_AVERAGE_COMPLEXITY'];
        this.strongLabel = translations['PASSWORD_COMPLEX'];
        this.cdr.detectChanges();
      });
  }
  onSubmit(): void {
    console.log(this.loginForm.value);
  }
  private setDirectionality(lang: string): void {
    this.iconPosition = lang =='ar' ? 'right' : 'left';
  }
}
