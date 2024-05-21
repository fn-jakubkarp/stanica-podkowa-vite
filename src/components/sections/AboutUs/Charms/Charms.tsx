import nocne_niebo from "../../../../assets/nocne_niebo.webp";

import { animated } from "@react-spring/web";
import useInViewTrailAnimation from "../../../../hooks/useInViewTrailAnimation";
interface CharmsProps {}

const Charms: React.FC<CharmsProps> = ({}) => {
  const letters = ["P", "O", "Z", "N", "A", "J"];
  const words = ["NASZE", "UROKI"];

  const { ref: lettersRef, trail: lettersTrail } = useInViewTrailAnimation(
    letters,
    200,
  );
  const { ref: wordsRef, trail: wordsTrail } = useInViewTrailAnimation(
    words,
    400,
  );

  return (
    <>
      <animated.section
        className="flex flex-col w-full items-center justify-center py-8 my-6 gap-y-12 h-full"
        ref={lettersRef}
      >
        <div className="relative inline-block text-7xl self-end pr-4">
          {lettersTrail.map((props, index) => (
            <animated.span
              key={index}
              className="text-text-LIGHT pr-1"
              style={props}
            >
              {letters[index]}
            </animated.span>
          ))}

          <animated.div
            ref={wordsRef}
            className="absolute inset-0 text-xl text-text-DARK font-thin flex items-end justify-end pr-6"
          >
            {wordsTrail.map((props, index) => (
              <animated.span key={index} className="mr-1" style={props}>
                {words[index]}
              </animated.span>
            ))}
          </animated.div>
        </div>
        <img
          src={nocne_niebo}
          alt="Zdjęcie nocnego nieba"
          className="h-[150px] w-[350px] object-cover self-start"
        />
        <animated.div className="text-text-DARK text-3xl -mt-6 font-light">
          <span className="">PRAWDZIWA </span>
          <span className="">PERFEKCJA.</span>
        </animated.div>
      </animated.section>
    </>
  );
};

export default Charms;
