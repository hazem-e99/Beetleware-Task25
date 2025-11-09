import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import photo from "../../assets/images/photo.png";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";
import photo4 from "../../assets/images/photo(1).png";
import { StatsSection } from "./StatsSection.jsx";

const images = [photo, photo2, photo3, photo4];

export function HeroSection() {
  return (
    <section className="min-h-screen md:min-h-[1400px] lg:min-h-[1500px] relative " style={{ zIndex: 60 }}>
      <div className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-[108px] pb-20 min-h-[900px] sm:min-h-[1000px] md:min-h-[1100px] lg:min-h-[1227px] bg-bgPricingSection">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-[8px] py-[4px] rounded-full border-t border-l border-r border-[#3B3B3B] bg-background/100 text-sm font-medium mb-[14px]"
            >
              <span className="pl-[8px] pr-[4px] py-[4px] rounded-full bg-primary text-white">
                New
              </span>
              <span className="text-dynamicBorder">
                Introducing AI Automation
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-[15px]"
            >
              The Finance Solutions
              <br />
              For Your Business
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-neutral-400 text-xl font-normal font-['DM_Sans'] leading-9 mb-[56px] max-w-3xl mx-auto"
            >
              Empower your finance team. The onestop plateform for all financial management of small and medium-sized business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative mx-auto mb-8 sm:mb-12 md:mb-[62px] w-full max-w-[640px] px-4 sm:px-0"
            >
              <div className="relative h-14 sm:h-16 md:h-[72px]">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-full w-full bg-BgInput border-0 pl-4 sm:pl-6 md:pl-8 pr-[140px] sm:pr-[160px] md:pr-[190px] text-sm sm:text-base placeholder:text-textP rounded-full"
                />
                <Button
                  size="lg"
                  className="absolute right-[4px] sm:right-[6px] top-[4px] sm:top-[6px] px-4 sm:px-6 md:px-8 bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm sm:text-base w-[130px] sm:w-[150px] md:w-[176px] h-[46px] sm:h-[52px] md:h-[60px] rounded-full"
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>

            {/* User avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center flex-col gap-2 mb-16"
            >
              <div className="flex -space-x-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-glow border-2 border-background"
                    alt={`User ${index + 1}`}
                  />
                ))}
              </div>
              <span className="text-sm text-textP">
               1,200+ reviews (4.9 of 5)
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-[90px] lg:right-[90px] top-[650px] sm:top-[700px] md:top-[750px] lg:top-[700px]">
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
