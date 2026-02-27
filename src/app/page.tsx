import { SocialLinks } from '@/components/SocialLinks';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-12 md:py-24 lg:py-32 max-w-5xl mx-auto selection:bg-blue-500/30">
      <InteractiveBackground />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12 lg:gap-24">
        {/* Left Column: Content */}
        <div className="flex flex-col gap-12">
          {/* Header */}
          <section className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Rashid U
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-medium">
              Front-end Engineer at Equipo
            </p>
          </section>

          {/* About */}
          <section className="flex flex-col gap-6 text-neutral-300 leading-relaxed max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">About</h2>
            <div className="flex flex-col gap-4 text-base md:text-lg">
              <p>
                My name is Rashid U. I’m a 27-year-old Front-end Engineer based in Manjeri, Kerala, India.
                I have 3+ years of experience building modern web applications, focusing mainly on React.js and frontend architecture.
              </p>
              <p>
                I currently work at <a href="https://equipo.io" target="_blank" rel="noopener noreferrer" className="text-white hover:underline underline-offset-4 decoration-blue-500">Equipo</a>, where I develop scalable and user-friendly web applications.
                I enjoy working with technologies like React, TypeScript, and Tailwind CSS, and I’m passionate about writing clean, maintainable code and building smooth user experiences.
              </p>
              <p>
                I continuously explore new tools and technologies, especially in modern frontend development and AI-assisted workflows.
                Alongside my professional work, I also enjoy improving my problem-solving skills and building personal projects.
              </p>
              <p>
                Outside of tech, I enjoy eating delicious foods such as <span className="text-white italic">ramen</span> (highly recommended!).
                I also like spending time learning new things and exploring ideas that improve both my career and personal growth.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section>
            <a
              href="mailto:hello@rashidu.dev"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all active:scale-95"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="flex flex-col gap-12">
          <SocialLinks />

          <div className="flex flex-col gap-4">
             <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Location</h2>
             <p className="text-neutral-400 text-sm">Manjeri, Kerala, India 🇮🇳</p>
          </div>

          <div className="flex flex-col gap-4">
             <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Current Role</h2>
             <p className="text-neutral-400 text-sm">Front-end Engineer @ Equipo</p>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Rashid U</p>
        <p>Built with Next.js & Tailwind</p>
      </footer>
    </main>
  );
}
