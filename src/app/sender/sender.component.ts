import { Component, OnInit ,Input} from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
//customer:string='';
export class SenderComponent implements OnInit {

   users:any;
   user:any;
   l:any;
   //this.l=k;
  constructor(private userData:UsersDataService) { 

  }
  
  ngOnInit(){
    this.userData.users().subscribe(data=>this.users=data);
  }
  //@Input() users=0

 /* ngOnInit(): void {
  }*/
  send(){
    console.log("sending");
  };
  /*update(customerid:string)
  {

  }*/

  getselectvalue1(k:any){

    var selectedvalue1=<HTMLInputElement>document.getElementById("sacc");
    var a1=selectedvalue1.value; 
    console.log(k);
  }



  Download1(){
    console.log("All ok");
    /*var name1 = <HTMLInputElement>document.getElementById("date");
    let u1=name1.value;
    var name2 = <HTMLInputElement>document.getElementById('sacc');
    let u2=name2.value;
    var name3 = <HTMLInputElement>document.getElementById('sname');
    let u3=name3.value;
    var name4 = <HTMLInputElement>document.getElementById('s_bic');
    let u4=name4.value;
    var name5 = <HTMLInputElement>document.getElementById('racc');
    let u5=name5.value;
    var name6 = <HTMLInputElement>document.getElementById('rname');
    let u6=name6.value;
    var name7 = <HTMLInputElement>document.getElementById('r_bic');
    let u7=name7.value;
    console.log(u1);
    console.log(u2);*/
    var name1 = <HTMLInputElement>document.getElementById('date');
    let u1=name1.value;
    console.log(u1);
    console.log(this.users.customerId);


    //var s=this.user.customerid;
    //console.log(s);
  //selectcustomerid1(event:any){
    //console.log(this.customer=event.target.value);
  //}
    


  }
  
 
  }