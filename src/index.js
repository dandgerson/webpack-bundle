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

if (process.env.NODE_ENV === 'development')
  console.warn('Looks like we are in development mode!'); 
if (process.env.NODE_ENV === 'production')
  console.warn('We are in production mode!');

function component() {
  let element = document.createElement('div');
  let button = document.createElement('button');
  let br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.append(br, button);

  button.onclick = e => import(/* webpackChunkName: "print" */ './print')
    .then(module => {
      let print = module.default;

      print();
    });
  return element;
}

document.body.append(component());

// ####################################################

// globals
exports.Application = Application;