import { useEffect, type MouseEvent } from "react";

const contactNumber = "075083 75053";
const phoneDialNumber = "+917508375053";
const phoneHref = `tel:${phoneDialNumber}`;
const menuPdfUrl =
  "https://drive.google.com/file/d/1T4oqvrWGavtL9JrneMpV-Hb7-6lYMgVu/view?usp=drive_link";
const orderUrl =
  "https://wa.me/917508375053?text=Hi%20Nature%27s%20Coffee%20Cafe%2C%20I%20want%20to%20place%20an%20order.";
const instagramUrl =
  "https://www.instagram.com/natures.coffee.cafe?igsh=MWllMzBjY2tnajRleg==";
const mapsSearchQuery = encodeURIComponent(
  "Nature's Coffee Cafe, Lower Ground, SBP City Square, SCO 20A, Sector 127, Kharar, Punjab 140307"
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsSearchQuery}`;

const images = {
  hero: "/cafe-interior-2.jpg",
  cozy: "/cafe-interior-1.jpg",
  wall: "/cafe-facade.jpg",
};

const trustItems = [
  "4.9/5 Stars",
  "59 Reviews",
  "100% Vegetarian",
  "Rs 200 - 400 per person",
];

const audienceMoments = [
  {
    title: "Work without the cafe chaos",
    text: "Quiet energy, steady coffee, and a calm setting for freelancers, remote workers, and study sessions.",
  },
  {
    title: "Family time feels easy",
    text: "Kids are welcome, games are available, and the vegetarian menu makes ordering simple for everyone.",
  },
  {
    title: "Dates feel warm, not formal",
    text: "Soft lighting, cozy seating, and peaceful corners make it easy to slow down and talk.",
  },
];

const whyPoints = [
  "Specialty coffee from Espresso to Flat White, Latte and Mocha",
  "Vegetarian comfort food with global cafe flavours",
  "Healthy picks like protein salad, veg saute salad and Waldorf salad",
  "Dine-in, takeout, delivery, order-ahead and no-contact delivery",
  "Free parking at SBP City Square",
];

const menuHighlights = [
  {
    group: "Coffee",
    items: "Flat White, Espresso, Americano, Cafe Latte, Mocha",
  },
  {
    group: "Must Try",
    items: "Tandoori Pizza, Paneer Tikka Sandwich, Biscoff Pancakes",
  },
  {
    group: "Healthy",
    items: "Chef Special Healthy Protein Salad, Veg Saute Salad, Waldorf Salad",
  },
  {
    group: "Comfort",
    items: "Mexican Cottage Cheese Burger and various pastas",
  },
  {
    group: "Coolers",
    items: "Green Mojito, Passion Fruit Sparkling Lemonade and specialty beverages",
  },
];

const reviews = [
  {
    quote: "Peaceful atmosphere, great coffee, and exactly the kind of place where you want to sit longer.",
    name: "Aman",
  },
  {
    quote: "Biscoff Pancakes were a hit with the family. The kids had games, so the visit felt relaxed.",
    name: "Neha",
  },
  {
    quote: "Worked here for hours with a Paneer Tikka Sandwich. Quiet, cozy, and genuinely productive.",
    name: "Ritika",
  },
];

const services = ["Dine-in", "Takeout", "Delivery", "Order-ahead", "No-contact delivery"];
const amenities = ["Free parking", "Kids games", "Work-friendly seating", "100% vegetarian"];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b6a3f]">
      <span className="h-px w-8 bg-[#c98a50]" />
      {children}
    </div>
  );
}

function openPhoneApp(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.location.href = phoneHref;
}

export default function App() {
  useRevealOnScroll();

  return (
    <div id="top" className="bg-[#f6efe4] text-[#2a1d12]">
      <header className="ios-hero relative overflow-hidden bg-[#21160e] text-[#fff6e8]">
        <img
          src={images.hero}
          alt="Main dining area of Nature's Coffee Cafe"
          className="hero-image absolute inset-0 h-full w-full object-cover brightness-[0.5] saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#160d08]/88 via-[#160d08]/64 to-[#160d08]/42" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160d08]/25 via-transparent to-[#160d08]/88" />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
          <a href="#top" className="font-display text-xl font-semibold sm:text-2xl">
            Nature's <span className="italic text-[#f3c784]">Coffee</span>
          </a>
          <div className="hidden gap-7 text-xs uppercase tracking-[0.22em] text-[#ecd7bd] md:flex">
            <a href="#vibe" className="hover:text-[#f3c784]">Vibe</a>
            <a href="#menu" className="hover:text-[#f3c784]">Menu</a>
            <a href="#visit" className="hover:text-[#f3c784]">Visit</a>
          </div>
        </nav>

        <div className="ios-hero-content relative z-10 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-10 sm:px-6 md:pb-14 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <p className="fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[#f3c784]">
              Sector 127, Kharar - vegetarian specialty cafe
            </p>
            <h1 className="fade-up font-display text-4xl font-medium leading-[1.04] text-[#fff3df] drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Coffee, calm, and a better pause.
            </h1>
            <p className="fade-up max-w-2xl text-base leading-relaxed text-[#f5e7d3] drop-shadow md:text-xl">
              Nature's Coffee Cafe is a peaceful work-friendly, family-friendly cafe in SBP City Square, Kharar,
              made for good coffee, vegetarian comfort food, and unhurried moments.
            </p>
            <a
              href="#visit"
              className="touch-target fade-up inline-flex w-full items-center justify-center bg-[#f3c784] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#2a1d12] transition hover:bg-[#fff3df] sm:w-auto"
            >
              Plan your visit
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/20 pt-6 text-[11px] uppercase tracking-[0.18em] text-[#ecd7bd] sm:grid-cols-4">
            {trustItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="vibe" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div className="reveal-on-scroll overflow-hidden">
            <img
              src={images.cozy}
              alt="Cozy seating corner inside Nature's Coffee Cafe"
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              loading="lazy"
            />
          </div>
          <div className="reveal-on-scroll space-y-7">
            <SectionLabel>The Experience</SectionLabel>
            <h2 className="font-display text-3xl font-light leading-[1.1] sm:text-4xl md:text-5xl">
              A calm cafe that still feels alive.
            </h2>
            <p className="max-w-2xl leading-relaxed text-[#4a3728]">
              Created as a blissful gift to taste buds, Nature's Coffee Cafe brings together specialty coffee, a
              100% vegetarian menu, cozy nature-inspired ambience, and enough quiet to actually enjoy your time.
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {audienceMoments.map((moment) => (
                <article key={moment.title} className="border-t border-[#d9c8b2] pt-4">
                  <h3 className="font-display text-xl font-semibold text-[#2a1d12]">{moment.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a3728]">{moment.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#efe4d2] px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-on-scroll grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-4">
                <SectionLabel>Why Visit</SectionLabel>
                <h2 className="font-display text-3xl font-light leading-[1.1] sm:text-4xl">
                  Quick reasons guests come back.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {whyPoints.map((point) => (
                  <p key={point} className="border-b border-[#d3bea4] pb-3 text-sm leading-relaxed text-[#4a3728]">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:px-10">
          <div className="reveal-on-scroll space-y-6">
            <SectionLabel>Menu Highlights</SectionLabel>
            <h2 className="font-display text-3xl font-light leading-[1.1] sm:text-4xl md:text-5xl">
              Short menu, big favourites.
            </h2>
            <p className="leading-relaxed text-[#4a3728]">
              From Flat White and Mocha to Tandoori Pizza, Biscoff Pancakes, fresh salads and bright coolers, the menu
              balances indulgent cafe cravings with lighter vegetarian options.
            </p>
            <a
              href={menuPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="touch-target inline-flex w-full items-center justify-center bg-[#2a1d12] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#f6efe4] transition hover:bg-[#9b6a3f] sm:w-auto"
            >
              Browse Full Menu
            </a>
          </div>

          <div className="reveal-on-scroll grid gap-4">
            <img
              src={images.wall}
              alt="Nature's Coffee Cafe signature wall logo"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {menuHighlights.map((item) => (
                <article key={item.group} className="border-t border-[#d9c8b2] pt-4">
                  <h3 className="font-display text-xl font-semibold text-[#2a1d12]">{item.group}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4a3728]">{item.items}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2a1d12] px-4 py-14 text-[#f6efe4] sm:px-6 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="reveal-on-scroll flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-4">
                <SectionLabel>Guest Love</SectionLabel>
                <h2 className="font-display text-3xl font-light leading-[1.1] sm:text-4xl">
                  Rated 4.9/5 by 59 guests.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#e6d2b9]">
                The repeated praise is simple: peaceful vibe, good coffee, family comfort, and food worth coming back for.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {reviews.map((review) => (
                <blockquote key={review.name} className="border-t border-[#6d4622] pt-4">
                  <p className="text-sm leading-relaxed text-[#e6d2b9]">"{review.quote}"</p>
                  <p className="mt-3 font-display text-lg text-[#f3c784]">{review.name} - 5/5</p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="visit" className="bg-[#1a1109] px-4 py-14 text-[#e9d5b7] sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <SectionLabel>Visit Today</SectionLabel>
            <h2 className="font-display text-4xl font-light leading-[1.06] text-[#f6efe4] sm:text-5xl">
              Come by for coffee, food, or a quiet table.
            </h2>
            <div className="grid gap-5 text-sm leading-relaxed sm:grid-cols-2">
              <p>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c98a50]">Address</span>
                Lower Ground, SBP City Square, SCO 20A, Kharar-Landran Road, Sector 127, SAS Nagar, Punjab 140307
              </p>
              <p>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c98a50]">Hours</span>
                Daily 10:00 AM to 10:00 PM
              </p>
              <p>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c98a50]">Serving</span>
                Kharar, Mohali, Chandigarh, Panchkula and Landran
              </p>
              <p>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c98a50]">Phone</span>
                <a href={phoneHref} onClick={openPhoneApp} className="text-[#f6efe4] hover:text-[#f3c784]">{contactNumber}</a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={phoneHref} onClick={openPhoneApp} aria-label={`Call Nature's Coffee Cafe at ${contactNumber}`} className="touch-target w-full bg-[#f3c784] px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-[#1a1109] transition hover:bg-[#f6efe4] sm:w-auto">
                Call Now
              </a>
              <a href={orderUrl} target="_blank" rel="noreferrer" className="touch-target w-full border border-[#f3c784] px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-[#f3c784] transition hover:bg-[#f3c784] hover:text-[#1a1109] sm:w-auto">
                Start Order
              </a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="touch-target w-full border border-[#e9d5b7] px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-[#f6efe4] transition hover:bg-[#f6efe4] hover:text-[#1a1109] sm:w-auto">
                Open Maps
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="touch-target w-full border border-[#e9d5b7] px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-[#f6efe4] transition hover:bg-[#f6efe4] hover:text-[#1a1109] sm:w-auto">
                Instagram
              </a>
            </div>
          </div>

          <div className="space-y-6 border-t border-[#3b2819] pt-6 lg:border-t-0 lg:pt-0">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c98a50]">Services</p>
              <p className="mt-2 text-sm leading-relaxed text-[#f6efe4]">{services.join(" / ")}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c98a50]">Amenities</p>
              <p className="mt-2 text-sm leading-relaxed text-[#f6efe4]">{amenities.join(" / ")}</p>
            </div>
            <p className="font-display text-xl italic text-[#f3c784]">@natures.coffee.cafe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}