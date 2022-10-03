import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  footer="95px";
  padd:any="";
isActiveSi:any=true;
isActiveSu:any=false;
onValChange(value:string){
  if(value === 'SIGN UP'){
    this.isActiveSi = false;this.isActiveSu = true;
    this.padd="236px";
    this.footer="110px";
  }
  else{
    this.isActiveSi = true;this.isActiveSu=false;
    this.padd="0";
    this.footer="95px"
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
