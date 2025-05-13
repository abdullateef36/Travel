// app/contact/page.tsx
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Abdullateef Akinola</title>
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
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact" className="font-semibold text-white">Contact</Link>
          </nav>
        </header>

        {/* Content */}
        <section className="mt-20 max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">Contact Me</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#2c2c2c] border border-gray-700 rounded text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-[#2c2c2c] border border-gray-700 rounded text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 bg-[#2c2c2c] border border-gray-700 rounded text-white"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}