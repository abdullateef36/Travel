import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Abdullateef Akinola</title>
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
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="md:hidden">
            <button className="text-white text-2xl">☰</button>
          </div>
        </header>

        {/* Resume Content */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-[#2c2c2c] shadow-xl mb-10 md:mb-0">
              <Image
                src="/profile.jpg"
                alt="Abdullateef Akinola"
                fill
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <div className="md:ml-12 text-center md:text-left max-w-2xl">
              <p className="text-gray-400 mb-2">Full Stack Developer</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Abdullateef Akinola</h1>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I am a passionate full stack developer with experience building scalable web and mobile applications using the MERN stack (MongoDB, Express, React/React Native, Node.js). I specialize in creating fast, responsive UIs and robust backend systems that deliver real-world business results.
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
          </div>

          {/* Experience Section */}
          <div className="mt-16 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Full Stack Developer – Freelance</h3>
                  <p className="text-gray-400 text-sm mb-1">2021 – Present</p>
                  <p className="text-gray-300">
                    Developed multiple responsive websites and mobile apps for clients, focusing on intuitive UX and efficient backend integration. Utilized MongoDB, React, Express, and Node.js.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Frontend Developer – XYZ Studio</h3>
                  <p className="text-gray-400 text-sm mb-1">2019 – 2021</p>
                  <p className="text-gray-300">
                    Built high-performance UIs with React and Next.js. Collaborated with designers and backend engineers to deliver scalable features.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Skills</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>JavaScript / TypeScript</li>
                <li>React, Next.js, React Native</li>
                <li>Node.js, Express.js</li>
                <li>MongoDB, Firebase</li>
                <li>Tailwind CSS, Styled Components</li>
                <li>REST APIs, WebSockets</li>
                <li>Git & GitHub, CI/CD basics</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}