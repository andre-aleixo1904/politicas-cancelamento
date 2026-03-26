import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PageHeader from './components/PageHeader'
import PoliticasCancelamento from './components/PoliticasCancelamento'

function App() {
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
          {/* Tabs will go here */}
        </div>

        {/* Page header + Content area */}
        <div className="px-[20px] flex flex-col flex-1">
          <PageHeader title="Políticas de Cancelamento" />
          <div className="pb-[20px] flex-1 flex flex-col">
            <PoliticasCancelamento />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
