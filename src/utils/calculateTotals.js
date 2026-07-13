export function calculateTotals(transactions) {
  return transactions.reduce(
    (acc, t) => {
      if (t.type === 'income') {
        acc.income += t.amount
      } else {
        acc.expense += t.amount
      }
      acc.balance = acc.income - acc.expense
      return acc
    },
    { income: 0, expense: 0, balance: 0 },
  )
}

export function groupByCategory(transactions) {
  const groups = {}
  for (const t of transactions) {
    if (t.type !== 'expense') continue
    groups[t.category] = (groups[t.category] || 0) + t.amount
  }
  return Object.entries(groups).map(([category, value]) => ({ category, value }))
}
