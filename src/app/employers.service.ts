import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployersService {
  lister = []
  constructor() { }

  fetchMyList(){
    return this.lister;
  }
}
