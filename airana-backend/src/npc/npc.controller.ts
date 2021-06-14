import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { NpcService } from './npc.service';
import { NpcDto } from '../_dto/npc.dto';


@Controller('npc')
@UseGuards(RolesGuard)
export class NpcController {
    constructor(
        private readonly npcService: NpcService,
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllNpc() {
        return await this.npcService.getAllNpc();
    }

    @Get('/:surname/:name?')
    @HttpCode(HttpStatus.OK)
    async getOneNpc( @Param('name') name: string,@Param('surname') surname: string) {
    
        if(!name){
            name=surname;
            surname='';
             return await this.npcService.getOneNpcByName(name.replace(/_/g, " "));
            }else {
                return await this.npcService.getOneNpc(surname.replace(/_/g, " "), name.replace(/_/g, " "));
            }
            
        }
            
    
    

    @Post()
    @HttpCode(HttpStatus.CREATED)
    /*@UseGuards(AuthGuard('jwt'))
    @Roles('admin')*/

    async createNpc(@Body() npcDto: NpcDto) {
        //organizado, no stats default, nomes canviats
        //console.log(createNpcDto);

        return await this.npcService.createNpc(npcDto);
    }
    
    @Post('/test')
    @HttpCode(HttpStatus.CREATED)
    /*@UseGuards(AuthGuard('jwt'))
    @Roles('admin')*/

    async createNpcTest(@Body() npcDto: NpcDto) {
        //organizado, no stats default, nomes canviats
        //console.log(createNpcDto);

        return await this.npcService.createNpcTest(npcDto);
    }


    @Put('/:surname/:name?')
    @HttpCode(HttpStatus.OK)
    /* @UseGuards(AuthGuard('jwt'))
     @Roles('admin')*/

    async updateWithAllParams(@Param('name') name: string, @Param('surname') surname: string, @Body() npcDto: NpcDto) {
       
        return await this.npcService.updateNpcPut(name, surname, npcDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')

    async deleteOneNpc(@Param() params) {
        return await this.npcService.deleteNpc(params.id);
    }
}
