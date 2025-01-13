import "../../globals.css";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";

export const metadata = {
  title: "Counter Surveillance",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
