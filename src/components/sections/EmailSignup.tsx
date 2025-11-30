import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { createClient } from '@supabase/supabase-js';
import { useState } from "react";

const supabaseUrl = 'https://olzrrdpjciadmlhejxcz.supabase.co';
const supabaseAnonKey = 'sb_publishable_LqCxgshV3gwMoyTeuE1uig_EYUH8OX9';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function EmailSignup() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from("landing_page_emails")
                .insert([{ email }]);

            if (error) throw error;

            alert("You're in! 🎉");
            setEmail("");
        } catch (error) {
            console.error(error);
            alert("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="signup" className="py-16 md:py-24 relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center bg-sage/90 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-heading mb-4 md:mb-6">Want early access to Reclaim?</h2>
                        <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                            Become a beta tester and get the tools to break the constant checking cycle before anyone else.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="h-11 md:h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                            <Button
                                size="lg"
                                className="h-11 md:h-12 px-6 md:px-8 shadow-lg bg-white text-sage hover:bg-cream border-0 whitespace-nowrap w-full sm:w-auto"
                                disabled={loading}
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <>
                                        Become a Beta Tester <ArrowRight size={18} className="ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                        <p className="text-sm text-white/60 mt-6">
                            Your feedback helps build the future of Reclaim.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
