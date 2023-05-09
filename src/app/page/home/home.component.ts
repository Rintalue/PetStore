import { Component, OnInit } from '@angular/core';
import {ServicesService} from 'src/app/services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServicesService) { }
petsData:any;
  ngOnInit(): void {
    this.petsData=this.service.petDetails;
  }

}
