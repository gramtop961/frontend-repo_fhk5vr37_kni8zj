import React from 'react'
import { AuthLayout } from '../components/Layout'
import { Button } from '../components/ui'

export const AdminLogin = () => (
  <AuthLayout role="Admin">
    <form className="space-y-3">
      <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm" placeholder="Admin username" />
      <input type="password" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm" placeholder="Password" />
      <Button className="w-full">Login</Button>
    </form>
  </AuthLayout>
)

export const StaffLogin = () => (
  <AuthLayout role="Staff">
    <form className="space-y-3">
      <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm" placeholder="Staff username" />
      <input type="password" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm" placeholder="Password" />
      <Button className="w-full">Login</Button>
    </form>
  </AuthLayout>
)

export const CustomerLogin = () => (
  <AuthLayout role="Customer">
    <form className="space-y-3">
      <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm" placeholder="Username customer" />
      <input type="password" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm" placeholder="Password" />
      <Button className="w-full">Login</Button>
    </form>
  </AuthLayout>
)
