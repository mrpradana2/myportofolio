const showCertification = (result) => {
  return `<div class="card">
              <img src="${result.path.mainPath}" alt="img-card"/>
              <h3>${result.title}</h3>
              <p>${result.year} - ${result.exp}</p>
              <button class="btn btn-theme-purple mt-3">Cek</button>
            </div>`;
};

const showPortofolio = (result, x) => {
  return `<h2 class="title-content">${result.partTitle}</h2>
            <div class="content-item-row content-item-portofolio-${x}"></div>`;
};

const contentCardsPhoto = (listPort) => {
  return `<div class="card mt-5">
                <img src="${listPort.imgPath}" alt="img-card"/>
                <p>${listPort.title}</p>
              <a href="${listPort.url}">
                <button class="btn btn-theme-purple mt-3">Bukan Video</button>
              </a>
            </div>`;
};
const contentCardsVideo = (listPort) => {
  return `<div class="card mt-5">
              <iframe width="100%" height="180px" 
                src="https://www.youtube.com/embed/${listPort.videoId}" 
                title="${listPort.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
              <p>${listPort.title}</p>
              <a href="${listPort.url}">
                <button class="btn btn-theme-purple mt-3">Lihat</button>
              </a>
            </div>`;
};

module.exports = {
  showCertification,
  showPortofolio,
  contentCardsPhoto,
  contentCardsVideo,
};
