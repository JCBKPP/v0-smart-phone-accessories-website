import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShoppingBag,
  ShieldCheck,
  Headset,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smart Phone Accessories Sdn Bhd -- your trusted phone accessories retailer in Sabah, Malaysia with 3 branches in Kota Kinabalu.",
};

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    icon: MapPin,
    title: "Multiple Locations",
    description:
      "3 conveniently located branches across Kota Kinabalu, making it easy for you to find us wherever you are.",
  },
  {
    icon: ShoppingBag,
    title: "Wide Product Range",
    description:
      "From phone cases and screen protectors to power banks and earphones, we carry everything your smartphone needs.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description:
      "We source only reliable, tested accessories to ensure you get the best value and long-lasting performance.",
  },
  {
    icon: Headset,
    title: "Expert Service",
    description:
      "Our knowledgeable team is always ready to help you find the perfect accessory for your device.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description:
      "Great quality at fair prices. We keep our costs competitive so you get the best deals in Sabah.",
  },
];

const GALLERY_IMAGES = [
  { src: "/images/store-team.jpg", alt: "Smart Phone Accessories store interior" },
  { src: "/images/gallery-1.jpg", alt: "Phone accessories display" },
  { src: "/images/gallery-2.jpg", alt: "Accessories wall display" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-foreground py-20 sm:py-28 lg:py-32 overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Smart Phone Accessories store"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance leading-tight">
            Better In Your Life
          </h1>
          <p className="mt-5 text-primary-foreground/70 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Smart Phone Accessories Sdn Bhd is dedicated to providing the best smartphone accessories experience in Sabah, Malaysia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Our Story
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
                From One Store to Three, Serving Sabah
              </h2>
              <div className="mt-5 flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Smart Phone Accessories Sdn Bhd began with a simple mission: to make quality phone accessories accessible and affordable for everyone in Kota Kinabalu. Starting from our first shop, we quickly earned the trust of our customers through excellent products and genuine service.
                </p>
                <p>
                  Today, we operate three branches across the city -- at Inanam Business Centre, City Prade in the heart of downtown, and Karamunsing Capital. Each store carries a comprehensive selection of accessories for all major smartphone brands.
                </p>
                <p>
                  Our tagline, "Better In Your Life," reflects our commitment to enhancing your everyday experience with the right accessories. Whether you need a durable case, a fast-charging cable, or the latest wireless earbuds, we are here to help.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Smart Phone Accessories store interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              What Sets Us Apart
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto leading-relaxed">
              We go beyond just selling accessories -- we provide an experience built on trust, quality, and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Our Stores
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              A Look Inside
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-foreground text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-balance">
            Ready to Visit?
          </h2>
          <p className="mt-3 text-primary-foreground/70 max-w-md mx-auto leading-relaxed">
            Find the nearest branch and drop by today. Our friendly team is ready to help you find the perfect accessories.
          </p>
          <Link
            href="/find-us"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px]"
          >
            Find Our Stores
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
