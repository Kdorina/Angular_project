import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminPipe'
})
export class adminPipe implements PipeTransform {

  transform(values:any[], filter:string): any {
    if(!values || !filter){
     return values;
    }
    return values.filter((value) =>
    value.buildingName.indexOf(filter)>-1
    );
   }


}
