import {Injectable} from 'angular2/core';

export class Combatant {
    constructor(
        public name: string,
        public dexMod: number = 0,
        public hitPoints: number = 1,
        public advantage: boolean = false
    ){
        
    }
}


@Injectable()
export class CombatService{
    d20roll(): number {
       return Math.floor(Math.random() * 20) + 1
    }

    rollInitiative(pc):number {
        var rolls = [];
        rolls[0] = this.d20roll();
        if(pc.advantage){
            rolls[1] = this.d20roll();
        }
        let roll = Math.max(...rolls);

        return roll + pc.dexMod;
    }

    getCombatants(): Combatant[] {
        return combatants.map(p => new Combatant(p.name, p.dexMod, p.hitPoints, p.advantage))
            .map(p => {p.initiative = this.rollInitiative(p); return p})
            .sort((p1,p2) => {let result = p2.initiative - p1.initiative ;
                if(result == 0){return p2.dexMod - p1.dexMod} return result; });
    }
}

var combatants = [
    {
        "name" : 'Jon Snow',
        "dexMod": 3,
        "hitPoints": 35,
        "advantage": false
    },
    {
        "name" : 'Orc Chieftain',
        "dexMod": 1,
        "hitPoints": 45
    },
    {
        "name" : 'Eowyn',
        "dexMod": 2,
        "hitPoints": 25,
        "advantage": true
    },
    {
        "name" : 'Brienne',
        "dexMod": 2,
        "hitPoints": 25,
        "advantage": true
    },
    {
        "name" : 'Orc Grunt 1',
        "dexMod": 1,
        "hitPoints": 12
    },
    {
        "name" : 'Orc Grunt 2',
        "dexMod": -1,
        "hitPoints": 65
    },
    {
        "name" : 'Dire Wolf',
        "dexMod": 2,
        "hitPoints": 45,
        "advantage": true
    },
    {
        "name" : 'Hodor',
        "dexMod": -2,
        "hitPoints": 50
    },
]
