import { useState } from 'react'
import { useTransactions } from '../hooks/useTransactions'

const CATEGORIES = ['Moradia', 'Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Outros']

export function TransactionForm() {
  const { addTransaction } = useTransactions()
  const [form, setForm] = useState({
    type: 'expense',
    description: '',
    amount: '',
    category: CATEGORIES[0],
    date: new Date().toISOString().slice(0, 10),
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.description || !form.amount) return

    addTransaction({
      ...form,
      amount: Number(form.amount),
    })

    setForm((prev) => ({ ...prev, description: '', amount: '' }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl p-4 space-y-3">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setForm((f) => ({ ...f, type: 'expense' }))}
          className={`flex-1 py-2 rounded-lg transition-colors ${form.type === 'expense' ? 'bg-expense text-white' : 'bg-background text-textSecondary'}`}
        >
          Despesa
        </button>
        <button
          type="button"
          onClick={() => setForm((f) => ({ ...f, type: 'income' }))}
          className={`flex-1 py-2 rounded-lg transition-colors ${form.type === 'income' ? 'bg-income text-white' : 'bg-background text-textSecondary'}`}
        >
          Receita
        </button>
      </div>

      <input
        type="text"
        placeholder="Descrição"
        value={form.description}
        onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
        className="w-full bg-background text-textPrimary placeholder-textSecondary rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-textSecondary"
      />

      <input
        type="number"
        placeholder="Valor"
        value={form.amount}
        onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
        className="w-full bg-background text-textPrimary placeholder-textSecondary font-mono rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-textSecondary"
      />

      {form.type === 'expense' && (
        <select
          value={form.category}
          onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
          className="w-full bg-background text-textPrimary rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-textSecondary"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      )}

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
        className="w-full bg-background text-textPrimary font-mono rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-textSecondary"
      />

      <button type="submit" className="w-full bg-textPrimary text-background hover:opacity-90 transition-opacity rounded-lg py-2 font-medium">
        Adicionar
      </button>
    </form>
  )
}
