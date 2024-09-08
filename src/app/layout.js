import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "This is my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
