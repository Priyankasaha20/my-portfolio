// components/Projects.js
const Projects = () => {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gray-50 p-4 shadow-lg">
              <h3 className="text-3xl font-bold mb-2">Recipe Remix</h3>
              <p className="text-lg">
                A personalized recipe generator based on the ingredients you have.
              </p>
            </article>
  
            <article className="bg-gray-50 p-4 shadow-lg">
              <h3 className="text-3xl font-bold mb-2">Web Weaving Event</h3>
              <p className="text-lg">
                An interactive storytelling event website built for GDSC SRMIST.
              </p>
            </article>
            {/* Add more projects */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  