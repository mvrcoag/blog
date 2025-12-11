function ProjectCard({
  title,
  description,
  stars,
  forks,
  tech,
  url
}: {
  title: string;
  description: string;
  stars: number;
  forks: number;
  tech: string[];
  url: string;
}) {
  return (
    <div className="mb-8 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-600 dark:hover:text-neutral-400"
          >
            {title}
          </a>
        </h3>
        <div className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <span>⭐ {stars}</span>
          <span>🔱 {forks}</span>
        </div>
      </div>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-bold tracking-tighter">
        Projects
      </h1>
      <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300">
        Open source tools and resources for the developer community
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="mb-8">
          I firmly believe in the power of open source. These projects reflect my
          passion for clean architectures, design patterns, and creating tools
          that make life easier for other developers.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>

        <ProjectCard
          title="clegen"
          description="CLI tool for generating modules with clean architecture in TypeScript projects. Accelerates development by following SOLID principles and established design patterns."
          stars={21}
          forks={4}
          tech={["TypeScript", "CLI", "Clean Architecture", "Code Generation"]}
          url="https://github.com/mvrcoag/clegen"
        />

        <ProjectCard
          title="nodejs-express-hexagonal-architecture"
          description="Reference implementation of hexagonal architecture (Ports & Adapters) with Node.js and Express. Practical example of how to structure scalable and maintainable applications."
          stars={23}
          forks={3}
          tech={["Node.js", "Express", "TypeScript", "Hexagonal Architecture"]}
          url="https://github.com/mvrcoag/nodejs-express-hexagonal-architecture"
        />

        <ProjectCard
          title="react-hexagonal"
          description="Application of hexagonal architecture principles in the React ecosystem. Demonstrates how to separate business logic from implementation details in frontend applications."
          stars={5}
          forks={2}
          tech={["React", "TypeScript", "Hexagonal Architecture", "Clean Code"]}
          url="https://github.com/mvrcoag/react-hexagonal"
        />

        <ProjectCard
          title="nodejs-cqrs"
          description="Educational implementation of Command Query Responsibility Segregation (CQRS) with Node.js, TypeScript, MongoDB, and SQLite. Ideal for learning this architectural pattern."
          stars={4}
          forks={0}
          tech={["Node.js", "TypeScript", "CQRS", "MongoDB", "SQLite"]}
          url="https://github.com/mvrcoag/nodejs-cqrs"
        />

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "JavaScript", "Go", "Python", "PHP", "Lua", "Bash"].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Vue.js", "Angular", "Vite"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "NestJS", "Express", "Laravel", "Electron"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Data & AI</h3>
            <div className="flex flex-wrap gap-2">
              {["Pandas", "NumPy", "scikit-learn", "BigQuery ML", "OpenAI API", "Anthropic API", "Gemini API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Infrastructure & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {["Docker", "AWS", "Nginx", "PostgreSQL", "MongoDB", "SQLite"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Testing</h3>
            <div className="flex flex-wrap gap-2">
              {["Jest", "Testing Library"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <p className="mb-4">
            <strong>Interested in collaborating?</strong>
          </p>
          <p className="mb-0">
            All these projects are available on{" "}
            <a
              href="https://github.com/marcoagia"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
            >
              GitHub
            </a>
            . Contributions, issues, and suggestions are always welcome.
          </p>
        </div>
      </div>
    </section>
  );
}
