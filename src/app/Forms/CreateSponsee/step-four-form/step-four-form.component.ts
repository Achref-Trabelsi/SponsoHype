import {Component, OnInit} from '@angular/core';
import {MailService} from '../../../services/mail.service';

@Component({
  selector: 'app-step-four-form',
  templateUrl: './step-four-form.component.html',
  styleUrls: ['./step-four-form.component.css']
})
export class StepFourFormComponent implements OnInit {

  filesNames: string[] = [];
  filesTosend: FileList | null = null;

  constructor(private mailService: MailService) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    const selectedFiles = event.target.files;

    for (let i = 0; i < selectedFiles.length; i++) {
      this.filesNames[i] = selectedFiles[i].name;
    }
    this.filesNames = [...this.filesNames];
    this.filesTosend = selectedFiles;
  }

  // we will use the mailService to send the verification files to our adress
  onUpload(): void {
    // Todo: pass sponsee adress as input to this component
    this.mailService.postmail('test@email.com', 'I am a real organization!', this.filesTosend);
  }
}
