import { useContext } from 'react'
import { FinanceContext } from '../context/FinanceContext.jsx'

export function useTransactions() {
  const context = useContext(FinanceContext)
  if (!context) {
    throw new Error('useTransactions deve ser usado dentro de um FinanceProvider')
  }
  return context
}
