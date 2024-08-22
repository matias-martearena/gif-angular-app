import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MainPageComponent } from '../pages/main-page/main-page.component'
import { SearchGifFormComponent } from '../components/search-gif-form/search-gif-form.component'
import { AsideComponentComponent } from '../components/aside-component/aside-component.component'
import { GifListComponent } from '../components/gif-list/gif-list.component'

@NgModule({
  declarations: [MainPageComponent, SearchGifFormComponent, AsideComponentComponent, GifListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MainPageComponent]
})
export class GifsModule {}
