import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../Globals/variables';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  // @ts-ignore
  url = BASE_URL + '/send-mail';

  constructor(private http: HttpClient) { }

  public postmail(email: string, message: string, files: FileList | null = null): void {
    const content = '{"sender":"' + email + '", "body":"' + message + '"}';

    for (const file in files){
      // prepare files to be sent tp back
    }
    const jsonObject = JSON.parse(content);
    console.log(jsonObject);
    // this.http.post(this.url, content).subscribe(resp => console.log(resp));
  }
}
