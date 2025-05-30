// Corrected imports
import { ArrowDown, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button.jsx"; // Add explicit extension
import ModelGallery from "@/components/ModelGallery";
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation - Simplified for one-pager */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight">
            Helen Batigna
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/helenpurple1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              <span>@helenpurple1</span>
            </a>
            <Button variant="outline" className="hidden md:flex">
              <a href="#contact">Book Now</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl py-16 space-y-28">
        {/* Hero Section */}
        <section className="py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Helen Batigna
              </h1>
              <p className="text-xl text-gray-600 max-w-md leading-relaxed">
                A passionate model based in Accra, Ghana with a distinctive
                presence and versatile portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group">
                  <a href="#contact">Book Me</a>
                </Button>
                <Button variant="outline">
                  <a href="#gallery">
                    View Portfolio
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-md overflow-hidden shadow-xl">
              <img
                src="/images/first.jpg"
                alt="Helen Batigna"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm Helen Batigna, a passionate model with 2 years of experience
              in the fashion industry. Based in Accra, Ghana, I bring elegance,
              professionalism, and versatility to every shoot.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in modeling began when I was discovered at a local
              fashion event. Since then, I've worked with various photographers,
              designers, and brands to create compelling visual stories.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in editorial, commercial, and runway modeling,
              bringing a unique perspective and presence to each project I
              undertake.
            </p>
            {/* Stats/Measurements Subsection */}
            <div className="border-y border-gray-100 py-8">
              <h3 className="text-xl font-semibold mb-6">Measurements</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">Height</p>
                  <p className="text-xl font-medium">5'11"</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">Bust</p>
                  <p className="text-xl font-medium">33"</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">Waist</p>
                  <p className="text-xl font-medium">26"</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">Hips</p>
                  <p className="text-xl font-medium">37"</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">Shoe Size</p>
                  <p className="text-xl font-medium">42 EU</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">Dress Size</p>
                  <p className="text-xl font-medium">8 US</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery with Masonry Grid */}
        <section id="gallery" className="py-16">
          <h2 className="text-3xl font-bold mb-16 text-center">Portfolio</h2>
          <ModelGallery />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>
          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div>
                <h3 className="text-xl font-bold">Accra Fashion Week</h3>
                <p className="text-gray-600">Runway Model</p>
                <p className="text-sm text-gray-500">2022 - 2023</p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Walked for multiple prominent designers during Accra Fashion
                  Week for two consecutive years, showcasing seasonal
                  collections on the main runway.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div>
                <h3 className="text-xl font-bold">
                  Rioh's Graduation Fashion Show
                </h3>
                <p className="text-gray-600">Runway Model</p>
                <p className="text-sm text-gray-500">2022</p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Featured as a runway model for the prestigious Rioh's
                  Graduation Fashion Show, presenting the collections of
                  emerging fashion designers.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div>
                <h3 className="text-xl font-bold">Africa's Model Scout</h3>
                <p className="text-gray-600">Season One Winner</p>
                <p className="text-sm text-gray-500">2021</p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Crowned as the winner of Africa's Model Scout Season One, a
                  competitive modeling contest that showcases the best emerging
                  talent across the continent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-16 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center mb-10">
              I'm currently available for bookings and collaborations. Please
              reach out to discuss your project.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button asChild className="w-full md:w-auto">
                <a
                  href="mailto:hbatigna@gmail.com"
                  className="flex items-center"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  hbatigna@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full md:w-auto">
                <a href="tel:+233552372855" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +233552372855
                </a>
              </Button>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com/helenpurple1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border rounded-full hover:bg-gray-50 transition-colors gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@helenpurple1</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Helen Batigna. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Based in Accra, Ghana
          </p>
        </div>
      </footer>
    </div>
  );
}
