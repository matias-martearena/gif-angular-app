import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
})
export class AsideComponent {
    @Output() search = new EventEmitter<string>()

    onSearch(query: string): void {
        this.search.emit(query)
    }
}
