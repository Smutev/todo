import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { User, AuthResponse, User2 } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    get token(): string {
        return localStorage.getItem('token')
    }

    login(user2: User2): Observable<any>{
       return this.http.post(`https://todo.hillel.it/auth/login`, user2)
        .pipe(
            tap(this.setToken)
        )
    }

    logout() {
        this.setToken(null)
    }

    isAuthenticated(): boolean {
        return !!this.token
    }

    private setToken(response: AuthResponse | null) {
        if(response){            
            localStorage.setItem('token', response.access_token)
        } else {
            localStorage.clear()
        }
    }
}