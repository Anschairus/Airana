import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { PcService } from './pc.service';
import { PcDto } from '../_dto/pc.dto';


@Controller('pc')
@UseGuards(RolesGuard)
export class PcController {
    constructor(
        private readonly pcService: PcService,
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllPc() {
        return await this.pcService.getAllPc();
    }
    @Get('/:account')
    @HttpCode(HttpStatus.OK)
    //@Roles('user')
    async getOwnPcs( @Param('account') account) {
        console.log(account)
             return await this.pcService.getOnePcByOwner(account);
            
        }

    @Get('/:surname/:name?')
    @HttpCode(HttpStatus.OK)
    async getOnePcs( @Param('name') name: string,@Param('surname') surname: string) {
    
        if(!name){
            name=surname;
            surname='';
             return await this.pcService.getOnePcByName(name.replace(/-/g, " "));
            }else {
                return await this.pcService.getOnePc(surname.replace(/-/g, " "), name.replace(/-/g, " "));
            }
            
        }
            
    
    

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AuthGuard('jwt'))
    @Roles('user')

    async createPc(@Body() pcDto: PcDto) {
        //organizado, no stats default, nomes canviats
        //console.log(createPcDto);

        return await this.pcService.createPc(pcDto);
    }
    
    @Post('/test')
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')

    async createPcTest(@Body() pcDto: PcDto) {
        //organizado, no stats default, nomes canviats
        //console.log(createPcDto);

        return await this.pcService.createPcTest(pcDto);
    }


    @Put('/:name/:surname')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('jwt'))
     @Roles('admin')

    async updateWithAllParams(@Param('name') name: string, @Param('surname') surname: string, @Body() pcDto: PcDto) {

        return await this.pcService.updatePcPut(name, surname, pcDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')

    async deleteOnePc(@Param() params) {
        return await this.pcService.deletePc(params.id);
    }
}
