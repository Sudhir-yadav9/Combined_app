import { Injectable } from '@angular/core';


import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import { Observable,throwError } from 'rxjs';
import{map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor()
  { 

  }

  login(username:string,password:string)
  {
    if(username == 'admin' && password == 'abc12345')
    {
      localStorage.setItem("loginUser","loggedIn");
      return true;
    }
    return;
  }
  public get loggedIn(): boolean{

    return (localStorage.getItem('loginUser')!==null);

  }

  logout()
  {
    localStorage.removeItem('loginUser');
  }


}

