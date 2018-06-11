'use strict';

import UserList from './user-list';
import UserForm from './user-form';



export default class Application {
    constructor() {
        this.userList = new UserList();
        this.render();
    }

    render() {
        document.body.append(this.userList.getElem());
        this.load();

        this.userList.getElem().addEventListener('user-select', this.onUserSelect.bind(this));
        document.addEventListener('user-upload', this.updateUserList.bind(this));

    }

    onUserSelect(event) {
        let user = this.users.find(user => user._id === event.detail);
        this.user = user;
        if (this.userForm) {
            this.userForm.destroy();
        }

        this.userForm = new UserForm(user);

        document.body.append(this.userForm.getElem());
    }

    load() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://test-api.javascript.ru/v1/dandgerson/users');
        xhr.onload = () => {
            if (xhr.status !== 200)
                console.log('Error: ' + xhr.responseText);
            console.log('Application.load() is Ok!');

            this.users = JSON.parse(xhr.responseText);
            this.userList.showUsers(this.users);
        };
        xhr.send();

        xhr.onerror = () => {
            alert('Sorry error! Try again later');
        };
    }

    updateUserList() {
        // console.log(event.type);
        this.userForm.upload();
        this.userList.showUsers(this.users);
        this.userForm.hide();
    }


}