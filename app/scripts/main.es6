import {Component, Template, bootstrap} from 'angular2/angular2';

/*
@Component({
  selector: 'my-app'
})
@Template({
  inline: '<h1>Hello {{ name }}</h1>'
})
*/
class MyAppComponent {
  constructor() {
    this.name = 'Alice';
  }
}

MyAppComponent.annotations = [
	new Component({
		selector: 'my-app'
	}),
	new Template({
  		inline: '<h1>Hello {{ name }}</h1>'
	})
];

bootstrap(MyAppComponent);