import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '../_services';

@Component({ templateUrl: 'user.component.html' })
export class UserComponent {
    constructor(private accountService: AccountService) {}
}