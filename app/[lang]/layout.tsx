import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Adjust path relative to the new location
import { i18n, type Locale } from "../../i18n.config"; // Corrected path to i18n config
import Header from "../../components/Header"; // Import Header
import Footer from "../../components/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

// Metadata can be generated dynamically based on lang if needed later
export const metadata: Metadata = {
  title: "Titan Hosting - Web Design", // Updated title
  description: "Professional Web Design and Hosting Services", // Updated description
};

// Function to generate static paths for each language
export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => ({ lang: locale })); // Added Locale type
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale }; // Add lang parameter
}>) {
  return (
    // Set the lang attribute dynamically
    <html lang={params.lang}>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header lang={params.lang} /> {/* Add Header */}
        <main className="flex-grow container mx-auto px-4 py-8"> {/* Add main wrapper */}
          {children}
        </main>
        <Footer lang={params.lang} /> {/* Add Footer */}
      </body>
    </html>
  );
}
