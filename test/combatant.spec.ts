import {beforeEach, describe, expect} from 'angular2/testing';
import CombatantComponent from '../app/components/combatant/combatant'

describe('CombatantComponent Tests', () => {
    let combatantComponent: Object;

    beforeEach( () => {
        combatantComponent = new CombatantComponent();
    });

    it('The combatant component should have a valid constructor', () => {
        expect(combatantComponent).toBeAnInstanceOf(CombatantComponent);
    });
    
});