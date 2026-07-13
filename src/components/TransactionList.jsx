import { useTransactions } from '../hooks/useTransactions'
import { formatCurrency } from '../utils/formatCurrency'

export function TransactionList() {
  const { transactions, removeTransaction } = useTransactions()

  if (transactions.length === 0) {
    return <p className="text-gray-500 text-sm">Nenhuma transação cadastrada ainda.</p>
  }

  return (
    <ul className="divide-y divide-gray-700 bg-surfaceAlt rounded-xl overflow-hidden">
      {transactions.map((t) => (
        <li key={t.id} className="flex justify-between items-center px-4 py-3">
          <div>
            <p className="font-medium">{t.description}</p>
            <p className="text-xs text-gray-400">{t.category} · {t.date}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={t.type === 'income' ? 'text-income' : 'text-expense'}>
              {t.type === 'income' ? '+' : '-'} {formatCurrency(t.amount)}
            </span>
            <button
              onClick={() => removeTransaction(t.id)}
              className="text-gray-500 hover:text-red-400 text-sm"
            >
              remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
