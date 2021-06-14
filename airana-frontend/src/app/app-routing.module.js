import { RouterModule } from "@angular/router";
//Guards
import { AuthGuard } from "../_guards/index";
//News
import { MostRecentComponent } from "../components/most-recent/index";
import { PatchNotesComponent } from "../components/patch-notes/index";
import { BestAndWorstRollsComponent } from "../components/best-and-worst-rolls/index";
//Lore
import { HistoriesComponent } from "../components/histories/index";
import { NpcsComponent } from "../components/npcs/index";
import { VerionClassesComponent } from "../components/verion-classes/index";
//Details
import { SelectedCharacterComponent } from "../components/selected-character/index";
//Ranks
import { VerionRankComponent } from "../components/character/index";
//play
import { YourStoriesComponent } from "../components/your-stories/index";
import { QuickMatchComponent } from "../components/quick-match/index";
//account
import { ProfileComponent } from "../components/profile/index";
import { SignInComponent } from "../components/sign-in/index";
import { SignUpComponent } from "../components/sign-up/index";
import { ReadProductsComponent } from "../components/read-products/index";
//Others
import { HomeComponent } from "../components/home/index";
import { ForbiddenComponent } from "../components/forbidden/index";
var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "news/most-recent", component: MostRecentComponent },
    { path: "news/patch-notes", component: PatchNotesComponent },
    { path: "news", redirectTo: "news/most-recent", pathMatch: "full" },
    { path: "lore/histories", component: HistoriesComponent },
    { path: "lore/npc", component: NpcsComponent },
    { path: "lore/npc/:name", component: SelectedCharacterComponent },
    //, { path: 'lore/monsters', component: MonstersComponent }
    { path: "lore/verion-classes", component: VerionClassesComponent },
    //, { path: 'lore/secret-skills', component: SecretSkillsComponent }
    { path: "lore", redirectTo: "lore/histories", pathMatch: "full" },
    { path: "ranking/verion", component: VerionRankComponent },
    // , { path: 'ranking/guild', component: GuildRankComponent }
    { path: "ranking", redirectTo: "ranking/verion", pathMatch: "full" },
    //, { path: 'play', component: PlayComponent }
    { path: "play/quick-match", component: QuickMatchComponent },
    { path: "play/your-stories", component: YourStoriesComponent },
    //, { path: 'play/your-stories/emissaries-of-void', component: BestAndWorstRollsComponent }
    {
        path: "play/your-stories/emissaries-of-the-void/best-and-worst-rolls",
        component: BestAndWorstRollsComponent
    },
    { path: "play", redirectTo: "play/your-stories", pathMatch: "full" },
    { path: "account/sign-up", component: SignUpComponent },
    { path: "account/profile", component: ProfileComponent },
    { path: "account/sign-in", component: SignInComponent },
    { path: "account", redirectTo: "account/sign-in", pathMatch: "full" },
    { path: "products", component: ReadProductsComponent },
    { path: "**", component: ForbiddenComponent }
];
export var AppRoutingModule = RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map