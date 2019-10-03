import { Component, OnInit } from '@angular/core';
import { InterationService } from '../interation.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  res: string;

  constructor(private _InterationService:InterationService) { 

  }

  ngOnInit() {
    this._InterationService.Message$.subscribe( res => this.res = res)
  }

}
