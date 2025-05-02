import "./globals.css";
import {Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','300', '400', '600','700','800'],
  variable: '--font-poppins',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Page Title | Your Company Name',
  description: 'Concise summary of what this page is about, including keywords naturally.',
  keywords: ['keyword1', 'keyword2', 'brand name', 'location if needed'],
  alternates: {
    canonical: 'https://yourdomain.com/page-url',
  },
  openGraph: {
    title: 'Page Title | Your Company',
    description: 'Same or similar to the meta description',
    url: 'https://yourdomain.com/page-url',
    type: 'website',
    siteName: 'Your Company Name',
    images: [
      {
        url: 'https://yourdomain.com/images/page-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Descriptive image alt text',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title | Your Company',
    description: 'Short tweetable version of the page description.',
    images: ['https://yourdomain.com/images/page-og.jpg'],
    site: '@yourTwitterHandle',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
