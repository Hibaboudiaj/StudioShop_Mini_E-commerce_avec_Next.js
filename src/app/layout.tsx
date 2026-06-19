import Header from "@/src/app/components/Header";

function RootLayout({ children }: { Children: React.ReactNode }) {
  return (
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
  );
}

export default RootLayout;
