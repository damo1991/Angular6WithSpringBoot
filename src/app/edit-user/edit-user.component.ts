import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {User} from '../model/user.model';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {first} from 'rxjs/operators'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:User;
  editForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    let userId=localStorage.getItem('editUserId')
    if(!userId){
      
    }
  }

}
