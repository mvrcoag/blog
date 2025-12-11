export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-bold tracking-tighter">
        About Me
      </h1>
      <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300">
        Developer, systems architect, and lifelong learner
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="text-2xl font-semibold mb-4 mt-8">My Story</h2>
        <p className="mb-4">
          Since 2019 I have dedicated my career to transforming abstract ideas into real
          and scalable software solutions. What began as a fascination with programming
          has evolved into a passion for creating elegant architectures and systems that
          truly solve problems.
        </p>
        <p className="mb-4">
          My current work at <strong>Finexitus</strong> allows me to apply my knowledge
          in TypeScript, Go, and Python to develop high-performance web solutions.
          Each project is an opportunity to apply clean architecture principles
          and software engineering best practices.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Work Philosophy</h2>
        <p className="mb-4">
          I define my work as <i>turning ideas into reality</i>. For me, code
          is more than a technical skill: it's a form of art that requires creativity,
          precision, and vision.
        </p>
        <p className="mb-4">
          I firmly believe in:
        </p>
        <ul className="mb-4 ml-6 list-disc">
          <li><strong>Clean and maintainable code</strong> — Well-designed architectures are the foundation of scalable systems</li>
          <li><strong>Open Source</strong> — Sharing knowledge and tools strengthens the entire community</li>
          <li><strong>Continuous learning</strong> — Technology evolves constantly, and we must evolve with it</li>
          <li><strong>Real impact</strong> — The best code is that which solves real problems for real people</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Community Contributions</h2>
        <p className="mb-4">
          I have developed and maintain several open source projects that have helped hundreds
          of developers implement better practices:
        </p>
        <ul className="mb-4 ml-6 list-disc">
          <li><strong>clegen</strong> (21⭐) — CLI tool for generating modules with clean architecture in TypeScript</li>
          <li><strong>nodejs-express-hexagonal-architecture</strong> (23⭐) — Reference implementation of hexagonal architecture</li>
          <li><strong>react-hexagonal</strong> (5⭐) — Application of hexagonal principles in React</li>
          <li><strong>nodejs-cqrs</strong> (4⭐) — Practical example of CQRS with Node.js and TypeScript</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Continuous Education</h2>
        <p className="mb-4">
          Education is an endless journey. I recently completed a{" "}
          <a
            href="https://www.credential.net/51d8aa51-9e6d-4908-a7c2-632db0fc9b61#acc.ntuRKzVm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
          >
            Data Science & AI certification
          </a>
          {" "}at Tecnológico de Monterrey (2025), expanding my capabilities toward
          the world of machine learning and artificial intelligence.
        </p>
        <p className="mb-4">
          Currently I focus on strengthening my knowledge in statistics and mathematics
          applied to AI/ML, exploring how these technologies can integrate with
          robust software architectures.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Beyond Code</h2>
        <p className="mb-4">
          Balance is fundamental. I find mental clarity in my morning gym routines,
          where physical discipline complements the mental discipline of
          software development.
        </p>
        <p className="mb-4">
          My curiosity extends beyond technology: philosophy and politics
          fascinate me for their capacity to help us understand human behavior
          and social structures. This broader perspective enriches my approach to
          problem-solving and designing people-centered solutions.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Let's Connect</h2>
        <p className="mb-4">
          I'm always open to collaborating on interesting projects, discussing
          software architecture, or simply chatting about technology and philosophy.
        </p>
        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/marcoagia"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/marcoagia"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
