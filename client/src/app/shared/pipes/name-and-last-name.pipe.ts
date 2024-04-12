import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameAndLastName'
})
export class NameAndLastNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
