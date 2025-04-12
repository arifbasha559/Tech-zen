import { 
  IoRocketOutline, 
  IoChatbubbleEllipsesOutline,
  IoBookOutline,
  IoConstructOutline,
  IoCodeSlashOutline,
  IoServerOutline
} from "react-icons/io5";
import { 
  MdOutlineLightbulb,
  MdOutlineArchitecture,
  MdOutlineDesignServices
} from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  
  return (
    <div className="font-sans antialiased text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100">

      {/* 1. Hero Section - Layered Gradient Mesh */}
      <section className="relative min-h-screen w-full overflow-hidden">
  {/* Background with gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-indigo-900">
    {/* Subtle noise texture for depth */}
  </div>

  {/* Floating elements for depth */}
  <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-700 rounded-full mix-blend-screen opacity-20 blur-xl"></div>
  <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-700 rounded-full mix-blend-screen opacity-20 blur-xl"></div>

  {/* Subtle floating dots */}
  <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-float"></div>
  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-indigo-400 rounded-full opacity-50 animate-float animation-delay-1000"></div>
  <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-float animation-delay-1500"></div>
<div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white rounded-full animate-float"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 15 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
  {/* Main content container */}
  <div className="relative z-10 flex items-center justify-center min-h-screen w-full text-white">
    <div className="max-w-6xl mx-auto px-6 text-center py-24">
      <div className="mb-4">
        <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">Engineering Knowledge Platform</span>
      </div>

      {/* Glowing Title */}
      <div className="relative inline-block">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 leading-tight drop-shadow-lg">
          <span className="block font-medium mb-2">Tech-Zen</span>
          Professional Technical Resources
        </h1>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
      </div>

      {/* Divider with glow */}
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-10 shadow-[0_0_15px_rgba(96,165,250,0.5)]"></div>

      <p className="text-lg max-w-2xl mx-auto leading-relaxed text-blue-100 mb-12 drop-shadow-sm">
        Authoritative content curated for engineering teams and technical leaders
      </p>

      {/* Buttons with glow/glassmorphism */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/blog"
          className="px-10 py-3.5 bg-white text-blue-800 rounded-md text-sm font-medium hover:bg-blue-50 transition duration-300 shadow-md flex items-center justify-center gap-2"
        >
          <IoBookOutline className="text-lg" />
          Browse Articles
        </Link>
        <Link
          to="/about"
          className="px-10 py-3.5 border border-blue-300 text-blue-100 rounded-md text-sm font-medium hover:bg-white hover:bg-opacity-10 transition duration-300 flex items-center justify-center gap-2"
        >
          <MdOutlineDesignServices className="text-lg" />
          Our Approach
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* 2. Value Props - Geometric Grid Background */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 dark:opacity-5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                <span className="block text-blue-600 font-medium mb-3">Trusted By Engineering Teams</span>
                Designed for Professional Growth
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto my-8"></div>
              <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-base leading-relaxed">
                Our platform delivers vetted technical content reviewed by industry practitioners
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition duration-500">
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-8">
                  <MdOutlineLightbulb className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-medium mb-4">Expert-Curated</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Content rigorously reviewed by senior engineers and technical leaders
                </p>
              </div>

              <div className="p-10 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition duration-500">
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-8">
                  <IoRocketOutline className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-medium mb-4">Production-Proven</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Patterns and solutions validated in enterprise environments
                </p>
              </div>

              <div className="p-10 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition duration-500">
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-8">
                  <IoChatbubbleEllipsesOutline className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-medium mb-4">Professional Network</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Connect with engineering leaders and domain experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features - Asymmetrical Blurred Shapes */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50">
          <div className="absolute top-1/2 -left-32 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl dark:opacity-5"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-400 rounded-full opacity-10 blur-3xl dark:opacity-5"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(99,102,241,0.1)_0%,_transparent_20%,_transparent_80%,_rgba(79,70,229,0.1)_100%)]"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Featured Resources</span>
                <h2 className="text-3xl font-light mt-4 mb-8">
                  <span className="font-medium">Technical Excellence</span><br />
                  for Professional Teams
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
                  Explore our collection of in-depth technical articles covering modern engineering practices.
                </p>
                <a
                  href="/blog"
                  className="group inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
                >
                  View all technical resources
                  <IoCodeSlashOutline className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition duration-300 h-full flex flex-col">
                  <div className="text-blue-500 mb-5">
                    <MdOutlineArchitecture className="text-2xl" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">System Architecture</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Scalable design patterns</p>
                </div>
                <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition duration-300 h-full flex flex-col">
                  <div className="text-blue-500 mb-5">
                    <IoServerOutline className="text-2xl" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">DevOps Practices</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CI/CD optimization</p>
                </div>
                <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition duration-300 h-full flex flex-col">
                  <div className="text-blue-500 mb-5">
                    <IoConstructOutline className="text-2xl" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Framework Guides</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">React, Angular, Vue</p>
                </div>
                <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition duration-300 h-full flex flex-col">
                  <div className="text-blue-500 mb-5">
                    <IoCodeSlashOutline className="text-2xl" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Performance</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Optimization techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA - Animated Particle Background */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-indigo-900">
          {/* Animated particles */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white rounded-full animate-float"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 15 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-indigo-600/30"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white drop-shadow-lg">
              Elevate Your Team&#39;s <span className="font-medium text-white">Technical Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-10 shadow-[0_0_15px_rgba(96,165,250,0.5)]"></div>
            <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Join engineering leaders who rely on our platform for professional development and technical excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-3.5 bg-white/90 text-blue-800 rounded-lg text-sm font-medium hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2"
              >
                <IoChatbubbleEllipsesOutline className="text-lg" />
                Contact Our Team
              </a>
              <a
                href="/blog"
                className="px-10 py-3.5 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2"
              >
                <IoBookOutline className="text-lg" />
                Explore Resources
              </a>
            </div>
          </div>
          <div className="block w-full absolute bottom-0 left-0 right-0 border-t  bg-gradient-to-t from-blue-900 to-transparent"> 
          <Footer/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;