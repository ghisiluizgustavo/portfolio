import './global.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={cx(
      'text-black bg-white dark:text-white dark:bg-black',
      GeistSans.variable,
      GeistMono.variable
    )}>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        {children}
      </body>
    </html>
  )
}
