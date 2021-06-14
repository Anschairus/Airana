var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { AuthenticationService } from '../../_services/index';
var AccountComponent = /** @class */ (function () {
    function AccountComponent(userService, router, authenticationService) {
        this.userService = userService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    AccountComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    AccountComponent.prototype.logout = function () {
        this.router.navigate(['/account/sign-in']);
    };
    AccountComponent.prototype.checkSignState = function () {
        if (this.currentUser == null) {
            return false;
        }
        else if (this.currentUser !== null) {
            return true;
        }
    };
    AccountComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    AccountComponent = __decorate([
        Component({
            selector: 'account-component',
            templateUrl: './account.component.html',
            styleUrls: ['./account.component.css']
        }),
        __metadata("design:paramtypes", [UserService,
            Router,
            AuthenticationService])
    ], AccountComponent);
    return AccountComponent;
}());
export { AccountComponent };
//# sourceMappingURL=account.component.js.map