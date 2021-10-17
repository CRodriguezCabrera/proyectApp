import { PersonalProjectModel } from './models/personal-project-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  public structureData : PersonalProjectModel;
  public sonMessage: string = "";
  public sonMessageTwo: string = "";
  public sonMessageThree: string = "";
  public sonMessageFour: string = "";


  constructor() { 
    this.structureData = {
      nav:{
        title: "Inmobiliaria Inventada",
        img:{
          src:"https://i.imgur.com/c5UfdiH.png",
          alt:"logo inmobiliaria"
        }
      },
      hero:{
        title: "INMUEBLES DESTACADOS",
        gallery:[
          {
            src:"https://i.imgur.com/Ww0IUtp.jpg",
            alt:"inmueble 1"
          },
          {
            src:"https://i.imgur.com/teeOvqH.jpg",
            alt:"inmueble 2"
          },
          {
            src:"https://i.imgur.com/nn2h3qJ.jpg",
            alt:"inmueble 3"
          },
          {
            src:"https://i.imgur.com/Y6WTqmC.jpg",
            alt:"inmueble 4"
          },
          {
            src:"https://i.imgur.com/EOuhEo4.jpg",
            alt:"inmueble 5"
          },
          {
            src:"https://i.imgur.com/hjI04Qa.jpg",
            alt:"inmueble 6"
          },
          {
            src:"https://i.imgur.com/guxj8dY.jpg",
            alt:"inmueble 7"
          },
          {
            src:"https://i.imgur.com/7ekRj8l.jpg",
            alt:"inmueble 8"
          }
        ]
      },
      form:{
        title:"CONTACTE CON NOSOTROS",
        text: "Si desea que contactemos con usted, facilitenos sus datos y estaremos encantados de ayudarle",
        inputName: "",
        inputNumber: "",
        inputEmail: "",
        inputText: ""
      }
    }
  }

  ngOnInit(): void {}

  public setMessage(emitText: string) {
    this.sonMessage = emitText;
    
  }
  public setMessageTwo(emitTextTwo: string){
    this.sonMessageTwo = emitTextTwo;
  }
  public setMessageThree(emitTextThree: string){
    this.sonMessageThree = emitTextThree;
  }
  public setMessageFour(emitTextFour: string){
    this.sonMessageFour = emitTextFour;
  }


}
