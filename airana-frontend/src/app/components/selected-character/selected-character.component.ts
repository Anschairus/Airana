import { Component, OnInit, OnDestroy } from "@angular/core";
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as convert from 'color-convert';
import { SafeHtmlPipe } from "../../pipes";
import { CharacterTab, Account } from "../../_class";
import { CharacterService, AuthenticationService } from "../../_services";
import { updateBinding } from '@angular/core/src/render3/instructions';
import * as cpp from '../../data/cpp.data';



@Component({
  selector: "selected-character",
  templateUrl: "./selected-character.component.html",
  styleUrls: ["./selected-character.component.scss"]
})
export class SelectedCharacterComponent implements OnInit, OnDestroy {
  title = "lol"
  characterTabForm: any;
  characterTab: any;
  public surname: string;
  public name: string;
  isEditing: boolean = false;
  loaded: boolean = false;
  form: FormGroup;
  currentAccount: Account;
  cpp = cpp.CppData;
  lang:string='en';
  items:any;
  hslColor:string;
  l:number=0;
  a:number=0;
  b:number=0;
  flatColor:string='';
  shadeColor:string='';  
  lightColor:string='';


  public constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private authenticationService: AuthenticationService) {
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
    this.characterService.onSelect(this.surname, this.name).subscribe((data: CharacterTab) => {
      this.characterTab = data;
      
      if(this.characterTab.items.bag.equipement){

        this.items=this.characterTab.items.bag.equipement
      }
      
    this.colorEyes()
      
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
    this.characterTabForm = this.characterService.onSelect(this.surname, this.name).pipe(
      tap(characterTabForm => this.form.patchValue(characterTabForm))
      
    );
    
    this.loaded = true;// S'haurà de fer millor
  }
  ngOnDestroy() {

  }


  loadManager(newBoolean) {
    this.loaded = newBoolean;
  }
  characterImg(characterTab: CharacterTab) {
    if (characterTab.image.main.url != "" || characterTab.image.main.url != null) {
      return "assets/img/character/" + characterTab.image.main.url;
    } else if ((characterTab.image.main.url == "" || characterTab.image.main.url == null)) {
      return "assets/img/character/" + "foto.jpg";
    }
  }
  colorEyes(){
    console.log('Reached')
    if(this.characterTab.eyecolor[1]){
      this.l = this.characterTab.eyecolor[0];
      this.a = this.characterTab.eyecolor[1];
      this.b = this.characterTab.eyecolor[2];
      this.hslColor=convert.lab.hsl(this.l,this.a,this.b);
          this.flatColor=`hsl(${this.hslColor[0]}, ${this.hslColor[1]}%, ${this.hslColor[2]}%)`
          this.shadeColor=`hsla(${parseInt(this.hslColor[0])-5}, ${this.hslColor[1]}%, ${parseInt(this.hslColor[2])-15}%, 0.6)`
          this.lightColor=`hsla(${parseInt(this.hslColor[0]+5)}, ${this.hslColor[1]}%, ${parseInt(this.hslColor[2])+10}%, 0.4)`
    }
   
  }
  equipImg(characterTab: any, property) {
    if (characterTab.hasOwnProperty('equipement') && characterTab.equipement.hasOwnProperty(property) && (characterTab.equipement[property].image.url != "" || characterTab.equipement[property].image.url != null || characterTab.equipement[property].image.url != undefined)) {
      return "https://www.airana.net/assets/img/equip/" + characterTab.equipement[property].image.url;
    } else if ((!characterTab.hasOwnProperty('equipement') || !characterTab.equipement.hasOwnProperty(property) || characterTab.equipement[property].image.url == "" || characterTab.equipement[property].image.url == null || characterTab.equipement[property].image.url == undefined)) {
      return "https://www.airana.net/assets/img/npc/s-foto.jpg";
    }
  }
  itemImg(item){
if (item.link.image){
  return 'https://www.airana.net/assets/img/'+item.link.category+'/' + item.link.image.url
}else{
  return  "https://www.airana.net/assets/img/npc/s-foto.jpg";
}
  }
  returnValue(characterTab, item, property) {
    if (characterTab.hasOwnProperty('equipement') && characterTab.equipement.hasOwnProperty(item)) {
      return characterTab.equipement[item][property];
    } else {
      return 'empty';
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
  tooltipEquipement() {
    //tooltip cursor

    document.addEventListener('mousemove', this.logKey);

  };
  logKey(e) {
    var x = (e.clientX + 20) + 'px',
      y = (e.clientY + 0) + 'px';
    // document.querySelector<HTMLInputElement>('.tooltip .tooltip-window').style.visibility='visible';
    if (document.querySelector<HTMLInputElement>('.tooltip .tooltip-window')) {
      document.querySelector<HTMLInputElement>('.tooltip .tooltip-window').style.top = y;
      document.querySelector<HTMLInputElement>('.tooltip .tooltip-window').style.left = x;
    }
  }
  tooltipEquipementEnd() {
    document.removeEventListener('mousemove', this.logKey);
  }

  isEditingManager(characterTabEditingValor): Boolean {
    if (this.isEditing) {
      return true;
    } else if (characterTabEditingValor) {
      return true;
    } else {
      return false;
    }
  }
  isEditingManagerStatus(characterTabEditingValor) {
    if (characterTabEditingValor != 1 || this.isEditing) {
      return true;
    } else {

      return false;
    }
  }
  isEditingManagerEvilafiliation1(characterTabEditingValor) {
    if (this.isEditing) {
      return true;
    } else if (!this.currentAccount || !characterTabEditingValor || characterTabEditingValor == null) {
      return false;
    } else if (characterTabEditingValor && this.currentAccount.roles == 'admin') {
      return true;
    } else {
      return false;
    }
  }
  onSelectAfiliation(afiliation) {
    if (afiliation.link != '' || !afiliation.link[this.lang].name) {
      this.router.navigate(['/ranking/afiliations/' + (afiliation.link[this.lang].name).replace(/\s/g, "_")]);
    } else {
      alert('There was a Bug. Contact suport')
    }
  }
  formatDate(birthdate) {
    return new Date(birthdate).toISOString().slice(0, 10)
  };
  formatBirthDay(birthdate) {
    return new Date(birthdate).toLocaleString('default', { month: 'long' }) + ' ' + new Date(birthdate).getDate()


  };
  selectRank(rank, sex) {
    if (rank.length > 1 && sex == 'Male') {
      return rank[0];
    } else if (rank.length > 1 && sex == 'Female') {
      return rank[1];
    } else if (rank.length <= 1) {
      return rank[0];
    }

  }
  isEditingManagerUser(characterTabEditingValor) {
    if (this.isEditing) {
      return true;
    } else if (!this.currentAccount || !characterTabEditingValor || characterTabEditingValor == null) {
      return false;
    } else if (this.currentAccount.roles != 'admin') {
      return false;
    } else if (characterTabEditingValor) {
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
    if (obj.equipement) {
      for (let i in obj.equipement) {
        equip = equip + ~~obj.equipement[i][type][field];
      }
    }

    if (type == 'stats') {
      var lvl = obj.stats.lvl.reduce((accumulator, current) => accumulator + current[field], 0);
      var base = obj.stats.base[field];

      return { 'equip': equip, 'base': base, 'lvl': lvl, 'total': equip + base + lvl }

    } else if (type == 'aptitudes' && obj.aptitudes) {
      var lvl = obj.aptitudes.reduce((accumulator, current) => accumulator + ~~current[field], 0);

      return { 'lvl': lvl, 'equip': equip, 'total': equip + lvl };

    } else if (type == 'modifiers') {
      return { 'equip': equip }
    }
  }

  isEditingManagerAge(characterTabEditingValor) {
    if (this.isEditing) {
      return true;
    } else if (characterTabEditingValor == 0 || !characterTabEditingValor || characterTabEditingValor == null) {
      return false;
    } else if (characterTabEditingValor) {
      return true;
    } else {
      return false;
    }
  }
  bulge(race) {
    if (race.sex == 'Female' && (race.name == 'Elven' || race.name == 'Human') && !race.bulge[0].secret) {
      if (race.bulge[0].size < 140) {
        return "AAA";
      } else if (race.bulge[0].size < 250) {
        return "AA"
      } else if (race.bulge[0].size < 300) {
        return "A"
      } else if (race.bulge[0].size < 380) {
        return "B"
      } else if (race.bulge[0].size < 460) {
        return "C"
      } else if (race.bulge[0].size < 560) {
        return "D"
      } else if (race.bulge[0].size < 660) {
        return "E"
      } else if (race.bulge[0].size < 780) {
        return "F"
      } else if (race.bulge[0].size < 900) {
        return "G"
      } else if (race.bulge[0].size < 1060) {
        return "H"
      } else if (race.bulge[0].size < 1260) {
        return "I"
      } else if (race.bulge[0].size < 1460) {
        return "J"
      } else if (race.bulge[0].size < 1700) {
        return "K"
      } else if (race.bulge[0].size < 1940) {
        return "L"
      } else if (race.bulge[0].size < 2220) {
        return "M"
      } else if (race.bulge[0].size < 2580) {
        return "N"
      } else if (race.bulge[0].size < 2960) {
        return "O"
      } else if (race.bulge[0].size < 3400) {
        return "P"
      }
    }
    if (race.sex == 'Male') {
    }
  }
  isEditingManagerMeasurements(characterTabEditingValor) {
    if (this.isEditing) {
      return true;
    } else if (characterTabEditingValor.status != 0 && characterTabEditingValor.chest != 0 && characterTabEditingValor.waist != 0 && characterTabEditingValor.hip != 0) {
      return true;
    } else {

      return false;
    }
  }

  isEditingManagerAdmin(characterTabEditingValor) {
    if (!this.currentAccount) {
      return false;
    } else if ((this.currentAccount.roles.includes('admin') && this.currentAccount.username == this.characterTab.user) && (characterTabEditingValor || this.isEditing)) {
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

  onSubmit() {
    this.loaded = false;
    // TODO: Use EventEmitter with form value
    if (this.form.valid) {//this.loading = true;
      this.characterService.update(this.form.value.surname, this.form.value.name, this.form.value)
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