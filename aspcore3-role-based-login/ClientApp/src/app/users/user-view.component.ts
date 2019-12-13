import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'app-userview',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css']
})

export class UserViewComponent implements OnInit {
    message: string;
    dataSaved = false;
    U: User;
    submitText = 'Edit User';

    constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

    // comment reutiliser ? (aussi present dans add, edit)
    getConfirmedText(confirmed: boolean) {
        return confirmed ? 'yes' : 'not yet';
    }

    userPopulate(id: string) {
        this.userService.GetUserById(id).subscribe(u => {
            this.message = null;
            this.dataSaved = false;

            this.U = u;
        });
        
        console.log(this.U);
    }

    UserEdit(id: string) {
        localStorage.removeItem('id');
        localStorage.setItem('id', id.toString());
        this.router.navigate(['/user', 'edit', id]);
    }

    ngOnInit() {
        localStorage.clear();

        let Id: string;

        Id = this.route.snapshot.paramMap.get("id");  // le param est une string, cela permet de le caster

        if (Id != null) {
            this.userPopulate(Id);
        }
    }
}
