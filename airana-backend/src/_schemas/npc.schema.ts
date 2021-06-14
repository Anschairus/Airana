import mongoose from 'mongoose';

import { StatSchema } from './stat.schema';
import { AptitudesSchema } from './aptitudes.schema';
import { BulgeSchema } from './bulge.schema';
import { PhotoSchema } from './photo.schema';




export const NpcSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'NAME_IS_BLANK']
    },
    surname: {
        type: String,
        required: [true, 'SURNAME_IS_BLANK']
    },
    status: {
        type: String,
        required: false,
        default: 'Alive'
    },
    career: {
        type: String,
        required: [true, 'CAREER_IS_BLANK']
    },
    powersource: {
        type: String,
        required: false
    },
    powermethod: {
        type: String,
        required: false
    },
    pranalanguages: {
        type: String,
        required: false
    },
    specialization: {
        type: String,
        required: false
    },
    pathresearch: {
        type: String,
        required: false
    },
    birthplace: {
        city: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: false
        }
    },
    ethnicity: {
        type: String,
        required: false
    },
    nationality: {
        type: String,
        required: false
    },
    based: {
        street: {
            type: String,
            required: false
        },
        number: {
            type: Number,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        district: {
            type: String,
            required: false
        },
        prefacture: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: false
        }

    },
    cpp: {
        membership: {
            type: Boolean,
            required: [true, 'CPP_MEMBERSHIP_IS_BLANK'],
            default: false,
        },
        promotedate: {
            type: Date,
            required: false
        },
        rank: {
            type: Array<Number>(),
            required: false
        },
        evil: {
            type: Boolean,
            required: true,
            default: false
        },
        secret: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    afiliations: [{
        link: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Afiliation',
            required: false
        },
        rank: {
            type: Number,
            required: true
        },
        evil: {
            type: Boolean,
            required: true,
            default: true
        },
        joindate: {
            type: Date,
            required: false,
            default: '1900-01-20'
        },
        _id: false,
    }],
    user: {
        type: String,
        required: [true, 'USER_IS_BLANK']
    },
    level: {
        type: Number,
        required: false,
        default: 1
    },
    xpobtained: {
        type: Number,
        required: false,
        default: 0
    },
    alignement: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false,
        default: 0
    },
    birthdate: {
        type: Date,
        required: false,
        default: '1900-01-01'
    },
    haircolor: {
        type: String,
        required: false
    },
    eyecolor: {
        type: [Number,Number,Number],
        required: false
    },
    bloodtype: {
        type: String,
        required: false
    },
    height: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    race: {
        name: {
            type: String,
            required: [true, 'RACE_IS_BLANK'],
            default: 'Human'
        },
        sex: {
            type: String,
            required: [true, 'SEX_IS_BLANK']
        },
        bulge: {
            _id: false,
            type: [BulgeSchema],
            required: false,
            default: () => ({})
        }
    },
    chest: {
        type: Number,
        required: false
    },
    waist: {
        type: Number,
        required: false
    },
    hip: {
        type: Number,
        required: false
    },
    feet: {
        type: Number,
        required: false
    },
    titles: {
        type: Array<String>(),
        required: false
    },
    hundredsoffollowers: {
        type: Number,
        required: false,
        default: 0
    },
    numberofawards: {
        type: Number,
        required: false,
        default: 0
    },
    honorableactions: {
        type: Number,
        required: false,
        default: 0
    },
    hundredsofhaters: {
        type: Number,
        required: false,
        default: 0
    },
    infamy: {
        type: Number,
        required: false,
        default: 0
    },
    cowardactions: {
        type: Number,
        required: false,
        default: 0
    },
    totalfame: {
        type: Number,
        required: false,
        default: 0
    },
    contacts: [{
        link: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Npc',
            required: false,
        },
        affection: {
            type: Number,
            required: false,
            default: 0
        }

    }],
    phobias: {
        type: Array<String>(),
        required: false
    },
    stats: {
        random: {
            _id: false,
            type: StatSchema,
            default: () => ({ str: Math.floor(Math.random() * (10 - 4 + 1)) + 4, agi: Math.floor(Math.random() * (10 - 4 + 1)) + 4, dex: Math.floor(Math.random() * (10 - 4 + 1)) + 4, vit: Math.floor(Math.random() * (10 - 4 + 1)) + 4, int: Math.floor(Math.random() * (10 - 4 + 1)) + 4, per: Math.floor(Math.random() * (10 - 4 + 1)) + 4, wil: Math.floor(Math.random() * (10 - 4 + 1)) + 4, car: Math.floor(Math.random() * (10 - 4 + 1)) + 4, luk: Math.floor(Math.random() * (10 - 4 + 1)) + 4 })
        },
        base: {
            _id: false,
            type: StatSchema,
            default: () => ({})
        },
        lvl: {
            _id: false,
            type: [StatSchema]
        },


    },
    aptitudes: {
        _id: false,
        type: [AptitudesSchema],
        required: false,
        default: () => ({})
    },
    equipement: {
        lhand: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        },
        rhand: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        },
        head: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        },
        armor: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        },
        hands: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        },
        legs: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        },
        feet: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        },
        trinket1: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        },
        trinket2: {
            _id: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equip',
            required: false
        }

    },
    image: {
        main: {
            type: PhotoSchema,
            required: false,
            _id: false
        },
        gallery: {
            type: [PhotoSchema],
            required: false,
            default: [],
            _id: false
        },
    },
    notes: {
        type: String,
        required: false
    },
    adminnotes: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false,
        default: 'admin'
    },
    ownhistory: {
        type: String,
        required: false
    },
    items: {
        bank: {
            equipement: [{
                size: [Number, String],
                prefix: {
                    type: String
                },
                suffix: {
                    type: String
                },
                link: {
                    type:  mongoose.Schema.Types.ObjectId,
                    ref: 'Equip',
                    required: true
                }
            }]
        }, bag: {
            equipement: [{
                size: {
                    type: Array
                },
                prefix: {
                    type:  mongoose.Schema.Types.ObjectId,
                    ref: 'Prefix',
                    required: false
                },
                suffix: {
                    type:  mongoose.Schema.Types.ObjectId,
                    ref: 'Suffix',
                    required: false
                },
                link: {
                    type:  mongoose.Schema.Types.ObjectId,
                    ref: 'Equip',
                    required: true
                }
            }]
        }
    },
    currency: {
        bank: {
            type: Number
        },
        bag: {
            type: Number
        }
    }


}, {
    versionKey: false,
    timestamps: true,
    //autoIndex: true
});

export const Npc = mongoose.model('Npc', NpcSchema);
