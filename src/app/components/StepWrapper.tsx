'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { FormData } from '../types/FormData'
import { initialFormData } from '../types/constants'

import Contrato from './Contrato'
import Remuneracao from './Remuneracao'
import FeriasDecimoTerceiro from './FeriasDecimoTerceiro'
import Extras from './Extras'

const ResultadoFinal = dynamic(() => import('./ResultadoFinal'), {
  ssr: false, // ou loading: () => <div>Carregando...</div>
})

export default function FormWrapper() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const reset = () => {
    setStep(1)
    setFormData(initialFormData)
  }

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  const isEtapaCard = step >= 1 && step <= 4

  const content = (() => {
    switch (step) {
      case 1:
        return (
          <Contrato
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            onNext={nextStep}
          />
        )
      case 2:
        return (
          <Remuneracao
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 3:
        return (
          <FeriasDecimoTerceiro
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 4:
        return (
          <Extras
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 5:
        return (
          <ResultadoFinal
            formData={formData}
            prevStep={prevStep}
            reset={reset}
          />
        )
      default:
        return null
    }
  })()

  return (
    <div
      className={
        isEtapaCard ? 'min-h-screen flex items-center justify-center p-4' : ''
      }
    >
      {content}
    </div>
  )
}
