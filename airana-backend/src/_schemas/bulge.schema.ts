import * as mongoose from 'mongoose';


export const BulgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        default:0
    },
    size: {
        type: Number,
        required:true,
        default:0
    },
    secret: {
        type: Boolean,
        required:true,
        default:true
    },
    description: {
        type: String,
        required: false
    }
}
/*, {
    versionKey: false,
    timestamps: true,
}*/); 