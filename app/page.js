import { getExpenses } from "@/lib/expenses"
import { formatMoney, sum } from "@/lib/helpers"
import Link from "next/link"

export default async function HomePage() {
  const expenses = await getExpenses()

  return (
    <main>
      <div className="page-header">
        <h1>Expenses</h1>
        <Link href="/expenses/new" className="button">+ Add expense</Link>
      </div> 
      <section className="card">
        <div className="list-header">
          <h2>All Expenses</h2>
          <p className="total">{formatMoney(sum(expenses))}</p>
        </div>
        <ul className="expenses-list">
          {expenses.map((expenses) => (
            <li key={expenses.id} className="expense">
              <div>
                <p className="expense-title">{expenses.title}</p>
                <p className="muted">{expenses.category} · {expenses.date}</p>
              </div>
              <p className="expense-amount">{formatMoney(expenses.amount)}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
