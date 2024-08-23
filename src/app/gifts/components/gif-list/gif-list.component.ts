// gif-list.component.ts
import { Component, Input } from '@angular/core'
import { ApiGifService } from '../../services/api-gifs.service'

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html'
})
export class GifListComponent {
  gifs: any[] = []

  @Input() set searchTerm(query: string) {
    this.searchGifs(query)
  }

  constructor(private apiGifService: ApiGifService) {}

  searchGifs(query: string): void {
    if (query.length === 0) {
      query = 'Messi'
    }
    if (query || query.trim()) {
      this.apiGifService.searchGifs(query).subscribe(response => {
        this.gifs = response.data
      })
    } else {
      this.gifs = []
    }
  }
}
