import {  PipeTransform, Pipe } from '@angular/core';
import { IParis } from './environment';

@Pipe({
    name: 'detailFilter'
})
export class DetailFilterPipe implements PipeTransform {

    transform(value: IParis[], filterBy: string): IParis[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((detail: IParis) =>
            detail.Name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
