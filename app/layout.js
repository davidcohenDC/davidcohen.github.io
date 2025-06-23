
import { Cabin } from 'next/font/google';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import { BASE_URL } from '@/lib/constants';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import PageTransition from '@/components/page-transition';
import './globals.css';


/* ────────────────────────────────────── */
/*  Fonts & viewport                      */
/* ────────────────────────────────────── */
const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap'
});

export const viewport = {
  colorScheme: 'only dark',
  themeColor: '#1A1F2A'
};

/* ────────────────────────────────────── */
/*  Metadata                              */
/* ────────────────────────────────────── */
export async function generateMetadata() {
  return {
    referrer: 'origin',
    pageType: 'Portfolio',
    other: {
      'page-type': 'Portfolio',
      copyright: 'David Cohen',
      audience: 'Everyone',
      'itemProp:name': 'David Cohen | Software Engineer & Architect',
      'itemProp:description':
          'David Cohen is a software engineer and architect who enjoys building elegant solutions in Python, Java, and with functional-programming techniques.',
      'itemProp:image': `${BASE_URL}/opengraph-image.png`
    },
    metadataBase: new URL(BASE_URL),

    /* ——— <title> ——— */
    title: {
      default: 'David Cohen | Software Engineer & Architect',
      template: '%s | David Cohen'
    },

    /* ——— Verification ——— */
    verification: {
      google: 'process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION'
    },

    /* ——— <meta name="description"> ——— */
    description:
        'Software engineer & researcher specialising in machine-learning, natural-language processing and robust back-end architecture.',
    applicationName: 'David Cohen',

    /* ——— Keywords ——— */
    keywords: [
      'david cohen','software engineer','nlp','machine learning',
      'java','scala','kotlin','python',
      'react','next.js','portfolio'
    ],

    /* ——— Authorship ——— */
    authors: [{ name: 'David Cohen', url: BASE_URL }],
    creator: 'David Cohen',
    publisher: 'David Cohen',

    /* ——— Open Graph ——— */
    openGraph: {
      title: 'David Cohen',
      description:
          'Software engineer & architect specialising in Python, Java, and functional programming. Delivering scalable, high-quality software solutions.',
      authors: ['David Cohen'],
      url: BASE_URL,
      siteName: 'David Cohen',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: 'David Cohen | Software Engineer & Architect',
          type: 'image/png'
        }
      ]
    },

    /* ——— Twitter Cards ——— */
    twitter: {
      card: 'summary_large_image',
      title: 'David Cohen',
      description:
          'Software engineer & architect focusing on Python, Java, functional programming, and modern web tech.',
      images: [`${BASE_URL}/opengraph-image.png`],
      creator: '@davidcohen',
      site: '@davidcohen',
      url: BASE_URL
    },

    /* ——— Icons & PWA ——— */
    icons: {
      icon: '/favicon.ico'
    },
    manifest: `${BASE_URL}/manifest.json`,

    /* ——— Crawling ——— */
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false
      }
    },

    /* ——— Languages ——— */
    languages: {
      'en-US': '/en-US'
    }
  };
}

/* ────────────────────────────────────── */
/*  Root layout                           */
/* ────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${cabin.className} h-full scroll-smooth`}>
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      <body className="antialiased">
      <Navbar />

      {/* animated page-switch */}
      <PageTransition>
        <main className="relative isolate overflow-hidden">
          <div className="mx-auto min-h-svh w-full max-w-[50rem] px-5 py-3 pt-16 md:px-10 lg:px-0">
            {children}
          </div>
        </main>
      </PageTransition>

      <Footer />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      </body>
      </html>
  );
}
