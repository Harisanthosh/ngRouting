import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, RouterStateSnapshot, RouterState } from '@angular/router';

@Injectable()
export class UniversalGuardService implements CanActivate {

  constructor(private route: ActivatedRoute) { }

  canActivate() {
    console.log(this.route);
    console.log(this.route.component);
    console.log('Can activate called');
    return false;
  }
}
