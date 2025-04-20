export interface FormData {
  admissao: string
  demissao: string
  tipo: string
  salario: number
  horasExtras: number
  adicionalNoturno: boolean
  insalubridade: boolean
  periculosidade: boolean
  feriasVencidas: boolean
  periodosVencidos?: number
  feriasProporcionais: number
  decimoTerceiro: number
  avisoPrevio: 'indenizado' | 'trabalhado'
  fgtsRecolhido: boolean
  jornada: number
  beneficios: number
}
