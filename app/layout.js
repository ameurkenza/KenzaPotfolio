// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReduxProvider from './components/ReduxProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; // 🔐 important

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mon Portfolio - Kenza",
  description: "Portfolio personnel de Kenza, développeuse passionnée.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <ProtectedRoute>
            <Navbar />
            {children}
            <Footer />
          </ProtectedRoute>
        </ReduxProvider>
      </body>
    </html>
  );
}
