import { Data } from '@angular/router';

export interface User {
    email: string
    password: string
}

export interface User2 {
    value: string
}

export interface AuthResponse {
    access_token: string
}

export interface Post {
    id?: string
    title: string
    text: string
}