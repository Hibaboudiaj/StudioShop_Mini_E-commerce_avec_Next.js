import Header from "@/src/app/components/Header";
import Footer from "@/src/app/components/Footer";
import "@/src/app/globals.css";
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
