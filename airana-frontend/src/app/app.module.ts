import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule,
  MatProgressBarModule, MatFormFieldModule, MatOptionModule,
  MatSelectModule, MatInputModule, MatCardModule, MatGridListModule,
  MatTabsModule, MatExpansionModule,
  MatSnackBarModule, MatToolbarModule, MatIconRegistry, MatMenuModule,
  MatProgressSpinnerModule, MatTooltipModule,
  MatSidenavModule, MatListModule, MatChipsModule, MatButtonToggleModule,
  MatRadioModule, MatDatepickerModule,
  MatNativeDateModule, MatSliderModule, MatAutocompleteModule
} from '@angular/material';
import { AccumulationChartModule, PieSeriesService, AccumulationDataLabelService, AccumulationTooltipService, AccumulationAnnotationService,AccumulationLegendService,CategoryService,HistogramSeriesService, ChartModule, LegendService, DataLabelService ,TooltipService } from '@syncfusion/ej2-angular-charts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
//Modules
import { AppRoutingModule } from "./app-routing.module";
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
//PIPES
import { FilterPipe, SafeHtmlPipe } from "./pipes";
import { NgMathPipesModule, CeilPipe } from 'angular-pipes';
//DIRECTIVES
import { HoverClassDirective } from './directives/hover-class.directive';

//COMPONENTS
import { AppComponent } from ".";
import { MainNavComponent } from './components/main-nav';
import { HomeComponent } from "./components/home";
import { ForbiddenComponent } from "./components/forbidden";
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
import { SelectedNpcComponent } from "./components/selected-npc";
import { SelectedCharacterComponent } from "./components/selected-character";
import { SelectedAfiliationComponent } from "./components/selected-afiliation";
//Ranks
import { CharactersComponent } from "./components/character";
import { AfiliationsComponent } from "./components/afiliation";
//play
import { YourStoriesComponent } from "./components/your-stories";
//Test

import { TestingAutomatizer } from "./components/testing-automatizer";
//account
import { ProfileComponent } from "./components/profile";
import { SignInComponent } from "./components/sign-in";
import { SignUpComponent } from "./components/sign-up";

import { AccountComponent } from "./components/account";


import { AuthGuard } from "./_guards";
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import {
  NpcService,
  NpccipService,
  AuthenticationService,
  AccountService,
  MenuService,
  CharacterService,
  ThemeService,
  AfiliationService,
  SuffixService
} from "./_services";



@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, TextareaAutosizeModule, BrowserAnimationsModule, LayoutModule, FlexLayoutModule, MatBadgeModule,
    MatButtonModule, MatCheckboxModule, MatIconModule,
    MatProgressBarModule, MatFormFieldModule, MatOptionModule,
    MatSelectModule, MatInputModule, MatCardModule, MatGridListModule,
    MatTabsModule, MatExpansionModule,
    MatSnackBarModule, MatToolbarModule, MatMenuModule,
    MatProgressSpinnerModule, MatTooltipModule,
    MatSidenavModule, MatListModule, MatChipsModule, MatButtonToggleModule,
    MatRadioModule, MatDatepickerModule,
    MatNativeDateModule, MatSliderModule, MatAutocompleteModule, NgMathPipesModule, MatSlideToggleModule,AccumulationChartModule, ChartModule],
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ForbiddenComponent,
    MostRecentComponent,
    PatchNotesComponent,
    BestAndWorstRollsComponent,
    HistoriesComponent,
    NpcsComponent,
    SelectedNpcComponent,
    SelectedCharacterComponent,
    SelectedAfiliationComponent,
    MonstersComponent,
    CareersComponent,
    SuffixComponent,
    SecretSkillsComponent,
    TranslateComponent,
    CharactersComponent,
    AfiliationsComponent,
    YourStoriesComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    AccountComponent,
    SignInComponent,
    SignUpComponent,
    [FilterPipe, 
      SafeHtmlPipe,HoverClassDirective],
    TestingAutomatizer
  ],
  providers: [
    AuthGuard,
    ThemeService,
    AuthenticationService,
    AccountService,
    MenuService,
    CharacterService,
    NpcService,
    NpccipService,
    AfiliationService,
    SuffixService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },PieSeriesService, AccumulationDataLabelService,AccumulationTooltipService,AccumulationAnnotationService,AccumulationLegendService, CategoryService, HistogramSeriesService, LegendService, DataLabelService, TooltipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
