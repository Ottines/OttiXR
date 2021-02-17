import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-component',
  templateUrl: './application-component.component.html',
  styleUrls: ['./application-component.component.scss']
})
export class ApplicationComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
