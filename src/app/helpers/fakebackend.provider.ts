import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize } from 'rxjs/operators';


let users = JSON.parse(localStorage.getItem('users')) || [];
let likeObject = JSON.parse(localStorage.getItem('likeObject')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;


    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
          case url.endsWith('/likedaypic') && method === 'POST':
          return pictureLike();
          case url.endsWith('/pictures') && method === 'GET':
            return getPictures();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
          case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        default:

          return next.handle(request);
      }
    }

    function updateUser() {
      if (!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find(x => x.id === idFromUrl());

      // only update password if entered
      if (!params.password) {
          delete params.password;
      }

      // update and save user
      Object.assign(user, params);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
  }
function pictureLike(){
const picture = body

likeObject.push(picture)
localStorage.setItem('pictures', JSON.stringify(likeObject));
return ok({
  message: 'like!!',
  pics: likeObject
})
}
    function register() {
      const user = body

      if (users.find(x => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken');
      }

      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      return ok({
        message: 'Registration sucsseful!'
      });
    }

    function authenticate() {
      const { username, password } = body;
      const user = users.find(x => x.username === username && x.password === password);
      if (!user) return error('Username or password is incorrect');
      //set the admin with real token
      if(username==='admin'){
        return ok({
          id: user.id,
          username: user.username,
          email: user.email,
          likes:null,
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJ2aXRvciIsImlhdCI6MTUxNjIzOTAyMiwiaXNBZG1pbiI6dHJ1ZX0.R1Uz3yguPXWEtz8DXsVAR99XkxOfilPmBcZTE2rpstE',
          message: 'Welcome back Admin!'
        })
      }else{
        return ok({
          id: user.id,
          username: user.username,
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJpc0FkbWluIjpmYWxzZX0.JQnGIPmYXUjS2DZqGkTEbVT5YVAeSBCX5ImBNjWEtLY',
          message: 'Login sucsseful!'
        })
      }


    }

    function getUsers() {
     // if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }
function getPictures(){
  return ok(likeObject)
}
    function getUserById() {
     // if (!isLoggedIn()) return unauthorized();

      const user = users.find(x => x.id == idFromUrl());
      return ok(user);
    }

    function deleteUser() {     if (!isLoggedIn()) return unauthorized();

      users = users.filter(x => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok({message:'DeletedUser'});
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

