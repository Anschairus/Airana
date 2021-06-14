import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { AfiliationService } from './afiliation.service';
import { AfiliationDto } from '../_dto/afiliation.dto';


@Controller('afiliation')
@UseGuards(RolesGuard)
export class AfiliationController {
    constructor(
        private readonly afiliationService: AfiliationService,
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllAfiliation() {
        return await this.afiliationService.getAllAfiliations();
    }

    @Get('/:name')
    @HttpCode(HttpStatus.OK)
    async getOneAfiliationByName( @Param('name') name: string) {
    
                return await this.afiliationService.getOneAfiliationByName(name.replace(/_/g, " "));
        }
            
    
    

    @Post()
    @HttpCode(HttpStatus.CREATED)
    /*@UseGuards(AuthGuard('jwt'))
    @Roles('admin')*/

    async createAfiliation(@Body() afiliationDto: AfiliationDto) {
        //organizado, no stats default, nomes canviats
        //console.log(createAfiliationDto);

        return await this.afiliationService.createAfiliation(afiliationDto);
    }
    
    @Post('/test')
    @HttpCode(HttpStatus.CREATED)
    /*@UseGuards(AuthGuard('jwt'))
    @Roles('admin')*/

    async createAfiliationTest(@Body() afiliationDto: any) {
        //organizado, no stats default, nomes canviats
        //console.log(createAfiliationDto);

        return await this.afiliationService.createAfiliationTest(afiliationDto);
    }


    @Put('/:name')
    @HttpCode(HttpStatus.OK)
    /* @UseGuards(AuthGuard('jwt'))
     @Roles('admin')*/

    async updateWithAllParams(@Param('name') name: string, params, @Body() afiliationDto: AfiliationDto) {

        return await this.afiliationService.updateAfiliationPut(name, afiliationDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')

    async deleteOneAfiliation(@Param() params) {
        return await this.afiliationService.deleteAfiliation(params.id);
    }
}
