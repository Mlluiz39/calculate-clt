import { FormData } from '../types/FormData'

interface ContratoProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  onNext?: () => void
}

export default function Contrato({
  formData,
  updateFormData,
  nextStep,
}: ContratoProps) {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-xl font-bold text-blue-700">
        Etapa 1 de 5 • Contrato
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">
            📆 Data de admissão:
          </label>
          <input
            type="date"
            value={formData.admissao || ''}
            onChange={e => updateFormData({ admissao: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">
            📆 Data de demissão:
          </label>
          <input
            type="date"
            value={formData.demissao || ''}
            onChange={e => updateFormData({ demissao: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">
            📄 Tipo de contrato:
          </label>
          <select
            value={formData.tipo || ''}
            onChange={e => updateFormData({ tipo: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Selecione</option>
            <option value="clt">CLT</option>
            <option value="pj">PJ</option>
          </select>
        </div>
      </div>

      <div className="pt-6 flex justify-end">
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Próxima Etapa →
        </button>
      </div>
    </div>
  )
}
