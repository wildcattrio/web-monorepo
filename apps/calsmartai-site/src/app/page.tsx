import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1E14]/95 backdrop-blur-md border-b border-[#142317]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#00E682] rounded-full"></span>
              <span className="text-xl font-bold">CalSmart AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[#BED2C8] hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-[#BED2C8] hover:text-white transition-colors">How It Works</a>
              <a href="#faq" className="text-[#BED2C8] hover:text-white transition-colors">FAQ</a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.wildcattrio.calsmart"
                className="bg-[#00E682] text-[#0F1E14] px-5 py-2 rounded-full font-semibold hover:bg-[#4CD964] transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#142317] px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#00E682] rounded-full animate-pulse"></span>
                <span className="text-[#BED2C8] text-sm">Powered by Google Gemini AI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Point. Snap.
                <span className="text-[#00E682]"> Logged.</span>
              </h1>
              <p className="text-xl text-[#BED2C8] mb-8 max-w-lg mx-auto lg:mx-0">
                Track your calories effortlessly with AI. Just point your camera at any meal and get instant nutrition info.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.wildcattrio.calsmart"
                  className="bg-[#00E682] text-[#0F1E14] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4CD964] transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get on Google Play
                </a>
                <a 
                  href="#how-it-works"
                  className="border-2 border-[#00E682] text-[#00E682] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00E682] hover:text-[#0F1E14] transition-all"
                >
                  See How It Works
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative mx-auto w-[280px] sm:w-[320px] lg:w-[380px]">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-[#00E682]/20 blur-[100px] rounded-full"></div>
                <Image
                  src="/images/01-home-food-logs.png"
                  alt="CalSmart AI Home Screen showing meal tracking"
                  width={380}
                  height={760}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#142317]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#00E682]">AI</div>
              <div className="text-[#BED2C8] mt-1">Photo Recognition</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#00E682]">1M+</div>
              <div className="text-[#BED2C8] mt-1">Foods in Database</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#00E682]">100%</div>
              <div className="text-[#BED2C8] mt-1">Privacy First</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#00E682]">Free</div>
              <div className="text-[#BED2C8] mt-1">To Get Started</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-[#BED2C8] max-w-2xl mx-auto">
              Track your nutrition with powerful AI tools designed to make calorie counting effortless
            </p>
          </div>

          {/* Feature 1 - Photo AI */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="flex-1 order-2 lg:order-1">
              <div className="w-3 h-3 bg-[#00E682] rounded-full mb-4"></div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Snap. Recognize. Log.</h3>
              <p className="text-[#BED2C8] text-lg mb-6">
                Point your camera at any meal and let AI identify the foods instantly. Get accurate calorie and macro breakdowns in seconds — no manual searching required.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Powered by Google Gemini 3.0
                </li>
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Works with any meal
                </li>
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Instant macro breakdown
                </li>
              </ul>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="relative mx-auto w-[260px] sm:w-[300px]">
                <div className="absolute inset-0 bg-[#00E682]/15 blur-[80px] rounded-full"></div>
                <Image
                  src="/images/02-photo-ai.png"
                  alt="CalSmart AI Photo Recognition"
                  width={300}
                  height={600}
                  className="relative z-10 drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - Barcode Scanner */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="flex-1">
              <div className="relative mx-auto w-[260px] sm:w-[300px]">
                <div className="absolute inset-0 bg-[#00E682]/15 blur-[80px] rounded-full"></div>
                <Image
                  src="/images/03-barcode.png"
                  alt="CalSmart AI Barcode Scanner"
                  width={300}
                  height={600}
                  className="relative z-10 drop-shadow-xl"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="w-3 h-3 bg-[#00E682] rounded-full mb-4"></div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Scan Any Barcode</h3>
              <p className="text-[#BED2C8] text-lg mb-6">
                For packaged foods, simply scan the barcode. Instant access to exact nutrition data from millions of products worldwide.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  FatSecret database integration
                </li>
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Exact manufacturer data
                </li>
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  One-tap logging
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 - Dashboard */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 order-2 lg:order-1">
              <div className="w-3 h-3 bg-[#00E682] rounded-full mb-4"></div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Your Daily Dashboard</h3>
              <p className="text-[#BED2C8] text-lg mb-6">
                See everything at a glance. Calories, macros, water, steps, and weight — all beautifully organized in one place.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Visual calorie ring
                </li>
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Macro progress bars
                </li>
                <li className="flex items-center gap-3 text-[#BED2C8]">
                  <svg className="w-5 h-5 text-[#00E682]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Health Connect sync
                </li>
              </ul>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="relative mx-auto w-[260px] sm:w-[300px]">
                <div className="absolute inset-0 bg-[#00E682]/15 blur-[80px] rounded-full"></div>
                <Image
                  src="/images/04-dashboard.png"
                  alt="CalSmart AI Dashboard"
                  width={300}
                  height={600}
                  className="relative z-10 drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-[#142317]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-[#BED2C8]">Three simple steps to track any meal</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mx-auto w-[200px] sm:w-[240px] mb-6">
                <Image
                  src="/images/02-photo-ai.png"
                  alt="Step 1: Take a photo"
                  width={240}
                  height={480}
                  className="drop-shadow-lg"
                />
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[#00E682] text-[#0F1E14] rounded-full font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Take a Photo</h3>
              <p className="text-[#BED2C8]">Point your camera at your meal and snap a photo</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mx-auto w-[200px] sm:w-[240px] mb-6">
                <Image
                  src="/images/05-meal-detail.png"
                  alt="Step 2: AI analyzes"
                  width={240}
                  height={480}
                  className="drop-shadow-lg"
                />
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[#00E682] text-[#0F1E14] rounded-full font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">AI Analyzes</h3>
              <p className="text-[#BED2C8]">Gemini AI identifies foods and calculates nutrition</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mx-auto w-[200px] sm:w-[240px] mb-6">
                <Image
                  src="/images/01-home-food-logs.png"
                  alt="Step 3: Logged instantly"
                  width={240}
                  height={480}
                  className="drop-shadow-lg"
                />
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[#00E682] text-[#0F1E14] rounded-full font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Logged Instantly</h3>
              <p className="text-[#BED2C8]">Your meal is saved with full nutrition breakdown</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">More Powerful Features</h2>
            <p className="text-xl text-[#BED2C8]">Everything you need to reach your goals</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Voice Logging */}
            <div className="bg-[#142317] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#00E682]/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00E682]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Voice Logging</h3>
              <p className="text-[#BED2C8]">Say what you ate and AI logs it for you. Perfect for hands-free tracking.</p>
            </div>

            {/* AI Recipe Generator */}
            <div className="bg-[#142317] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#00E682]/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00E682]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Recipe Generator</h3>
              <p className="text-[#BED2C8]">Photo your fridge and get personalized recipe suggestions with full nutrition.</p>
            </div>

            {/* Exercise Tracking */}
            <div className="bg-[#142317] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#00E682]/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00E682]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Exercise Tracking</h3>
              <p className="text-[#BED2C8]">Log cardio and strength workouts with automatic calorie adjustments.</p>
            </div>

            {/* Charts & Reports */}
            <div className="bg-[#142317] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#00E682]/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00E682]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Charts & Reports</h3>
              <p className="text-[#BED2C8]">Track your progress over 7, 30, 60, or 90 days with beautiful charts.</p>
            </div>

            {/* Health Connect */}
            <div className="bg-[#142317] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#00E682]/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00E682]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Health Connect</h3>
              <p className="text-[#BED2C8]">Sync with Fitbit, Samsung Watch, Oura Ring, Google Fit, and more.</p>
            </div>

            {/* Smart Goals */}
            <div className="bg-[#142317] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#00E682]/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00E682]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Goals</h3>
              <p className="text-[#BED2C8]">Set your pace with intelligent safety limits to protect your health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-[#142317]/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <details className="bg-[#0F1E14] rounded-xl p-6 group">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                How accurate is the AI food recognition?
                <svg className="w-5 h-5 text-[#00E682] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[#BED2C8] mt-4">
                CalSmart AI uses Google Gemini 3.0, one of the most advanced AI models available. It can identify most common foods with high accuracy. You can always adjust portions or ingredients if needed.
              </p>
            </details>

            <details className="bg-[#0F1E14] rounded-xl p-6 group">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                Is my data private?
                <svg className="w-5 h-5 text-[#00E682] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[#BED2C8] mt-4">
                Absolutely. Privacy is a core principle at WildCat Trio. Your data is stored locally on your device. We never sell or share your personal information.
              </p>
            </details>

            <details className="bg-[#0F1E14] rounded-xl p-6 group">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                What devices are supported?
                <svg className="w-5 h-5 text-[#00E682] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[#BED2C8] mt-4">
                CalSmart AI is currently available on Android devices through Google Play. iOS support is planned for a future release.
              </p>
            </details>

            <details className="bg-[#0F1E14] rounded-xl p-6 group">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                Can I sync with my fitness tracker?
                <svg className="w-5 h-5 text-[#00E682] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[#BED2C8] mt-4">
                Yes! CalSmart AI integrates with Health Connect, so you can sync data from Fitbit, Samsung Watch, Oura Ring, Google Fit, and other compatible devices.
              </p>
            </details>

            <details className="bg-[#0F1E14] rounded-xl p-6 group">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                Is CalSmart AI free?
                <svg className="w-5 h-5 text-[#00E682] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[#BED2C8] mt-4">
                CalSmart AI offers a free tier with essential features. Premium features are available through a subscription for users who want the full experience.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-[#00E682]">Nutrition Tracking</span>?
          </h2>
          <p className="text-xl text-[#BED2C8] mb-8 max-w-2xl mx-auto">
            Join thousands of users who are tracking their calories effortlessly with AI. Download CalSmart AI today.
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.wildcattrio.calsmart"
            className="inline-flex items-center gap-2 bg-[#00E682] text-[#0F1E14] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4CD964] transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Get CalSmart AI on Google Play
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#142317]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#00E682] rounded-full"></span>
              <span className="text-xl font-bold">CalSmart AI</span>
            </div>
            <div className="flex flex-wrap gap-6 text-[#BED2C8]">
              <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="https://wildcattrio.com" className="hover:text-white transition-colors">WildCat Trio</a>
            </div>
            <div className="text-[#BED2C8] text-sm">
              © 2026 WildCat Trio Limited. All rights reserved.
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#0F1E14] text-center">
            <p className="text-[#BED2C8] text-sm">
              Built with 💚 by WildCat Trio 🐱🐱🐱
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
