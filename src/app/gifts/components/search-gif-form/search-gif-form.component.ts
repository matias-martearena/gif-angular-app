import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-search-gif-form',
  templateUrl: './search-gif-form.component.html',
  styleUrl: './search-gif-form.component.css'
})
export class SearchGifFormComponent {
  gifForm: FormGroup = new FormGroup({})

  constructor() {
    this.gifForm = new FormGroup({
      name: new FormControl('')
    })
  }

  onSearch() {
    console.log(this.gifForm.get('name')?.value)
  }
}
