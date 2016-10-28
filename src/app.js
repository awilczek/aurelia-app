import {useView} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Lazy} from 'aurelia-framework';
import {transient} from 'aurelia-framework'; // Explicit Registration
import {computedFrom} from 'aurelia-framework';
import {Dep} from 'dep';

@transient()
@useView('./app.html')
@inject(Lazy.of(Dep))
export class App {

  constructor(dep) {
    this.dep = dep;
  }

  // constructor()
  // created(owningView: View, myView: View)
  // bind(bindingContext: Object, overrideContext: Object)
  // attached()
  // detached()
  // unbind()

  firstName = "firstValue";
  lastName = 'Doe';

  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  save() {
    console.log("saved");
  }

  htmlProperty = "<div>htmlPropertyTest</div>";
  styleObject = {
    color: 'red',
  };
}
