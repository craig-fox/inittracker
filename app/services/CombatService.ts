import {Injectable} from 'angular2/core';

export class Combatant {
    constructor(
        public name: string,
        public dexMod: number = 0,
        public hitPoints: number = 1
    ){
        
    }
}


@Injectable()
export class CombatService{
    rollInitiative(mod:number):number {
        return (Math.floor(Math.random() * 20) + 1) + mod;
    }

    getCombatants(): Combatant[] {
        return combatants.map(p => new Combatant(p.name, p.dexMod, p.hitPoints))
            .map(p => {p.initiative = this.rollInitiative(p.dexMod); return p})
            .sort((p1,p2) => {let result = p2.initiative - p1.initiative ;
                if(result == 0){return p2.dexMod - p1.dexMod} return result; });
    }
}

var combatants = [
    {
        "name" : 'Jez Thunder',
        "dexMod": 1,
        "hitPoints": 35
    },
    {
        "name" : 'Hench',
        "dexMod": 1,
        "hitPoints": 45
    },
    {
        "name" : 'Orc Savage',
        "dexMod": 2,
        "hitPoints": 25
    },
    {
        "name" : 'Bugbear Chief',
        "dexMod": 3,
        "hitPoints": 38
    },
    {
        "name" : 'Fat Ogre',
        "dexMod": -1,
        "hitPoints": 65
    }
]
