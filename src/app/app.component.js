"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var environment_service_1 = require("./environment.service");
var AppComponent = (function () {
    function AppComponent(_envService) {
        this._envService = _envService;
        this.pageTitle = "Tomcat References";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._envService.getEnvDetails()
            .subscribe(function (environments) { return _this.selectedNavItem(environments); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.selectedNavItem = function (item) {
        this.parisenv = item[0].Paris;
        this.blrenvironments = item[0].Bangalore;
        this.general = item[0].General;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        templateUrl: 'app/app.component.html',
        providers: [environment_service_1.EnvironmentService]
    }),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map