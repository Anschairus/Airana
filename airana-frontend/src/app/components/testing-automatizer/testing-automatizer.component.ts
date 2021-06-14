import { Component,  OnInit } from '@angular/core';
import { ColorValue } from '@syncfusion/ej2-angular-charts';
import * as convert from 'color-convert';

import { AppComponent } from '../../index';


@Component({
    selector: 'testing-automatizer',
    templateUrl: './testing-automatizer.component.html',
    styleUrls: ['./testing-automatizer.component.scss']
})
export class TestingAutomatizer implements OnInit{
    title:string='Testing Automatizer'
    public primaryXAxis: Object = {
        minimum: 15, maximum:40, interval:0.5, width: 0.5
    };
    public primaryYAxis: Object = {
            minimum: 0, maximum: 500, interval: 100,width: 0.8
    };
    public binInterval: number = 0.5;
    public columnWidth: number = 0.5;
    public showNormalDistribution: boolean = true;
    public marker: Object={ dataLabel: { visible: true }};
    public tooltip:Object= { enable: true };
    ethnicity:string='Kender';
    

    characterData: Object[] = [];
    height: any=[];
    public heightData: Object[] = [];
    weight: any=[];
    public weightData: Object[] = [];
    chest: Object[] = [];
    public chestData: Object[] = [];
    bulge: Object[] = [];
    public bulgeData: Object[] = [];
    waist:Object[] = [];
    public waistData: Object[] = [];
    hip: Object[] = [];
    public hipData: Object[] = [];
    feet: Object[] = [];
    public feetData: Object[] = [];
    eyecolor: string; 
    public eyeColorData: Object[] = [];
    bmi: Object[] = []; 
    public bmiData: Object[] = [];
    l:number=0;
    a:number=0;
    b:number=0;

    ngOnInit(): void {
    this.heightRandom();
        this.createEyeColor();
    }
   

   
    createCharacter() {
        // this.height = this.normalDistribution(114.28, 215.12, 0)
        // this.chest = [this.normalDistribution(59, 91, 0)]
        // this.bulge = [this.normalDistribution(2, 28, 0)]
        // this.waist = [this.normalDistribution(57.9, 78.7, 0)]
        // this.hip = [this.normalDistribution(78.8, 111.1, 0)]
        // this.feet = [this.normalDistribution(30, 50, 0)]
        // this.eyecolor = [this.exponentialDistribution(1)]
        
        // this.chest.push(this.chest)
        // this.bulge.push(this.bulge)
        // this.waist.push(this.waist)
        // this.hip.push(this.hip)
        // this.feet.push(this.feet)
        // this.eyecolor.push(this.eyecolor)
    
        //console.log(['height '+this.height,'chest '+this.chest,'bulge '+this.bulge,'waist '+this.waist,'hip '+this.hip,'feet '+this.feet,'eyecolor '+this.eyecolor.toFixed(2)]);
    }
    createEyeColor() {
        this.l = this.normalDistribution(10, 50, 2.5);
        this.a = this.normalDistribution(5, -80, 5);
        this.b = this.normalDistribution(128, -100, 1);
        if(this.b<0){
            while(this.l<30){
                this.l = this.normalDistribution(10, 50, 2.5);
            }
        }
        
        var lab=[this.l,this.a,this.b]
        console.log(lab);
        this.eyecolor=convert.lab.hsl(this.l, this.a, this.b);
        console.log(this.eyecolor)
        var eyecolor= <HTMLElement> document.getElementsByClassName('eyecolor')[0];
        eyecolor.style.backgroundColor=`hsl(${this.eyecolor[0]} ${this.eyecolor[1]}% ${this.eyecolor[2]}%)`
        var shade= <HTMLElement> document.getElementsByClassName('eyecolor-shade')[0];
        shade.style.backgroundColor=`hsla(${parseInt(this.eyecolor[0])-5}, ${this.eyecolor[1]}%, ${parseInt(this.eyecolor[2])-15}%, 0.6)`
        var light= <HTMLElement> document.getElementsByClassName('eyecolor-light')[0];
        light.style.backgroundColor=`hsla(${parseInt(this.eyecolor[0]+5)}, ${this.eyecolor[1]}%, ${parseInt(this.eyecolor[2])+10}%, 0.3)`
        
    }
    
    heightRandom(){
        switch (this.ethnicity) {
            case 'ISO':
                for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(155, 179, 1)
                    this.height.push(a)
                 }
                 this.height.map((value: number) => {
                     this.heightData.push({
                         y: value
                     });
                 });
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(87, 126, 1)
                    this.hip.push(a)
                 }
                 this.hip.map((value: number) => {
                     this.hipData.push({
                         y: value
                     });
                 });
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(63, 104, 1)
                    this.waist.push(a)
                 }
                 this.waist.map((value: number) => {
                     this.waistData.push({
                         y: value
                     });
                 });///COPIAR A TODOS
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(80.8, 115.6, 1)
                    this.chest.push(a)
                 }
                 this.chest.map((value: number) => {
                     this.chestData.push({
                         y: value
                     });
                 });
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(100, 3500, 3.4)
                    this.bulge.push(a)
                 }
                 this.bulge.map((value: number) => {
                     this.bulgeData.push({
                         y: value
                     });
                 });for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(19.8, 29.8, 1)
                    this.feet.push(a)
                 }
                 this.feet.map((value: number) => {
                     this.feetData.push({
                         y: value
                     });
                 });
                break;
                case 'Kender':
                for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(147.2, 182.9, 1)
                    this.height.push(a)
                 }
                 this.height.map((value: number) => {
                     this.heightData.push({
                         y: value
                     });
                 });
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(78.8, 128.3, 1)
                    this.hip.push(a)
                 }
                 this.hip.map((value: number) => {
                     this.hipData.push({
                         y: value
                     });
                 });
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(57.9, 101.5, 1)
                    this.waist.push(a)
                 }
                 this.waist.map((value: number) => {
                     this.waistData.push({
                         y: value
                     });
                 });
                 ///COPIAR A TODOS
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(72.6, 118.7, 1)
                    this.chest.push(a)
                 }
                 this.chest.map((value: number) => {
                     this.chestData.push({
                         y: value
                     });
                 });
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(100, 4000, 3.4)
                    this.bulge.push(a)
                 }
                 this.bulge.map((value: number) => {
                     this.bulgeData.push({
                         y: value
                     });
                 });
                 for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(14.5, 60, 2.8)
                    this.bmi.push(a)
                 }
                 this.bmi.map((value: number) => {
                     this.bmiData.push({
                         y: value
                     });
                 });
                 for(let i=0;i<1000;i++){
                    //var a=this.heightData[i]^2*this.bmiData[i]
                    this.weight.push(a)
                 }
                 this.weight.map((value: number) => {
                    this.weightData.push({
                        y: value
                    });
                });
                 ;for(let i=0;i<1000;i++){
                    var a=this.normalDistribution(19.8, 29.8, 1)
                    this.feet.push(a)
                 }
                 this.feet.map((value: number) => {
                     this.feetData.push({
                         y: value
                     });
                 });
                break;
                case 'Ontare':
                    for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(145, 175, 1)
                        this.height.push(a)
                     }
                     this.height.map((value: number) => {
                         this.heightData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(78, 104, 1)
                        this.hip.push(a)
                     }
                     this.hip.map((value: number) => {
                         this.hipData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(58, 93, 1)
                        this.waist.push(a)
                     }
                     this.waist.map((value: number) => {
                         this.waistData.push({
                             y: value
                         });
                     });///COPIAR A TODOS
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(71.8, 93.6, 1)
                        this.chest.push(a)
                     }
                     this.chest.map((value: number) => {
                         this.chestData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(100, 3200, 3.2)
                        this.bulge.push(a)
                     }
                     this.bulge.map((value: number) => {
                         this.bulgeData.push({
                             y: value
                         });
                     });
                     ;for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(19.8, 29.8, 1)
                        this.feet.push(a)
                     }
                     this.feet.map((value: number) => {
                         this.feetData.push({
                             y: value
                         });
                     });
                    break;
                    case 'Nabiit':
                    for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(138, 170, 1)
                        this.height.push(a)
                     }
                     this.height.map((value: number) => {
                         this.heightData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(81, 105, 1)
                        this.hip.push(a)
                     }
                     this.hip.map((value: number) => {
                         this.hipData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(58, 92, 1)
                        this.waist.push(a)
                     }
                     this.waist.map((value: number) => {
                         this.waistData.push({
                             y: value
                         });
                     });///COPIAR A TODOS
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(74.8, 94.6, 1)
                        this.chest.push(a)
                     }
                     this.chest.map((value: number) => {
                         this.chestData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(100, 3600, 3.3)
                        this.bulge.push(a)
                     }
                     this.bulge.map((value: number) => {
                         this.bulgeData.push({
                             y: value
                         });
                     });
                     ;for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(19.8, 29.8, 1)
                        this.feet.push(a)
                     }
                     this.feet.map((value: number) => {
                         this.feetData.push({
                             y: value
                         });
                     });
                    break;
                    case 'Abeil':
                    for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(148, 172, 1)
                        this.height.push(a)
                     }
                     this.height.map((value: number) => {
                         this.heightData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(78, 130, 1)
                        this.hip.push(a)
                     }
                     this.hip.map((value: number) => {
                         this.hipData.push({
                             y: value
                         });
                     }); 
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(57, 101, 1)
                        this.waist.push(a)
                     }
                     this.waist.map((value: number) => {
                         this.waistData.push({
                             y: value
                         });
                     });///COPIAR A TODOS
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(71.8, 119.6, 1)
                        this.chest.push(a)
                     }
                     this.chest.map((value: number) => {
                         this.chestData.push({
                             y: value
                         });
                     });for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(100, 3800, 3.4)
                        this.bulge.push(a)
                     }
                     this.bulge.map((value: number) => {
                         this.bulgeData.push({
                             y: value
                         });
                     });;for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(19.8, 29.8, 1)
                        this.feet.push(a)
                     }
                     this.feet.map((value: number) => {
                         this.feetData.push({
                             y: value
                         });
                     });
                    break;
                    case 'Drobex':
                    for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(156, 180, 1)
                        this.height.push(a)
                     }
                     this.height.map((value: number) => {
                         this.heightData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(85, 150, 1)
                        this.hip.push(a)
                     }
                     this.hip.map((value: number) => {
                         this.hipData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(59, 130, 1)
                        this.waist.push(a)
                     }
                     this.waist.map((value: number) => {
                         this.waistData.push({
                             y: value
                         });
                     });///COPIAR A TODOS
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(78.8, 139.6, 1)
                        this.chest.push(a)
                     }
                     this.chest.map((value: number) => {
                         this.chestData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(100, 3800, 3.4)
                        this.bulge.push(a)
                     }
                     this.bulge.map((value: number) => {
                         this.bulgeData.push({
                             y: value
                         });
                     });
                     ;for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(19.8, 29.8, 1)
                        this.feet.push(a)
                     }
                     this.feet.map((value: number) => {
                         this.feetData.push({
                             y: value
                         });
                     });
                    break;
                    case 'US':
                    for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(150, 180, 1)
                        this.height.push(a)
                     }
                     this.height.map((value: number) => {
                         this.heightData.push({
                             y: value
                         });
                     });
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(86, 159, 1)
                        this.hip.push(a)
                     }
                     this.hip.map((value: number) => {
                         this.hipData.push({
                             y: value
                         });
                     }); for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(61, 132, 1)
                        this.waist.push(a)
                     }
                     this.waist.map((value: number) => {
                         this.waistData.push({
                             y: value
                         });
                     });///COPIAR A TODOS
                     for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(79.8, 148.6, 1)
                        this.chest.push(a)
                     }
                     this.chest.map((value: number) => {
                         this.chestData.push({
                             y: value
                         });
                     });for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(100, 4000, 3.4)
                        this.bulge.push(a)
                     }
                     this.bulge.map((value: number) => {
                         this.bulgeData.push({
                             y: value
                         });
                     });
                     ;for(let i=0;i<1000;i++){
                        var a=this.normalDistribution(19.8, 29.8, 1)
                        this.feet.push(a)
                     }
                     this.feet.map((value: number) => {
                         this.feetData.push({
                             y: value
                         });
                     });
                    break;
            default:
                break;
        }
    }
    normalDistribution(min, max, skew) {
        var u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    
        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) num = this.normalDistribution(min, max, skew); // resample between 0 and 1 if out of range
        num = Math.pow(num, skew); // Skew
        num *= max - min; // Stretch to fill range
        num += min; // offset to min
        return num;
    }
    
    exponentialDistribution(lambda) {
        return -Math.log(1.0 - Math.random()) / lambda;
    }
}
