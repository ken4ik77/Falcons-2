import '../css/artist-modal.css';
import axios from "axios";


 const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".artist-info");
    const closeBtn = document.querySelector(".close");

document.body.querySelector(".artists__grid").addEventListener("click", async (e) => {
   console.log("click");
  
   const card = e.target.closest(".artist-card");
   if (!card) return;

  const artistId = card.closest(".artist-card")?.dataset.id;
   if (!artistId) return;
   
   try {
      const url = `https://sound-wave.b.goit.study/api/artists/${artistId}/albums`;
      console.log(url);
      const response = await axios.get(`https://sound-wave.b.goit.study/api/artists/${artistId}/albums`);
      const artist = response.data;
      modalContent.innerHTML = renderArtistModal(artist);
      modal.classList.remove("hidden");
   } catch (error) {
      console.error("Error of loading artist info", error)
   }
});

closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden"); 
      });

    function renderArtistModal(artist) {
      return `
        <h2 class = "artist-name">${artist.strArtist}</h2>
      <div class = "det_info">
        <img src="${artist.strArtistThumb}"  class = "artist-img" alt="${artist.strArtist}">
        <ul class="artist-details">
          <li>
            Years active<br>
            ${
               artist.intFormedYear && artist.intDiedYear
               ? `${artist.intFormedYear} – ${artist.intDiedYear}`
               : artist.intFormedYear && !artist.intDiedYear
               ? `${artist.intFormedYear} – present`
               : "information missing"
             }
         </li>

          <li>
            Sex<br>
            ${artist.strGender}
          </li>
          <li>
            Members<br>
            ${artist.intMembers}
          </li>
          <li>
            Country<br>
            ${artist.strCountry}
          </li>
          <li>
            Biography<br>
            ${artist.strBiographyEN}
            </li>
            <li>
              <ul class="artist-genres">
                ${artist.genres.map(genre => `<li>${genre}</li>`).join("")}
              </ul>
            </li>
          </ul>
      </div>
          <div class="album-full">
            <h3 class="alb">Albums</h3>
            <div class="albums-grid">
              ${artist.albumsList.map(album => `
                <div class="album-card">
                  <h4>${album.strAlbum}</h4>
                  
                  <div class="track-table">
                    <div class="track-header">
                      <div>Track</div>
                      <div>Time</div>
                      <div>Link</div>
                    </div>
                    
                    <div class="track-body">
                      ${album.tracks.map(track => `
                        <div class="track-row">
                          <div class="track-name">${track.strTrack}</div>
                          <div class="track-time">${track.strTime || ""}</div>
                          <div class="track-link">
                              ${track.movie ? `
                              <a href="${track.movie}" target="_blank">
                                 <svg width="24" height="24">
                                 <use href="/img/icons.svg#icon-Youtube"></use>
                                 </svg>
                              </a>` : ""}
                          </div>
                        </div>
                      `).join("")}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;}