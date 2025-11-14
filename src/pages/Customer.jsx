import React from 'react'
import { DashboardLayout } from '../components/Layout'
import { Card, Badge, Button } from '../components/ui'
import { Coffee, Sandwich, CupSoda, ShoppingCart } from 'lucide-react'

const categories = [
  { key: 'makanan', label: 'Makanan', icon: Sandwich },
  { key: 'minuman', label: 'Minuman', icon: CupSoda },
  { key: 'cemilan', label: 'Cemilan', icon: Coffee },
]

const products = [
  { id: 1, name: 'Americano', price: 25000, cat: 'minuman' },
  { id: 2, name: 'Cappuccino', price: 30000, cat: 'minuman' },
  { id: 3, name: 'Nasi Goreng', price: 35000, cat: 'makanan' },
  { id: 4, name: 'Roti Bakar', price: 20000, cat: 'cemilan' },
]

const CustomerPage = () => {
  return (
    <DashboardLayout role="Customer">
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Status Pemakaian</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Paket</span>
                <Badge color="premium">Premium</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Sisa Waktu</span>
                <span className="text-emerald-300 font-semibold">1 jam 25 mnt</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Lokasi</span>
                <span className="text-cream-100">Ruang Premium 2</span>
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((c) => (
                <Button key={c.key} variant="ghost" className="border border-white/10">
                  <c.icon className="w-4 h-4 mr-2" /> {c.label}
                </Button>
              ))}
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <Card key={p.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-emerald-300">Rp {p.price.toLocaleString('id-ID')}</div>
                  </div>
                  <Badge color="slate">{p.cat}</Badge>
                </div>
                <Button className="mt-4 w-full"><ShoppingCart className="w-4 h-4 mr-2"/> Tambah ke Keranjang</Button>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Keranjang</h3>
              <Button variant="outline">Checkout</Button>
            </div>
            <p className="text-cream-200/70 text-sm">Belum ada item.</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CustomerPage
