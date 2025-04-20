import { FormData } from '../types/FormData'

const initialFormData: FormData = {
  admissao: '',
  demissao: '',
  tipo: '',
  salario: 0,
  horasExtras: 0,
  adicionalNoturno: false,
  insalubridade: false,
  periculosidade: false,
  feriasVencidas: false,
  periodosVencidos: 0,
  feriasProporcionais: 0,
  decimoTerceiro: 0,
  avisoPrevio: 'indenizado',
  fgtsRecolhido: false,
  jornada: 0,
  beneficios: 0,
}

export { initialFormData }
