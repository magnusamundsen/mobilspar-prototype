import { Goal } from './goal';

export class GoalStore {
    goals: Goal[];

    constructor() {
        this.goals = [];

        /*let dummy = new Goal();
        dummy.what = "Buffer";
        dummy.howMuch = 30000;
        dummy.when = "2017-12-31T00:00:00.000Z"
        dummy.id = 0;
        dummy.saved = 0;

        this.goals.push(dummy);*/
    }

    addGoal(goal: Goal) {
        this.goals.push(goal);
    }

    getGoals() {
        return this.goals;
    }
}


