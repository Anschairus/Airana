"use strict";
exports.__esModule = true;
exports.NpcSchema = void 0;
var mongoose_1 = require("mongoose");
var stat_schema_1 = require("./stat.schema");
var aptitudes_schema_1 = require("./aptitudes.schema");
var equip_schema_1 = require("./equip.schema");
var afiliation_schema_1 = require("./afiliation.schema");
var bulge_schema_1 = require("./bulge.schema");
exports.NpcSchema = new mongoose_1["default"].Schema({
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
        required: false
    },
    career: {
        type: String,
        required: [true, 'CAREER_IS_BLANK']
    },
    powersource: {
        type: String,
        required: [true, 'POWERSOURCE_IS_BLANK']
    },
    powermethod: {
        type: String,
        required: [false, 'POWERMETHOD_IS_BLANK']
    },
    pranalanguages: {
        type: String,
        required: [true, 'PRANALANGUAGES_IS_BLANK'],
        "default": 'None'
    },
    specialization: {
        type: String,
        required: [true, 'SPECIALIZATION_IS_BLANK']
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
            "default": false
        },
        promotedate: {
            type: Date,
            required: false,
            "default": '1900-01-01'
        },
        rank: {
            type: String,
            required: false
        }
    },
    afiliations: {
        _id: false,
        type: [afiliation_schema_1.AfiliationSchema],
        required: false,
        "default": function () { return ({}); }
    },
    user: {
        type: String,
        required: [true, 'USER_IS_BLANK']
    },
    level: {
        type: Number,
        required: false,
        "default": 1
    },
    xpobtained: {
        type: Number,
        required: false,
        "default": 0
    },
    alignement: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false,
        "default": 0
    },
    birthdate: {
        type: Date,
        required: false,
        "default": '1900-01-01'
    },
    haircolor: {
        type: String,
        required: false
    },
    eyecolor: {
        type: String,
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
            "default": 'Human'
        },
        sex: {
            type: String,
            required: [true, 'SEX_IS_BLANK']
        },
        bulge: {
            _id: false,
            type: [bulge_schema_1.BulgeSchema],
            required: false,
            "default": function () { return ({}); }
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
        type: String,
        required: false
    },
    hundredsoffollowers: {
        type: Number,
        required: false,
        "default": 0
    },
    numberofawards: {
        type: Number,
        required: false,
        "default": 0
    },
    honorableactions: {
        type: Number,
        required: false,
        "default": 0
    },
    hundredsofhaters: {
        type: Number,
        required: false,
        "default": 0
    },
    infamy: {
        type: Number,
        required: false,
        "default": 0
    },
    cowardactions: {
        type: Number,
        required: false,
        "default": 0
    },
    totalfame: {
        type: Number,
        required: false,
        "default": 0
    },
    contacts: {
        type: [mongoose_1["default"].Schema.Types.ObjectId],
        ref: 'Npc',
        required: false
    },
    phobias: {
        type: String,
        required: false,
        "default": ''
    },
    stats: {
        random: {
            _id: false,
            type: stat_schema_1.StatSchema,
            "default": function () { return ({ str: Math.floor(Math.random() * (10 - 4 + 1)) + 4, agi: Math.floor(Math.random() * (10 - 4 + 1)) + 4, dex: Math.floor(Math.random() * (10 - 4 + 1)) + 4, vit: Math.floor(Math.random() * (10 - 4 + 1)) + 4, int: Math.floor(Math.random() * (10 - 4 + 1)) + 4, per: Math.floor(Math.random() * (10 - 4 + 1)) + 4, wil: Math.floor(Math.random() * (10 - 4 + 1)) + 4, car: Math.floor(Math.random() * (10 - 4 + 1)) + 4, luk: Math.floor(Math.random() * (10 - 4 + 1)) + 4 }); }
        },
        base: {
            _id: false,
            type: stat_schema_1.StatSchema,
            "default": function () { return ({}); }
        },
        lvl: {
            _id: false,
            type: [stat_schema_1.StatSchema],
            "default": function () { return ({}); }
        }
    },
    aptitudes: {
        _id: false,
        type: [aptitudes_schema_1.AptitudesSchema],
        required: false,
        "default": function () { return ({}); }
    },
    equipement: {
        lhand: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        },
        rhand: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        },
        head: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        },
        armor: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        },
        hands: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        },
        legs: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        },
        feet: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        },
        trinket1: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        },
        trinket2: {
            _id: false,
            type: equip_schema_1.EquipSchema,
            required: false,
            "default": function () { return ({}); }
        }
    },
    image: {
        main: {
            type: String,
            "default": 's-foto.jpg'
        },
        gallery: {
            type: [String]
        }
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
        "default": 'admin'
    },
    ownhistory: {
        type: String,
        required: false
    }
}, {
    versionKey: false,
    timestamps: true
});
