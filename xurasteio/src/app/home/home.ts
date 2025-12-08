import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   
import { OraculoService } from '../services/oraculo';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  perguntaUsuario: string = '';
  resultado: any = null; 
  carregando: boolean = false;
  
  constructor(
    private oraculoService: OraculoService,
    private cdr: ChangeDetectorRef
  
  ) {}

  descobrirDestino() {

  if (!this.perguntaUsuario.trim()) {
    alert('Digita alguma coisa aí!');
    return;
  }

  this.carregando = true;

  this.oraculoService.consultarDestino(this.perguntaUsuario).subscribe({
    next: (res) => {
      this.resultado = res;
      this.carregando = false;
      this.cdr.detectChanges();
    },
    error: (erro) => {      
      this.carregando = false;
      this.cdr.detectChanges();
    }
  });
  } 
}