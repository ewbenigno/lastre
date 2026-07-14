import { Summary } from './components/Summary'
import { TransactionForm } from './components/TransactionForm'
import { TransactionList } from './components/TransactionList'
import { CategoryChart } from './components/CategoryChart'

export default function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-textPrimary">Contabilize</h1>
        <p className="text-textSecondary text-sm">Acompanhe suas receitas e despesas em um só lugar</p>
      </header>

      <Summary />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransactionForm />
        <CategoryChart />
      </div>

      <TransactionList />
    </div>
  )
}
