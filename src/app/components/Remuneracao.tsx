'use client'
import { motion } from 'framer-motion'

interface RemuneracaoProps {
  formData: {
    salario: number
    horasExtras: number
    adicionalNoturno: boolean
    insalubridade: boolean
  }
  updateFormData: (data: Partial<RemuneracaoProps['formData']>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function Remuneracao({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: RemuneracaoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-xl font-bold text-blue-700">Etapa 2 de 5 • Salário e Adicionais</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">💸 Salário bruto mensal:</label>
          <input
            type="number"
            className="input w-full"
            value={formData.salario || ''}
            onChange={(e) => updateFormData({ salario: parseFloat(e.target.value) || 0 })}
            placeholder="Ex: 2500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">⏱️ Média de horas extras (por mês):</label>
          <input
            type="number"
            className="input w-full"
            value={formData.horasExtras || ''}
            onChange={(e) => updateFormData({ horasExtras: parseFloat(e.target.value) || 0 })}
            placeholder="Ex: 10"
          />
        </div>

        <div className="flex items-center space-x-3">
          <label className="text-gray-700">🌙 Adicional noturno:</label>
          <input
            type="checkbox"
            checked={formData.adicionalNoturno}
            onChange={(e) => updateFormData({ adicionalNoturno: e.target.checked })}
            className="w-5 h-5"
          />
          <span className="text-gray-500">% 20</span>
        </div>

        <div className="flex items-center space-x-3">
          <label className="text-gray-700">🧪 Insalubridade:</label>
          <input
            type="checkbox"
            checked={formData.insalubridade}
            onChange={(e) => updateFormData({ insalubridade: e.target.checked })}
            className="w-5 h-5"
          />
          <span className="text-gray-500">% 0</span>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          ← Voltar
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Próxima Etapa →
        </button>
      </div>
    </motion.div>
  )
}
