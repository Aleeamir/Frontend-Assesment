'use client';

import Image from 'next/image';
// import { Button } from '@/components/ui/button';

const logos: string[] = [
  "/logo01.png",
  "/logo02.png",
  "/logo03.png",
  "/logo04.png",
  // "/logo05.png",
  // "/logo06.png",
];
interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-black rounded-xl p-6 flex flex-col items-center text-center">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="mb-6 w-full h-auto"
      />
      <h3 className="text-green-400 font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 md:px-12 lg:px-24 py-12">
      {/* Heading Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black mb-4">
          AI receipts. Simple crypto. <br className="hidden md:block" /> Smart control.
        </h1>
        <p className="text-gray-600 mb-6">
          Klip is Your All-In-One Decentralized Wallet <br className="hidden md:block" />
          Designed For Security, Flexibility, And Full Ownership.
        </p>

        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-[#12ED39] transition">
          Get Started →
        </button>
      </div>

      {/* Phone Mockup Section */}
      <div className="relative mt-12 w-full max-w-sm sm:max-w-md flex justify-center items-center overflow-hidden">
        {/* Glowing Green Background */}
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-lime-400 rounded-full blur-[100px] opacity-70"></div>

        {/* Hand Background */}
        <Image
          src="/blog.png"
          alt="Hand Background"
          width={800}
          height={800}
          className="w-full h-auto z-10"
        />

        {/* Phone UI and Tokens */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] z-20">
          <Image
            src="/iphone.png"
            alt="Phone UI"
            width={900}
            height={1200}
            className="w-full h-auto drop-shadow-2xl scale-[1.1] sm:scale-125 md:scale-150"
          />

          {/* Token Popups */}
          <div className="absolute top-[14%] -left-[5%] sm:-left-[10%] bg-[#8C8C8C57] backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold shadow">
            <div>$2,951.73 <span className="ml-3 sm:ml-5">Apollo</span></div>
            <div className="text-gray-500">APL 17 <span className="text-gray-500 ml-4 sm:ml-6">APL</span></div>
          </div>

          <div className="absolute bottom-[20%] right-0 translate-x-1/2 sm:-right-[10%] sm:translate-x-0 bg-[#8C8C8C57] backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold shadow">
            <div>Romulus $3,271.20 <span className="ml-1">RLS 24</span></div>
            <div className="text-gray-500">Romulus $3,271.20 <span className="text-gray-500 ml-1">RLS 24</span></div>
          </div>
        </div>
      </div>

      {/* What is KlipAi Section */}
      {/* What is KlipAi Section */}
      <section className="w-full mt-24 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left: Phone with popups */}
        <div className="relative w-full md:w-1/2 max-w-md bg-[#F4F2F0] px-0 py-6 rounded-xl overflow-hidden">
          {/* BTC popup top-left INSIDE container */}
          <div className="absolute top-4  bg-white border border-gray-200 rounded-sm px-3 py-2 shadow-md flex items-center gap-2 text-sm z-10">
            <div className="bg-orange-400 w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold">
              B
            </div>
            <div className="flex flex-col">
              <div>
                <span className="font-semibold text-black">BTC / USDT</span>
                <span className=" ml-6 text-gray-500 text-md">78,393</span>
              </div>
              <div>
                <span className="font-semibold text-[#6B7280]">Bitcon</span>
                <span className="ml-18 text-green-500 text-xs">+4.23%</span>
              </div>
            </div>
          </div>

          <div className="w-[80%] mx-auto z-0 pt-10 relative">
            <Image
              src="/Subtract.png"
              alt="KlipAi Phone UI"
              width={400}
              height={500}
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* BTC popup bottom-right INSIDE container */}
          <div className="absolute bottom-4 right-4 bg-white border border-gray-200 rounded-sm px-3 py-2 shadow-md flex items-center gap-2 text-sm z-10">
            <div className="bg-[#D2EAE4] w-6 h-6 rounded-full text-black text-xs flex items-center justify-center font-bold">
              ₿
            </div>
            <div>
              <div><span className="font-semibold text-black">BTC / USDT</span></div>
              <div><span className="font-semibold text-[#6B7280]">Bitcoin</span></div>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">What is KlipAi</h2>
          <p className="text-gray-600 leading-relaxed">
            KlipAi Is The All-In-One Smart Wallet Layer For Web3. <br />
            We Turn Every Crypto Transaction Into A Clean, AI-Powered Receipt. <br />
            You Can Also Send Tokens Using A Simple Username. <br />
            No Tx Hashes. No Wallet Address Mistakes. <br />
            Just Clarity, Control, And Convenience.
          </p>
        </div>
      </section>
      {/* What is KlipAi Section */}



      {/* Benefit Grid Section */}
      <section className="w-full mt-24 px-4 md:px-12 lg:px-24">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-8 text-center md:text-left">
          Say goodbye to <br className="block md:hidden" />
          Wallet Addresses.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tall left card */}
          <div className="bg-black rounded-2xl text-white p-6 flex flex-col items-start row-span-2">
            <div className="text-sm bg-green-700 text-white px-3 py-1 rounded-full mb-4 font-semibold">
              Token Support
            </div>
            
            <div className="text-lg font-semibold mb-4">Welcome to KlipAi Dashboard 👋</div>
            
            <Image
              src="/iphone-mockup.png" // replace with your actual image
              alt="KlipAi Dashboard"
              width={300}
              height={600}
              className="w-full h-auto "
            />
          </div>

          {/* Top-right cards */}
          <div className="bg-[#1E1E1E] rounded-2xl text-white p-6 flex flex-col justify-between">
            <h3 className="font-semibold text-lg mb-4">Secure Transfers</h3>
            <Image
              src="/secure.png" // replace with your actual image
              alt="Secure Transfers"
              width={300}
              height={200}
              className="w-full h-auto"
            />
          </div>

          <div className="relative w-full max-w-sm rounded-2xl bg-[#1E1E1E] p-4 text-white">
            <div className="bg-[#1E1E1E] rounded-2xl text-white p-6 flex flex-col justify-between">
              {/* <h3 className="font-semibold text-lg mb-4">Romolus</h3> */}
              <div className="flex justify-end text-white text-2xl">＋</div>

              <Image
                src="/romulus1.png" // replace with your actual image
                alt="Balance"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            {/* Performance Gauge Overlay */}
            <div className="absolute bottom-2 right-2 bg-[#2C2C2C] rounded-xl p-4 w-[140px] shadow-lg">
              <p className="text-green-400 text-sm mb-2">Performance</p>
              <Image
                src="/romulus2.png" // Replace with actual path to your gauge image
                alt="Gauge"
                width={100}
                height={60}
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Bottom-right cards */}
          <div className="relative w-full max-w-sm rounded-2xl bg-[#1E1E1E] p-4 text-white">
            <div className="bg-[#1E1E1E] rounded-2xl text-white p-6 flex flex-col justify-between">
              {/* <h3 className="font-semibold text-lg mb-4">Current Balance</h3> */}
              <div className="flex justify-end text-white text-2xl">＋</div>
              <Image
                src="/price1.png" // replace with your actual image
                alt="Balance"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            {/* Performance Gauge Overlay */}
            <div className="absolute bottom-2 right-2 bg-[#2C2C2C] rounded-xl p-4 w-[140px] shadow-lg">
              <p className="text-green-400 text-sm mb-2">Performance</p>
              <Image
                src="/price2.png" // Replace with actual path to your gauge image
                alt="Gauge"
                width={100}
                height={60}
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="bg-[#1E1E1E] rounded-2xl text-white p-6 flex flex-col justify-between">
            <h3 className="font-semibold text-lg mb-4">Unique Identity</h3>
            <Image
              src="/unique-identity.png" // replace with your actual image
              alt="Unique Identity"
              width={300}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 mt-24 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-gray-500 text-sm md:text-base">
            Partnered with worldwide leading companies
          </h3>
        </div>

        {/* ✅ Logo Track */}
        <div className="relative w-full">
          <div className="flex gap-16 animate-scroll">
            {/* ✅ Duplicate logos for infinite effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  width={120}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-4 md:px-12 lg:px-24 py-16 bg-white">
        {/* ✅ Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-12">
          Smarter, Safer, and <br className="hidden md:block" /> Smoother Crypto
        </h2>

        {/* ✅ Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            image="/support1.png"
            title="Build a Smarter Dashboard with Personalized Widgets"
            description="Tailor Your Experience By Adding, Removing, Or Rearranging Widgets. Track Only What Matters"
          />
          <FeatureCard
            image="/support4.png"
            title="Efficient, Protected, and Hassle-Free Payments"
            description="Transactions Are Executed Instantly With Top-Grade Security—No Delays, No Hidden Fees."
          />
          <FeatureCard
            image="/support2.png"
            title="Secure Your Crypto with Smart Protection"
            description="Customize Security Settings, Enable Alerts, And Monitor Activity. Stay Safe And In Control."
          />
          <FeatureCard
            image="/support3.png"
            title="Instant, Smart, and Effortless AI Receipts"
            description="Get Automatic Receipts Generated In Real-Time, Organized, Accurate, And Ready When You Are."
          />
        </div>

      </section>
      <section className="relative overflow-hidden bg-black text-white py-20 px-4 w-full">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/ai-agent-bg.png"
            alt="AI Agent Background"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Your <span className="text-green-500">AI Agent</span>
          </h2>
          <p className="text-lg md:text-xl text-green-400 font-medium">
            Your personal financial assistant built into your wallet.
          </p>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
            The KIP(AI) Agent explains your spending, shows insights, and helps you use crypto smarter.
          </p>

          {/* Cards and Screen */}
          <div className="relative mt-12 flex justify-center items-center">
            {/* Left Card */}
            <div className="hidden md:block absolute left-0 -translate-x-1/2 rotate-[-15deg] w-40">
              <Image
                src="/Card1.png" // Replace with your actual left card image
                alt="Card Left"
                width={160}
                height={100}
              />
            </div>

            {/* Main Screen */}
            <div className="w-[40%] max-w-2xl relative z-10 rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/graphic.png" // Replace with your actual screen image
                alt="AI Agent Screen"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>

            {/* Right Card */}
            <div className="hidden md:block absolute right-0 translate-x-1/2 rotate-[15deg] w-40">
              <Image
                src="/Card2.png" // Replace with your actual right card image
                alt="Card Right"
                width={160}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-[#12ED39] overflow-hidden px-4 py-40">
      {/* Text Content */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-snug text-white">
        Simplify The Way You <br />
        Manage Your Crypto With A <br />
        Smart Wallet That Offers <br />
        Real-Time AI Assistance,<br />
        Rapid Transactions, And{" "}
        <span className="text-[#A6A6A6]">Effortless Tracking</span><br />
        <span className="text-[#A6A6A6]">
          Making It Easier Than Ever To Stay On Top Of Your Money.
        </span>
      </h1>

      {/* Main Dashboard Image */}
      <div className="relative mt-16 w-full max-w-6xl">
        <Image
          src="/dashboard.png" // Replace with actual image
          alt="Dashboard Preview"
          width={1400}
          height={800}
          className="rounded-2xl w-full h-auto shadow-2xl"
        />

        {/* Floating Card - Left */}
        <div className="absolute -left-6 sm:-left-12 top-1/3 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg flex items-center gap-2 text-sm">
          <Image
            src="/btc-icon.png" // Replace with actual BTC icon
            alt="BTC"
            width={24}
            height={24}
          />
          <div className="flex flex-col">
              <div>
                <span className="font-semibold text-black">Bitcoin / BTC</span>
                <span className=" ml-6 text-gray-500 text-md">78,393</span>
              </div>
              <div>
                <span className="font-semibold text-[#6B7280]">Amount</span>
                <span className="ml-18 text-green-500 text-xs">0.33 max</span>
              </div>
            </div>
        </div>

        {/* Floating Card - Right */}
        <div className="absolute -right-6 sm:-right-12 top-1/4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg text-sm">
          <p className="text-gray-700 font-medium">Currency</p>
          <p className="text-gray-500">USDT</p>
          <p className="text-gray-500">0.334</p>
        </div>
      </div>
    </section>

    </main>
  );
}
