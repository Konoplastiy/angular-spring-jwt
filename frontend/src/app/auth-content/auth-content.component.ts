import {Component} from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
    selector: 'app-auth-content',
    templateUrl: './auth-content.component.html',
    styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent {
    data: string[] = [];

    constructor(private axiosService: AxiosService) {
    }

    onLogin(input: any): void {
        this.axiosService.request(
            "POST",
            "/login",
            {
                login: input.login,
                password: input.password
            }
        );
    }

    onRegister(input: any): void {
        this.axiosService.request(
            "POST",
            "/register",
            {
                firstName: input.firstName,
                lastName: input.lastName,
                login: input.login,
                password: input.password,
            }
        );
    }
}
