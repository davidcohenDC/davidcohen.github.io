import Avatar from './avatar';
import GreetingSwitcher from './greeting-switcher';

const Hero = () => {
  return (
      <section>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Avatar />
          <div className="ml-0 md:ml-16">
            <GreetingSwitcher />

            <h1 className="text-2xl font-normal leading-10">
            <span className="block">
              I am{' '}
              <span className="animate-up cursor-default bg-gradient-to-r from-secondary to-secondary font-bold tracking-widest">
                Dr.&nbsp;David&nbsp;Cohen
              </span>
              , a software engineer&nbsp;&amp;&nbsp;researcher
            </span>
              from Bologna, Italy, who thrives where machine&nbsp;learning, natural-language&nbsp;processing, and
              robust back-end architecture meet.
              <span className="mt-3 block">
              I’m passionate about building production-ready intelligent software that improves lives around the globe.
            </span>
            </h1>
          </div>
        </div>

        {/* Decorative background blob */}
        <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
        >
          <div
              className="aspect-[1155/678] w-[70rem] bg-gradient-to-tr from-secondary to-primary opacity-[0.15]"
              style={{
                clipPath:
                    'polygon(74.1% 44.1%, 90% 61.6%, 90.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 59.5% 27.5%, 74.2% 61.4%, 29.4% 68.1%, 65% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 10.1% 40.9%, 17.9% 100%, 77.6% 78%, 76.1% 83.7%, 86.1% 50%)',
              }}
          />
        </div>
      </section>
  );
};

export default Hero;
