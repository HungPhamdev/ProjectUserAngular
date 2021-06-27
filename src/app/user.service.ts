import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './users/user';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private userUrl = 'api/users'; //URL to web api

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => { // any là 1 kiểu dữ liệu có thể gán mọi kiểu dữ liệu
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getUserNo404<Data>(id: number): Observable<User>{
    const url=`${this.userUrl}/?id=${id}`;
    return this.http.get<User[]>(url).pipe(
      map(users => users[0]),
      tap(u => {
        const outcome = u ? `fetched` : `did not find`;
        this.log(`${outcome} user id=${id}`);
      }),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  getUser(id: number): Observable<User>{
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  private log(message: string){
    this.messageService.add(`UserService: ${message}`);
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('user-add'))
    );
  }

  updateUser(user: User): Observable<any>{
    return this.http.put<User>(this.userUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`update user id=${user.id}`)),
      catchError(this.handleError<any>('update User'))
    );
  }

  deleteUser(id: number):  Observable<User>{
    const url = `${this.userUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted User id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  searchUsers(term: string): Observable<User[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<User[]>(`${this.userUrl}/?name=${term}`).pipe(
      tap(x=>x.length?
        this.log(`found users matching "${term}"`) :
        this.log(`no users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }

}
