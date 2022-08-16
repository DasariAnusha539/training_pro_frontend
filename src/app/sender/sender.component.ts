import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  send(){
    console.log("sending");
  };


  Download1(){
    console.log("All ok");
    var name1 = <HTMLInputElement>document.getElementById('date');
    let u1=name1.value;
    var name2 = <HTMLInputElement>document.getElementById('yname');
    let u2=name2.value;
    var name3 = <HTMLInputElement>document.getElementById('yacc');
    let u3=name3.value;
    var name4 = <HTMLInputElement>document.getElementById('sname');
    let u4=name4.value;
    var name5 = <HTMLInputElement>document.getElementById('sacc');
    let u5=name5.value;
    var name6 = <HTMLInputElement>document.getElementById('samount');
    let u6=name6.value;
    document.writeln("date:"+u1);
    document.writeln(" ");
    document.writeln("Sender_name:"+u2);
    document.writeln("Sender_Account_number:"+u3);
    document.writeln("Receiver_Name"+u4);
    document.writeln("Receiver_Account_number"+u5);
    document.writeln("Sent_Amount"+u6);
  }
 
  }