export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-bold tracking-tighter">
        Sobre mí
      </h1>
      <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300">
        Desarrollador, arquitecto de sistemas, y eterno aprendiz
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="text-2xl font-semibold mb-4 mt-8">Mi historia</h2>
        <p className="mb-4">
          Desde 2019 he dedicado mi carrera a transformar ideas abstractas en soluciones
          de software reales y escalables. Lo que comenzó como fascinación por la programación
          se ha convertido en una pasión por crear arquitecturas elegantes y sistemas que
          realmente resuelven problemas.
        </p>
        <p className="mb-4">
          Mi trabajo actual en <strong>Finexitus</strong> me permite aplicar mis conocimientos
          en TypeScript, Go y Python para desarrollar soluciones web de alto rendimiento.
          Cada proyecto es una oportunidad para aplicar principios de arquitectura limpia
          y mejores prácticas de ingeniería de software.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Filosofía de trabajo</h2>
        <p className="mb-4">
          Defino mi trabajo como <i>convertir ideas en realidades</i>. Para mí, el código
          es más que una habilidad técnica: es una forma de arte que requiere creatividad,
          precisión y visión.
        </p>
        <p className="mb-4">
          Creo firmemente en:
        </p>
        <ul className="mb-4 ml-6 list-disc">
          <li><strong>Código limpio y mantenible</strong> — Las arquitecturas bien diseñadas son la base de sistemas escalables</li>
          <li><strong>Open Source</strong> — Compartir conocimiento y herramientas fortalece a toda la comunidad</li>
          <li><strong>Aprendizaje continuo</strong> — La tecnología evoluciona constantemente, y nosotros también debemos hacerlo</li>
          <li><strong>Impacto real</strong> — El mejor código es el que resuelve problemas reales para personas reales</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Contribuciones a la comunidad</h2>
        <p className="mb-4">
          He desarrollado y mantengo varios proyectos open source que han ayudado a cientos
          de desarrolladores a implementar mejores prácticas:
        </p>
        <ul className="mb-4 ml-6 list-disc">
          <li><strong>clegen</strong> (21⭐) — Herramienta CLI para generar módulos con arquitectura limpia en TypeScript</li>
          <li><strong>nodejs-express-hexagonal-architecture</strong> (23⭐) — Implementación de referencia de arquitectura hexagonal</li>
          <li><strong>react-hexagonal</strong> (5⭐) — Aplicación de principios hexagonales en React</li>
          <li><strong>nodejs-cqrs</strong> (4⭐) — Ejemplo práctico de CQRS con Node.js y TypeScript</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Formación continua</h2>
        <p className="mb-4">
          La educación es un viaje sin fin. Recientemente completé una{" "}
          <a
            href="https://www.credential.net/51d8aa51-9e6d-4908-a7c2-632db0fc9b61#acc.ntuRKzVm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
          >
            certificación en Data Science & AI
          </a>
          {" "}en el Tecnológico de Monterrey (2025), expandiendo mis capacidades hacia
          el mundo del machine learning y la inteligencia artificial.
        </p>
        <p className="mb-4">
          Actualmente me enfoco en reforzar mis conocimientos en estadística y matemáticas
          aplicadas al AI/ML, explorando cómo estas tecnologías pueden integrarse con
          arquitecturas de software robustas.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Más allá del código</h2>
        <p className="mb-4">
          El balance es fundamental. Encuentro claridad mental en mis rutinas matutinas
          de gimnasio, donde la disciplina física complementa la disciplina mental del
          desarrollo de software.
        </p>
        <p className="mb-4">
          Mi curiosidad se extiende más allá de la tecnología: la filosofía y la política
          me fascinan por su capacidad de ayudarnos a comprender el comportamiento humano
          y las estructuras sociales. Esta perspectiva más amplia enriquece mi forma de
          abordar problemas y diseñar soluciones centradas en las personas.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Conectemos</h2>
        <p className="mb-4">
          Siempre estoy abierto a colaborar en proyectos interesantes, discutir sobre
          arquitectura de software, o simplemente charlar sobre tecnología y filosofía.
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
