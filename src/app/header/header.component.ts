
import { Component,  ElementRef,  OnInit, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openmenu:boolean = false;
 
  constructor() { }

  ngOnInit(): void {
     
}
}
