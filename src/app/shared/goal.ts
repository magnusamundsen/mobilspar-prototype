import * as moment from 'moment';

export class Goal {
    id: number;
    what: string;
    howMuch: number;
    when: string;
    saved: number = 0;
    howMuchPerDay: number = Math.round(this.howMuch / moment(this.when).diff(moment(), 'days'));
    percentage: number = Math.floor((this.saved / this.howMuch) * 100);

    getHowMuchPerDay() {
        let days = moment(this.when).diff(moment(), 'days');
        let howMuchPerDay = Math.round(this.howMuch / days);
        if (isNaN(howMuchPerDay) || isFinite(howMuchPerDay) || howMuchPerDay === Infinity) {
            return -1;
        }

        console.log("getHowMuchPerDay isNaN", isNaN(howMuchPerDay));
        console.log("getHowMuchPerDay isFinite", isFinite(howMuchPerDay));

        console.log("getHowMuchPerDay", howMuchPerDay);

        return howMuchPerDay;
    }        
}