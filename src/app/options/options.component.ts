import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private router: Router) { }

  sender(){
    this.router.navigateByUrl('sender');

  }

  receiver(){
    this.router.navigateByUrl('receiver');

  }

  ngOnInit(): void {
  }

}
