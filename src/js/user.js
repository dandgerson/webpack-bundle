'use strict';

export default class User {
  constructor( container, user ) {
    this.container = container;
    this.user = user;
    console.log('user is created successful');
    this.render();
    // this.update();
  }
  
  render() {
    if (!this.elem) {
      this.elem = document.createElement('li');
      this.container.append(this.elem);
    }


    // let a = document.createElement('a');
    
    // a.href = '#';
    // a.dataset.userId = this.user._id;
    // a.innderHTML = this.user.fullName;
    
    // this.elem.append(a);

    this.elem.innerHTML = this.user.fullName;
    
  }

  load(user) {
    this.user = user;
    this.render();
  }

  // update() {
  //   let self = this;
  //   setTimeout(function() {
  //     console.log('update is work');
  //     self.user.fullName = 'Rafail';
  //     self.render();
  //   }, 3000);
  // }


}