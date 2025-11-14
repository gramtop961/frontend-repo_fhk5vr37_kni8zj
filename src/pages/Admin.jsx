import React from 'react'
import { DashboardLayout } from '../components/Layout'
import { Card, Table, Badge, Button } from '../components/ui'
import { Users, Monitor, CreditCard, Star } from 'lucide-react'

const mockCustomers = Array.from({ length: 6 }).map((_, i) => ({
  name: `Customer ${i+1}`,
  username: `cust${i+1}`,
  status: i % 2 === 0 ? 'Active' : 'Inactive',
  paket: i % 3 === 0 ? 'Premium' : 'Regular',
}))

const mockStaff = Array.from({ length: 4 }).map((_, i) => ({
  name: `Staff ${i+1}`,
  username: `staff${i+1}`,
  role: 'Staff',
}))

const mockTransactions = Array.from({ length: 10 }).map((_, i) => ({
  id: `TRX00${i+1}`,
  customer: `Customer ${i+1}`,
  nominal: (Math.random()*100000).toFixed(0),
  time: `${(i+1).toString().padStart(2,'0')}:3${i}`,
}))

const rooms = [
  ...Array.from({ length: 3 }).map((_, i) => ({ name: `Ruang Reguler ${i+1}`, type: 'Regular', status: i % 2 === 0 ? 'dipakai' : 'kosong'})),
  ...Array.from({ length: 3 }).map((_, i) => ({ name: `Ruang Premium ${i+1}`, type: 'Premium', status: i % 2 === 1 ? 'dipakai' : 'kosong'})),
]

const AdminPage = () => {
  return (
    <DashboardLayout role="Admin">
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-indigo-300" />
                <h3 className="font-semibold">List Akun Customer</h3>
              </div>
              <Button variant="neon">Kelola Customer</Button>
            </div>
            <Table
              columns={[
                { key: 'name', title: 'Nama' },
                { key: 'username', title: 'Username' },
                { key: 'paket', title: 'Paket', render: (v) => <Badge color={v==='Premium'?'premium':'regular'}>{v}</Badge> },
                { key: 'status', title: 'Status', render: (v) => <Badge color={v==='Active'?'success':'warning'}>{v}</Badge> },
              ]}
              data={mockCustomers}
            />
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-fuchsia-300" />
                <h3 className="font-semibold">List Akun Staff</h3>
              </div>
              <Button variant="accent">Kelola Staff</Button>
            </div>
            <Table
              columns={[
                { key: 'name', title: 'Nama' },
                { key: 'username', title: 'Username' },
                { key: 'role', title: 'Peran' },
              ]}
              data={mockStaff}
            />
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-emerald-300" />
                <h3 className="font-semibold">Transaksi Terkini</h3>
              </div>
              <Button variant="outline">Lihat Semua Transaksi</Button>
            </div>
            <Table
              columns={[
                { key: 'id', title: 'ID Transaksi' },
                { key: 'customer', title: 'Customer' },
                { key: 'nominal', title: 'Nominal', render: (v) => <span className="text-emerald-300">Rp {Number(v).toLocaleString('id-ID')}</span> },
                { key: 'time', title: 'Waktu' },
              ]}
              data={mockTransactions}
            />
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-5 h-5 text-indigo-300" />
              <h3 className="font-semibold">Ruangan Tersedia</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {rooms.map((r, i) => (
                <div key={i} className="rounded-xl p-4 bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{r.name}</span>
                    <Badge color={r.type==='Premium'?'premium':'regular'}>{r.type}</Badge>
                  </div>
                  <div className="mt-2 text-xs">
                    <Badge color={r.status==='dipakai'?'warning':'success'}>{r.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="grid grid-cols-2 gap-3">
              <Button className="w-full">Kelola Ruangan</Button>
              <Button className="w-full" variant="accent">Isi Billing</Button>
              <Button className="w-full" variant="outline">Kelola Staff</Button>
              <Button className="w-full" variant="outline">Kelola Customer</Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminPage
