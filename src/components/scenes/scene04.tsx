import { MotionValue, motion, useAnimation } from 'framer-motion';
import Section from '../layout/Section';

type Props = React.PropsWithChildren<{
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}>;

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;
  const writingAnimation = useAnimation();

  const onInView = async () => {
    await writingAnimation.start({
      opacity: [0, 1],
    });
  };

  return (
    <Section
      scrollYProgress={scrollYProgress}
      start={start}
      end={end}
      ariaLabel="scene04"
      onInView={onInView}
    >
      <motion.div
        className="m-auto bg-gray-800 max-w-96 h-60 rounded-lg shadow-xl"
        initial={{ transform: 'rotateX(deg)' }}
      >
        <div className="bg-gray-800 max-w-96 h-60 rounded-lg shadow-xl relative">
          <div className="bg-black w-full h-full rounded-t-lg p-[12px]">
            <p>
              {'저는 사용자의 요구사항을 기반으로 가능하다면 모든 플랫폼에서 개발을 하고 싶었습니다.  그래서 데스크탑에서 웹/앱 개발을 경험할 수 있었습니다.'
                .split('')
                .map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={writingAnimation}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el === ' ' ? '\u00A0' : el}
                  </motion.span>
                ))}
            </p>
          </div>
          <div className="w-24 h-3 bg-gray-600 rounded-b-full mx-auto -mt-3 self-center"></div>
        </div>
      </motion.div>
    </Section>
  );
};
