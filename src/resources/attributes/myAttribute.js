import {inject, customAttribute, DOM} from 'aurelia-framework';

// @customAttribute('my-attribute')
@inject(DOM.Element)
export class MyAttributeCustomAttribute {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue, oldValue) {
    console.log(newValue);
  }

  // @bindable foo;
  // @bindable bar;
  // fooChanged
  // barChanged

  // @dynamicOptions + propertyChanged
}
