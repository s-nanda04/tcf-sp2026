import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-200 font-sans">
      <main className="flex flex-col items-center text-center gap-6 max-w-xl">
        
        <img
          src="/headshot_2.jpg"
          alt="Profile photo"
          className="w-70 h-85 rounded-2xl object-cover shadow-md"
        />

        <h1 className="text-4xl font-bold text-zinc-900 dark:text-black underline underline-offset-4">
          Shreya Nanda
        </h1>

        <p className="text-lg text-zinc-600 dark:text-black leading-relaxed">
          Hi! I'm Shreya and I am a second year computer science student concentrating in AI with a minor in marketing. 
          I am super interested in art and anything creative which is what drew me to computer science. 
          I love to create the unthinkable and see the results come to life. 
        </p>

        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/s-nanda04"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium hover:opacity-80 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shreya-nanda-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium hover:opacity-80 transition"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
