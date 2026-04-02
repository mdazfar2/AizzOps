import React from 'react';
import { Lightbulb, ShoppingCart, ShieldCheck, Store, CreditCard, Truck, MonitorSmartphone } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const features = [
  {
    title: 'Store Manager Roles',
    description: 'Separate roles for store managers and shoppers keep operations clean and easy to manage.',
    icon: Store,
  },
  {
    title: 'Price Comparison',
    description: 'Users can compare products across stores and quickly find the best deal.',
    icon: ShoppingCart,
  },
  {
    title: 'Razorpay Payments',
    description: 'Secure and smooth checkout flow powered by Razorpay integration.',
    icon: CreditCard,
  },
  {
    title: 'Inventory Control',
    description: 'Store managers can add stores, manage products, and update inventory from one dashboard.',
    icon: ShieldCheck,
  },
  {
    title: 'Real-Time Experience',
    description: 'Responsive shopping flows and live updates improve ordering and delivery visibility.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Doorstep Delivery',
    description: 'Customers enjoy a simple shopping journey from browsing to delivery.',
    icon: Truck,
  },
];

export default function EzyShopDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="EzyShop E-Commerce Platform"
          badge="Local Stores + Smart Shopping"
          title="EzyShop E-Commerce Platform"
          description="EzyShop is a user-friendly platform that connects shoppers with favorite local stores and delivers a smooth shopping experience from home. The app brings grocery items, household essentials, and organic products together, while allowing users to compare prices, access deals, and order with ease."
          goalTitle="Project Structure"
          goalDescription="The project is built around a modern e-commerce workflow where store managers handle products and inventory while shoppers browse, compare, pay, and track orders from a responsive interface."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Features</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#dbe7ff] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a8c5ff] hover:shadow-[0_16px_40px_-28px_rgba(29,78,216,0.55)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] p-2.5 text-[#0f1020]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-[#142a4b]">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#486182]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#d7e7ff] bg-white p-8 shadow-[0_24px_70px_-35px_rgba(25,60,130,0.18)] sm:p-10">
          <div className="mb-5 flex items-center gap-2 text-[#1f4d9b]">
            <ShoppingCart className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">How It Works</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Sign up and choose a user role: Store Manager or Shopper.',
              'Store managers add stores and manage products and inventory.',
              'Shoppers browse items, compare prices, and place orders.',
              'Razorpay handles secure payments for a smooth checkout flow.',
              'Orders are tracked with a responsive and modern user experience.',
              'Cloud-ready design supports real-world local store integration.',
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-[#e5eefc] bg-[#f9fbff] p-5">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-sm font-black text-[#0f1020]">
                  {index + 1}
                </div>
                <p className="text-[#365175] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
