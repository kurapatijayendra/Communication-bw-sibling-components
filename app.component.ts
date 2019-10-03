import { Component } from '@angular/core';
import { InterationService } from './interation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commBetweenComponents';
  public name:string = '';

  constructor(private _InterationService:InterationService){}
public tranMessage(){
  this._InterationService.sendMessage(this.name);
}

}
