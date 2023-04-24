import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {

  transform(values:any[], filter:string): any {
    if(!values || !filter){
     return values;
    }
    return values.filter((value) =>
    value.subject.indexOf(filter)>-1
    );
   }

}
