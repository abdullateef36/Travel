import Image from "next/image";
import { FiBookmark, FiSearch, FiChevronDown, FiCheck } from "react-icons/fi";

function InterestCard({
  image,
  title,
  hasCheckmark,
  width,
  height,
}: {
  image: string;
  title: string;
  hasCheckmark?: boolean;
  width: number;
  height: number;
}) {
  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ height: '200px' }} // Fixed height for all cards
    >
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {hasCheckmark && (
          <FiCheck className="text-white text-3xl mb-2" />
        )}
        <h3 className="text-white text-lg md:text-xl font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function FindExperience() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Mobile Responsive */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-300">
        <div className="text-xl md:text-2xl font-bold text-gray-800">Travelsy</div>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#">Camping Locations</a>
          <a href="#">Activities</a>
          <a href="#">Equipment</a>
          <a href="#">Blogs</a>
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <button className="bg-orange-500 text-white px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2">
            <FiBookmark className="text-lg" />
            <span className="hidden sm:inline">Reservations</span>
          </button>
          <FiSearch className="text-gray-600 text-xl cursor-pointer" />
          <Image
            src="/Oval.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <FiChevronDown className="text-gray-600 text-xl hidden md:block" />
        </div>
      </header>

      {/* Main Section - Mobile Responsive */}
      <main className="px-4 md:px-8 py-6 md:py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
          Find An <br /> Experience
        </h1>
        <p className="mt-4 md:mt-6 text-gray-600 max-w-xl text-sm md:text-base">
          To find you the best experiences, we will ask you a few questions and
          show you experiences based on your preferences.
        </p>

        {/* Time Checkboxes */}
        <div className="mt-6 md:mt-10">
          <p className="text-gray-800 mb-3 md:mb-4">How much time do you have?</p>
          <div className="flex flex-wrap gap-3 md:gap-6">
            {["A weekend", "A week", "A month", "A few days, specify."].map(
              (label, i) => (
                <label key={i} className="inline-flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-700 text-sm md:text-base">{label}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Interests Section - Mobile Responsive */}
        <div className="mt-6 md:mt-10">
          <p className="text-gray-800 mb-2 text-lg font-medium">
            What are your interests?
          </p>

          <div className="space-y-3 md:space-y-0 md:gap-4">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <InterestCard
                image="/Rectangle.png"
                title="Rafting"
                width={733}
                height={250}
              />
              <InterestCard
                image="/Rectangle1.png"
                title="Nature Walk"
                hasCheckmark
                width={356}
                height={250}
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-3 md:mt-4">
              <InterestCard
                image="/Rectangle4.png"
                title="Bike Riding"
                width={356}
                height={250}
              />
              <InterestCard
                image="/Rectangle3.png"
                title="Bungee Jumping"
                width={356}
                height={250}
              />
              <InterestCard
                image="/Rectangle 2.png"
                title="Wine Tasting"
                width={356}
                height={250}
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-3 md:mt-4">
              <InterestCard
                image="/Rectangle6.png"
                title="Coffee Tasting"
                width={356}
                height={250}
              />
              <InterestCard
                image="/Rectangle5.png"
                title="Farm Visit"
                width={733}
                height={250}
              />
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-3 md:mt-4">
              <InterestCard
                image="/Rectangle7.png"
                title="Camping"
                hasCheckmark
                width={733}
                height={250}
              />
              <InterestCard
                image="/Group 4.png"
                title="Kibera Tour"
                width={356}
                height={250}
              />
            </div>
          </div>
          <button className="bg-orange-500 text-white text-sm px-10 py-2 rounded mt-3 md:mt-4">
            Set
          </button>
        </div>
      </main>

      {/* Testimonials Section */}
<section className="bg-gray-100 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <p className="text-sm text-gray-400 uppercase">Testimonials</p>
    <h2 className="text-3xl font-semibold text-gray-900 mt-2 mb-10">
      What customers <span className="text-orange-500">say about us.</span>
    </h2>

    <div className="flex gap-6 overflow-x-auto">
      {/* Testimonial 1 */}
      <div className="bg-white p-6 rounded shadow-sm flex-1 min-w-[300px]">
        <h3 className="font-semibold text-lg mb-2">Best User Experience</h3>
        <p className="text-gray-600 text-sm mb-4">
          Because the rock was laid down in layers, there is variation in the
          hardness of the rock formed. Where weaker materials erode the rock,
          some areas erode rapidly while others hold firm.
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <Image
            src="/Oval1.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="text-sm text-gray-700">Derek Dunn</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-6 rounded shadow-sm flex-1 min-w-[300px]">
        <h3 className="font-semibold text-lg mb-2">Friendly staff</h3>
        <p className="text-gray-600 text-sm mb-4">
          Whether it is driving tours, cruises or buses, we help you explore
          ways to spend a vacation. Its also great for businesses.
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <Image
            src="/Oval2.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="text-sm text-gray-700">Derek Dunn</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer Section */}
<footer className="bg-white py-16 border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-600">
    {/* Help */}
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">Need Travelsy Help?</h4>
      <p>Call us: +254 726001015</p>
      <p>Email: help@travelsy.co.ke</p>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
      <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">Other Services</h4>
      <ul>
        <li>Partner With Us</li>
        <li>Refund Program</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">Quick Links</h4>
      <ul>
        <li>Your Account</li>
        <li>Camping Locations</li>
        <li>Activities</li>
        <li>Blogs</li>
      </ul>
    </div>

    {/* Mailing List */}
    <div className="col-span-2">
      <h4 className="font-semibold text-gray-900 mb-2">Mailing List</h4>
      <p className="mb-4">Sign up to receive updates and offers</p>
      <div className="flex">
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 p-2 rounded-l-md w-full"
        />
        <button className="bg-orange-500 text-white px-4 rounded-r-md">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-12 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-200 pt-6">
    <div className="mb-4 md:mb-0 text-[24px] font-bold" style={{ color: "#30797C" }}>
      Travelsy
    </div>
    <div className="flex gap-4 items-center">
      <Image src="/Bitmap.png" alt="Bitmap" width={40} height={24} />
      <Image src="/Discover.png" alt="Discover" width={40} height={24} />
      <Image src="/Visa.png" alt="Visa" width={40} height={24} />
      <Image src="/Paypal.png" alt="Paypal" width={40} height={24} />
      <Image src="/Mastercard.png" alt="Mastercard" width={40} height={24} />

      {/* Language Dropdown */}
      <div className="relative">
        <select className="appearance-none bg-transparent border border-gray-300 rounded px-3 py-1 pr-8 text-sm">
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
      </div>

      {/* Currency Dropdown */}
      <div className="relative">
        <select className="appearance-none bg-transparent border border-gray-300 rounded px-3 py-1 pr-8 text-sm">
          <option>USD</option>
          <option>EUR</option>
          <option>KES</option>
        </select>
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-6 px-4 text-left text-xs text-gray-400">
  <p>© 2022 Travelsy Lab. All rights reserved</p>
</div>
</footer>
    </div>
  );
}