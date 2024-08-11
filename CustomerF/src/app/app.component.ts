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
  data:any=[]
  ngOnInit(){
 this.a.get("http://localhost:1122/customer1").subscribe(async (datta:any)=>{
     for(let i=0;i<datta.length;i++){
     const r={name:datta[i].productname,value:datta[i].productValue}
     this.data.push(r)
    //  this.chartData = this.data.map((employee:any) => ({name: employee.productname,
    //   value: employee.productValue }))
    }})
  }
}
