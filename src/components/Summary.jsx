import { useTransactions } from '../hooks/useTransactions'
import { calculateTotals } from '../utils/calculateTotals'
import { formatCurrency } from '../utils/formatCurrency'

export function Summary() {
  const { transactions } = useTransactions()
  const { income, expense, balance } = calculateTotals(transactions)

  const cards = [
    { label: 'Saldo', value: balance, tone: balance >= 0 ? 'text-income' : 'text-expense' },
    { label: 'Receitas', value: income, tone: 'text-income' },
    { label: 'Despesas', value: expense, tone: 'text-expense' },
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="bg-surfaceAlt rounded-xl p-4">
          <p className="text-sm text-gray-400">{card.label}</p>
          <p className={`text-2xl font-semibold ${card.tone}`}>{formatCurrency(card.value)}</p>
        </div>
      ))}
    </section>
  )
}
