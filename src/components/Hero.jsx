import jester from "../assets/jester.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex flex-col gap-2 items-center font-inter border-black border-2">
          <img src={jester} alt="logo.pic" className="w-14 object-contain" />
          <p className="text-l bg-black text-yellow-50">Mr Jister</p>
        </div>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/aniket30i/MagicSummary")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
