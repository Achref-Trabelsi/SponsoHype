import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../Globals/variables';
import {User} from '../Models/User';

interface LoginResult {
  access_token: string;
  user: User;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = BASE_URL + '/login';
  private registrationUrl = BASE_URL + '/register';

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): void {
    const content = '{"email" :" ' + email + '" , "password" : "' + password + '" }';
    console.log(content);
    const jsonObject = JSON.parse(content);
    this.http.post<LoginResult>(this.loginUrl, content).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.access_token);
        let use = Object.assign(new User(), res.user);
        console.log(use.role_id);
        if ( use.role_id === 1){
          localStorage.setItem('role', 'sponsor');
        }
        else {
          localStorage.setItem('role', 'sponsee');
        }
      },
      error => console.log(error)
    );
  }

  public register(body: JSON): void {
    this.http.post<LoginResult>(this.registrationUrl, body).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.access_token);
        let use = Object.assign(new User(), res.user);
        console.log(use.role_id);
        if ( use.role_id === 1){
          localStorage.setItem('role', 'sponsor');
        }
        else {
          localStorage.setItem('role', 'sponsee');
        }
      },
      error => console.log(error)
    );
  }
}
