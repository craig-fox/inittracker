import {Component} from 'angular2/core'
import NavbarComponent from '../navbar/navbar'
import FooterComponent from '../footer/footer'
import CombatOptionsComponent from '../combat-options/combat-options'
import CarouselComponent from '../carousel/carousel'
import CombatantGridComponent from '../combatant-grid/combatant-grid'

@Component({
    selector: 'base-layout',
    templateUrl: 'app/components/base/base-layout.html',
    styleUrls: ['app/components/base/application.css'],
    directives: [NavbarComponent, FooterComponent, CombatOptionsComponent, CarouselComponent, CombatantGridComponent]
})

export class BaseLayoutComponent {}
