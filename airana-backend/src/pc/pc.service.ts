import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gaussian } from 'ts-gaussian';


import { Pc } from '../_interfaces/pc.interface';
import { PcDto } from '../_dto/pc.dto';

@Injectable()
export class PcService {
    constructor(
        @InjectModel('Pc') private readonly pcModel: Model<Pc>,
    ) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    async createPc(createPcDto: PcDto): Promise<Pc> {
        const randomizer = Math.floor(Math.random() * (100 - 0 + 0)) + 0;
        const pc = new this.pcModel(createPcDto);if (pc.race.name == 'Human') {
            
            var rh: string = '-';
            if (Math.round(Math.random()) > 0) {
                rh = '+';
            }
            if (!pc.bloodtype) {
                switch (Math.floor(Math.random() * (4 - 1 + 1)) + 1) {
                    case 1:
                        pc.bloodtype = "A" + rh;
                        break;
                    case 2:
                        pc.bloodtype = "B" + rh;
                        break;
                    case 3:
                        pc.bloodtype = "O" + rh;
                        break;
                    case 4:
                        pc.bloodtype = "AB" + rh;
                        break;
                    default:
                        pc.bloodtype = "Uncommon Blood Type"
                        break;
                }
            }
            //EYECOLOR
            var lAxis = +this.normalDistribution(10, 50, 2.5).toFixed(2);
            var aAxis = +this.normalDistribution(5, -80, 5).toFixed(2);
            var bAxis = +this.normalDistribution(128, -100, 1).toFixed(2);
            if (bAxis < 0) {
                while (lAxis < 30) {
                    lAxis = +this.normalDistribution(10, 50, 2.5).toFixed(2);
                }
            }
            pc.eyecolor = [lAxis, aAxis, bAxis]

        } 
        for (var i = 0; i < pc.afiliations.length; i++) {
            pc.afiliations[i].joindate = new Date(pc.afiliations[i].joindate);
        }
        if (pc.cpp.membership) {
            pc.cpp.promotedate = new Date(pc.cpp.promotedate);
            pc.birthdate = new Date(pc.birthdate);
        }
        //organizado, no stats default, nomes canviats

        console.log('height ' + pc.height, '| chest ' + pc.chest, '| bulge ' + pc.race.bulge[0].size, '| waist ' + pc.waist, '| hip ' + pc.hip, '| feet ' + pc.feet, '| Eye Color ' + pc.eyecolor, '| Blood type ' + pc.bloodtype)

        await pc.save();
        return pc;
    }
   
    //Skew-Normal Distributions (Min, Max, Skew)
    normalDistribution(min, max, skew) {
        let u = 0, v = 0;
        while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while (v === 0) v = Math.random();
        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) num = this.normalDistribution(min, max, skew); 
        num = Math.pow(num, skew); // Skew
        num *= max - min; // Stretch to fill range
        num += min; // offset to min
        return num;
    }
    exponentialDistribution(lambda) {
        return -Math.log(1.0 - Math.random()) / lambda;
    }
    
    async getAllPc(): Promise<any> {
        return await this.pcModel.find({});
    }

    
    async getOnePc(surname: string, name: string): Promise<Pc> {
        return await this.pcModel.findOne({ 'surname': { '$regex': surname, $options: 'i' }, 'name': { '$regex': name, $options: 'i' } }/*, { '_id': 0}*/).populate('equipement.lhand').populate('equipement.rhand').populate('equipement.head').populate('equipement.armor').populate('equipement.hands').populate('equipement.legs').populate('equipement.feet').populate('equipement.trinket1').populate('equipement.trinket2').populate('afiliations.link').populate('contacts.link').populate('items.bag.equipement.link');
    }

    async getOnePcByName(name: string): Promise<Pc> {
        return await this.pcModel.findOne({ 'name': { '$regex': name, $options: 'i' } }/*, { '_id': 0}*/).populate('equipement.lhand').populate('equipement.rhand').populate('equipement.head').populate('equipement.armor').populate('equipement.hands').populate('equipement.legs').populate('equipement.feet').populate('equipement.trinket1').populate('equipement.trinket2').populate('afiliations').populate('afiliations.link').populate('contacts.link').populate('items.bag.equipement.link');
    }
    async getOnePcByOwner(account: string): Promise<Pc[]> {
        return await this.pcModel.find({"user":account});
    }

   
    async updatePcPut(name: string, surname: string, createPcDto: any): Promise<Pc> {

        return await this.pcModel.updateOne({ name: { '$regex': name, $options: 'i' }, surname: { '$regex': surname, $options: 'i' } }, createPcDto, { upsert: true, setDefaultsOnInsert: true }, (error) => {

        });
    }

    
    async deletePc(id: string): Promise<Pc> {
        return await this.pcModel.findByIdAndDelete(id);
    }
}
