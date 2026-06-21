import Header from "@/src/app/components/Header";
import Footer from "@/src/app/components/Footer";
import "@/src/app/globals.css";
import CartProvider from "./context/CartContext";
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CartProvider>
          <main className="main container py-8">{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
