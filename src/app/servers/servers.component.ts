import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName: string = '';
  serverList = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverList.push(this.serverName);
    console.log(this.serverList);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.serverName = '';
  }

  onUpdatedServerName(event: Event) {
    //explictly indicated that it's an HTML element to angular
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
