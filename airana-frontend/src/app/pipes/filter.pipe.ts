import { PipeTransform, Pipe} from '@angular/core';
import * as _ from 'lodash/fp';

@Pipe({name:'filter'})
export class FilterPipe implements PipeTransform{
transform(items,searchTerm){
if(searchTerm){
let newSearchTerm=!isNaN(searchTerm)? searchTerm.toString(): searchTerm.toString().toUpperCase();
return items.filter(item=>{
return this.lookForNestedObject(item,newSearchTerm);
})
}
else{return items;}
}

lookForNestedObject(item,newSearchTerm){
let origItem={...item};
let that=this;
parseNestedObject(item);
function parseNestedObject(item){
for(let key in item){
if(_.isPlainObject(item[key])){
if(origItem[key]) { delete origItem[key]}
parseNestedObject(item[key]);
}
else{
if(origItem[key]) { delete origItem[key]}
origItem[key]=item[key];
}}
}
return that.search(item,origItem,newSearchTerm);
}
search(item,origItem,newSearchTerm){
let filteredList=[];
let prop="";
for(let koy in origItem){
prop=isNaN(origItem[koy]) ? origItem[koy].toString().toUpperCase() : origItem[koy].toString();
if(prop.indexOf(newSearchTerm) > -1){
filteredList.push(item);
return filteredList;
}}
}
}