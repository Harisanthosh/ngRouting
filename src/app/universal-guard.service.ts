import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, RouterStateSnapshot, RouterState, CanDeactivate, Router, GuardsCheckStart } from '@angular/router';

@Injectable()
export class UniversalGuardService implements CanActivate, CanDeactivate<boolean> {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof GuardsCheckStart) {
        console.log("started checking");
      }
    })
  }

  canActivate() {
    console.log(this.route);
    console.log(this.route.component);
    console.log('Can activate called');
    return false;
  }

  canDeactivate() {
    console.log(this.route);
    return window.confirm('Are you sure?');
  }
}
