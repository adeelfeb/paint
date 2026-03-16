import Head from 'next/head';
import Navbar from '../components/paint/Navbar';
import Footer from '../components/paint/Footer';
import ContactForm from '../components/designndev/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Paint Pro – Industrial Coatings & Corrosion Protection</title>
        <meta
          name="description"
          content="Get a quote for industrial coatings, corrosion protection, and epoxy systems. Arabic-based startup serving industries with Korean & American base paints."
        />
        <meta name="keywords" content="industrial coatings, contact, quote, corrosion protection, epoxy, paint" />
        <meta property="og:title" content="Contact | Paint Pro" />
        <meta property="og:description" content="Get a quote for industrial coatings and epoxy systems." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto px-1">
                Need a quote for industrial coatings, corrosion protection, or epoxy systems? Get in touch.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              <ContactForm showHeading={false} />

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg w-full min-w-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-4">Why Paint Pro?</h3>
                    <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
                      <li>Industrial coatings & epoxy systems</li>
                      <li>Korean & American base formulations</li>
                      <li>Corrosion protection for all industries</li>
                      <li>Multiple sizes: 3 ML, 5 ML, 6 ML and more</li>
                    </ul>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-4">Industries We Serve</h3>
                    <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
                      <li>Manufacturing & Automotive</li>
                      <li>Oil & Gas • Marine • Mining</li>
                      <li>Infrastructure & Construction</li>
                      <li>Water treatment & Chemical</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

