import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AfiliationTab, Account } from "../../_class";
import { text, updateBinding } from '@angular/core/src/render3/instructions';
import { stringify } from "@angular/core/src/util";

import { CharacterTab } from "../../_class";

import { AfiliationService, AuthenticationService } from "../../_services";

@Component({
  selector: "selected-afiliation",
  templateUrl: "./selected-afiliation.component.html",
  styleUrls: ["./selected-afiliation.component.scss"]
})
export class SelectedAfiliationComponent implements OnInit {
  title = "lol"
  afiliationTabForm: any;
  afiliationTab: any;
  public surname: string;
  public name: string;
  isEditing: boolean = false;
  loaded: boolean = false;
  form: FormGroup;
  currentAccount: Account;
  allmembers: any;
  lang:string='en';
  public piedata: Object[];
  public legendSettings: Object;
  public legend: Object;
  public datalabel: Object;
  public tooltipSettings:Object;

  public constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private afiliationService: AfiliationService,
    private authenticationService: AuthenticationService) {
    this.legendSettings = {
      visible: true
    };
    this.legend = {
      visible: true,
      position: 'Bottom',
      name: 'text'
    },
    this.datalabel = {
       visible: true 
      },
      this.tooltipSettings={
        enable:true,
format:'${point.x} : (<b>${point.tooltip}%</b>)' //${point.y}
      }
      this.authenticationService.currentAccount.subscribe(x => this.currentAccount = x);
  }
  checkAdmin() {
    //return true;
    if (!this.currentAccount && this.currentAccount != null) {
      return false;
    } else if (this.currentAccount && this.currentAccount.roles.includes('admin')) {
      return true;
    }
  }
  public ngOnInit() {

    //Get the id of the character to load
    this.surname = this.activatedRoute.snapshot.paramMap.get('surname');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    if (this.name == null || this.name == '' || this.name == undefined) {
      this.name = this.surname;
      this.surname = '';
    }
    //request id's data
    this.afiliationService.onSelect(this.surname, this.name).subscribe((data: AfiliationTab) => {
      this.afiliationTab = data;

      this.allmembers = this.afiliationTab.members.concat(this.afiliationTab.playermembers)
      this.chart(this.allmembers);

    });

    //put the data into the form's value
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      status: [],
      career: [],
      powersource: [],
      powermethod: [],
      pranalanguages: [],
      specialization: [],
      pathresearch: [],
      birthplace: [],
      ethnicity: [],
      nationality: [],
      based: [],
      cpp: [],
      afiliation: [],
      user: [],
      level: [],
      xpobtained: [],
      alignement: [],
      age: [],
      birthdate: [],
      height: [],
      weight: [],
      race: [],
      chest: [],
      waist: [],
      hip: [],
      feet: [],
      titles: [],
      hundredsoffollowers: [],
      numberofawards: [],
      honorableactions: [],
      hundredsofhaters: [],
      infamy: [],
      cowardactions: [],
      totalfame: [],
      contacts: [],
      phobias: [],
      stats: [],
      equipement: [],
      image: [],
      notes: [],
      adminnotes: [],
      role: [],
      ownhistory: [],
      created: [],
      modified: []
    });
    this.afiliationTabForm = this.afiliationService.onSelect(this.surname, this.name).pipe(
      tap(afiliationTabForm => this.form.patchValue(afiliationTabForm))
    );
    this.loaded = true;// S'haurà de fer millor
  }

  getIndexAfiliation(member, afiliation) {
    for (var i = 0; i < member.afiliations.length; i++) {
      if (member.afiliations[i].link == afiliation._id) {

        return this.selectRank(afiliation[this.lang].ranks[member.afiliations[i].rank], member.race.sex);
      }
    }
  }
  
  onSelect(characterTab: CharacterTab) {
    if(characterTab.surname==''&&characterTab.role=='user'){
      this.router.navigate(['/ranking/characters/' + (characterTab.name).replace(/\s/g, "_")]);
    }else if(characterTab.role=='user'){
      this.router.navigate(['/ranking/characters/' +(characterTab.surname).replace(/\s/g, "_")+'/'+ (characterTab.name).replace(/\s/g, "_")]);
    }else if(characterTab.surname==''){
      this.router.navigate(['/lore/npc/' + (characterTab.name).replace(/\s/g, "_")]);
    }else {
      this.router.navigate(['/lore/npc/' +(characterTab.surname).replace(/\s/g, "_")+'/'+ (characterTab.name).replace(/\s/g, "_")]);
    }
  }
  loadManager(newBoolean) {
    this.loaded = newBoolean;
  }
  characterImg(afiliationTab: AfiliationTab) {
    if (afiliationTab.image.photo != "" || afiliationTab.image.photo != null) {
      return "assets/img/afiliations/" + afiliationTab.image.photo;
    } else if ((afiliationTab.image.photo == "" || afiliationTab.image.photo == null)) {
      return "assets/img/npc/" + "foto.jpg";
    }
  }
  /*ft(height: number) {
    return (
      Math.floor(height * 0.032808) +
      "' " +
      (((height * 0.032808 - Math.floor(height * 0.032808)) * 12).toFixed(0) +
        '"')
    );
  }
  lb(weight: number) {
    return (weight * 2.20462262).toPrecision(3) + " lb";
  }*/
  isEditingManager(afiliationTabEditingValor): Boolean {
    if (this.isEditing) {
      return true;
    } else if (afiliationTabEditingValor) {
      return true;
    } else {
      return false;
    }
  }
  isEditingManagerStatus(afiliationTabEditingValor) {
    if (afiliationTabEditingValor != 1 || this.isEditing) {
      return true;
    } else {

      return false;
    }
  }
  isEditingManagerEvilafiliation1(afiliationTabEditingValor) {
    if (this.isEditing) {
      return true;
    } else if (!this.currentAccount || !afiliationTabEditingValor || afiliationTabEditingValor == null) {
      return false;
    } else if (afiliationTabEditingValor && this.currentAccount.roles == 'admin') {
      return true;
    } else {
      return false;
    }
  }
  formatDate(birthdate) {
    return new Date(birthdate).toISOString().slice(0, 10)
  };
  formatBirthDay(birthdate) {
    return new Date(birthdate).toLocaleString('default', { month: 'long' }) + ' ' + new Date(birthdate).getDate()


  };
  isEditingManagerUser(afiliationTabEditingValor) {
    if (this.isEditing) {
      return true;
    } else if (!this.currentAccount || !afiliationTabEditingValor || afiliationTabEditingValor == null) {
      return false;
    } else if (this.currentAccount.roles != 'admin') {
      return false;
    } else if (afiliationTabEditingValor) {
      return true;
    } else {

      return false;
    }
  }
  aptitudesCalc(stat, aptitude) {
    return Math.floor((stat / 5) + aptitude).toFixed(0);
  }
  sumFields(obj, type, field) {
    var equip = 0;
    for (let i in obj.equipement) {
      equip = equip + obj.equipement[i][type][field];
    }
    if (type == 'stats') {
      var lvl = obj.stats.lvl.reduce((accumulator, current) => accumulator + current[field], 0);
      var base = obj.stats.base[field];

      return { 'equip': equip, 'base': base, 'lvl': lvl, 'total': equip + base + lvl }

    } else if (type == 'aptitudes') {
      var lvl = obj.aptitudes.reduce((accumulator, current) => accumulator + current[field], 0);

      return { 'lvl': lvl, 'equip': equip, 'total': equip + lvl };

    } else if (type == 'modifiers') {
      return { 'equip': equip }
    }
  }


  isEditingManagerAge(afiliationTabEditingValor) {
    if (this.isEditing) {
      return true;
    } else if (afiliationTabEditingValor == 0 || !afiliationTabEditingValor || afiliationTabEditingValor == null) {
      return false;
    } else if (afiliationTabEditingValor) {
      return true;
    } else {
      return false;
    }
  }
  bulge(race) {
    
  }
  isEditingManagerMeasurements(afiliationTabEditingValor) {
    if (this.isEditing) {
      return true;
    } else if (afiliationTabEditingValor.status != 0 && afiliationTabEditingValor.chest != 0 && afiliationTabEditingValor.waist != 0 && afiliationTabEditingValor.hip != 0) {
      return true;
    } else {

      return false;
    }
  }

  isEditingManagerAdmin(afiliationTabEditingValor) {
    if (!this.currentAccount) {
      return false;
    } else if ((this.currentAccount.roles.includes('admin') && this.currentAccount.username == this.afiliationTab.user) && (afiliationTabEditingValor || this.isEditing)) {
      return true;
    } else {

      return false;
    }
  }
 


  setIsEditing(isEditing: boolean, isSaving: boolean) {
    switch (true) {
      case (isEditing && !isSaving):
        this.isEditing = isEditing;
        break;
      case (!isEditing && isSaving):
        this.loaded = false;
        this.isEditing = isEditing;
        this.ngOnInit();
        break;
      case (!isEditing && !isSaving):
        this.isEditing = isEditing;
        break;
    }
  }
  chart(allmembers) {
    this.piedata = [];
    var a = allmembers.reduce((a, { career }) => {

      if (a[career]) {
        a[career]++;
        // this.piedata.push([{"name":career,"value":a[career],"text":0+'b'}])
      }
      else {
        a[career] = 1;
      }
      return a;
    }, {});
    a = Object.entries(a)

    for (let i = 0; i < a.length; i++) {
      this.piedata.push({ "name": a[i][0], "value": a[i][1], "text": (100/allmembers.length*a[i][1]).toFixed(1) })
    }
    return this.piedata;
  }
  onSubmit() {
    this.loaded = false;
    // TODO: Use EventEmitter with form value
    if (this.form.valid) {//this.loading = true;
      this.afiliationService.update(this.form.value.surname, this.form.value.name, this.form.value)
        .subscribe(
          data => {
            this.setIsEditing(false, true)

            //this.alertService.success('Registration successful', true);
            //this.router.navigate(['account/sign-in']);
          },
          error => {
            //this.alertService.error(error);
            this.loaded = true;
          });
    }
  }
  scrollToTop() { this.viewportScroller.scrollToAnchor('test'); }



}