"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, MessageSquare, Server, Smartphone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getMerchantApi } from "../lib/api/MerchantAPI";
import TarLogo from "@/components/tarLogo";

type Merchant = {
  name: string;
  logo: string;
  // Add other properties if needed
};

const merchantData: Merchant[] = [
  {
    name: "Manado Siar",
    logo: "/manadosiar.png",
  },
  {
    name: "Wealthy People Indonesia",
    logo: "/wealthypeople.png",
  },
  {
    name: "Harvest Agro Nusantara",
    logo: "/orispices.png",
  },
  {
    name: "Utuxia Photo",
    logo: "/utuxia.png",
  },
  {
    name: "Blessing Vanilla Indonesia",
    logo: "/blessing.png",
  },
  {
    name: "Mayesa Cocopro Indonesia",
    logo: "/mayesa.png",
  },
];

export default function Home() {
  const [merchant, setMerchant] = useState<Merchant[]>([]);
  console.log("Merchant state initialized: ", merchant);

  async function getMerchantsList() {
    const response = await getMerchantApi();
    const data = await response.json();

    console.log("Response from API: ", data);
    console.log("Response status: ", response.status);

    if (response.status === 200) {
      setMerchant(data.data);
      // console.log('Merchant data fetched successfully: ', merchant);
    } else {
      throw new Error(`HTTP error! status: lost`);
    }
  }

  useEffect(() => {
    getMerchantsList().then(() => console.log("Merchant data fetched . . ."));
  }, []);

  return (
    <div className="min-h-screen text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Layers className="h-8 w-8 text-purple-500" /> */}
            <TarLogo className="text-purple-500" />
            <span className="text-xl font-bold">Tunas Abadi Raya</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link href="#clients" className="text-sm hover:text-purple-400 transition-colors">
              Clients
            </Link>
            <Link href="#contact" className="text-sm hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-zinc-950"></div>
          <div className="max-w-screen-xl mx-auto px-4 relative z-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Building <span className="text-purple-500">Digital Solutions</span> For Your
                  Business
                </h1>
                <p className="text-lg text-zinc-400 max-w-md">
                  We create custom applications that transform your business processes and drive
                  growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">Our Services</Button>
                  <Button
                    variant="outline"
                    className="border-purple-700 text-purple-400 hover:bg-purple-950">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/ic.jpg?height=400&width=500"
                    alt="Digital Solutions"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-purple-600 p-4 rounded-lg shadow-xl">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-zinc-800 p-4 rounded-lg shadow-xl">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-zinc-900">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We offer a comprehensive range of IT solutions to help your business thrive in the
                digital landscape.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Code className="h-10 w-10 text-purple-500" />,
                  title: "Custom Software Development",
                  description:
                    "Tailored software solutions designed to meet your specific business requirements.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-purple-500" />,
                  title: "Web Application Development",
                  description:
                    "Responsive and scalable web applications built with modern technologies.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-purple-500" />,
                  title: "Mobile App Development",
                  description: "Native and cross-platform mobile applications for iOS and Android.",
                },
                {
                  icon: <Database className="h-10 w-10 text-purple-500" />,
                  title: "Database Design & Management",
                  description:
                    "Efficient database architecture and management for optimal performance.",
                },
                {
                  icon: <Server className="h-10 w-10 text-purple-500" />,
                  title: "Cloud Solutions",
                  description: "Secure and scalable cloud infrastructure setup and management.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-purple-500" />,
                  title: "IT Consulting",
                  description:
                    "Strategic technology consulting to help you make informed decisions.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-800/80 transition-colors border border-zinc-700 hover:border-purple-700">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative">
                <div className="relative h-[500px] w-full">
                  <Image
                    src="/tar-office.png?height=500&width=500"
                    alt="About Us"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 right-6 bg-purple-600 p-6 rounded-lg shadow-xl max-w-xs">
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-sm text-zinc-200">
                    To empower businesses through innovative technology solutions that drive growth
                    and efficiency.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
                <p className="text-zinc-400">
                  We are a team of passionate IT professionals dedicated to helping businesses
                  leverage technology to achieve their goals. With over a decade of experience, weve
                  helped companies of all sizes transform their operations through custom software
                  solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-500">10+</div>
                    <div className="text-sm text-zinc-400">Expert Developers</div>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-500">98%</div>
                    <div className="text-sm text-zinc-400">Client Satisfaction</div>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-500">24/7</div>
                    <div className="text-sm text-zinc-400">Support Available</div>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-500">5+</div>
                    <div className="text-sm text-zinc-400">Years Experience</div>
                  </div>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">Learn More About Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-zinc-900">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Take a look at some of our recent projects that have helped businesses transform
                their operations.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  image: "/temp_img.png?height=300&width=400",
                  title: "Food Order E-Commerce Platform",
                  category: "Web Development",
                  description:
                    "A custom e-commerce solution with integrated payment processing and inventory management.",
                },
                {
                  image: "/temp_img.png?height=300&width=400",
                  title: "POS System",
                  category: "Software Development",
                  description:
                    "A comprehensive system for managing patient records, appointments, and billing.",
                },
                {
                  image: "/temp_img.png?height=300&width=400",
                  title: "Logistics Tracking App",
                  category: "Mobile Development",
                  description:
                    "Real-time tracking and management of delivery fleet with analytics dashboard.",
                },
                {
                  image: "/temp_img.png?height=300&width=400",
                  title: "Financial Analytics Dashboard",
                  category: "Data Visualization",
                  description: "Interactive dashboard for financial data analysis and reporting.",
                },
                {
                  image: "/temp_img.png?height=300&width=400",
                  title: "HR Management Portal",
                  category: "Web Application",
                  description:
                    "Employee management system with performance tracking and payroll integration.",
                },
                {
                  image: "/temp_img.png?height=300&width=400",
                  title: "Manado Cuisine Marketplace",
                  category: "Web Development",
                  description: "Property listing platform with virtual tours and agent management.",
                },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-zinc-400 text-sm hidden group-hover:block transition-all">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-purple-700 text-purple-400 hover:bg-purple-950">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Here is our trustful clients. You may know some of them.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {merchantData.map((data, index) => (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 mr-4">
                      <Image
                        src={data.logo}
                        alt={data.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{data.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="pb-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Dont just take our word for it. Heres what our clients have to say about working
                with us.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "The team at Tunas Abadi Raya delivered our project on time and exceeded our expectations. Their attention to detail and technical expertise is impressive.",
                  name: "Rolly",
                  position: "CEO, Manadosiar.",
                  image: "/rolly-manadosiar.jpg?height=100&width=100",
                },
                {
                  quote:
                    "Working with Tunas Abadi Raya transformed our business processes. The custom software they developed has increased our efficiency by 40%.",
                  name: "Daniel",
                  position: "CEO, Harvest Agro Nusantara.",
                  image: "/daniel-harvest.png?height=100&width=100",
                },
                {
                  quote:
                    "The mobile app developed by Tunas Abadi Raya has received excellent feedback from our users. Their team was responsive and professional throughout the project.",
                  name: "Chero",
                  position: "CEO, Wealthy People",
                  image: "/chero-wp.png?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                  <div className="mb-6">
                    <svg
                      className="h-8 w-8 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-zinc-300 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-zinc-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-zinc-900">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-zinc-400 mb-8">
                  Ready to discuss your project? Contact us today and lets start building your
                  digital solution.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-600 p-3 rounded-lg mr-4">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-zinc-400">info@tunasabadiraya.cv</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600 p-3 rounded-lg mr-4">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Text Us (WA only)</h3>
                      <p className="text-zinc-400">+62 (821) 955-00236</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600 p-3 rounded-lg mr-4">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <p className="text-zinc-400">
                        Malalayang Satu Timur, Manado
                        <br />
                        Sulawesi Utara
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="bg-linear-to-r from-purple-900 to-purple-700 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-zinc-200 max-w-2xl mx-auto mb-8">
                Lets work together to build the perfect digital solution for your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-purple-500 hover:bg-zinc-200">Get Started</Button>
                <Button variant="outline" className="border-white text-white hover:bg-purple-800">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-bold">Tunas Abadi Raya</span>
              </div>
              <p className="text-zinc-400 mb-6">
                Building innovative digital solutions for businesses of all sizes.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-zinc-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-zinc-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-zinc-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-zinc-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Custom Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Web Application Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Database Design & Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    IT Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-zinc-400 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Tunas Abadi Raya. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-zinc-400 hover:text-purple-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-400 hover:text-purple-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-zinc-400 hover:text-purple-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
