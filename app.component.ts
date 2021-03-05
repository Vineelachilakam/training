import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template:`
      <form (submit)="formSubmitHandler(myForm, $event)" action="#" #myForm="ngForm" name="myForm" novalidate>
            <table>
                <tbody>
                    <tr>
                        <td> <input #list="ngModel" required [(ngModel)]="thingtodo"  name="thingtodo"></td>
                    </tr>
                    <tr>
                        <td> <button type="submit" >Add to List</button> </td>
                    </tr>
                </tbody>
            </table>
        </form>
        
        <ol>
        <li  *ngFor="let i of k">
        <input  type="checkbox" ><span>{{i}}</span>
        <button (click)="deleteThing(i)">Delete</button>
        </li>
        </ol>
  `,
  styles:[`
  input[type="checkbox"]:checked+span{
    text-decoration:line-through;
  }
  `]
})
export class AppComponent {
  isChecked=0;
  thingtodo='';
  k=[]
  title = 'to-do-list';
  formSubmitHandler(userform:NgForm, evt){
    this.thingtodo=userform.form.controls.thingtodo.value;
    this.k.push(this.thingtodo);
    this.thingtodo='';
  }
  deleteThing(i){
  const index: number = this.k.indexOf(i);
  this.k.splice(index, 1);
  }
}
