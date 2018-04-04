import { Pipe, PipeTransform } from "@angular/core";

// @Pipe is an annotation creating a Pipe:
@Pipe({
    name: "appYearSlogen"
})
export class YearSlogenPipe implements PipeTransform {

    transform(value: string): string {
        let arr = ["best year ever!", "can't wait till next year!", "cool sales in this year!"];
        let index = Math.random() * arr.length;
        index = parseInt("" + index);
        return value + " (" + arr[index] + ")";        
    }
}

// Note: each parameter after the value, will get a value sent after a colon mark:
// {{someValue | somePipe:1:2:'Hi':3}} will sent to transform 5 parameters: someValue, 1, 2, 'Hi' and 3.