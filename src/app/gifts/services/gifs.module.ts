import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'
import { MainPageComponent } from '../pages/main-page/main-page.component'
import { SearchGifFormComponent } from '../components/search-gif-form/search-gif-form.component'
import { AsideComponentComponent } from '../components/aside-component/aside-component.component'

@NgModule({
  declarations: [MainPageComponent, SearchGifFormComponent, AsideComponentComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroup, FormControl],
  exports: [MainPageComponent]
})
export class GifsModule {}
