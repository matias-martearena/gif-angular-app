import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { SearchResponse } from '../interfaces/gifs.interfaces'
import { enviroments } from '../../../environments/environments.dev'

@Injectable({
    providedIn: 'root',
})
export class ApiGifService {
    private apiKey: string = 'W5IQyh4UHqm9Fs3xq64bWlt0oHzxqRAq'
    private apiUrl: string = enviroments.apiUrl

    constructor(private http: HttpClient) {}

    searchGifs(query: string): Observable<SearchResponse> {
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('q', query)
            .set('limit', '10')
            .set('offset', 0)
            .set('rating', 'g')
        return this.http.get<SearchResponse>(`${this.apiUrl}?${params}`)
    }
}
