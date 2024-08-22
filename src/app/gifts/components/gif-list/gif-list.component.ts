import { Component } from '@angular/core'
import { ApiGifService } from '../../services/api-gifs.service'

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {
  gifs: any[] = []

  constructor(private apiGifService: ApiGifService) {}

  ngOnInit(): void {
    this.searchGifs('argentina')
  }

  searchGifs(query: string): void {
    if (query || query.trim()) {
      this.apiGifService.searchGifs(query).subscribe(response => {
        this.gifs = response.data
      })
    } else {
      this.gifs = []
    }
  }
}
