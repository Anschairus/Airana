import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { EquipService } from './equip.service';
import { EquipDto } from '../_dto/equip.dto';


@Controller('equip')
@UseGuards(RolesGuard)
export class EquipController {
    constructor(
        private readonly equipService: EquipService,
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllEquip() {
        return await this.equipService.getAllEquips();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getOneEquips(@Param() params) {
    
       
                return await this.equipService.getOneEquip(params.id);
        }
            
    
    

    @Post()
    @HttpCode(HttpStatus.CREATED)
    /*@UseGuards(AuthGuard('jwt'))
    @Roles('admin')*/

    async createEquip(@Body() equipDto: EquipDto) {
        //organizado, no stats default, nomes canviats
        //console.log(createEquipDto);

        return await this.equipService.createEquip(equipDto);
    }
    
    @Post('/test')
    @HttpCode(HttpStatus.CREATED)
    /*@UseGuards(AuthGuard('jwt'))
    @Roles('admin')*/

    async createEquipTest(@Body() equipDto: any) {
        //organizado, no stats default, nomes canviats
        //console.log(createEquipDto);

        return await this.equipService.createEquipTest(equipDto);
    }


    @Put('/:name/:surname')
    @HttpCode(HttpStatus.OK)
    /* @UseGuards(AuthGuard('jwt'))
     @Roles('admin')*/

    async updateWithAllParams(@Param('name') name: string, @Param('surname') surname: string, params, @Body() equipDto: EquipDto) {

        return await this.equipService.updateEquipPut(name, surname, equipDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')

    async deleteOneEquip(@Param() params) {
        return await this.equipService.deleteEquip(params.id);
    }
}
