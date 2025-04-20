'use client'
import { motion } from 'framer-motion'
import { FormData } from '../types/FormData'

interface ExtrasProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function Etapa4({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: ExtrasProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-xl font-bold text-blue-700">
        Etapa 4 de 5 • Adicionais e Aviso Prévio
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-gray-700">💣 Periculosidade</label>
          <input
            type="checkbox"
            checked={formData.periculosidade}
            onChange={(e) =>
              updateFormData({ periculosidade: e.target.checked })
            }
            className="w-5 h-5"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">📌 Tipo de aviso prévio:</label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.avisoPrevio}
            onChange={(e) => updateFormData({ avisoPrevio: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="indenizado">Indenizado</option>
            <option value="trabalhado">Trabalhado</option>
            <option value="dispensado">Dispensado</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-700">💰 FGTS foi recolhido normalmente?</label>
          <input
            type="checkbox"
            checked={formData.fgtsRecolhido}
            onChange={(e) =>
              updateFormData({ fgtsRecolhido: e.target.checked })
            }
            className="w-5 h-5"
          />
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
