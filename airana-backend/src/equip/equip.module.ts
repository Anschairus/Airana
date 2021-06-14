import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EquipController } from './equip.controller';
import { EquipService } from './equip.service';
import {EquipSchema} from '../_schemas/equip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Equip', schema: EquipSchema}]),
  ],
  controllers: [EquipController],
  providers: [EquipService]
})
export class EquipModule {}
