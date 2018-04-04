import { Component } from '@angular/core';
import {Ianimal} from '../ianimal';
import {AnimalAction} from '../animal-action';
import {AnimalEnum} from '../animal-enum.enum';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent extends AnimalAction implements Ianimal{


sayHello(){
    return super.sayHello()+` I am a Cat!!! `;
}


catHouse:{city:string,country:string,houseNum:number}={
  city:"Tel-Aviv",
  country:"Israel",
  houseNum:8
};

catChildren:string[]=["A","B","C","D"];

animalType:AnimalEnum = AnimalEnum.Cat;

title="Component " +AnimalEnum[this.animalType];

animalName="Tom";


isFriendlyCat():boolean{
  return true;
}
animalFullInfo = function():string{
 return `animalName: ${this.animalName}`
};
 
}
