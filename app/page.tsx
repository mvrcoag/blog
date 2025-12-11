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
          I define my work as <i>turning ideas into reality</i>. For me,
          code is more than a skill: it's a form of art that allows transforming
          abstract concepts into tangible solutions with the potential to impact
          thousands of users.
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Specialization</h2>
          <p className="mb-4">
            I specialize in <strong>clean architectures</strong> and <strong>design patterns</strong>,
            with a particular focus on hexagonal architecture and CQRS. My open source projects
            have accumulated over 50 stars on GitHub, helping developers implement
            better software practices.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Education and Certifications</h2>
          <p className="mb-2">
            <a
              href="https://www.credential.net/51d8aa51-9e6d-4908-a7c2-632db0fc9b61#acc.ntuRKzVm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
            >
              Data Science & AI Certification
            </a>
            {" "}— Tecnológico de Monterrey (2025)
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Tecnológico de Monterrey
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Philosophy and Values</h2>
          <p className="mb-4">
            I firmly believe in the power of <strong>open source</strong> and collaboration.
            I enjoy creating utilities that make life easier for other developers,
            giving back to the community that has given me so much.
          </p>
          <p className="mb-4">
            Outside of code, I find balance in the gym every morning and in reading
            philosophy and politics, always seeking to learn something new every day.
          </p>
        </div>

        <div className="mb-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}
