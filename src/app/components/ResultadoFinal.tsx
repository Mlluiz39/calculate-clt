'use client'
import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { PieChart, Pie, Cell } from 'recharts'
import { motion } from 'framer-motion'

const COLORS = ['#0B3D91', '#2F80ED', '#56CCF2', '#BB6BD9']

interface Props {
  formData: {
    salario: number
    avisoPrevio: 'indenizado' | 'trabalhado'
    feriasProporcionais: number
    decimoTerceiro: number
    fgtsRecolhido: boolean
  }
  prevStep: () => void
  reset: () => void
}

export default function Etapa5({ formData, prevStep, reset }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    confetti({ particleCount: 150, spread: 70 })
  }, [])

  // Simulação simples do cálculo
  const salario = formData.salario || 0
  const aviso = formData.avisoPrevio === 'indenizado' ? salario : 0
  const ferias = (formData.feriasProporcionais || 0) * (salario / 12)
  const decimo = (formData.decimoTerceiro || 0) * (salario / 12)
  const fgts = formData.fgtsRecolhido ? salario * 0.4 : 0

  const total = aviso + ferias + decimo + fgts

  const chartData = [
    { name: 'Aviso Prévio', value: aviso },
    { name: 'Férias Proporcionais', value: ferias },
    { name: '13º Proporcional', value: decimo },
    { name: 'Multa FGTS', value: fgts },
  ]

  const exportarPDF = async () => {
    if (!ref.current) return

    // Corrigir possíveis cores "oklch"
    const fixColors = (element: HTMLElement) => {
      const allElements = element.querySelectorAll<HTMLElement>('*')
      allElements.forEach(el => {
        const computed = getComputedStyle(el)
        if (computed.color.includes('oklch')) el.style.color = '#000'
        if (computed.backgroundColor.includes('oklch'))
          el.style.backgroundColor = '#fff'
      })
    }

    fixColors(ref.current)

    // Elementos que não queremos no PDF
    const idsParaOcultar = ['resultado', 'voltar', 'botoes']
    const elementosRemovidos: {
      el: HTMLElement
      parent: Node
      next: Node | null
    }[] = []

    idsParaOcultar.forEach(id => {
      const el = ref.current?.querySelector(`#${id}`)
      if (el && el.parentNode) {
        elementosRemovidos.push({
          el: el as HTMLElement,
          parent: el.parentNode,
          next: el.nextSibling,
        })
        el.parentNode.removeChild(el)
      }
    })

    await new Promise(resolve => setTimeout(resolve, 100)) // Garantir render

    const canvas = await html2canvas(ref.current, {
      backgroundColor: '#ffffff',
      scale: 2,
    })

    // Restaurar elementos no mesmo lugar
    elementosRemovidos.forEach(({ el, parent, next }) => {
      if (next) {
        parent.insertBefore(el, next)
      } else {
        parent.appendChild(el)
      }
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()
    pdf.addImage(imgData, 'PNG', 10, 10, 190, 0)
    pdf.save('resultado-calculo-trabalhista.pdf')
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow space-y-6 text-center"
    >
      <h2 id='resultado' className="text-2xl font-bold text-green-600">
        Etapa 5 de 5 • Resultado do Cálculo
      </h2>

      <div className="text-left space-y-2">
        <p>
          ✅ <strong>Saldo de salário:</strong> R$ {salario.toFixed(2)}
        </p>
        <p>
          ✅ <strong>Férias proporcionais:</strong> R$ {ferias.toFixed(2)}
        </p>
        <p>
          ✅ <strong>13º proporcional:</strong> R$ {decimo.toFixed(2)}
        </p>
        <p>
          ✅ <strong>Multa FGTS:</strong> R$ {fgts.toFixed(2)}
        </p>
      </div>

      <h3 className="text-3xl font-extrabold text-blue-800">
        💰 Total a Receber: R$ {total.toFixed(2)}
      </h3>

      <PieChart width={300} height={220}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
          dataKey="value"
        >
          {chartData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div id="botoes" className="flex justify-center flex-wrap gap-4 pt-4">
        <button
          onClick={exportarPDF}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          📎 Baixar PDF
        </button>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🔁 Refazer cálculo
        </button>
      </div>

      <button
        id="voltar"
        onClick={prevStep}
        className="text-sm text-gray-500 mt-4 hover:underline"
      >
        ← Voltar à etapa anterior
      </button>
    </motion.div>
  )
}
