import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden text-white p-0">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero/hero2.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Large Logo Background */}
      {/* <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <Image
          src="/Hero/Union.png"
          alt="Background Logo"
          width={900}
          height={900}
          className="opacity-10 w-[60vw] max-w-3xl h-auto"
          aria-hidden
        />
      </div> */}

      {/* Navigation - centered logo */}
      <nav className="absolute top-0 w-full z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
          {/* Left: Links */}
          <div className="hidden sm:flex flex-1 gap-8 text-base font-medium">
            <a href="#guides" className="hover:text-blue-300 transition">Guides</a>
            <a href="#about" className="hover:text-blue-300 transition">About</a>
          </div>
          {/* Center: Logo */}
          <div className="flex-1 flex justify-center relative z-50">
            <Image src="/Hero/logowithname.png" alt="MentalMotionX Logo" width={220} height={40} className="object-contain" />
          </div>
          {/* Right: Join Now */}
          <div className="flex-1 flex justify-end">
            <button className="border border-white/70 rounded-full px-7 py-2 text-base font-semibold hover:bg-white/10 transition">Join Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Content - Center */}
      <div className="relative w-full text-center z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-lg mb-2 sm:mb-3">
          The App That'll Get Your Head
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-lg mb-4 sm:mb-6">
          Right and Your Rig Tight
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto drop-shadow font-medium">
          Builds Muscle, Mind, and a Bit of Mayhem
        </p>
      </div>
    </section>
  );
} 
