import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/components/theme';
import MainLayout from '@/layout/MainLayout';

export const metadata = {
  title: 'Orden de compra',
  description: 'Sistema de orden de compra',
}

export default function RootLayout({ children }) {

  return (
    <>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
              {children}
            </MainLayout>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}