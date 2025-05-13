// pages/resume.tsx
import Head from "next/head";
import Image from "next/image";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Alex Smith</title>
      </Head>
      <main className="min-h-screen bg-[#1c1c1c] text-white font-sans px-6 md:px-20 py-10">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
              A
            </div>
            <span className="text-lg font-semibold">Alex Smith</span>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm">
            <a className="font-semibold text-white" href="#">About Me</a>
            <a className="text-white font-semibold" href="/resume">Resume</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Extra</a>
            <a href="#">Get it Now</a>
          </nav>

          <div className="md:hidden">
            <button className="text-white text-2xl">☰</button>
          </div>
        </header>

        {/* Main Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mt-20">
          {/* Profile Image */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alex Smith</h1>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Download Resume
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-gray-500 hover:bg-gray-800 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
