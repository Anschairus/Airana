import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { Suffix } from '../_interfaces/suffix.interface';
import { SuffixDto } from '../_dto/suffix.dto';
import { PcSchema, Pc } from 'src/_schemas/pc.schema';
import { NpcSchema, Npc } from 'src/_schemas/npc.schema';

@Injectable()
export class SuffixService {
    constructor(
        @InjectModel('Suffix') private readonly suffixModel: Model<Suffix>,
    ) { }

    

    async createSuffix(createSuffixDto: SuffixDto): Promise<Suffix> {
        const suffix = new this.suffixModel(createSuffixDto);
await suffix.save();
        return suffix;
    } 
    async createSuffixTest(createSuffixDto: SuffixDto): Promise<Suffix> {
        const suffix = new this.suffixModel(createSuffixDto);
//await suffix.save();
        return suffix;
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
    
    async getAllSuffixs(): Promise<any> {
        return await this.suffixModel.find({});
    }

    
    async getOneSuffix(id): Promise<Suffix> {
        return await this.suffixModel.findById(id);
    }
    

    
    async updateSuffixPut(name: string, createSuffixDto: SuffixDto): Promise<Suffix> {

        return await this.suffixModel.updateOne({ 'en.name': { '$regex': name, $options: 'i' } }, createSuffixDto, { upsert: true, setDefaultsOnInsert: true }, (error) => {

        });
    }

    
    async deleteSuffix(id: string): Promise<Suffix> {
        return await this.suffixModel.findByIdAndDelete(id);
    }
}
