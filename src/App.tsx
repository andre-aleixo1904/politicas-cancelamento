import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { StarIcon, RefreshIcon } from './components/Icons'
import PoliticasCancelamento from './components/PoliticasCancelamento'

const FONT = { fontFamily: "'Open Sans', sans-serif" }

function App() {
  const [nome, setNome] = useState('')

  return (
    <div className="min-h-screen w-screen grid grid-cols-[255px_1fr] grid-rows-[57px_1fr]">
      {/* Header - full width */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="bg-[#FCFCFC] overflow-y-auto flex flex-col">
        {/* Navigation tabs */}
        <div className="h-[40px] bg-white border-b border-[#E6E6E6] flex items-center px-[20px] shrink-0">
          {/* Tab */}
          <div style={{
            height: 41,
            width: 200,
            background: '#FCFCFC',
            borderLeft: '1px solid #E6E6E6',
            borderRight: '1px solid #E6E6E6',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 10px',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 3, background: '#FEC437',
            }} />
            <span style={{ fontSize: 9, color: '#9C9C9C', ...FONT }}>Gestão de Propriedade</span>
            <span style={{ fontSize: 12, color: '#273240', ...FONT }}>Políticas de Cancelamento</span>
          </div>
        </div>

        {/* Page header + Content area */}
        <div className="px-[20px] flex flex-col flex-1">
          {/* Page header with dynamic title and action buttons */}
          <div style={{ height: 57, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button style={{ padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex' }}>
                <StarIcon className="w-[20px] h-[20px]" color="#9C9C9C" />
              </button>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#273240', ...FONT }}>
                {nome.trim() || 'Nova Política de Cancelamento'}
              </span>

              {/* Separator */}
              <div style={{ width: 1, height: 12, background: '#E6E6E6' }} />

              {/* Save button */}
              <button style={{
                height: 32,
                padding: '0 10px',
                background: '#4BAF4F',
                border: 'none',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                color: 'white',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.667 14H3.333A1.333 1.333 0 012 12.667V3.333A1.333 1.333 0 013.333 2h7.334L14 5.333v7.334A1.333 1.333 0 0112.667 14z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.333 14V9.333H4.667V14" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.667 2v3.333h5.333" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 600, ...FONT }}>Salvar</span>
              </button>

              {/* Cancel button */}
              <button style={{
                height: 32,
                padding: '0 10px',
                background: '#FFFFFF',
                border: '1px solid #C5C5C5',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4l8 8" stroke="#273240" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#273240', ...FONT }}>Cancelar</span>
              </button>
            </div>

            {/* Refresh button */}
            <button style={{
              width: 32, height: 32, borderRadius: 4,
              border: '1px solid #C5C5C5', background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <RefreshIcon className="w-[16px] h-[16px]" color="#273240" />
            </button>
          </div>

          {/* Content */}
          <div style={{ paddingBottom: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <PoliticasCancelamento onNomeChange={setNome} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
