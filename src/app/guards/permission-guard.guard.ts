import { CanActivateFn , Router , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import { Inject } from '@angular/core';


export const permissionGuardGuard: CanActivateFn = (route : ActivatedRouteSnapshot , state : RouterStateSnapshot) => {
 const router = Inject(Router);
  console.log(sessionStorage.getItem('user'));
  if(sessionStorage.getItem('user')=='admin' ) 
  {
    
    return true;
  }
  else{
   
    return false;
  }

};
