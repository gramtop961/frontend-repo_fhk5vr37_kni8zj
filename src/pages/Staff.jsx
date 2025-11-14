import React from 'react'
import { DashboardLayout } from '../components/Layout'
import { Card, Table, Badge, Button } from '../components/ui'
import { Users, Wallet } from 'lucide-react'

const mockCustomers = Array.from({ length: 5 }).map((_, i) => ({
  name: `Customer ${i+1}`,
  username: `cust${i+1}`,
  paket: i % 3 === 0 ? 'Premium' : 'Regular',
  sisa: `${2 + i} jam`,
}))

const mockBilling = Array.from({ length: 6 }).map((_, i) => ({
  id: `BILL-0${i+1}`,
  customer: `cust${i+1}`,
  paket: i % 2 === 0 ? 'Premium' : 'Regular',
  durasi: `${1 + (i%3)} jam`,
}))

const StaffPage = () => {
  return (
    <DashboardLayout role="Staff">
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-indigo-300" />
                <h3 className="font-semibold">List Akun Customer</h3>
              </div>
              <Button variant="neon">Tambah Customer</Button>
            </div>
            <Table
              columns={[
                { key: 'name', title: 'Nama' },
                { key: 'username', title: 'Username' },
                { key: 'paket', title: 'Paket', render: (v) => <Badge color={v==='Premium'?'premium':'regular'}>{v}</Badge> },
                { key: 'sisa', title: 'Sisa Waktu' },
              ]}
              data={mockCustomers}
            />
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="w-5 h-5 text-emerald-300" />
              <h3 className="font-semibold">Isi Billing Customer</h3>
            </div>
            <form className="grid grid-cols-2 gap-3">
              <input className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm" placeholder="Username customer" />
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
                <option>Regular</option>
                <option>Premium</option>
              </select>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
                <option>1 jam</option>
                <option>2 jam</option>
                <option>3 jam</option>
              </select>
              <Button className="col-span-2" type="button">Isi Billing</Button>
            </form>
          </Card>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Kelola Billing Customer</h3>
              <Button variant="outline">Tambah</Button>
            </div>
            <Table
              columns={[
                { key: 'id', title: 'ID' },
                { key: 'customer', title: 'Customer' },
                { key: 'paket', title: 'Paket', render: (v) => <Badge color={v==='Premium'?'premium':'regular'}>{v}</Badge> },
                { key: 'durasi', title: 'Durasi' },
              ]}
              data={mockBilling}
            />
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default StaffPage
