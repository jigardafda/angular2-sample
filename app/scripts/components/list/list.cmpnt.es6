import {Component, Template, bootstrap} from 'angular2/angular2';

class List {
  constructor() {
    this.name = 'Alice';
  }
}

List.annotations = [
	new Component({
		selector: 'ngs-list'
	}),
	new Template({
  		url: 'scripts/list/list.cmpnt.html'
	})
];

bootstrap(List);