import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { enviroments } from '../../../environments/environments.dev'

@Injectable({
  providedIn: 'root'
})
export class ApiGifService {
  private apiKey: string = 'W5IQyh4UHqm9Fs3xq64bWlt0oHzxqRAq'
  private apiUrl: string = enviroments.apiUrl

  constructor(private http: HttpClient) {}

  searchGifs(query: string): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${query}&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
    return this.http.get<any>(url)
  }
}
