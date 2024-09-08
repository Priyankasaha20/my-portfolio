// components/Articles.js
const Articles = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        <article className="space-y-4">
          <h2 className="text-5xl font-bold">01.</h2>
          <h3 className="text-3xl font-semibold">About Me</h3>
          <p className="text-lg leading-relaxed">
            A passionate web developer creating creative solutions for modern web experiences.
          </p>
        </article>
  
        <article className="space-y-4">
          <h2 className="text-5xl font-bold">02.</h2>
          <h3 className="text-3xl font-semibold">Projects</h3>
          <p className="text-lg leading-relaxed">
            Dive into various projects I’ve developed, featuring unique interfaces and user experiences.
          </p>
        </article>
  
        <article className="space-y-4">
          <h2 className="text-5xl font-bold">03.</h2>
          <h3 className="text-3xl font-semibold">Get in Touch</h3>
          <p className="text-lg leading-relaxed">
            Let's collaborate and bring new ideas to life. Reach out through my contact form.
          </p>
        </article>
      </section>
    );
  };
  
  export default Articles;
  