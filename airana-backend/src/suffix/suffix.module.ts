import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SuffixController } from './suffix.controller';
import { SuffixService } from './suffix.service';
import {SuffixSchema} from '../_schemas/suffix.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Suffix', schema: SuffixSchema}]),
  ],
  controllers: [SuffixController],
  providers: [SuffixService]
})
export class SuffixModule {}
