import { Component } from '@angular/core';
import {AnimalEnum} from '../animal-enum.enum';
import {AnimalAction} from '../animal-action';
import {Ianimal} from '../ianimal';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent extends AnimalAction implements Ianimal{ 

animalName="Jack";

animalFullInfo:()=>string=undefined;  //animalFullInfo is undefined

  sayHello(){
      return super.sayHello()+` I am a Dog!!! `;
  }
  animalType:AnimalEnum = AnimalEnum.Dog;
  
  title="Component " +AnimalEnum[this.animalType];
}
