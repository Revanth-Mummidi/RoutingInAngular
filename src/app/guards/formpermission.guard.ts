import { CanDeactivateFn } from '@angular/router';
export interface FormComponent {
  name: string;
  email: string;
}

export const formpermissionGuard: CanDeactivateFn<FormComponent> = (component:FormComponent, currentRoute, currentState, nextState) => {
  const name = component.name;
  const email = component.email;
  if(name !== '' || email !== ''){
    return window.confirm('You have unsaved changes. Do you really want to move ?');
  }
  else{
    return true;
  }

};
