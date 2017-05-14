import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> newbrench

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

<<<<<<< HEAD
export class HomeComponent {
  count: number = 0;
  reloadCount: number = 5;

  constructor(private router: Router) {
    this.timer();
    this.timerRedirect();
  }


  timer() {
    setInterval(() => {
      this.count++;
      if (this.count > 2) this.count = 0;
      // console.log(this.count);
    }, 2500);
  };

  timerRedirect() {
    setInterval(() => {
      this.reloadCount--;
      // console.log(this.reloadCount);
      if (this.reloadCount == 1) this.redirectToNewPage();
    }, 1000);
  };

  redirectToNewPage() {
    this.router.navigate(['random-content']);
  };

  counterDec(){
    this.count--;
    if(this.count < 0) this.count = 2;
    // console.log(this.count);
  }

  counterInc() {
    this.count++;
    if(this.count >2) this.count = 0;
    // console.log(this.count);
  }

}
=======
export class HomeComponent { }
>>>>>>> newbrench
