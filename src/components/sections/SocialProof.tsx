import { Card, CardContent } from "../ui/Card";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Reclaim made me realize how often I was checking my phone without even thinking about it. After a week of using it, I finally felt like my mind had space again. I get more done, but more importantly… I feel calmer.",
        author: "Maya L.",
        role: "Product Marketer"
    },
    {
        quote: "I used to grab my phone every time I felt stressed. Reclaim helped me break that loop. The focus sessions are the first thing that’s actually helped me stay off my phone and be present. I feel more in control of my time than I have in years.",
        author: "Jordan S.",
        role: "Freelance Designer"
    },
    {
        quote: "I didn’t need another productivity app telling me to do more. I needed something that would help me disconnect. Reclaim gave me back hours of real life time every week, time I wasn’t even aware I was losing.",
        author: "Daniel P.",
        role: "Software Engineer"
    }
];

export function SocialProof() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3 md:mb-4 text-black">Trusted by people who wanted their time back</h2>
                    <div className="flex justify-center gap-2 text-sage">
                        {/* Add stars or other elements if needed, otherwise just the text is fine */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-white/20 border-white/30 backdrop-blur-sm">
                                <CardContent className="pt-6">
                                    <p className="text-lg mb-6 text-black/80 italic">"{testimonial.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <p className="font-bold text-sm">{testimonial.author}</p>
                                            <p className="text-xs text-black/50">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
