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

import { cube } from './libs/math';

function component() {
  let element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.append(component());

// ####################################################

// globals
exports.Application = Application;