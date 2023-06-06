import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-verify-cpf',
  templateUrl: './verify-cpf.component.html',
  styleUrls: ['./verify-cpf.component.css']
})
export class VerifyCpfComponent {
  protected inputText = "";
  protected isvalid = "";
  protected cpfFocusout(temp = 10, idx = 2){
    if (this.inputText != "" && this.inputText.length !== 11 )
    {
      this.isvalid = "invalido";
      return;
    }
    var result = 0, lstDig, scdDig, digit;
    
    for (let index = 0; index < this.inputText.length - idx; index++) {
      const element = this.inputText[index];
      result += Number(element) * temp--
    }
    digit = result/11 < 2 ? 0 : ((result/11) - (result%11))
    if(lstDig)
      scdDig = digit;
    else
      lstDig = digit;
    
    Number(this.inputText)
    this.cpfFocusout(11, 1)
    if (scdDig != null)
      return

    this.isvalid = "valido";

  }
  // protected verifyValue(event : any){
  //   this.inputText = event.target.value;
  //   this.cpfFocusout(10)
  // }
}
