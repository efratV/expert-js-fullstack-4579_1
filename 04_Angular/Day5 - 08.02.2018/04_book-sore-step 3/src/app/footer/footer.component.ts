import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <p>&copy; all rights reserved - Anna Karp -{{year}}</p>
  `,
  styles: [`
  p{
    text-align:center;
  }
  `]
})
export class FooterComponent {
  
  year=new Date().getFullYear();

}
