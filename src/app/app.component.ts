import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor (private dialog: MatDialog) {}

  grupoForm: FormGroup = new FormGroup({
  
  name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  sobrenome: new FormControl('', [Validators.required, Validators.minLength(2)]),
  cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
  telefone: new FormControl('', [Validators.required, Validators.minLength(11)]),
  endereco:  new FormControl('', [Validators.required, Validators.minLength(13)]),
  complemento: new FormControl('', [Validators.required, Validators.minLength(8)]),
  usuario: new FormControl('', [Validators.required, Validators.minLength(8)]),
  senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  senhaconfirmada: new FormControl('',[Validators.required, Validators.minLength(6)]),
})
   submit(): void{
   console.log(`Name= ${this.grupoForm.controls['name'].value}`)
   console.log(`Sobrenome= ${this.grupoForm.controls['sobrenome'].value}`)
   console.log(`Cpf= ${this.grupoForm.controls['cpf'].value}`)
   console.log(`Telefone= ${this.grupoForm.controls['telefone'].value}`)
   console.log(`Endereco= ${this.grupoForm.controls['endereco'].value}`)
   console.log(`Complemento= ${this.grupoForm.controls['complemento'].value}`)
   console.log(`Usuario= ${this.grupoForm.controls['usuario'].value}`)
   console.log(`Senha= ${this.grupoForm.controls['senha'].value}`)
   console.log(`SenhaConfirmada= ${this.grupoForm.controls['senhaconfirmada'].value}`)

    if(this.grupoForm.controls['senha'].value !=
      this.grupoForm.controls['senhaconfirmada'].value) {
    alert("As senhas estão diferentes. Tente de novo!");
     return;
      }

      let ref = this.dialog.open(DialogComponent)

      ref.componentInstance.name = this.grupoForm.controls['name'].value
      ref.componentInstance.sobrenome = this.grupoForm.controls['sobrenome'].value
      ref.componentInstance.cpf = this.grupoForm.controls['cpf'].value
      ref.componentInstance.telefone = this.grupoForm.controls['telefone'].value
      ref.componentInstance.endereco = this.grupoForm.controls['endereco'].value
      ref.componentInstance.complemento = this.grupoForm.controls['complemento'].value
      ref.componentInstance.usuario = this.grupoForm.controls['usuario'].value
    }
 }