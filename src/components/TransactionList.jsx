import { useTransactions } from '../hooks/useTransactions'
import { formatCurrency } from '../utils/formatCurrency'

export function TransactionList() {
  const { transactions, removeTransaction } = useTransactions()

  if (transactions.length === 0) {
    return <p className="text-textSecondary text-sm">Nenhuma transação cadastrada ainda.</p>
  }

  return (
    <ul className="divide-y divide-white/10 bg-card rounded-xl overflow-hidden">
      {transactions.map((t) => (
        <li key={t.id} className="flex justify-between items-center px-4 py-3">
          <div>
            <p className="font-medium text-textPrimary">{t.description}</p>
            <p className="text-xs text-textSecondary font-mono">{t.category} · {t.date}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`font-mono ${t.type === 'income' ? 'text-income' : 'text-expense'}`}>
              {t.type === 'income' ? '+' : '-'} {formatCurrency(t.amount)}
            </span>
            <button
              onClick={() => removeTransaction(t.id)}
              className="text-textSecondary hover:text-expense text-sm transition-colors"
            >
              remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
