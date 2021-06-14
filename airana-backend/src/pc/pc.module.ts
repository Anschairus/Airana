import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PcController } from './pc.controller';
import { PcService } from './pc.service';
import {PcSchema} from '../_schemas/pc.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Pc', schema: PcSchema}]),
  ],
  controllers: [PcController],
  providers: [PcService]
})
export class PcModule {}
