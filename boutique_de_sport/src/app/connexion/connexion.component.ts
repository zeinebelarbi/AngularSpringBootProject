import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/authservice'


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;
  userService: any;

  constructor(private fb:FormBuilder, private authservice:AuthService, private router:Router) { }
  ngOnInit(): void {
    this.initform()
  }
  initform (){
    this.loginForm=this.fb.group({
      email:new FormControl('',[
        Validators.required,
        Validators.email
  
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
  
      ])
    })
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }
  login() {
    if (this.loginForm) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
  
      if (email && password) {
        this.authservice.signInUser(email, password).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          (error: string) => {
            this.errorMessage = error;
          }
        );
      }
    }
  }
  
  
}
function user(email: any, password: any, user: any) {
  throw new Error('Function not implemented.');
}

