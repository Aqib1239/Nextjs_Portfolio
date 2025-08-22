"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nawaz Shareef Shaik",
    role: "Manager, Yatiken Software Solutions",
    feedback:
      "Aqib is a dedicated MERN developer with strong problem-solving skills. He contributed significantly to our projects like ShipDuniya and PrintNParcel.",
    initials: "NS",
    bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
    rating: 5,
  },

  {
    name: "Ram Chandel",
    role: "Teammate",
    feedback:
      "Working with Aqib was a great experience. He is collaborative, quick to learn, and always focused on delivering quality work.",
    initials: "RC",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
    rating: 5,
  },
  {
    name: "Sarvesh Srivastava",
    role: "Trainer, QSpiders",
    feedback:
      "During his MERN stack training, Aqib showed excellent grasp of concepts and built real-world projects with enthusiasm.",
    initials: "SS",
    bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="pt-20 pb-10 relative overflow-hidden">
      {/* Gradient border with opacity fade from sides */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/80 to-transparent dark:via-gray-700/80"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Header */}
        <div className="mb-16">
          <h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="section-title mb-4 text-center mx-auto"
          >
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from colleagues and mentors who've worked with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl dark:bg-[#32334C] transition-all duration-500 border dark:border-[#3b3b3b] shadow-lg backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote size={40} className="text-blue-600" />
                </div>

                {/* User Avatar */}
                <div className="flex flex-col items-center mb-6">
                  <div
                    className={`w-16 h-16 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {testimonial.initials}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="space-y-4">
                  <p className="dark:text-gray-400 leading-relaxed text-sm md:text-base italic font-medium">
                    "{testimonial.feedback}"
                  </p>

                  <div className="pt-4 flex flex-col gap-0 relative">
                    {/* Gradient border with opacity fade from sides */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400/80 to-transparent dark:via-gray-500/80"></div>

                    <h4 className="font-bold text-lg dark:text-white mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm dark:text-gray-400 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
