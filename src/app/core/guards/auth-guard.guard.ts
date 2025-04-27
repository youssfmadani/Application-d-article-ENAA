import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';  // Adjust path based on your structure
import { map } from 'rxjs/operators';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    map(user => {
      const isAuth = !!user;
      const isTryingToCreateOrEdit = 
        state.url.includes('/posts/new') || 
        state.url.includes('/edit');

      if (isTryingToCreateOrEdit && !isAuth) {
       
        router.navigate(['/posts']);
        return false;
      }
      
      if (!isTryingToCreateOrEdit && state.url.includes('/posts')) {
        
        return true;
      }

      
      return isAuth;
    })
  );
};