import * as mongoose from 'mongoose';


export const ModifiersSchema = new mongoose.Schema({
    hp: {
        type: Number,
        required:false
    },
    ep: {
        type: Number,
        required:false
    },
    atk: {
        type: Number,
        required:false
    },
    ratk: {
        type: Number,
        required:false
    },
    hit: {
        type: Number,
        required:false
    },
    block: {
        type: Number,
        required:false
    },
    flee: {
        type: Number,
        required:false
    },
    def: {
        type: Number,
        required:false
    },
    can: {
        type: Number,
        required:false
    },
    ini: {
        type: Number,
        required:false
    },
    matk: {
        type: Number,
        required:false
    },
    psy: {
        type: Number,
        required:false
    },
    psyatk: {
        type: Number,
        required:false
    },
    critrate: {
        type: Number,
        required:false
    },
    focus: {
        type: Number,
        required:false
    },
    sympathy: {
        type: Number,
        required:false
    },
    sanity: {
        type: Number,
        required:false
    },
    aspd: {
        type: Number,
        required:false
    },
    mspd: {
        type: Number,
        required:false
    }
}

    


/*, {
    versionKey: false,
    timestamps: true,
}*/); 