'use strict';

// styles
import './styles/scss/main.scss';
import './styles/scss/theme.scss';
import './styles/scss/typography.scss';

// libs
import _ from 'lodash';
let header = document.createElement('h1');
header.append('Edit your Users... please:');
document.body.prepend(header);
// app
import Application from './js/app';
new Application();

// ###################################################

import printMe from './print';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.append(component());

// ####################################################

// globals
exports.Application = Application;