var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
//Modules
import { AppRoutingModule } from "./app-routing.module";
//COMPONENTS
import { AppComponent } from "../components/app/index";
import { NavbarComponent } from "../components/navbar/index";
import { HomeComponent } from "../components/home/index";
import { ForbiddenComponent } from "../components/forbidden/index";
//News
import { MostRecentComponent } from "../components/most-recent/index";
import { PatchNotesComponent } from "../components/patch-notes/index";
import { BestAndWorstRollsComponent } from "../components/best-and-worst-rolls/index";
//Lore
import { HistoriesComponent } from "../components/histories/index";
import { NpcsComponent } from "../components/npcs/index";
import { MonstersComponent } from "../components/monsters/index";
import { VerionClassesComponent } from "../components/verion-classes/index";
import { SecretSkillsComponent } from "../components/secret-skills/index";
//Details
import { SelectedCharacterComponent } from "../components/selected-character/index";
//Ranks
import { VerionRankComponent } from "../components/character/index";
import { GuildRankComponent } from "../components/guild-rank/index";
//play
import { YourStoriesComponent } from "../components/your-stories/index";
import { QuickMatchComponent } from "../components/quick-match/index";
//account
import { ProfileComponent } from "../components/profile/index";
import { SignInComponent } from "../components/sign-in/index";
import { SignUpComponent } from "../components/sign-up/index";
import { AccountComponent } from "../components/account/index";
import { AlertComponent } from "../_directives/index";
import { AuthGuard } from "../_guards/index";
import { AlertService, NpcService, AuthenticationService, UserService, MenuService, CharacterService } from "../_services/index";
import { SearchPipe, OrderPipe, SafeHtmlPipe } from "../pipes/index";

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
            declarations: [
                AppComponent,
                NavbarComponent,
                HomeComponent,
                ForbiddenComponent,
                MostRecentComponent,
                PatchNotesComponent,
                BestAndWorstRollsComponent,
                HistoriesComponent,
                NpcsComponent,
                SelectedCharacterComponent,
                MonstersComponent,
                VerionClassesComponent,
                SecretSkillsComponent,
                VerionRankComponent,
                GuildRankComponent,
                YourStoriesComponent,
                QuickMatchComponent,
                ProfileComponent,
                SignInComponent,
                SignUpComponent,
                AccountComponent,
                SignInComponent,
                SignUpComponent,
                AlertComponent,
                [SearchPipe, OrderPipe, SafeHtmlPipe]
            ],
            providers: [
                AuthGuard,
                AlertService,
                AuthenticationService,
                UserService,
                MenuService,
                CharacterService,
                NpcService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };