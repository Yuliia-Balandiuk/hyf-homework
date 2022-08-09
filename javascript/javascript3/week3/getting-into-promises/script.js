const titleH1 = document.querySelector('h1');
userName = ['viedamayanti', 'Hanouj', 'ReenuMary'];

function getGitHubRepositories(userName) {
  fetch(`https://api.github.com/search/repositories?q=user:${userName}`)
    .then((response) => response.json())
    .then((data) => {
      const ownerName = document.createElement('p');
      ownerName.innerHTML = `Owner of the repo: ${data.items[0].owner.login}`;
      titleH1.appendChild(ownerName);

      const ulRepoInfo = document.createElement('ul');
      ownerName.appendChild(ulRepoInfo);

      data.items.forEach((element) => {
        const liRepoInfo = document.createElement('li');
        liRepoInfo.innerText = `${element.name}: ${element.html_url}`;
        ulRepoInfo.appendChild(liRepoInfo);
      });
    });
}

async function getAllRepositories() {
  await Promise.all([
    getGitHubRepositories(userName[0]),
    getGitHubRepositories(userName[1]),
    getGitHubRepositories(userName[2]),
  ]);
}

getAllRepositories();
