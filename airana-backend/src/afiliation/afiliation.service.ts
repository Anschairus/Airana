import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { Afiliation } from '../_interfaces/afiliation.interface';
import { AfiliationDto } from '../_dto/afiliation.dto';
import { PcSchema, Pc } from 'src/_schemas/pc.schema';
import { NpcSchema, Npc } from 'src/_schemas/npc.schema';

@Injectable()
export class AfiliationService {
    constructor(
        @InjectModel('Afiliation') private readonly afiliationModel: Model<Afiliation>,
    ) { }



    async createAfiliation(createAfiliationDto: AfiliationDto): Promise<Afiliation> {
        createAfiliationDto.members=[createAfiliationDto.owner]
        const afiliation = new this.afiliationModel(createAfiliationDto);
await afiliation.save();
        return afiliation;
    } 
    async createAfiliationTest(createAfiliationDto: AfiliationDto): Promise<Afiliation> {
        createAfiliationDto.members=[createAfiliationDto.owner]
        const afiliation = new this.afiliationModel(createAfiliationDto);
//await afiliation.save();
        return afiliation;
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

    async getAllAfiliations(): Promise<any> {
        return await this.afiliationModel.find({});
    }

 
    async getOneAfiliation(id): Promise<Afiliation> {
        return await this.afiliationModel.findById(id);
    }
    async getOneAfiliationByName(name: string): Promise<Afiliation> {
        
        return await this.afiliationModel.findOne({ 'en.name': { '$regex': name, $options: 'i' } }/*, { '_id': 0}*/).populate('owner').populate({
            path: 'members',
            model: 'Npc'   
          }).populate({
            path: 'playermembers',
            model: 'Pc'   
          }).populate('missions');
    }


    async updateAfiliationPut(name: string, createAfiliationDto: AfiliationDto): Promise<Afiliation> {

        return await this.afiliationModel.updateOne({ 'en.name': { '$regex': name, $options: 'i' } }, createAfiliationDto, { upsert: true, setDefaultsOnInsert: true }, (error) => {

        });
    }


    async deleteAfiliation(id: string): Promise<Afiliation> {
        return await this.afiliationModel.findByIdAndDelete(id);
    }
}
