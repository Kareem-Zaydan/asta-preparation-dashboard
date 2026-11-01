import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Asta's Preparation Dashboard",
  description: 'Track three training tasks and preparation-plan completion before facing Lucifero.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
