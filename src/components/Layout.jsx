import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, Users, CreditCard, Monitor, ShoppingCart, LogOut, Coffee, Wallet, BookUser, Settings } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { Button, Badge } from './ui'

const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-xl transition-colors ${isActive ? 'bg-white/10 text-cream-100' : 'text-cream-200 hover:bg-white/5'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </NavLink>
)

export const AuthLayout = ({ children, role = 'Admin' }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] via-[#0B0F1A] to-[#1A1240] text-cream-100">
      <div className="relative h-72">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1020] pointer-events-none" />
      </div>
      <div className="max-w-6xl mx-auto px-6 -mt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl bg-[#0B1020]/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight">Aradabiya Cafenet</h1>
                <p className="text-cream-200/70">Premium Tech-Café Management</p>
              </div>
              <Badge color="premium">{role} Portal</Badge>
            </div>
            {children}
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="rounded-3xl bg-[#0B1020]/60 border border-white/10 p-6">
              <h3 className="font-semibold mb-2">Aesthetic Theme</h3>
              <p className="text-cream-200/70 text-sm">Deep purple, dark navy, warm cream, and pastel neon accents for a sleek café-gaming vibe.</p>
            </div>
            <div className="rounded-3xl bg-[#0B1020]/60 border border-white/10 p-6">
              <h3 className="font-semibold mb-2">Smooth Interactions</h3>
              <p className="text-cream-200/70 text-sm">Soft shadows, rounded corners, intuitive tables, and clear badges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const DashboardLayout = ({ children, role = 'Admin' }) => {
  const nav = {
    Admin: [
      { to: '/admin', icon: Home, label: 'Overview' },
      { to: '/admin/customers', icon: Users, label: 'Kelola Customer' },
      { to: '/admin/staff', icon: BookUser, label: 'Kelola Staff' },
      { to: '/admin/rooms', icon: Monitor, label: 'Kelola Ruangan' },
      { to: '/admin/transactions', icon: CreditCard, label: 'Transaksi' },
      { to: '/admin/billing', icon: Wallet, label: 'Isi Billing' },
    ],
    Staff: [
      { to: '/staff', icon: Home, label: 'Dashboard' },
      { to: '/staff/customers', icon: Users, label: 'Customer' },
      { to: '/staff/billing', icon: Wallet, label: 'Billing' },
    ],
    Customer: [
      { to: '/customer', icon: Home, label: 'Dashboard' },
      { to: '/customer/menu', icon: Coffee, label: 'Menu Café' },
      { to: '/customer/cart', icon: ShoppingCart, label: 'Keranjang' },
    ],
  }

  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] via-[#0B0F1A] to-[#1A1240] text-cream-100">
      <div className="relative h-40">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1020] pointer-events-none" />
      </div>
      <div className="max-w-7xl mx-auto -mt-24 px-6 pb-12">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 md:col-span-3 lg:col-span-2">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl bg-[#0B1020]/80 backdrop-blur-xl border border-white/10 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-extrabold tracking-tight">Aradabiya</div>
                  <Badge color="premium">{role}</Badge>
                </div>
                <nav className="space-y-2">
                  {nav[role].map((item) => (
                    <SidebarLink key={item.to} {...item} />
                  ))}
                </nav>
              </div>
              <Button variant="outline" className="w-full"><LogOut className="w-4 h-4 mr-2"/> Logout</Button>
            </div>
          </aside>
          <main className="col-span-12 md:col-span-9 lg:col-span-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
