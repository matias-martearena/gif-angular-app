import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-search-gif-form',
  templateUrl: './search-gif-form.component.html'
})
export class SearchGifFormComponent implements OnInit {
  @Output() search = new EventEmitter<string>()

  gifForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })

  ngOnInit(): void {
    this.gifForm.get('name')?.valueChanges.subscribe(value => {
      this.search.emit(value)
    })
  }

  onSearch(): void {
    this.search.emit(this.gifForm.get('name')?.value)
  }
}
