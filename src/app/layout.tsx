import Header from "@/src/app/components/Header";
import Footer from "@/src/app/components/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
  );
}

export default RootLayout;
