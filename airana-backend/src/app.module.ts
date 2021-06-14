import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';


import { AccountModule } from './account/account.module';
import { NpcModule } from './npc/npc.module';
import { PcModule } from './pc/pc.module';
import { EquipModule } from './equip/equip.module';
import { AfiliationModule } from './afiliation/afiliation.module';
import { SuffixModule } from './suffix/suffix.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    AuthModule,
    AccountModule,
    NpcModule,
    PcModule,
    EquipModule,
    AfiliationModule,
    SuffixModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
