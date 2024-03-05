import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ReciepeService {

  
  private baseUrl='http://localhost:5454'


  constructor(private http:HttpClient) { }

  reciepeSubject=new BehaviorSubject<any>({
    reciepes:[],
    loading:false,
    newReciepe:null
  })
 private getHeaders():HttpHeaders{
  const token=localStorage.getItem("jwt")
  return new HttpHeaders({
    Authorization:`Bearer ${localStorage.getItem("jwt")}`
  })
 }

 getReciepes():Observable<any>{
  const headers=this.getHeaders();
  return this.http.get(`${this.baseUrl}/api/reciepe`,{headers}).pipe(
    tap((reciepes)=>{
      const currentState=this.reciepeSubject.value;
      this.reciepeSubject.next({...currentState,reciepes});
    })
  )
 }

 createReciepes(reciepe:any):Observable<any>{
  const headers=this.getHeaders();
  return this.http.post(`${this.baseUrl}/api/reciepe`,reciepe,{headers}).pipe(
    tap((newReciepe)=>{
      const currentState=this.reciepeSubject.value;
      this.reciepeSubject.next({...currentState,reciepes:[newReciepe,...currentState.reciepes]});
    })
  )
 }
updateReciepes(reciepe:any):Observable<any>{
  const headers=this.getHeaders();
  return this.http.put(`${this.baseUrl}/api/reciepe/${reciepe.id}`,reciepe,{headers}).pipe(
    tap((updatedReciepe:any)=>{
      const currentState=this.reciepeSubject.value;
      const updatedReciepes=currentState.reciepes.map((item:any)=>item.id===updatedReciepe.id?updatedReciepe:item)
      this.reciepeSubject.next({...currentState,reciepes:updatedReciepes});
    })
  )
 }
 deleteReciepes(id:any):Observable<any>{
  const headers=this.getHeaders();
  return this.http.delete(`${this.baseUrl}/api/reciepe/${id}`,{headers}).pipe(
    tap((deletedReciepe:any)=>{
      const currentState=this.reciepeSubject.value;
      const deletedReciepes=currentState.reciepes.filter((item:any)=>item.id !==id)
      this.reciepeSubject.next({...currentState,reciepes:deletedReciepes});
    })
  )
 }
 likeReciepes(id:any):Observable<any>{
  const headers=this.getHeaders();
  return this.http.delete(`${this.baseUrl}/api/reciepe/${id}/like`,{headers}).pipe(
    tap((likedReciepe:any)=>{
      const currentState=this.reciepeSubject.value;
      const likedReciepes=currentState.reciepes.filter((item:any)=>item.id !==id)
      this.reciepeSubject.next({...currentState,reciepes:likedReciepes});
    })
  )
 }
}
