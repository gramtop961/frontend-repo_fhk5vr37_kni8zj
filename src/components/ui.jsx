import React from 'react'
import { cn } from '../lib/utils'

export const Button = ({ className = '', variant = 'primary', size = 'md', children, ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 focus:ring-purple-500',
    ghost: 'bg-transparent text-cream-100 hover:bg-white/5',
    outline: 'border border-white/10 text-cream-100 hover:bg-white/5',
    neon: 'bg-emerald-400/20 text-emerald-300 hover:bg-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.35)]',
    accent: 'bg-fuchsia-400/20 text-fuchsia-300 hover:bg-fuchsia-400/30 shadow-[0_0_20px_rgba(232,121,249,0.35)]',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  }
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

export const Badge = ({ children, color = 'slate' }) => {
  const map = {
    slate: 'bg-white/10 text-cream-100',
    success: 'bg-emerald-400/20 text-emerald-300',
    danger: 'bg-rose-400/20 text-rose-300',
    warning: 'bg-amber-400/20 text-amber-300',
    premium: 'bg-fuchsia-400/20 text-fuchsia-300',
    regular: 'bg-indigo-400/20 text-indigo-300',
  }
  return <span className={cn('px-2.5 py-1 text-xs rounded-full font-medium', map[color])}>{children}</span>
}

export const Card = ({ children, className = '' }) => (
  <div className={cn('rounded-2xl bg-[#0B1020]/70 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40', className)}>
    {children}
  </div>
)

export const Table = ({ columns = [], data = [] }) => (
  <div className="overflow-hidden rounded-xl border border-white/10">
    <table className="w-full text-sm text-left text-cream-200/90">
      <thead className="bg-white/5 text-cream-300">
        <tr>
          {columns.map(col => (
            <th key={col.key} className="px-4 py-3 font-semibold">{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-t border-white/5 hover:bg-white/[0.04]">
            {columns.map(col => (
              <td key={col.key} className="px-4 py-3 align-middle">{col.render ? col.render(row[col.key], row) : row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
