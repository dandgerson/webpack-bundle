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

// ####################################################

// globals
exports.Application = Application;