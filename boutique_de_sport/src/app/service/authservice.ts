import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/userservice';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string | undefined;
  currentUser: any;
  isUserAdmin(): boolean  {
    return this.userRole === 'admin';
  }
  backendUrl: string = 'http://localhost:9085'; 

  constructor(private http: HttpClient,private userService: UserService) {}

  createNewUser(firstname: string, lastname: string,email: string,password: string,passwordrep: string,gender: string,birthdate:Date,address:string) {
    const userData = { firstname,lastname,email,password,passwordrep,gender,birthdate,address };
    console.log('Sending user data to backend:', userData);
    return this.http.post(`${this.backendUrl}/inscription`, userData);
  }

  signInUser(email: string, password: string) {
    const userData = { email, password };

    return this.http.post(`${this.backendUrl}/connexion`, userData).pipe(
        tap(
            (response: any) => {
                console.log('User details from backend:', response);

                if (response && response.firstname && response.lastname) {
                    this.userService.setCurrentUser(response);
                    this.currentUser = response;
                    console.log('User details stored in UserService:', this.currentUser);
                } else {
                    console.error('User details from backend are null or undefined.');
                }
            },
            (error) => {
                console.error('Error during sign in:', error);
            }
        )
    );
}




  signOutUser() {
    return this.http.post(`${this.backendUrl}/logout`, null);
  }

  forgetPassword(email: string) {
    return this.http.post(`${this.backendUrl}/reset-password`, { email });
  }
}
