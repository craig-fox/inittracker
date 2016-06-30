import {Component} from 'angular2/core'
import NavbarComponent from '../navbar/navbar'
import FooterComponent from '../footer/footer'
import CombatOptionsComponent from '../combat-options/combat-options'
import CarouselComponent from '../carousel/carousel'
import CombatantComponent from '../combatant/combatant'
import {Combatant, CombatService} from '../../services/CombatService'

@Component({
    selector: 'base-layout',
    templateUrl: 'app/components/base/base-layout.html',
    directives: [NavbarComponent, FooterComponent, CombatOptionsComponent, CarouselComponent, CombatantComponent],
    providers: [CombatService]
})

export class BaseLayoutComponent {
    combatants: Array<Combatant> = [];

    constructor(private combatService: CombatService){
        this.combatants = this.combatService.getCombatants();
    }

}
