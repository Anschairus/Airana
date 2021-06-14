import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import { PhotoSchema } from 'src/_schemas/photo.schema';
//import { PhotoSchema } from '../../schemas/photo.schema';

export const AccountSchema = new mongoose.Schema ({
    username: {
        type: String,
        trim:true,
        unique: true,
        required: [true, 'USERNAME_IS_BLANK']
      },
    name: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: [true, 'NAME_IS_BLANK'],
    },
    surname: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: [true, 'SURNAME_IS_BLANK'],
    },
    email: {
        type: String,
        lowercase: true,
        trim:true,
        maxlength: 255,
        minlength: 6,
        unique: true,
        required: [true, 'EMAIL_IS_BLANK'],
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'PASSWORD_IS_BLANK'],
    },
    birthdate: {
        type:Date,
        required: [true, 'BIRTHDATE_IS_BLANK'],
    },
    rememberme:{
        type:Boolean,
        default:false
    },
    bankAccountNumber: {
        type: String,
        maxlength: 32,
    },
    bankAccountOwnerName: {
        type: String,
        minlength: 6,
        maxlength: 255,
    },
    roles: {
        type: [String],
        default: ['user'],
    },
    theme:{
        type:String,
        default:'cpp-dark'
    },
    photos:{
        profilePic:{
            type:PhotoSchema
           /* profilePic: {}, //{ type:  mongoose.Schema.Types.ObjectId , ref: 'PhotoSchema'}
            gallery: [] //[{type:  mongoose.Schema.Types.ObjectId , ref: 'PhotoSchema'}]*/
        }
    },
    verification: {
        type: String,
        isUUID:true
    },
    verified: {
        type: Boolean,
        default: false,
    },/*
    phone: {
        type:String
    },
    facebook: {
        userid: String
      },
    gmail: {
        userid: String
      },
    settings: {},*/
    verificationExpires: {
        type: Date,
        default: Date.now,
    },
    loginAttempts: {
        type: Number,
        default: 0,
    },
    blockExpires: {
      type: Date,
      default: Date.now,
    },
}, {
    versionKey: false,
    timestamps: true,
});

AccountSchema.pre('save', async function(next: mongoose.HookNextFunction) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      // tslint:disable-next-line:no-string-literal
      const hashed = await bcrypt.hash(this['password'], 10);
      // tslint:disable-next-line:no-string-literal
      this['password'] = hashed;
      return next();
    } catch (err) {
      return next(err);
    }
  });
