"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CATEGORIES } from "@/lib/categories"

export default function ExpenseForm() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState(CATEGORIES[0])
  const [date, setDate] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    await fetch("/api/expenses", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, amount: Number(amount), category, date }),
    })
    router.push("/")
  }

  return (
    <form onSubmit={handleSubmit} className="card form">
      <label>
        Title
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} placeholder="Groceries" 
        />
      </label>
      <label>
        Amount ($)
        <input 
          type="number"
          step="0.01"
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} placeholder="25.00" 
        />
      </label>
      <label>
        Category
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </label>
      <label>
        Date
        <input 
          type="date"
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <div className="form-actions">
        <button type="submit" className="button">Add Expense</button>
        <Link href="/">Cancel</Link>
      </div>
    </form>
  )

}