import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from '../models/personal-project-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() public form!: Form;
  @Output() emitText =  new EventEmitter<string>();
  @Output() emitTextTwo =  new EventEmitter<string>();
  @Output() emitTextThree =  new EventEmitter<string>();
  @Output() emitTextFour =  new EventEmitter<string>();

  public message: string ="";
  public messageTwo:string ="";
  public messageThree: string="";
  public messageFour: string="";

 

  constructor() { }

  ngOnInit(): void {}


    sendMessage(){
      this.emitText.emit(this.message);
       
    }
    sendMessageTwo(){
      this.emitTextTwo.emit(this.messageTwo);
    }
    sendMessageThree(){
      this.emitTextThree.emit(this.messageThree);
    }
    sendMessageFour(){
      this.emitTextFour.emit(this.messageFour);
    }

  
}

