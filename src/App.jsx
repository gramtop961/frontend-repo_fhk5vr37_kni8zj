import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AdminPage from './pages/Admin'
import StaffPage from './pages/Staff'
import CustomerPage from './pages/Customer'
import { AdminLogin, StaffLogin, CustomerLogin } from './pages/Auth'
import Spline from '@splinetool/react-spline'
import { Button, Badge, Card } from './components/ui'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] via-[#0B0F1A] to-[#1A1240] text-cream-100">
      <div className="relative h-[420px]">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1020] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto -mt-40 px-6 pb-20">
        <div className="rounded-3xl bg-[#0B1020]/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl shadow-black/40">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Aradabiya Cafenet Management</h1>
              <p className="text-cream-200/70 mt-2 max-w-xl">Clean, modern, premium UI for Admin, Staff, and Customer roles with neon café gaming vibes and elegant clarity.</p>
            </div>
            <div className="flex gap-2">
              <Badge color="premium">Premium</Badge>
              <Badge color="regular">Tech Café</Badge>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Admin</h3>
            <p className="text-cream-200/70 text-sm mb-4">Kelola ruangan, staff, customer, transaksi, dan billing.</p>
            <div className="flex gap-2">
              <Link to="/login/admin"><Button>Login</Button></Link>
              <Link to="/admin"><Button variant="outline">Lihat Dashboard</Button></Link>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Staff</h3>
            <p className="text-cream-200/70 text-sm mb-4">Fokus pada customer & billing dengan antarmuka sederhana.</p>
            <div className="flex gap-2">
              <Link to="/login/staff"><Button>Login</Button></Link>
              <Link to="/staff"><Button variant="outline">Lihat Dashboard</Button></Link>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Customer</h3>
            <p className="text-cream-200/70 text-sm mb-4">Lihat paket, sisa waktu, lokasi, dan pesan menu café.</p>
            <div className="flex gap-2">
              <Link to="/login/customer"><Button>Login</Button></Link>
              <Link to="/customer"><Button variant="outline">Lihat Dashboard</Button></Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/login/staff" element={<StaffLogin />} />
      <Route path="/login/customer" element={<CustomerLogin />} />

      <Route path="/admin" element={<AdminPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/customer" element={<CustomerPage />} />
    </Routes>
  )
}

export default App
