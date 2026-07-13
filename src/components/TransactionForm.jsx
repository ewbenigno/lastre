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
    <form onSubmit={handleSubmit} className="bg-surfaceAlt rounded-xl p-4 space-y-3">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setForm((f) => ({ ...f, type: 'expense' }))}
          className={`flex-1 py-2 rounded-lg ${form.type === 'expense' ? 'bg-expense text-white' : 'bg-gray-700'}`}
        >
          Despesa
        </button>
        <button
          type="button"
          onClick={() => setForm((f) => ({ ...f, type: 'income' }))}
          className={`flex-1 py-2 rounded-lg ${form.type === 'income' ? 'bg-income text-white' : 'bg-gray-700'}`}
        >
          Receita
        </button>
      </div>

      <input
        type="text"
        placeholder="Descrição"
        value={form.description}
        onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
        className="w-full bg-gray-800 rounded-lg px-3 py-2"
      />

      <input
        type="number"
        placeholder="Valor"
        value={form.amount}
        onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
        className="w-full bg-gray-800 rounded-lg px-3 py-2"
      />

      {form.type === 'expense' && (
        <select
          value={form.category}
          onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
          className="w-full bg-gray-800 rounded-lg px-3 py-2"
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
        className="w-full bg-gray-800 rounded-lg px-3 py-2"
      />

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 rounded-lg py-2 font-medium">
        Adicionar
      </button>
    </form>
  )
}
