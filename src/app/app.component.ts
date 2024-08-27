import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { GifsModule } from './gifts/services/gifs.module'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, GifsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
