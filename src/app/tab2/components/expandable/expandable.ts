import { Component, Input, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent implements AfterViewInit {

	@ViewChild('expandWrapper', {static: false}) expandWrapper;
	@Input('expanded') expanded;
	@Input('expandHeight') expandHeight;

	currentHeight: number = 0;

	constructor(public renderer: Renderer) {

	}

	ngAfterViewInit(){
		this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');	
	}

}