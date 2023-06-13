import { Toaster } from 'react-hot-toast'
import AuthContext from './context/AuthContext'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <Toaster/>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
