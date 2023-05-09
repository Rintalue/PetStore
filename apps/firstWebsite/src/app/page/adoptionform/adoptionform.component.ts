import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ServicesService} from 'src/app/services.service';
@Component({
  selector: 'app-adoptionform',
  templateUrl: './adoptionform.component.html',
  styleUrls: ['./adoptionform.component.css']
})
export class AdoptionformComponent implements OnInit {
  infos: Info[] = [];
  onAddInfo(form:NgForm){
    this.infos.push({title: form.value.info});
    form.resetForm();
  }

  constructor(private param:ActivatedRoute, private service:ServicesService) { }
  getProductsId:any;
  productsData:any;

  ngOnInit(): void {
    this.getProductsId= this.param.snapshot.paramMap.get('id');
    console.log(this.getProductsId,'getProducts');
    if(this.getProductsId){
      this.productsData=this.service.petDetails.filter((value)=>{
        return value.id == this.getProductsId;
      });
      console.log(this.productsData,'productsdata>>')

    }
  }


}
