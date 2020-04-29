'use strict'
function DomElement(selector,bg, height, width, fontSize) {
  this.selector =  selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.buildElements = function(){
  let element;

  if (this.selector[0].startsWith('.')) {
    element = document.createElement('div');
    element.className = 'block';
    element.textContent = 'Текст div';
  } else if (this.selector[0].startsWith('#')){
    element = document.createElement('p');
    element.id = 'best';
    element.textContent = 'Текст p';
  } else {
    element= document.createElement('p');
    element.textContent = 'Текст p';
  }
  element.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg} ; font-size: ${this.fontSize}`;

  document.body.append(element);
  document.body.style.backgroundColor = '#E0FFFF';
};

let domElementClass = new DomElement('.block', 'GreenYellow', '200px', '300px', '20px');
let domElementId = new DomElement('#best', 'MidnightBlue', '200px', '300px', '40px');

domElementClass.buildElements();
domElementId.buildElements();
console.log(domElementClass);
console.log(domElementId);
