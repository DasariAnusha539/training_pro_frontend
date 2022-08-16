import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  validate(){
    var name = <HTMLInputElement>document.getElementById('username');
    let u=name.value;
    var password =<HTMLInputElement>document.getElementById('password');
    let p=password.value; 
    //var role=<HTMLInputElement>document.getElementById('roles');
    //let r=role.value;
    //var diff;
    //console.log(r);
    if(u=="cashier1" && p=="cashier123" /*&&r=="Cashier"*/ ){
      //diff=<HTMLInputElement>document.getElementById('Cashier')
      //var diff1=diff.value;
      this.router.navigateByUrl('cashier'); 
      console.log('username:'+u +'pass:' +p);
    }
    else if(u=="admin1" && p=="admin123"){
      //diff=<HTMLInputElement>document.getElementById('Admin')
      //var diff1=diff.value;
      this.router.navigateByUrl('admin'); 
      console.log('username:'+u +'pass:' +p);
    }
    else if(u=="networker1" && p=="networker123"){
      //diff=<HTMLInputElement>document.getElementById('Networking')
      //var diff1=diff.value;
      this.router.navigateByUrl('networker'); 
      console.log('username:'+u +'pass:' +p);
    }
    else{
    alert("please enter valid credentials");
    console.log('username:'+u +'pass:' +p);
    }
  }

  ngOnInit(): void {

  }

}
