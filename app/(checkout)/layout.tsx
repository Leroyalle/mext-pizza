import { Container, Header } from '@/shared/components/shared';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Next Pizza | Корзина',
  description: 'Generated by create next app',
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f4f1ee]">
      <Container>
        <Header hasSearch={false} hasCart={false} className="border-b-gray" />
        {children}
      </Container>
    </main>
  );
}
