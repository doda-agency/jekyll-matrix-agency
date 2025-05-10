// Custom JavaScript for agency website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  if (window.Tabler) {
    window.Tabler.init();
  }
  
  async function loadProjects(dataFile, containerId, type) {
    try {
      // Update path to use Jekyll's relative_url filter syntax
      const response = await fetch("{{ site.baseurl }}" + dataFile);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const projects = await response.json();
      
      const container = document.getElementById(containerId);
      if (container) {
        renderProjects(projects, container, type);
      }
    } catch (error) {
      console.error('Error loading project data:', error);
    }
  }
  
  function renderProjects(projects, container, type) {
    container.innerHTML = '';
    
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'col-md-6 col-lg-4 project-card';
      
      // Update image path to use Jekyll's relative_url filter syntax
      const imageUrl = project.image || '{{ "/assets/images/projects/placeholder.png" | relative_url }}';
      const projectUrl = project.url || '#';
      const progress = project.progress || 0;
      
      if (type === 'featured') {
        // Markup per featured-projects
        projectCard.innerHTML = `
          <div class="card">
            <div class="card-img-top img-responsive img-responsive-16by9" style="background-image: url(${imageUrl})"></div>
            <div class="card-body">
              <h3 class="card-title">${project.name}</h3>
              <p class="text-muted">${project.description}</p>
            </div>
            <div class="card-footer">
              <a href="${projectUrl}" class="btn btn-primary" target="_blank">Vai al progetto</a>
            </div>
          </div>
        `;
      } else if (type === 'current') {
        // Markup per current-projects, includendo la barra di progresso
        projectCard.innerHTML = `
          <div class="card">
            <div class="card-img-top img-responsive img-responsive-16by9" style="background-image: url(${imageUrl})"></div>
            <div class="card-body">
              <h3 class="card-title">${project.name}</h3>
              <p class="text-muted">${project.description}</p>
              <div class="progress" style="height: 20px; margin-top: 10px;">
                <div class="progress-bar" role="progressbar" style="width: ${progress}%" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
                  ${progress}%
                </div>
              </div>
            </div>
            <div class="card-footer">
              <a href="${projectUrl}" class="btn btn-primary" target="_blank">Vai al progetto</a>
            </div>
          </div>
        `;
      } else {
        // Default markup se vuoi gestire altri casi
        projectCard.innerHTML = `
          <div class="card">
            <div class="card-img-top img-responsive img-responsive-16by9" style="background-image: url(${imageUrl})"></div>
            <div class="card-body">
              <h3 class="card-title">${project.name}</h3>
              <p class="text-muted">${project.description}</p>
            </div>
            <div class="card-footer">
              <a href="${projectUrl}" class="btn btn-primary" target="_blank">Vai al progetto</a>
            </div>
          </div>
        `;
      }
      
      container.appendChild(projectCard);
    });
  }
  
  if (document.getElementById('featured-projects')) {
    // Update path to use Jekyll's data structure
    loadProjects('{{ site.baseurl }}/data/it.portfolio-projects.json', 'featured-projects', 'featured');
  }
  
  if (document.getElementById('current-projects')) {
    // Update path to use Jekyll's data structure
    loadProjects('{{ site.baseurl }}/data/it.current-projects.json', 'current-projects', 'current');
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});