export interface Frase {
  id: number;
  texto: string;
  vibe: string;
}

export interface BancoDeDados {
  xurago: Frase[];
  xurastei: Frase[];
}

export interface OraculoResponse {
  resultado: 'XURAGO' | 'XURASTEI'; 
  mensagem: string;
  vibe: string;
}