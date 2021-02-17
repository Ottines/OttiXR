import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
