import * as mongoose from 'mongoose';


export const SuffixSchema = new mongoose.Schema({
    
    
    en:{
        name: {
            type: String,
            required:[true, 'SUFFIX NAME IS REQUIERED']
        }
    },
    stats:{
        type:[String],
        required:false
    }
    
}
, {
    versionKey: false,
    timestamps: true,
} );//"ranks":[{0,"1st Mégalo","1st Mégala"},{0,"2nd Mégalo","2nd Mégala"},{0,"3nd Mégalo","3nd Mégala"},{0,"23th Mégalo","23th Mégala"},{0,"24th Mégalo","24th Mégala"}],