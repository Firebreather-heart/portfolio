import TypingEffect from './TypingEffect';

export default function About() {
  const text = "I'm a software engineer who builds on web2 and web3, I am passionate about innovation and delivering quality. Always it's Ascende superius!";
  
  return (
    <section className="h-40 p-8 text-4xl text-white w-full max-w-screen-lg mx-auto ">
      <div className="font-mono text-4xl mt-4 text-center">
        <TypingEffect text={text} />
      </div>
    </section>
  );
};

