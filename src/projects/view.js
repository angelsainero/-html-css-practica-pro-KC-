export const projectTemplate = (image, name) => `
  <article class="project-item">
    <figure>
      <div class="img-container">
        <img
          src="${image}"
          alt="${name}"
        >
      </div>
      <figcaption>${name}</figcaption>
    </figure>
  </article>
`;
