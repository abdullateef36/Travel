// app/portfolio/page.tsx
import Head from "next/head";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Abdullateef Akinola</title>
      </Head>
      <main className="min-h-screen bg-[#1c1c1c] text-white px-6 md:px-20 py-10">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
              A
            </div>
            <span className="text-lg font-semibold">Abdullateef</span>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio" className="font-semibold text-white">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {/* Content */}
        <section className="mt-20">
          <h1 className="text-4xl font-bold text-blue-400 mb-10">My Portfolio</h1>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Project Card Example */}
            <div className="bg-[#2c2c2c] rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Travel App</h3>
              <p className="text-gray-400 mb-2">
                A mobile app built with React Native and Firebase for booking trips and tracking destinations.
              </p>
              <a
                href="https://github.com/yourusername/travel-app"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                View on GitHub →
              </a>
            </div>

            <div className="bg-[#2c2c2c] rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-400 mb-2">
                Personal branding site built with Next.js and Tailwind CSS, optimized for performance.
              </p>
              <a
                href="https://abdullateef.dev"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                Visit Site →
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
