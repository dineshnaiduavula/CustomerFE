import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { async } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,NgxChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public a:HttpClient){}
  data1:any=[]
  data2:any=[]
  data3:any=[]
  ngOnInit(){
 this.a.get("http://localhost:1122/customer1").subscribe(async (datta:any)=>{

     for(let i=0;i<datta.length;i++){
      let to=0
     const r={name:datta[i].productname,value:datta[i].productValue}
     if(this.data1.length==0){ to=1
      this.data1.push(r)}
else{
  for(let k=0;k<this.data1.length;k++){
    if(this.data1[k].name==r.name){
       to=1;
       r.value=r.value+this.data1[k].value
       this.data1[k]=r
       break}}}
     if(to==0){this.data1.push(r)}

    //  this.chartData = this.data.map((employee:any) => ({name: employee.productname,
    //   value: employee.productValue }))
    }})
    this.a.get("http://localhost:1122/customer2").subscribe(async (datta:any)=>{
      for(let i=0;i<datta.length;i++){
        let to=0
      const r={name:datta[i].productname,value:datta[i].productValue}
      if(this.data2.length==0){to=1
        this.data2.push(r)}
      else{
        for(let k=0;k<this.data2.length;k++){
          if(this.data2[k].name==r.name){
             to=1;
             r.value=r.value+this.data2[k].value
             this.data2[k]=r
             break}}}
           if(to==0){this.data2.push(r)}
    }})
      this.a.get("http://localhost:1122/customer3").subscribe(async (datta:any)=>{
        for(let i=0;i<datta.length;i++){
        const r={name:datta[i].productname,value:datta[i].productValue}
        let to=0
        if(this.data3.length==0){to=1
          this.data3.push(r)}
        else{
          for(let k=0;k<this.data3.length;k++){
            if(this.data3[k].name==r.name){
               to=1;
               r.value=r.value+this.data3[k].value
               this.data3[k]=r
               break}}}
             if(to==0){this.data3.push(r)}
      }})
  }
}
