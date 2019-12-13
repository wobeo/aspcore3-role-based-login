import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'app-userlist',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
    private U: Observable<User[]>;
    message: string;
    dataSaved = false;

    // pagination
    p: number = 1;

    constructor(private router: Router, private userService: UserService) { }

    // comment reutiliser ? (aussi present dans edit)
    getConfirmedText(confirmed: boolean) {
        return confirmed ? 'confirmed' : 'not confirmed yet';
    }

    LoadUser() {
        this.U = this.userService.GetUser();
    }

    UserView(id: string) {
        localStorage.removeItem('id');
        localStorage.setItem('id', id.toString());
        this.router.navigate(['/user', id]);
    }

    UserEdit(id: string) {
      localStorage.removeItem('id');
      localStorage.setItem('id', id.toString());
      this.router.navigate(['/user', 'edit', id]);
    }

    DeleteUser(id: string) {
        if (confirm('Are You Sure To Delete this Informations')) {
            this.userService.DeleteUser(id).subscribe(
                () => {
                    this.dataSaved = true;
                    this.message = 'Deleted Successfully';
                    this.LoadUser();
                }
            );
            //this.router.navigate(['/user', 'all']);
        }
    }

    ngOnInit(): void {
        localStorage.clear();
        this.LoadUser();
    }

}
