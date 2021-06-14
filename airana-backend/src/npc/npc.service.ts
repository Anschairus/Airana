import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gaussian } from 'ts-gaussian';


import { Npc } from '../_interfaces/npc.interface';
import { NpcDto } from '../_dto/npc.dto';
import { create } from 'domain';
import { throwError } from 'rxjs';

@Injectable()
export class NpcService {
    constructor(
        @InjectModel('Npc') private readonly npcModel: Model<Npc>,
    ) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    async createNpc(createNpcDto: NpcDto): Promise<Npc> {
        const randomizer = Math.floor(Math.random() * (100 - 0 + 0)) + 0;
        const npc = new this.npcModel(createNpcDto);if (npc.race.name == 'Human') {
            
            var rh: string = '-';
            if (Math.round(Math.random()) > 0) {
                rh = '+';
            }
            if (!npc.bloodtype) {
                switch (Math.floor(Math.random() * (4 - 1 + 1)) + 1) {
                    case 1:
                        npc.bloodtype = "A" + rh;
                        break;
                    case 2:
                        npc.bloodtype = "B" + rh;
                        break;
                    case 3:
                        npc.bloodtype = "O" + rh;
                        break;
                    case 4:
                        npc.bloodtype = "AB" + rh;
                        break;
                    default:
                        npc.bloodtype = "Uncommon Blood Type"
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
            npc.eyecolor = [lAxis, aAxis, bAxis]

        } 
        for (var i = 0; i < npc.afiliations.length; i++) {
            npc.afiliations[i].joindate = new Date(npc.afiliations[i].joindate);
        }
        if (npc.cpp.membership) {
            npc.cpp.promotedate = new Date(npc.cpp.promotedate);
            npc.birthdate = new Date(npc.birthdate);
        }

        console.log('height ' + npc.height, '| chest ' + npc.chest, '| bulge ' + npc.race.bulge[0].size, '| waist ' + npc.waist, '| hip ' + npc.hip, '| feet ' + npc.feet, '| Eye Color ' + npc.eyecolor, '| Blood type ' + npc.bloodtype)

        await npc.save();
        return npc;
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
    
    async getAllNpc(): Promise<any> {
        return await this.npcModel.find({});
    }

    
    async getOneNpc(surname: string, name: string): Promise<Npc> {
        return await this.npcModel.findOne({ 'surname': { '$regex': surname, $options: 'i' }, 'name': { '$regex': name, $options: 'i' } }/*, { '_id': 0}*/).populate('equipement.lhand').populate('equipement.rhand').populate('equipement.head').populate('equipement.armor').populate('equipement.hands').populate('equipement.legs').populate('equipement.feet').populate('equipement.trinket1').populate('equipement.trinket2').populate('afiliations.link').populate('contacts.link').populate('items.bag.equipement.link');
    }

    async getOneNpcByName(name: string): Promise<Npc> {
        return await this.npcModel.findOne({ 'name': { '$regex': name, $options: 'i' } }/*, { '_id': 0}*/).populate('equipement.lhand').populate('equipement.rhand').populate('equipement.head').populate('equipement.armor').populate('equipement.hands').populate('equipement.legs').populate('equipement.feet').populate('equipement.trinket1').populate('equipement.trinket2').populate('afiliations').populate('afiliations.link').populate('contacts.link').populate('items.bag.equipement.link');
    }

    
    async updateNpcPut(name: string, surname: string, createNpcDto: NpcDto): Promise<Npc> {
         

        return await this.npcModel.findOneAndUpdate({ name: { '$regex': name, $options: 'i' }, surname: { '$regex': surname, $options: 'i' } }, {$set: createNpcDto}, { upsert: false, setDefaultsOnInsert: false, new: true ,useFindAndModify: false}, (error)=> {
if(error){

    return console.log(error.message);
}else{
    
    return console.log(createNpcDto);
}
        });
    }

   
    async deleteNpc(id: string): Promise<Npc> {
        return await this.npcModel.findByIdAndDelete(id);
    }
}
