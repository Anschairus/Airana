import { ModuleWithProviders } from "@angular/core";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//Guards

import { AuthGuard } from './_guards';
import { Role } from './_class';
//News
import { MostRecentComponent } from "./components/most-recent";
import { PatchNotesComponent } from "./components/patch-notes";
import { BestAndWorstRollsComponent } from "./components/best-and-worst-rolls";
//Lore
import { HistoriesComponent } from "./components/histories";
import { NpcsComponent } from "./components/npc";
import { MonstersComponent } from "./components/monsters";
import { CareersComponent } from "./components/careers";
import { SuffixComponent } from "./components/suffix";
import { SecretSkillsComponent } from "./components/secret-skills";
import { TranslateComponent } from "./components/translate";
//Details
import { SelectedCharacterComponent } from "./components/selected-character";
import { SelectedNpcComponent } from "./components/selected-npc";
//Ranks
import { CharactersComponent } from "./components/character";
import { AfiliationsComponent } from "./components/afiliation";
//play
import { YourStoriesComponent } from "./components/your-stories";
//Testing
import { TestingAutomatizer } from "./components/testing-automatizer";
//account
import { ProfileComponent } from "./components/profile";
import { SignInComponent } from "./components/sign-in";
import { SignUpComponent } from "./components/sign-up";

//Others
import { HomeComponent } from "./components/home";
import { ForbiddenComponent } from "./components/forbidden";
import { SelectedAfiliationComponent } from "./components/selected-afiliation";
const extraOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, -80],
  useHash: false,
};
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },

  { path: "news/most-recent", component: MostRecentComponent },
  { path: "news/patch-notes", component: PatchNotesComponent },
  { path: "news", redirectTo: "news/most-recent", pathMatch: "full" },

  { path: "lore/histories", component: HistoriesComponent },
  { path: "lore/npc", component: NpcsComponent, canActivate: [AuthGuard], data: { roles: [Role.User] } },
  { path: "lore/npc/:name", component: SelectedNpcComponent, canActivate: [AuthGuard], data: { roles: [Role.User] } , pathMatch: "full" },
  { path: "lore/npc/:surname/:name", component: SelectedNpcComponent, canActivate: [AuthGuard], data: { roles: [Role.User] } , pathMatch: "full" },
  { path: "lore/careers", component: CareersComponent },
  { path: "lore/suffixes", component: SuffixComponent },
  { path: "lore", redirectTo: "lore/histories", pathMatch: "full" },

  { path: "ranking/characters", component: CharactersComponent },
  { path: "ranking/characters/:surname/:name", component: SelectedCharacterComponent, canActivate: [AuthGuard], data: { roles: [Role.User] } , pathMatch: "full" },
  { path: 'ranking/afiliations', component: AfiliationsComponent },
  { path: "ranking/afiliations/:name", component: SelectedAfiliationComponent, canActivate: [AuthGuard], data: { roles: [Role.User] } , pathMatch: "full" },
  { path: "ranking", redirectTo: "ranking/characters", pathMatch: "full" },

  { path: "play/your-stories", component: YourStoriesComponent },
  {path: "play/your-stories/emissaries-of-the-void/best-and-worst-rolls", component: BestAndWorstRollsComponent},
  { path: "play", redirectTo: "play/your-stories", pathMatch: "full" },

  { path: "automatize", component: TestingAutomatizer},
  { path: 'translate', component: TranslateComponent },


  { path: "account/sign-up", component: SignUpComponent },
  { path: "account/profile", component: ProfileComponent },
  { path: "account/sign-in", component: SignInComponent },
  { path: "account", redirectTo: "account/sign-in", pathMatch: "full" },

  { path: "**", component: ForbiddenComponent }
];




export const AppRoutingModule = RouterModule.forRoot(routes, extraOptions);
