import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-networker',
  templateUrl: './networker.component.html',
  styleUrls: ['./networker.component.css']
})
export class NetworkerComponent implements OnInit {

  constructor(private router: Router) { }

  continue(){
    this.router.navigateByUrl('options');

  }

  ngOnInit(): void {
  }

}
