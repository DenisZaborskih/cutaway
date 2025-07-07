import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WorksShort } from '../../../core/interfaces/works.interface';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  http: HttpClient = inject(HttpClient);

  getWorksShort(){
    return this.http.get<WorksShort[]>('api/worksShort');
  }
}
