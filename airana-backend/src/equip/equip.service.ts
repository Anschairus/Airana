import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { Equip } from '../_interfaces/equip.interface';
import { EquipDto } from '../_dto/equip.dto';

@Injectable()
export class EquipService {
    constructor(
        @InjectModel('Equip') private readonly equipModel: Model<Equip>,
    ) { }



    async createEquip(createEquipDto: EquipDto): Promise<Equip> {
        const equip = new this.equipModel(createEquipDto);
await equip.save();
        return equip;
    } async createEquipTest(createEquipDto: EquipDto): Promise<Equip> {
        const equip = new this.equipModel(createEquipDto);
//await equip.save();
        return equip;
    }
    //Skew-Normal Distributions (Min, Max, Skew)
    normalDistribution(min, max, skew) {
        let u = 0, v = 0;
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
    exponentialDistribution (lambda:number) {
        return -Math.log(1.0 - Math.random()) / lambda;
    }

    async getAllEquips(): Promise<any> {
        return await this.equipModel.find({});
    }

 
    async getOneEquip(id): Promise<Equip> {
        return await this.equipModel.findById(id);
    }
    async getOneEquipByName(name: string): Promise<Equip> {
        return await this.equipModel.findOne({ 'name': { '$regex': name, $options: 'i' } }/*, { '_id': 0}*/);
    }


    async updateEquipPut(name: string, surname: string, createEquipDto: EquipDto): Promise<Equip> {

        return await this.equipModel.updateOne({ name: { '$regex': name, $options: 'i' }, surname: { '$regex': surname, $options: 'i' } }, createEquipDto, { upsert: true, setDefaultsOnInsert: true }, (error) => {

        });
    }


    async deleteEquip(id: string): Promise<Equip> {
        return await this.equipModel.findByIdAndDelete(id);
    }
}
