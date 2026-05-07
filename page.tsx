import Link from "next/link";
import { cars } from "@/lib/cars";
import { site } from "@/lib/site";
import { CarCard } from "@/components/CarCard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Glowing Gradient Mesh */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 -z-10 bg-background">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/20 blur-[120px] mix-blend-screen animate-float" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="mx-auto w-full max-w-5xl px-6 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-lg mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available in {site.cities.slice(0, 3).join(", ")} & more
          </div>
          
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl text-foreground drop-shadow-sm">
            Drive the <span className="text-gradient">Extraordinary.</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-black/70 dark:text-white/70 font-medium">
            Premium car rentals across Pakistan. Fast booking, transparent PKR rates, and uncompromised comfort.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fleet"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 text-base font-bold text-background transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              Browse our fleet
            </Link>
            <Link
              href="/book"
              className="inline-flex h-14 items-center justify-center rounded-full glass-panel px-8 text-base font-bold text-foreground transition-all hover:bg-white/50 dark:hover:bg-black/50 hover:scale-105"
            >
              Request booking
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-3xl mx-auto">
            {[
              { title: "Verified", desc: "ID check" },
              { title: "Flexible", desc: "Pickup" },
              { title: "Options", desc: "With driver" },
              { title: "Support", desc: "WhatsApp" },
            ].map((feature, i) => (
              <div key={i} className="glass-panel rounded-2xl p-4 text-center transition-transform hover:-translate-y-1">
                <div className="font-bold text-foreground">{feature.title}</div>
                <div className="text-sm text-black/60 dark:text-white/60 font-medium">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="relative py-24 bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Featured <span className="text-primary">Vehicles</span>
              </h2>
              <p className="mt-3 text-base text-black/60 dark:text-white/60 font-medium max-w-xl">
                Handpicked options for your next journey. Indicative pricing in PKR.
              </p>
            </div>
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors group"
            >
              View entire fleet 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.slice(0, 3).map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Fleet Preview Section */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Popular Choices
          </h2>
          <p className="mt-3 text-base text-black/60 dark:text-white/60 font-medium max-w-xl mx-auto">
            From economy hatchbacks to luxury sedans and spacious SUVs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.slice(3, 9).map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
           <Link
              href="/fleet"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-8 text-sm font-bold text-foreground transition-all hover:bg-black/5 dark:hover:bg-white/5"
            >
              Show all vehicles
            </Link>
        </div>
      </section>
    </main>
  );
}
