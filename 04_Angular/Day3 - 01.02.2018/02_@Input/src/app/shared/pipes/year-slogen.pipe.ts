import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "afYearSlogen"
})
export class YearSlogenPipe implements PipeTransform {

    transform(value: string): string {
        let arr = ["best year ever!", "can't wait till next year!", "cool sales in this year!"];
        let index = Math.random() * arr.length;
        index = parseInt("" + index);
        return value + " (" + arr[index] + ")";        
    }
}