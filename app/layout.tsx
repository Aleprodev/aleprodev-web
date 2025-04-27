import "./globals.css";
import LayoutComponent from "./components/layout";
import SmoothScroll from "./components/UI/SmoothScroll";

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio showcasing projects and hobbies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LayoutComponent>
        <SmoothScroll />
        {children}
      </LayoutComponent>
    </html>
  );
}
