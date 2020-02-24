import { ExpandableComponent } from './expandable/expandable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: any = [];
	itemExpandHeight: number = 100;

  constructor() {}

  this.items = [
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false}
  ];

}

expandItem(item):void{

  this.items.map((listItem) => {

    if(item == listItem){
      listItem.expanded = !listItem.expanded;
    } else {
      listItem.expanded = false;
    }

    return listItem;

  });
  
}

}
