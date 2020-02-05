import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces';
import { ChildActivationStart } from '@angular/router';
import { PostService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl (null, Validators.required),
      text: new FormControl (null, Validators.required),
    })
  }

  submit() {
    if(this.form.invalid){
      return
    }
    
    const todo = {
      value: this.form.value.title,
      priority: 1,
    }
    this.postService.postTodo(todo)
      .subscribe(res=>console.log(res))

  }

}
