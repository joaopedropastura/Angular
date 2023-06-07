import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recover-page',
  templateUrl: './recover-page.component.html',
  styleUrls: ['./recover-page.component.css']
})
export class RecoverPageComponent implements OnInit, OnDestroy {
  email = "";
  subscription: any;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.email = params['email'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  send() {
    // Send Email Here
    this.router.navigate(["/login"]) // E usamos para redirecionar aqui
  }
}
