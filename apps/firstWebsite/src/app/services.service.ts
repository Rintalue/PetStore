import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  petDetails=[
{
  id:1,
  petName:"Poncho",
  petDetail: "WhiteCoat",
  petImg:"../../../assets/img/white.jpg",
},
{
  id:2,
  petName:"Bootsie",
  petDetail: "BlackCoat",
  petImg:"../../../assets/img/black.jpg",
}, {
      id: 3,
      petName: "Jally",
      petDetail: "Persian",
      petImg: "../../../assets/img/persian.jpg",
    },
    {
      id:4,
      petName: "Bolly",
      petDetail: "Husky",
      petImg: "../../../assets/img/husky.jpg",
    },
    {
      id:5,
      petName: "Pam",
      petDetail: "Orange Coat",
      petImg: "../../../assets/img/orange.jpg",
    },
    {
      id:6,
      petName: "Lucky",
      petDetail: "Brown Malyasian hamster",
      petImg: "../../../assets/img/hamster.jpg",
    },
    {
      id:5,
      petName: "Yen",
      petDetail: "Brown 4yr old puppy",
      petImg: "../../../assets/img/puppy.jpg",
    },
    {
      id:7,
      petName: "Colly",
      petDetail: "Golden Retriever",
      petImg: "../../../assets/img/golden.jpg",
    },
    {
      id:8,
      petName: "Nadia",
      petDetail: "Fluffy White puppy",
      petImg: "../../../assets/img/pup2.jpg",
    }

  ]
}
