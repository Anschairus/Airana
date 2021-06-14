import * as mongoose from 'mongoose';

import { StatSchema } from './stat.schema';
import { AptitudesSchema } from './aptitudes.schema';
import { ModifiersSchema } from './modifiers.schema';
import { PhotoSchema } from './photo.schema';

export const EquipSchema = new mongoose.Schema({
    
    name: {
        _id: false,
        type: String,
        required: true
    },
    stats: {
        _id: false,
        type: StatSchema
    },
    modifiers: {
        _id: false,
        type: ModifiersSchema
    },
    aptitudes: {
        _id: false,
        type: AptitudesSchema
    },
    equipslot:{
        _id: false,
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true,
        default: 'common'
    },
    lvl: {
        type: Number,
        required: true,
        default: 1
    },
    ilvl: {
        type: Number,
        required: true,
        default: 1
    },
    description: {
        type: String,
        required: false
    },
    skill: { type:Array<mongoose.Schema.Types.ObjectId>(),
        ref: 'Skill',
        required: false,
    },
    type:{
        type:String,
        required:true
    },
    subtype:{
        type:String,
        required:false
    },
    prana:{
        type:Boolean,
        default:false
    },
    element:{
        type:String,
        required:false
    },
    image:{
        type:PhotoSchema,
        required:true
    },
    category:{
        type:String,
        required:true,
        default:'equip'
    }
}




/*, {
    versionKey: {
        type: false,
    timestamps: {
        type: true,
}*/); 

export const Equip = mongoose.model('Equip', EquipSchema);