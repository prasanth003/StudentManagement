import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  //url = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(name, reg, mark, dob, dep) {
    const obj = {
      name : name,
      reg : reg,
      mark : mark,
      dob : dob,
      dep : dep
    };
    this.http.post('http://localhost:4000/adunits/add', obj).subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this.http.get('http://localhost:4000/adunits');
  }

  editAdUnit(id) {
    return this.http.get('http://localhost:4000/adunits/edit/'+id);
  }
  updateAdUnit(name, reg, id) {
    const obj = {
      name : name,
      reg : reg
    };
  this.http.post('http://localhost:4000/adunits/update/'+id, obj).subscribe(
  res => console.log('Done');
  );

  }
  deleteAdUnit(id) {
    return this.http.get('http://localhost:4000/adunits/delete/'+id);
  }

}
