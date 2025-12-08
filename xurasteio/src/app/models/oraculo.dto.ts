export interface Frase {
  id: number;
  texto: string;
  vibe: string;
}

export interface OraculoResponse {
  resultado: 'XURAGO' | 'XURASTEI';
  mensagem: string;
  vibe: string;
}