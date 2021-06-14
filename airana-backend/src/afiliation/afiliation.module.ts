import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AfiliationController } from './afiliation.controller';
import { AfiliationService } from './afiliation.service';
import {AfiliationSchema} from '../_schemas/afiliation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Afiliation', schema: AfiliationSchema}]),
  ],
  controllers: [AfiliationController],
  providers: [AfiliationService]
})
export class AfiliationModule {}
