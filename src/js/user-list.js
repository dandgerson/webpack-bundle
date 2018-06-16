'use strict';
import * as lib from '../libs/lib';
import User from './user';

export default class UserList {
  constructor() {

  }

  getElem() {
    if (!this.elem) {
      this.render();
    }
    return this.elem;
  }

  render() {
    let html = _.template('<div class="user-list"></div>')();
    this.elem = lib.createElementFromHTML(html);

    this.elem.addEventListener('click', this);
  }

  handleEvent(event) {
    this[
      'on' +
            event.type[0].toUpperCase() +
            event.type.slice(1)
    ](event);
  }

  onClick(event) {
    if (event.target.dataset.userId) {
      this.elem.dispatchEvent(new CustomEvent('user-select', {
        bubbles: true,
        detail: event.target.dataset.userId
      }));
      event.preventDefault();
    }
  }

  showUsers(users) {
    this.users = users;

    let usersComponents = [];

    let ul = document.createElement('ul');
    this.elem.append(ul);
    for (let user of this.users) {
      usersComponents.push(new User(ul, user));
    }
        
    setTimeout(function() {
      usersComponents[0].load({
        fullName: 'Rafail',
        _id: '123213'
      });
    }, 3000);


    // this.elem.innerHTML = _.template('<ul>\n' +
    //     '            <% for (let user of users) { %>\n' +
    //     '                <li><a href="#" data-user-id="<%=user._id %>"><%=user.fullName %></a></li>\n' +
    //     '            <% } %>\n' +
    //     '        </ul>')({ users });

  }


}