import { Component } from '@angular/core'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  searchTerm: string = ''

  onSearchTermChange(query: string) {
    this.searchTerm = query
  }
}
