import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent implements OnInit {
  messBox: string = 'tab1';
  // dataSoutceBox:  = false;
  preferQue: any[] = [
    {
      ques: 'Welcome Message',
      placeholder: 'Type your welcome message',
    },
    {
      ques: 'Gretting Message',
      placeholder: 'Type your gretting message',
    },
    {
      ques: 'Other Message',
      placeholder: 'Type your welcome message',
    },
    {
      ques: 'Other Message',
      placeholder: 'Type your welcome message ',
    },
  ];

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;

  constructor() {
    this.uploader = new FileUploader({
      url: 'https://evening-anchorage-3159.herokuapp.com/api',
      disableMultipart: true,
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date(),
          });
        });
      },
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe((res) => (this.response = res));
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit(): void {}

  showOption(val: string) {
    this.messBox = val;
  }
}
