import projects from '../../collections/projects.json' assert { type: 'json' };

const createCard = () => {
  const element = document.getElementById('content-project');
  const type = {
    PHP: 'php.svg',
    MYSQL: 'mysql.svg',
    NGINX: 'nginx.svg',
    CODEIGNETER: 'codeigniter.svg',
    NODEJS: 'nodejs.svg',
    DOCKER: 'docker.svg',
    POSTGRESQL: 'postgresql.svg',
    JQUERY: 'jquery.svg',
    JAVASCRIPT: 'javascript.svg',
    TAILWIND: 'tailwind.svg',
    BOOTSTRAP: 'bootstrap.svg',
    MATERIALUI: 'materialui.svg',
    REACTJS: 'reactjs.svg',
    REDUX: 'redux.svg',
    VUEJS: 'vuejs.svg',
    LARAVEL: 'laravel.svg',
    MARIADB: 'mariadb.svg'
  };

  projects.reverse().forEach((item) => {
    const node = document.createElement('div');
    
    node.innerHTML = `
      <div class="shadow-lg w-60 flex flex-col rounded-xl pb-3 gap-2 border-t-2 border-neutral-100 h-[350px] filter grayscale hover:filter-none cursor-pointer">
        <div class="card-image flex flex-1 p-2 border-b-4 border-neutral-100">
          <img width="100%" class="self-center" src="../assets/images/logo/${item.image}" alt="${item.name}">
        </div>
        <div class="py-2 w-60 overflow-auto">
          <div class="px-4 flex flex-row gap-3 items-center">
            ${item.tech.map((tech) => `<img width="40" src="../assets/images/stack/${type[tech]}" alt="${tech}">`).join('')}
          </div>
        </div>
      </div>
    `;

    element.appendChild(node);
  });
}

window.addEventListener("load", (event) => {
  createCard();
}, false);
