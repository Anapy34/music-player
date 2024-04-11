// Verifica se o elemento #blog-player existe
const blogPlayer = document.getElementById('blog-player');

if (blogPlayer) {
  // Cria o elemento <div id="bbody">
  const bbody = document.createElement('div');
  bbody.id = 'bbody';

  // Copia o conteúdo do seu código HTML para dentro de <div id="bbody">
  bbody.innerHTML = `
    <div id="fundo"></div>
    <div id="cxaudio">
      <div class="audio-container">
        <span id="pequeno" class="pequeno material-icons">south_east</span>
        
        <div class="cx-album-lista">
          <span class="show-albums-btn material-icons">album</span>
          <span class="show-songs-btn material-icons">list</span>
        </div>

        <audio class="audio-player" crossorigin>
          <source class="audio-source" src="" type="audio/mp3">
          Your browser does not support the audio element.
        </audio>

        <div id="cx-album-img" class="cxalbum-img">
          <img class="album-image" src="" alt="Album image">
        </div>

        <div id="002" class="album-song-info">
          <p class="album-name"></p>
          <p class="artist-name"></p>
          <p class="song-name" id="song-name"></p>
        </div>

        <div class="controls">
          <span class="prev-btn material-icons">skip_previous</span>
          <span class="play-pause-btn material-icons play-pause-icon">play_arrow</span>
          <span class="next-btn material-icons">skip_next</span>
          <span class="mute-btn material-icons mute-icon">volume_up</span>
          <input type="range" class="volume-slider" min="0" max="1" step="0.1" oninput="setVolume()">
        </div>

        <div class="cxtempovolume">
          <input type="range" class="progress-bar" min="0" max="100" value="0" step="0.1">
          <div class="tempo">
            <span class="current-time">00:00</span>
            <span class="duration">00:00</span>
          </div>
        </div>
      </div>
    </div>

    <div id="album-info" class="album-info-select"></div>
    <div id="song-info" class="song-info-select"></div>

    <div class="player-p" id="playerp">
      <span id="normal" class="normal material-icons">pin_end</span>
      <span class="play-pause-btn material-icons play-pause-icon">play_arrow</span>
    </div>
  `;

  // Insere <div id="bbody"> dentro de #blog-player
  blogPlayer.appendChild(bbody);
}
