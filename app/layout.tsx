import './globals.css'

export const metadata = {
  title: {
    default:'Solar',
    template: '%s | Solar',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
