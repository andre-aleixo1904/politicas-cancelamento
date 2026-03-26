import {
  StarIcon,
  ChevronDownIcon,
  MultiPropertyIcon,
  BuildingIcon,
  ReservasIcon,
  TarifarioIcon,
  CadastroIcon,
} from './Icons'

function SidebarItem({ icon, label, hasChevron, isSubItem }: {
  icon?: React.ReactNode
  label: string
  hasChevron?: boolean
  isSubItem?: boolean
}) {
  const bg = isSubItem ? 'bg-white' : 'bg-[#F5F5F5]'
  return (
    <div className={`relative h-[40px] w-full flex items-center ${bg} cursor-pointer`}>
      {icon && !isSubItem && (
        <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">{icon}</div>
      )}
      {isSubItem && <div className="w-[50px] shrink-0" />}
      <span className="text-[12px] font-semibold text-[#273240] whitespace-nowrap" style={{ fontFamily: "'Open Sans', sans-serif" }}>{label}</span>
      {hasChevron && (
        <div className="absolute right-[15px] top-1/2 -translate-y-1/2">
          <ChevronDownIcon className="w-4 h-4" color="#9C9C9C" />
        </div>
      )}
    </div>
  )
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div>
      <div className="mx-[10px] h-px bg-[#E6E6E6]" />
      <div className="h-[40px] w-full bg-[#F5F5F5] flex items-center px-[12px]">
        <span className="text-[11px] font-bold text-[#9C9C9C] uppercase leading-normal" style={{ fontFamily: "'Open Sans', sans-serif" }}>{label}</span>
      </div>
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-[255px] bg-[#F5F5F5] border-r border-[#E6E6E6] overflow-y-auto">
      <div className="h-[5px]" />
      <SidebarItem icon={<StarIcon className="w-4 h-4" color="#273240" />} label="Meus Favoritos" hasChevron />

      <SectionHeader label="propriedades" />
      <SidebarItem icon={<MultiPropertyIcon className="w-4 h-4" />} label="Multi-Property" hasChevron />
      <SidebarItem icon={<BuildingIcon className="w-4 h-4" />} label="Gestão de Propriedade" hasChevron />

      <SectionHeader label="gestão" />
      <SidebarItem icon={<ReservasIcon className="w-4 h-4" />} label="Gestão de Reservas" hasChevron />

      {/* Tarifários e Disponibilidade (expanded) */}
      <div className="h-[40px] w-full flex items-center bg-white cursor-pointer relative">
        <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
          <TarifarioIcon className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-[5px]">
          <span className="text-[12px] font-semibold text-[#273240] whitespace-nowrap" style={{ fontFamily: "'Open Sans', sans-serif" }}>Tarifários e Disponibilidade</span>
          <div className="w-[15px] h-[15px] rounded-full bg-[#FF0000] flex items-center justify-center">
            <span className="text-white text-[10px] font-normal leading-none">1</span>
          </div>
          <div className="rotate-180">
            <ChevronDownIcon className="w-4 h-4" color="#273240" />
          </div>
        </div>
      </div>

      <SidebarItem isSubItem label="Tarifários" />
      <SidebarItem isSubItem label="Calendário 360" />
      <SidebarItem isSubItem label="Preços e Disponibilidade" />
      <SidebarItem isSubItem label="Fechar/Abrir Vendas" />
      <SidebarItem isSubItem label="Calendários de Preços" />
      <SidebarItem isSubItem label="Inventário" />
      <SidebarItem isSubItem label="Ofertas" />
      <SidebarItem isSubItem label="Alertas de Disponibilidade" />
      <SidebarItem isSubItem label="Histórico de Alterações" />

      {/* Active item - Políticas de Cancelamento */}
      <div className="relative h-[40px] w-full flex items-center bg-[#FEC437] cursor-pointer">
        <div className="w-[50px] shrink-0" />
        <div className="flex items-center gap-[5px]">
          <span className="text-[12px] font-semibold text-white whitespace-nowrap" style={{ fontFamily: "'Open Sans', sans-serif" }}>Políticas de Cancelamento</span>
          <div className="bg-[#4BAF4F] rounded-full h-[15px] px-[5px] flex items-center">
            <span className="text-white text-[10px] font-normal leading-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>Novo</span>
          </div>
        </div>
      </div>

      <SidebarItem icon={<CadastroIcon className="w-4 h-4" />} label="Cadastro de Perfis" hasChevron />
    </aside>
  )
}
