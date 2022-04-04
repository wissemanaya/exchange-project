import { ConsoleLogger, Injectable } from '@nestjs/common';
import { KeyObject } from 'crypto';
import { map } from 'rxjs';
import { CreateCoine } from './dto/createCoin.dto';

@Injectable()
export class ExchangeService {


    async createCoin(createcondto: CreateCoine): Promise<void> {
        const {coin , coin2 , coin3, coin2_value ,coin3_value }= createcondto 
        const coinmap ={} ;
        coinmap[coin] = {[coin2]:coin2_value , [coin3]:coin3_value} ;
        console.log(coinmap)
        const  objchild  =coinmap[coin]
        const basemap = {base : coin , currency : Object.keys(objchild).at(0) , price :  Object.values(objchild).at(0) };
        console.log(basemap)
        const basemap2 = {base : coin , currency : Object.keys(objchild).at(1) , price :  Object.values(objchild).at(1) };
        console.log(basemap2)
}
}
