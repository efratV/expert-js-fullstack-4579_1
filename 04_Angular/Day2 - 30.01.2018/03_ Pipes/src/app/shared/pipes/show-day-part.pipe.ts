import { Pipe, PipeTransform } from "@angular/core";

// @Pipe is an annotation creating a Pipe:
@Pipe({
    name: "appShowDayPart"
})
export class ShowDayPartPipe implements PipeTransform {

    transform(value: string): string {
      let currentDate=new Date();
      let dayPart:string;
        switch(currentDate.getHours()){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6: dayPart="Night"; break;

            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12: dayPart="Morning";break;

            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18: dayPart="Afternoon"; break;
          
           default: dayPart="Evening";break;
        }
        return value.toLowerCase() + " " +dayPart;        
    }
}

// Note: each parameter after the value, will get a value sent after a colon mark:
// {{someValue | somePipe:1:2:'Hi':3}} will sent to transform 5 parameters: someValue, 1, 2, 'Hi' and 3.