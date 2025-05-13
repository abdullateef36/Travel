// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdullateef Akinola - Web Designer</title>
      </Head>
      <main className="min-h-screen bg-[#1c1c1c] text-white font-sans px-6 md:px-20 py-10">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
              A
            </div>
            <span className="text-lg font-semibold">Abdullateef</span>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/resume" className="text-white font-semibold">Resume</Link>
            <Link href="#" className="text-white">Portfolio</Link>
            <Link href="#" className="text-white">Blog</Link>
            <Link href="#" className="text-white">Contact</Link>
          </nav>

          <div className="md:hidden">
            <button className="text-white text-2xl">☰</button>
          </div>
        </header>

        {/* Main Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mt-20">
          {/* Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-[#2c2c2c] shadow-xl mb-10 md:mb-0">
            <Image
              src="/profile.jpg"
              alt="Alex Smith"
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="md:ml-12 text-center md:text-left max-w-xl">
            <p className="text-gray-400 mb-2">Web Designer</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Abduallateef Akinola</h1>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I am a passionate full stack developer with experience building scalable web and mobile applications using the MERN stack (MongoDB, Express, React/React Native, Node.js). I specialize in creating fast, responsive UIs and robust backend systems that deliver real-world business results.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="/resume.pdf" className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Download CV
              </a>
              <a href="#" className="px-6 py-2 rounded-full border border-gray-500 hover:bg-gray-800 transition">
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
