import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Chat Smarter, Not Harder with Brainwave" />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((i) => (
            <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{backgroundImage: `url(${i.backgroundUrl})`,}} key={i.id} >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{i.title}</h5>
                <p className="body-2 mb-6 text-n-3">{i.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={i.iconUrl} width={48} height={48} alt={i.title} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore more</p>
                  <Arrow />
                </div>
              </div>

              {i.light && <GradientLight />}

              <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {i.imageUrl && (<img src={i.imageUrl} width={380} height={362} alt={i.title}  className="w-full h-full object-cover"  />)}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;