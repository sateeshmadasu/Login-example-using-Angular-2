import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    message: string;
    showMessage: boolean;
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.showMessage = true;
    }

    login() {
        if(this.model.password === "123456") {
           this.router.navigate(['/home']);
        }else{
            this.showMessage = false;
            this.message = "Password is incorrect";
        }
    }
}
