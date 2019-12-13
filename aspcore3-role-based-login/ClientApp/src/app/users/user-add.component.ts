import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';


@Component({
    selector: 'app-useradd',
    templateUrl: './user-editForm.html',
    styleUrls: ['./user-editForm.css']
})

export class UserAddComponent implements OnInit {
    message: string;
    dataSaved = false;
    AddUser: FormGroup;
    UserIdUpdate = '0';
    submitText = 'Add User';

    constructor(private router: Router, private userService: UserService) { }

    InsertUser(user: User) {
        if (this.UserIdUpdate !== '0') {
            user.Id = this.UserIdUpdate;
        }

        this.userService.InsertUser(user).subscribe(
            () => {
                if (this.UserIdUpdate === '0') {
                    this.message = 'Saved Successfully';
                } else {
                    this.message = 'Update Successfully';
                }
                this.dataSaved = true;
                this.router.navigate(['/user/all']);
            });
    }

    onFormSubmit() {
        const U = this.AddUser.value;
        this.InsertUser(U);
    }

    userEdit(id: string) {
        this.userService.GetUserById(id).subscribe(u => {
            this.message = null;
            this.dataSaved = false;

            this.UserIdUpdate = id;
            this.AddUser.controls.Name.setValue(u.Name);
            this.AddUser.controls.Password.setValue(u.Password);
            this.AddUser.controls.Mail.setValue(u.Mail);
            this.AddUser.controls.Level.setValue(u.Level);
            this.AddUser.controls.Confirmed.setValue(u.Confirmed);
        });

    }

    clearform() {
        this.AddUser.controls.Name.setValue('');
        this.AddUser.controls.Password.setValue('');
        this.AddUser.controls.Mail.setValue('');
        this.AddUser.controls.Level.setValue(null);
        this.AddUser.controls.Confirmed.setValue(false);
    }

    ngOnInit() {
        this.AddUser = new FormGroup({
            Name: new FormControl(),
            Password: new FormControl(),
            Mail: new FormControl(),
            Level: new FormControl(),
            Confirmed: new FormControl(),
        });

        const Id = localStorage.getItem('id');

        if (Id != null) {
            this.userEdit(Id);
        }
    }
}
