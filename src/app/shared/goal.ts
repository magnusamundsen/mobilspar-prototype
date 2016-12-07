import * as moment from 'moment';

export class Goal {
    id: number;
    what: string;
    howMuch: number;
    when: string;
    saved: number = 0;
    howMuchPerDay: number;
    percentage: number = Math.floor((this.saved / this.howMuch) * 100);
    saveWithOthers: boolean;
    automaticSaving: boolean;
}