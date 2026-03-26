import { StarIcon, RefreshIcon } from './Icons'

const FONT = { fontFamily: "'Open Sans', sans-serif" }

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="h-[57px] w-full flex items-center justify-between shrink-0">
      <div className="flex items-center gap-[10px]">
        <button className="shrink-0 p-0 border-0 bg-transparent cursor-pointer flex items-center justify-center">
          <StarIcon className="w-[20px] h-[20px]" color="#9C9C9C" />
        </button>
        <span
          className="text-[14px] font-bold text-[#273240] leading-normal truncate max-w-[320px]"
          style={FONT}
        >
          {title}
        </span>
      </div>
      <button className="w-[32px] h-[32px] rounded-[4px] border border-[#C5C5C5] bg-white flex items-center justify-center cursor-pointer hover:bg-[#F5F5F5] transition-colors shrink-0">
        <RefreshIcon className="w-[16px] h-[16px]" color="#273240" />
      </button>
    </div>
  )
}
