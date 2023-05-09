import { Component, OnInit } from '@angular/core';
import {ServicesService} from 'src/app/services.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:ServicesService) { }
  petsData:any;
  ngOnInit(): void {
    this.petsData=this.service.petDetails;
  }

}
