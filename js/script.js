// Ambil project dari GitHub API
    fetch('https://api.github.com/users/Ivan-Iz/repos')
        .then(res => res.json())
        .then(data => {
            const projectList = document.getElementById('projectList');
            data.forEach(repo => {
            if(!repo.fork){
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || ''}</p>
                <a href="${repo.html_url}" target="_blank">Lihat Repository →</a>
                `;
                projectList.appendChild(card);
            }
            });
        });
    // Toggle burger menu
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
