import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/authservice';
import { Subscription } from 'rxjs';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  messages1!: Message[] ;
  registerform!: FormGroup;
  errorMessage!: string;
  subscription: Subscription | undefined;
  showToaster!: boolean;

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initform();
    this.showToaster = false;
    this.messages1 = [
      { severity: 'success', detail: 'votre compte est crée avec succés !' },

  ];
  }

  initform() {
    this.registerform = this.fb.group({
      firstname: new FormControl('', [
        Validators.pattern("[a-z A-Z]+"),
        Validators.required
      ]),
      lastname: new FormControl('', [
        Validators.pattern("[a-z A-Z]+"),
        Validators.required
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      passwordrep: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

      gender: new FormControl('', [
        Validators.required,
      ]), 
      birthdate: new FormControl('', [
        Validators.required,
      ]), 
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]) 





    });
  }

  get firstname() {
    return this.registerform.get('firstname');
  }

  get lastname() {
    return this.registerform.get('lastname');
  }
  get password() {
    return this.registerform.get('password');
  }

  get passwordrep() {
    return this.registerform.get('passwordrep');
  }
  
  get email() {
    return this.registerform.get('email');
  }
  get gender() {
    return this.registerform.get('gender');
}

get birthdate() {
  return this.registerform.get('birthdate');
}
get address() {
  return this.registerform.get('address');
}
  
register() {
    const email = this.registerform.get('email')?.value;
    const password = this.registerform.get('password')?.value;
    const firstname = this.registerform.get('firstname')?.value;
    const lastname = this.registerform.get('lastname')?.value;
   const passwordrep= this.registerform.get('passwordrep')?.value;
   const gender=this.registerform.get('gender')?.value;
   const address=this.registerform.get('address')?.value;
   const birthdate=this.registerform.get('birthdate')?.value;
    
    this.subscription = this.authservice.createNewUser(firstname, lastname,email, password,passwordrep,gender,birthdate,address).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.showToaster = true;
        this.router.navigate(['/connexion']);
      },
      (error: string) => {
        console.error('Error during registration:', error);
        this.errorMessage = error;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



