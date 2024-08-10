import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-entry',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './data-entry.component.html',
  styleUrl: './data-entry.component.css'
})
export class DataEntryComponent {
  constructor(public a:HttpClient){}
  selectedCustomer:String=""
  selectedProduct:String=""
  selectedProductValue:number=1
  submit(){
    if(this.selectedCustomer==="customer1"){
      const data={productname:this.selectedProduct,productValue:this.selectedProductValue}
      this.a.post("http://localhost:1122/customer1",data).subscribe(()=>{
        console.log("successfully posted data",data)},
        (error)=>{console.log("error")}
      )}
    else if(this.selectedCustomer==="customer2") {
      const data={"productname":this.selectedProduct,"productValue":this.selectedProductValue}
    this.a.post("http://localhost:1122/customer2",data).subscribe(()=>{
      console.log("successfully posted data",data)},
      (error)=>{console.log("error")}
    )}
    else{
      const data={"productname":this.selectedProduct,"productValue":this.selectedProductValue}
      this.a.post("http://localhost:1122/customer3",data).subscribe(()=>{
        console.log("successfully posted data",data)},
        (error)=>{console.log("error")})}
  }
}
