import "./globals.css";

export const metadata = {
  title: "Knockie",
  description: "Now you can add your own sites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
