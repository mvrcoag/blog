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
        Proyectos
      </h1>
      <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300">
        Herramientas y recursos open source para la comunidad de desarrolladores
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="mb-8">
          Creo firmemente en el poder del código abierto. Estos proyectos reflejan mi
          pasión por las arquitecturas limpias, los patrones de diseño, y crear herramientas
          que hagan la vida más fácil a otros desarrolladores.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Proyectos destacados</h2>

        <ProjectCard
          title="clegen"
          description="Herramienta CLI para generar módulos con arquitectura limpia en proyectos TypeScript. Acelera el desarrollo siguiendo principios SOLID y patrones de diseño establecidos."
          stars={21}
          forks={4}
          tech={["TypeScript", "CLI", "Clean Architecture", "Code Generation"]}
          url="https://github.com/mvrcoag/clegen"
        />

        <ProjectCard
          title="nodejs-express-hexagonal-architecture"
          description="Implementación de referencia de arquitectura hexagonal (Ports & Adapters) con Node.js y Express. Ejemplo práctico de cómo estructurar aplicaciones escalables y mantenibles."
          stars={23}
          forks={3}
          tech={["Node.js", "Express", "TypeScript", "Hexagonal Architecture"]}
          url="https://github.com/mvrcoag/nodejs-express-hexagonal-architecture"
        />

        <ProjectCard
          title="react-hexagonal"
          description="Aplicación de principios de arquitectura hexagonal en el ecosistema React. Demuestra cómo separar la lógica de negocio de los detalles de implementación en aplicaciones frontend."
          stars={5}
          forks={2}
          tech={["React", "TypeScript", "Hexagonal Architecture", "Clean Code"]}
          url="https://github.com/mvrcoag/react-hexagonal"
        />

        <ProjectCard
          title="nodejs-cqrs"
          description="Implementación educativa de Command Query Responsibility Segregation (CQRS) con Node.js, TypeScript, MongoDB y SQLite. Ideal para aprender este patrón arquitectónico."
          stars={4}
          forks={0}
          tech={["Node.js", "TypeScript", "CQRS", "MongoDB", "SQLite"]}
          url="https://github.com/mvrcoag/nodejs-cqrs"
        />

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">Stack técnico</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Lenguajes</h3>
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
            <h3 className="text-lg font-semibold mb-3">Infraestructura & DevOps</h3>
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
            <strong>¿Interesado en colaborar?</strong>
          </p>
          <p className="mb-0">
            Todos estos proyectos están disponibles en{" "}
            <a
              href="https://github.com/marcoagia"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
            >
              GitHub
            </a>
            . Las contribuciones, issues y sugerencias son siempre bienvenidas.
          </p>
        </div>
      </div>
    </section>
  );
}
