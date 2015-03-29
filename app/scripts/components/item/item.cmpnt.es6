import {Component, Template, bootstrap} from 'angular2/angular2';

class Item {
  constructor() {
    this.name = 'Alice';
  }
}

Item.annotations = [
	new Component({
		selector: 'ngs-item'
	}),
	new Template({
  		inline: '<h1>Hello {{ name }}</h1>'
	})
];

bootstrap(Item);