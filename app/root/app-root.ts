import {Component} from 'angular2/core'
import {BaseLayoutComponent} from '../components/base/base-layout'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

@Component({
    selector: 'app-root',
    templateUrl: 'app/root/app-root.html',
    directives: [ROUTER_DIRECTIVES, BaseLayoutComponent]
})

@RouteConfig(
    [
        {path: '/', component:BaseLayoutComponent, as: 'Base'}
    ]
) 

export default class RootComponent {}
