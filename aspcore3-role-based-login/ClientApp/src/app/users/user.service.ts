import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable()
export class UserService {

    private Url = '';

    users: User[];

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.Url = baseUrl + 'api/users';

        http.get<User[]>(this.Url).subscribe(result => {
            this.users = result;
        }, error => console.error(error));
    }


    InsertUser(user: User) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        // check and transform datas
        if (user.Confirmed == null) user.Confirmed = false;

        return this.http.post<User[]>(this.Url + '/Add/', user, httpOptions);
    }

    GetUser(): Observable<User[]> {
        return this.http.get<User[]>(this.Url);
    }

    DeleteUser(id: string): Observable<number> {
        console.log(id);
        return this.http.get<number>(this.Url + '/Delete/' + id);
    }

    GetUserById(id: string) {
        return this.http.get<User>(this.Url + '/GetUserById/' + id);
    }

    UpdateUser(user: User) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<User[]>(this.Url + '/Update/' + user.Id, user, httpOptions);
    }

}
