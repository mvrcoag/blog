import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Marco A. García - Full Stack Developer
      </h1>
      <p className="mb-4">
        Defino mi trabajo como <i>convertir ideas en realidades</i>. Para mí, el
        código es más que una habilidad: Es una forma de arte.
      </p>
      <p className="mb-4">
        El proceso de tomar una idea abstracta y convertirla en algo real con el
        potencial de alcanzar miles de usuarios fue lo que despertó mi pasión
        por la programación.
      </p>
      <p className="mb-4">
        Disfruto de crear utilidades open source que hacen la vida más fácil a
        los desarrolladores, ir al gimnasio por las mañanas, y leer sobre
        filosofía y política.
      </p>
      <p className="mb-4">
        En 2025 obtuve una{" "}
        <a
          href="https://www.credential.net/51d8aa51-9e6d-4908-a7c2-632db0fc9b61#acc.ntuRKzVm"
          target="_blank"
          className="underline"
        >
          {" "}
          certificación en Data Science & AI por el Tecnológíco de Monterrey
        </a>
        .
      </p>
      <p className="mb-4">
        Ahora que me conoces mejor, abajo encontrarás algunos de mis posts.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
