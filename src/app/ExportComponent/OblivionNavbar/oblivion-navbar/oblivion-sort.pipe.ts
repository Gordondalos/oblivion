import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
    name : 'oblivionSort'
} )
export class OblivionSortPipe implements PipeTransform {

    transform ( value : any, args? : any ) : any {

        function compare(a,b) {
            if (a.sort < b.sort)
                return -1;
            if (a.sort > b.sort)
                return 1;
            return 0;
        }

        return value.sort(compare);
    }

}
