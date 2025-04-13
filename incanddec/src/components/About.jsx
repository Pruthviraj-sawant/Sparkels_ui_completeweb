import { PlasmaFlow } from "sparkels_ui";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <PlasmaFlow />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-20">
        {/* Heading */}
        <div className="text-center max-w-4xl mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-red-400 animate-fadeIn">
            Welcome to <span className="tracking-wide">Sparkels UI</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed animate-fadeIn delay-100">
            A modern, lightweight, and customizable React UI library designed for developers who want beauty without complexity.
          </p>
          <p className="text-md sm:text-lg text-zinc-400 mt-4 animate-fadeIn delay-200">
            With reusable interactive components, seamless theming, and beautiful animations — Sparkels UI helps your projects shine.
          </p>
          <p className="text-md sm:text-lg text-zinc-500 mt-4 animate-fadeIn delay-300">
            Built using modern tech like <span className="text-pink-400 font-medium">React</span> and <span className="text-purple-400 font-medium">Tailwind CSS</span>, it’s powerful and elegant.
          </p>
          <p className="mt-8 text-xl sm:text-2xl font-semibold text-fuchsia-400 animate-fadeIn delay-400">
            Elevate your frontend game with Sparkels ✨
          </p>
        </div>

        {/* Cards */}
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-500 mb-10 animate-fadeInUp">
            Sparkels_UI Makes Your Web Shine
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {[
              {
                title: "Interactive Components",
                desc: "Modern, responsive, and elegant UI components built for developers.",
              },
              {
                title: "Customizable Themes",
                desc: "Personalize every component with just a few utility classes.",
              },
              {
                title: "Seamless Integration",
                desc: "Plug and play with React + Tailwind CSS — ready out of the box.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full max-w-xs text-center shadow-xl transition hover:scale-105 hover:shadow-fuchsia-500/30 duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-zinc-300 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
