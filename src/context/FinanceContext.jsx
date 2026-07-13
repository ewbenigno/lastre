import { createContext, useEffect, useState } from 'react'

export const FinanceContext = createContext(null)

const STORAGE_KEY = 'controle-financeiro:transactions'

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  function addTransaction(transaction) {
    setTransactions((prev) => [
      { id: crypto.randomUUID(), ...transaction },
      ...prev,
    ])
  }

  function removeTransaction(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {children}
    </FinanceContext.Provider>
  )
}
