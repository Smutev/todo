import { Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Post } from './interfaces'
import { Observable } from 'rxjs'

@Injectable({
     providedIn:'root'
})

export class PostService {
    constructor (private http: HttpClient){}

    create(post: Post): Observable<Post> {
        return this.http.post<Post>('https://todo.hillel.it/todo', post)
    }

    getAll() {
        return this.http.get(`https://todo.hillel.it/todo`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }) 
    }
    postTodo(todo){
        return this.http.post('https://todo.hillel.it/todo',todo, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        
          
    }
}