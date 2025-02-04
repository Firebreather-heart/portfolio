import TypingEffect from './TypingEffect';

export default function About() {
  const text = "I'm a software engineer who builds on web2 and web3, I am passionate about innovation and delivering quality. Always it's Ascende superius!";
  
  return (
    <section className="p-8 text-xl  md:text-4xl text-white w-full max-w-screen-lg mx-auto ">
      <div className="font-mono  mt-4 text-center">
        <TypingEffect text={text} />
      </div>
    </section>
  );
};

