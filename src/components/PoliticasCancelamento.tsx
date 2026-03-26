import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from './Icons'

const FONT = { fontFamily: "'Open Sans', sans-serif" }

// Info icon (i) inline SVG
function InfoIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="#9C9C9C" strokeWidth="1" />
      <text x="8" y="12" textAnchor="middle" fontSize="10" fontWeight="600" fill="#9C9C9C" style={{ fontFamily: "'Open Sans', sans-serif" }}>i</text>
    </svg>
  )
}

// Number stepper component — integers only, typeable + arrows
function NumberStepper({ value, onChange, disabled = false }: {
  value: number
  onChange: (v: number) => void
  disabled?: boolean
}) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '')
    onChange(raw === '' ? 0 : parseInt(raw, 10))
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        inputMode="numeric"
        value={disabled ? '' : value}
        onChange={handleInput}
        disabled={disabled}
        style={{
          width: 115, height: 32,
          border: '1px solid #C5C5C5',
          borderRadius: 4,
          background: disabled ? '#E6E6E6' : '#FFFFFF',
          paddingLeft: 10, paddingRight: 32,
          textAlign: 'right' as const,
          ...FONT,
          fontSize: 11,
          color: disabled ? '#9C9C9C' : '#273240',
          outline: 'none',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: -32 }}>
        <button
          disabled={disabled}
          onClick={() => !disabled && onChange(value + 1)}
          style={{
            width: 32, height: 16,
            border: 'none', background: 'transparent',
            cursor: disabled ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: disabled ? 0.4 : 1,
          }}
        >
          <ChevronUpIcon className="w-3 h-3" color={disabled ? '#9C9C9C' : '#273240'} />
        </button>
        <button
          disabled={disabled}
          onClick={() => !disabled && value > 0 && onChange(value - 1)}
          style={{
            width: 32, height: 16,
            border: 'none', background: 'transparent',
            cursor: disabled ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: disabled ? 0.4 : 1,
          }}
        >
          <ChevronDownIcon className="w-3 h-3" color={disabled ? '#9C9C9C' : '#273240'} />
        </button>
      </div>
    </div>
  )
}

// Currency input — numbers only, auto-formats to 2 decimal places with comma, EUR/% toggle inside
function CurrencyInput({ value, onChange, disabled = false, unit, onToggleUnit }: {
  value: string
  onChange: (v: string) => void
  disabled?: boolean
  unit: 'EUR' | '%'
  onToggleUnit: () => void
}) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, '')
    if (raw === '') { onChange(''); return }
    const cents = parseInt(raw, 10)
    const formatted = (cents / 100).toFixed(2).replace('.', ',')
    onChange(formatted)
  }

  return (
    <div style={{
      width: 115, height: 32,
      border: '1px solid #C5C5C5', borderRadius: 4,
      background: disabled ? '#E6E6E6' : '#FFFFFF',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>
      <input
        type="text"
        inputMode="decimal"
        value={disabled ? '' : value}
        onChange={handleInput}
        disabled={disabled}
        placeholder={disabled ? '' : '0,00'}
        style={{
          flex: 1, height: '100%',
          border: 'none',
          padding: '0 4px 0 10px',
          fontSize: 11, color: '#273240',
          outline: 'none',
          background: 'transparent',
          textAlign: 'right' as const,
          minWidth: 0,
          ...FONT,
        }}
      />
      <button
        onClick={disabled ? undefined : onToggleUnit}
        type="button"
        disabled={disabled}
        style={{
          border: 'none', background: 'transparent',
          cursor: disabled ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', gap: 2,
          padding: '0 6px',
          height: '100%',
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 700, color: disabled ? '#9C9C9C' : '#0C83D9', ...FONT }}>{unit}</span>
        <ChevronDownIcon className="w-2 h-2" color={disabled ? '#9C9C9C' : '#0C83D9'} />
      </button>
    </div>
  )
}

interface PoliticasCancelamentoProps {
  onNomeChange?: (value: string) => void
}

export default function PoliticasCancelamento({ onNomeChange }: PoliticasCancelamentoProps) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [condicao, setCondicao] = useState<'sempre' | 'ate'>('sempre')
  const [diasAntes, setDiasAntes] = useState(7)
  const [penalidade, setPenalidade] = useState<'valor' | 'noites'>('valor')
  const [valorPenalidade, setValorPenalidade] = useState('')
  const [noitesPenalidade, setNoitesPenalidade] = useState(0)
  const [semExtranet, setSemExtranet] = useState(false)
  const [moedaUnit, setMoedaUnit] = useState<'EUR' | '%'>('EUR')

  const handleNomeChange = (value: string) => {
    setNome(value)
    onNomeChange?.(value)
  }

  // Position where input fields start (aligned)
  const INPUT_LEFT = 197

  return (
    <div style={{
      flex: 1,
      background: '#FFFFFF',
      borderRadius: 3,
      border: '1px solid #E6E6E6',
      padding: '30px 40px',
      overflow: 'auto',
    }}>
      {/* Two-column layout for top sections */}
      <div style={{ display: 'flex', gap: 80 }}>
        {/* Left column - Detalhes Principais */}
        <div style={{ flex: 1, maxWidth: 420 }}>
          <SectionTitle>Detalhes Principais</SectionTitle>
          <div style={{ borderBottom: '1px solid #F5AF04', marginBottom: 20 }} />

          <div style={{ padding: '0 10px' }}>
            {/* Nome */}
            <FieldGroup>
              <FieldLabel label="Nome" required language="Português - BR" showTranslate />
              <input
                type="text"
                value={nome}
                onChange={e => handleNomeChange(e.target.value)}
                style={{
                  width: '100%', height: 32,
                  border: '1px solid #C5C5C5', borderRadius: 4,
                  padding: '0 10px',
                  fontSize: 11, color: '#273240',
                  outline: 'none',
                  ...FONT,
                }}
              />
            </FieldGroup>

            {/* Descrição */}
            <FieldGroup>
              <FieldLabel label="Descrição" required language="Português - BR" showTranslate />
              <textarea
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                style={{
                  width: '100%', height: 92,
                  border: '1px solid #C5C5C5', borderRadius: 2,
                  padding: '8px 10px',
                  fontSize: 11, color: '#273240',
                  outline: 'none', resize: 'vertical',
                  ...FONT,
                }}
              />
            </FieldGroup>
          </div>
        </div>

        {/* Right column - Configurações Extranet */}
        <div style={{ flex: 1, maxWidth: 420 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <SectionTitle>Configurações Extranet</SectionTitle>
            <svg style={{ width: 16, height: 16, flexShrink: 0, position: 'relative', top: 3 }} viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#9C9C9C" strokeWidth="1" />
              <text x="8" y="12" textAnchor="middle" fontSize="10" fontWeight="600" fill="#9C9C9C" style={{ fontFamily: "'Open Sans', sans-serif" }}>i</text>
            </svg>
          </div>
          <div style={{ borderBottom: '1px solid #F5AF04', marginBottom: 20 }} />

          <div style={{ padding: '0 10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={semExtranet}
                onChange={e => setSemExtranet(e.target.checked)}
                style={{ width: 12, height: 12, accentColor: '#273240' }}
              />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#273240', ...FONT }}>
                Política sem possibilidade de utilização nas extranets
              </span>
              <InfoIcon className="w-4 h-4" />
            </label>
          </div>
        </div>
      </div>

      {/* Condições de Cancelamento - full width across both columns */}
      <div style={{ marginTop: 40 }}>
        <SectionTitle>Condições de Cancelamento</SectionTitle>
        <div style={{ borderBottom: '1px solid #F5AF04', marginBottom: 20 }} />

        <div style={{ padding: '0 10px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#273240', marginBottom: 15, ...FONT }}>
            Quais as condições de cancelamento para o hóspede?<span style={{ color: 'red' }}>*</span>
          </p>

          {/* Radio: Pode cancelar sempre gratuitamente */}
          <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', marginBottom: 15 }}>
            <input
              type="radio"
              name="condicao"
              checked={condicao === 'sempre'}
              onChange={() => setCondicao('sempre')}
              style={{ width: 14, height: 14, accentColor: '#273240' }}
            />
            <span style={{ fontSize: 11, color: '#273240', ...FONT }}>Pode cancelar sempre gratuitamente</span>
          </label>

          {/* Radio: Pode cancelar gratuitamente até */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 15 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', minWidth: INPUT_LEFT }}>
              <input
                type="radio"
                name="condicao"
                checked={condicao === 'ate'}
                onChange={() => setCondicao('ate')}
                style={{ width: 14, height: 14, accentColor: '#273240' }}
              />
              <span style={{ fontSize: 11, color: '#273240', ...FONT }}>Pode cancelar gratuitamente até</span>
            </label>
            <NumberStepper value={diasAntes} onChange={setDiasAntes} disabled={condicao !== 'ate'} />
            <span style={{ fontSize: 11, color: condicao !== 'ate' ? '#9C9C9C' : '#273240', ...FONT }}>dia(s) antes do check-in</span>
          </div>

          {/* Conditional sub-options - only show when "até" selected */}
          {condicao === 'ate' && (
            <div style={{ marginLeft: 19 }}>
              {/* Sub-radio: Depois dos X dias, paga valor EUR */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 15 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', minWidth: INPUT_LEFT - 19 }}>
                  <input
                    type="radio"
                    name="penalidade"
                    checked={penalidade === 'valor'}
                    onChange={() => setPenalidade('valor')}
                    style={{ width: 14, height: 14, accentColor: '#273240' }}
                  />
                  <span style={{ fontSize: 11, color: '#273240', ...FONT }}>Depois dos {diasAntes} dia(s), paga</span>
                </label>
                <CurrencyInput
                  value={valorPenalidade}
                  onChange={setValorPenalidade}
                  disabled={penalidade !== 'valor'}
                  unit={moedaUnit}
                  onToggleUnit={() => setMoedaUnit(u => u === 'EUR' ? '%' : 'EUR')}
                />
              </div>

              {/* Sub-radio: Depois dos X dias, paga noites */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', minWidth: INPUT_LEFT - 19 }}>
                  <input
                    type="radio"
                    name="penalidade"
                    checked={penalidade === 'noites'}
                    onChange={() => setPenalidade('noites')}
                    style={{ width: 14, height: 14, accentColor: '#273240' }}
                  />
                  <span style={{ fontSize: 11, color: '#273240', ...FONT }}>Depois dos {diasAntes} dia(s), paga</span>
                </label>
                <NumberStepper
                  value={noitesPenalidade}
                  onChange={setNoitesPenalidade}
                  disabled={penalidade !== 'noites'}
                />
                <span style={{ fontSize: 11, color: penalidade !== 'noites' ? '#9C9C9C' : '#273240', ...FONT }}>noite(s)</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Reusable components

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 13, fontWeight: 700, color: '#F5AF04', marginBottom: 5, ...FONT }}>
      {children}
    </p>
  )
}

function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div style={{ marginBottom: 20 }}>{children}</div>
}

function FieldLabel({ label, required, language, showTranslate }: {
  label: string
  required?: boolean
  language?: string
  showTranslate?: boolean
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
      <p style={{ fontSize: 11, fontWeight: 700, color: '#273240', ...FONT }}>
        {label}{required && <span style={{ color: 'red' }}>*</span>}
        {language && (
          <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#9C9C9C', marginLeft: 4, ...FONT }}>
            ({language})
          </span>
        )}
      </p>
      {showTranslate && (
        <span style={{ fontSize: 11, fontWeight: 700, color: '#0C83D9', cursor: 'pointer', ...FONT }}>
          Traduzir
        </span>
      )}
    </div>
  )
}
