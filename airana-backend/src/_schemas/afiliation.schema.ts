import * as mongoose from 'mongoose';
import { PhotoSchema } from './photo.schema';


export const AfiliationSchema = new mongoose.Schema({
    
    owner: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Npc',
        required: true,
    },
    en:{
        name: {
            type: String,
            required:[true, 'AFILIATION NAME IS REQUIERED']
        },
        description: {
            type: String,
            required: [true, 'AFILIATION DESCRIPTION IS REQUIERED']
        },
        ranks:{
            _id:false,
            type:[Array],
            required:false,
            default:'Founder'
    
        }
    },
    
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Npc',
        required: false
    }],
    playermembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pc',
        required: false
    }],
    missions:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mission',
        required: false
    },
    image:{
        type:PhotoSchema,
        required:false
    }
    
}
, {
    versionKey: false,
    timestamps: true,
} );//"ranks":[{0,"1st Mégalo","1st Mégala"},{0,"2nd Mégalo","2nd Mégala"},{0,"3nd Mégalo","3nd Mégala"},{0,"23th Mégalo","23th Mégala"},{0,"24th Mégalo","24th Mégala"}],