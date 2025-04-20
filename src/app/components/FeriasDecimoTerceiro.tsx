"use client";
import { motion } from "framer-motion";
import { FormData as ImportedFormData } from "../types/FormData";

interface FeriasDecimoProps {
  formData: ImportedFormData;
  updateFormData: (data: Partial<ImportedFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Etapa3({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: FeriasDecimoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-xl font-bold text-blue-700">Etapa 3 de 5 • Férias e 13º Salário</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-gray-700">🌴 Férias vencidas?</label>
          <input
            type="checkbox"
            checked={formData.feriasVencidas}
            onChange={(e) => updateFormData({ feriasVencidas: e.target.checked })}
            className="w-5 h-5"
          />
        </div>

        {formData.feriasVencidas && (
          <div>
            <label className="block text-gray-700 mb-1">Períodos vencidos:</label>
            <input
              type="number"
              className="input w-full"
              value={formData.periodosVencidos || ""}
              onChange={(e) =>
                updateFormData({ periodosVencidos: parseInt(e.target.value) || 0 })
              }
              placeholder="Ex: 1"
            />
          </div>
        )}

        <div>
          <label className="block text-gray-700 mb-1">
            📅 Férias proporcionais (em meses):
          </label>
          <input
            type="number"
            className="input w-full"
            value={formData.feriasProporcionais || ""}
            onChange={(e) =>
              updateFormData({ feriasProporcionais: parseInt(e.target.value) || 0 })
            }
            placeholder="Ex: 4"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">
            🎄 13º proporcional (em meses):
          </label>
          <input
            type="number"
            className="input w-full"
            value={formData.decimoTerceiro || ""}
            onChange={(e) =>
              updateFormData({ decimoTerceiro: parseInt(e.target.value) || 0 })
            }
            placeholder="Ex: 4"
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
  );
}
