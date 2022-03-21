import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-socksock',
  templateUrl: './socksock.component.html',
  styleUrls: ['./socksock.component.scss']
})
export class SocksockComponent implements OnInit {

  title = 'sockjs-exam';

  disabled = true;
  private stompClient:any = null;
  
  receiveList: any[] = [];



  constructor() { }


  ngOnInit(): void{
  }


  setConnected(connected: boolean) {
    this.disabled = !connected;    
  }

  connect() {
    const socket = new SockJS('http://192.168.0.13:8080/end-point');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({},  (frame:any) => {
      this.setConnected(true);
      console.log('Connected: ' + frame);

    // 메시지를 수신받는 부분
      this.stompClient.subscribe('/topic/hi',  (hello:any) => {
        console.log('receive message::::')
        console.log(JSON.parse(hello.body));
        this.receiveList.push(JSON.parse(hello.body));
      });
    });
  }

// 메시지를 전송
  sendMessage(){
    let data = {'attendanceCount': '555','memberSince':'ddd', 'userName':'pub'}
    this.stompClient.send("/test/hello",{},JSON.stringify(data));
  }


  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }


}
