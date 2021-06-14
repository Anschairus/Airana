import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { SuffixService } from './suffix.service';
import { SuffixDto } from '../_dto/suffix.dto';


@Controller('suffix')
@UseGuards(RolesGuard)
export class SuffixController {
    constructor(
        private readonly suffixService: SuffixService,
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllSuffix() {
        return await this.suffixService.getAllSuffixs();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    async getOneSuffixByName( @Param('id') id: string) {
    
                return await this.suffixService.getOneSuffix(id);
        }
            
    
    

    @Post()
    @HttpCode(HttpStatus.CREATED)
    /*@UseGuards(AuthGuard('jwt'))
    @Roles('admin')*/

    async createSuffix(@Body() suffixDto: SuffixDto) {
        //organizado, no stats default, nomes canviats
        //console.log(createSuffixDto);

        return await this.suffixService.createSuffix(suffixDto);
    }
    
    @Post('/test')
    @HttpCode(HttpStatus.CREATED)
    /*@UseGuards(AuthGuard('jwt'))
    @Roles('admin')*/

    async createSuffixTest(@Body() suffixDto: any) {
        //organizado, no stats default, nomes canviats
        //console.log(createSuffixDto);

        return await this.suffixService.createSuffixTest(suffixDto);
    }


    @Put('/:name')
    @HttpCode(HttpStatus.OK)
    /* @UseGuards(AuthGuard('jwt'))
     @Roles('admin')*/

    async updateWithAllParams(@Param('name') name: string, params, @Body() suffixDto: SuffixDto) {

        return await this.suffixService.updateSuffixPut(name, suffixDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')

    async deleteOneSuffix(@Param() params) {
        return await this.suffixService.deleteSuffix(params.id);
    }
}
