import { getTranslations } from "next-intl/server";
import { personal } from "@data/personal";
import { ImageWithFallback } from "../atoms/ImageWithFallback";
import { ProfileAmbientOrbs } from "./ProfileAmbientOrbs";
import { FadeInView } from "../motion/thin";

export async function ProfileSection() {
  const t = await getTranslations("about");
  const tHero = await getTranslations("hero");

  return (
    <section className="py-[7.5rem] px-9 bg-[#090E1B] relative overflow-hidden">
      <ProfileAmbientOrbs />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <FadeInView
            className="relative mb-24"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="wave-container"
                width="600"
                height="600"
                viewBox="0 0 400 400"
              >
                <path
                  className="wave-path wave-path-1"
                  d="M 200,50 C 280,50 320,90 350,150 C 380,210 380,240 350,300 C 320,360 280,400 200,400 C 120,400 80,360 50,300 C 20,240 20,210 50,150 C 80,90 120,50 200,50"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="3.75"
                  opacity="0.7"
                  strokeLinecap="round"
                />
                <path
                  className="wave-path wave-path-2"
                  d="M 200,80 C 270,80 300,110 325,160 C 350,210 350,240 325,290 C 300,340 270,370 200,370 C 130,370 100,340 75,290 C 50,240 50,210 75,160 C 100,110 130,80 200,80"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="3"
                  opacity="0.5"
                  strokeLinecap="round"
                />
                <path
                  className="wave-path wave-path-3"
                  d="M 200,110 C 260,110 285,130 305,170 C 325,210 325,240 305,280 C 285,320 260,340 200,340 C 140,340 115,320 95,280 C 75,240 75,210 95,170 C 115,130 140,110 200,110"
                  fill="none"
                  stroke="#0EA5E9"
                  strokeWidth="2.25"
                  opacity="0.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative w-72 h-72 rounded-full overflow-hidden border-[6px] border-[#06B6D4] shadow-2xl shadow-[#06B6D4]/50 z-10">
              <ImageWithFallback
                src={personal.profileImageUrl}
                alt={tHero("profileImageAlt", { name: personal.fullName })}
                className="w-full h-full object-cover"
                width={600}
                height={600}
              />
            </div>
          </FadeInView>

          <FadeInView
            className="space-y-6"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FadeInView
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mt-3">
                {t("title")}
              </h2>
            </FadeInView>
            <FadeInView
              className="text-lg text-gray-400 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t("bio1", { years: personal.yearsExperience })}
            </FadeInView>
            <FadeInView
              className="text-lg text-gray-400 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t("bio2")}
            </FadeInView>
          </FadeInView>
        </div>
      </div>

      <style>{`
        .wave-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 0 12px rgba(6, 182, 212, 0.3));
        }

        @keyframes wave-morph-1 {
          0%, 100% {
            d: path("M 200,50 C 280,50 320,90 350,150 C 380,210 380,240 350,300 C 320,360 280,400 200,400 C 120,400 80,360 50,300 C 20,240 20,210 50,150 C 80,90 120,50 200,50");
          }
          16% {
            d: path("M 200,50 C 285,55 325,95 355,155 C 375,205 375,245 345,295 C 315,355 275,395 200,400 C 125,395 85,355 55,295 C 25,245 25,205 55,155 C 85,95 125,55 200,50");
          }
          33% {
            d: path("M 200,50 C 275,60 315,100 345,160 C 370,215 370,235 340,290 C 310,350 270,390 200,400 C 130,390 90,350 60,290 C 30,235 30,215 60,160 C 90,100 130,60 200,50");
          }
          50% {
            d: path("M 200,50 C 290,52 318,88 348,148 C 378,212 378,238 352,302 C 322,358 282,398 200,400 C 118,398 78,358 48,302 C 22,238 22,212 52,148 C 82,88 122,52 200,50");
          }
          66% {
            d: path("M 200,50 C 282,58 322,92 352,152 C 382,208 382,242 348,298 C 318,356 278,396 200,400 C 122,396 82,356 52,298 C 18,242 18,208 48,152 C 78,92 118,58 200,50");
          }
          83% {
            d: path("M 200,50 C 278,53 316,94 346,154 C 376,211 376,239 348,296 C 316,354 276,394 200,400 C 124,394 84,354 54,296 C 24,239 24,211 54,154 C 84,94 124,53 200,50");
          }
        }

        @keyframes wave-morph-2 {
          0%, 100% {
            d: path("M 200,80 C 270,80 300,110 325,160 C 350,210 350,240 325,290 C 300,340 270,370 200,370 C 130,370 100,340 75,290 C 50,240 50,210 75,160 C 100,110 130,80 200,80");
          }
          20% {
            d: path("M 200,80 C 275,82 305,115 330,165 C 345,205 345,245 320,285 C 295,335 265,368 200,370 C 135,368 105,335 80,285 C 55,245 55,205 80,165 C 105,115 135,82 200,80");
          }
          40% {
            d: path("M 200,80 C 265,85 295,118 320,168 C 340,213 340,237 315,283 C 290,333 260,365 200,370 C 140,365 110,333 85,283 C 60,237 60,213 85,168 C 110,118 140,85 200,80");
          }
          60% {
            d: path("M 200,80 C 272,83 302,112 327,162 C 348,208 348,242 323,288 C 298,336 268,367 200,370 C 132,367 102,336 77,288 C 52,242 52,208 77,162 C 102,112 132,83 200,80");
          }
          80% {
            d: path("M 200,80 C 268,87 298,116 323,166 C 343,211 343,239 318,286 C 293,334 263,366 200,370 C 137,366 107,334 82,286 C 57,239 57,211 82,166 C 107,116 137,87 200,80");
          }
        }

        @keyframes wave-morph-3 {
          0%, 100% {
            d: path("M 200,110 C 260,110 285,130 305,170 C 325,210 325,240 305,280 C 285,320 260,340 200,340 C 140,340 115,320 95,280 C 75,240 75,210 95,170 C 115,130 140,110 200,110");
          }
          25% {
            d: path("M 200,110 C 265,112 290,133 310,173 C 320,207 320,243 300,277 C 280,317 255,338 200,340 C 145,338 120,317 100,277 C 80,243 80,207 100,173 C 120,133 145,112 200,110");
          }
          50% {
            d: path("M 200,110 C 255,115 280,135 300,175 C 315,213 315,237 295,275 C 275,315 250,335 200,340 C 150,335 125,315 105,275 C 85,237 85,213 105,175 C 125,135 150,115 200,110");
          }
          75% {
            d: path("M 200,110 C 262,113 287,132 307,172 C 322,211 322,239 302,278 C 282,318 257,337 200,340 C 143,337 118,318 98,278 C 78,239 78,211 98,172 C 118,132 143,113 200,110");
          }
        }

        .wave-path-1 {
          animation: wave-morph-1 8s ease-in-out infinite;
        }

        .wave-path-2 {
          animation: wave-morph-2 6s ease-in-out infinite;
          animation-delay: -1s;
        }

        .wave-path-3 {
          animation: wave-morph-3 10s ease-in-out infinite;
          animation-delay: -2s;
        }
      `}</style>
    </section>
  );
}
