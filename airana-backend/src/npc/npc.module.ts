import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NpcController } from './npc.controller';
import { NpcService } from './npc.service';
import {NpcSchema} from '../_schemas/npc.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Npc', schema: NpcSchema}]),
  ],
  controllers: [NpcController],
  providers: [NpcService]
})
export class NpcModule {}
