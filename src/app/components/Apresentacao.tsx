'use client'
import Image from 'next/image'

export default function Apresentacao({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#eaf2ff] to-white p-4">
      <div className="bg-white rounded-[32px] shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full">
        <Image
          src="/mascote.svg"
          alt="Mascote CLT"
          width={180}
          height={180}
          priority
          className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-contain"
        />

        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="bg-[#eaf2ff] p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Cálculo de <br /> Verbas Rescisórias
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md">
            Simule rapidamente quanto você (ou seu cliente) tem direito a
            receber em uma rescisão de contrato de trabalho.
          </p>
          <button
            onClick={onStart}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Começar Simulação →
          </button>
        </div>
      </div>
    </div>
  )
}
