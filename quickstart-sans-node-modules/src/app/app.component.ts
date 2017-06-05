import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hafa {{name}}</h1>`,
})
export class AppComponent  { name = 'Dude!'; }
