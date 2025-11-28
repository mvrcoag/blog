import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-bold tracking-tighter">
        Marco A. García
      </h1>
      <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300">
        Full Stack Developer & Systems Architect
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-6 text-base">
          Defino mi trabajo como <i>convertir ideas en realidades</i>. Para mí, el
          código es más que una habilidad: es una forma de arte que permite transformar
          conceptos abstractos en soluciones tangibles con el potencial de impactar
          a miles de usuarios.
        </p>

        <div className="mb-8 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 bg-neutral-50 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold mb-4 mt-0">Experiencia profesional</h2>
          <div className="mb-4">
            <p className="font-medium mb-1">Full Stack Web Developer en Finexitus</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Desarrollando soluciones web escalables con TypeScript, Go y Python
            </p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Experiencia profesional desde 2019
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Especialización</h2>
          <p className="mb-4">
            Me especializo en <strong>arquitecturas limpias</strong> y <strong>patrones de diseño</strong>,
            con un enfoque particular en arquitectura hexagonal y CQRS. Mis proyectos open source
            han acumulado más de 50 estrellas en GitHub, ayudando a desarrolladores a implementar
            mejores prácticas de software.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Educación y certificaciones</h2>
          <p className="mb-2">
            <a
              href="https://www.credential.net/51d8aa51-9e6d-4908-a7c2-632db0fc9b61#acc.ntuRKzVm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
            >
              Certificación en Data Science & AI
            </a>
            {" "}— Tecnológico de Monterrey (2025)
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Tecnológico de Monterrey
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filosofía y valores</h2>
          <p className="mb-4">
            Creo firmemente en el poder del <strong>código abierto</strong> y la colaboración.
            Disfruto crear utilidades que hacen la vida más fácil a otros desarrolladores,
            aportando a la comunidad que tanto me ha dado.
          </p>
          <p className="mb-4">
            Fuera del código, encuentro balance en el gimnasio cada mañana y en la lectura
            de filosofía y política, siempre buscando aprender algo nuevo cada día.
          </p>
        </div>

        <div className="mb-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-semibold mb-4">Últimos artículos</h2>
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}
