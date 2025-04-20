'use client'

import { useState } from 'react'
import Apresentacao from './components/Apresentacao'
import FormWrapper from './components/StepWrapper'

export default function Home() {
  const [iniciado, setIniciado] = useState(false)

  return (
    <main className="min-h-screen bg-gray-100">
      {!iniciado ? (
        <Apresentacao onStart={() => setIniciado(true)} />
      ) : (
        <FormWrapper />
      )}
    </main>
  )
}
