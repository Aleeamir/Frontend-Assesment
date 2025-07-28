// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 px-4 overflow-hidden">
      {/* Animated Vertical Glow Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`absolute w-[2px] h-20 bg-white/60 blur-sm animate-glow-fall`}
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
        {/* Logo + Brand */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-2xl font-bold text-green-400">klipAI</h1>
          <Image src="/klip.png" alt="KlipAI Logo" width={150} height={100} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">Take Full Control of Your Crypto.</h2>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-block bg-white text-black font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition"
        >
          Learn More
        </Link>

        {/* Supporting Text */}
        <p className="text-gray-400 text-sm md:text-base">
          Experience secure storage, fast payments, and seamless Web3 access with Klip.
        </p>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 text-sm text-gray-500 pt-8">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms &amp; Condition
          </Link>
          <span className="text-gray-600">&copy; KlipAI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
