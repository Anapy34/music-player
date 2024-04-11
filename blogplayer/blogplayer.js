
document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.querySelector('.audio-player');
  const albumImageDisplay = document.querySelector('.album-image');
  const playPauseButtons = document.querySelectorAll('.play-pause-btn');
  const prevButtons = document.querySelectorAll('.prev-btn');
  const nextButtons = document.querySelectorAll('.next-btn');
  const stopButtons = document.querySelectorAll('.stop-btn');
  const showAlbumsButton = document.querySelectorAll('.show-albums-btn');
  const showSongsButton = document.querySelectorAll('.show-songs-btn');

  const albumInfo = document.getElementById('album-info');
  const songInfo = document.getElementById('song-info');

  const volumeSlider = document.querySelector('.volume-slider');
  const progressBar = document.querySelector('.progress-bar');
  const currentTimeDisplay = document.querySelector('.current-time');
  const durationDisplay = document.querySelector('.duration');
  const muteButton = document.querySelector('.mute-btn');

  const albums = [
    {
      name: 'Engenheiro do Hawaii',
      artist: 'Acustico',
      songs: [
        {
          name: 'Ate o fim',
          url: 'https://anapy34.github.io/video-player/engenheiro%20do%20hawaii%20acustico/02.%20At%C3%A9%20O%20Fim%20(Ao%20Vivo).mp3'
        },
        {
          name: 'Vida Real',
          url: 'https://anapy34.github.io/video-player/engenheiro%20do%20hawaii%20acustico/03.%20Vida%20Real%20(Ao%20Vivo).mp3'
        }
      ],
      image: 'https://i.scdn.co/image/ab67616d0000b273f98de08cd017b515c9e61344'
    },
    {
      name: 'cicero',
      artist: 'canções de Apartamento',
      songs: [
        {
          name: 'tempo de pipa',
          url: 'https://anapy34.github.io/video-player/cicero/Can%C3%A7%C3%B5es%20De%20Apartamento%20MP3/01%20Tempo%20De%20Pipa.mp3'
        },
        {
          name: 'Vagalumes Cegos',
          url: 'https://anapy34.github.io/video-player/cicero/Canções De Apartamento MP3/02 Vagalumes Cegos.mp3'
        }
      ],
      image: 'https://i.scdn.co/image/ab67616d0000b273bad7f5839b4b166fd8b323e5'
    },
    {
      name: 'akd',
      artist: 'Progressing',
      image: 'https://f4.bcbits.com/img/a2095838675_10.jpg',
      songs: [
        {
          name: 'Archaic Myth',
          url: 'https://anapy34.github.io/video-player/akd%20progressing/01%20-%20Akd%20-%20Archaic%20Myth.mp3'
        },
        {
          name: 'Evolving Spirits',
          url: 'https://anapy34.github.io/video-player/akd%20progressing/03%20-%20Akd%20-%20Evolving%20Spirits.mp3'
        },
        {
          name: 'Crystal Storm Breath',
          url: 'https://anapy34.github.io/video-player/akd%20progressing/04%20-%20Akd%20-%20Crystal%20Storm%20Breath.mp3'
        },
        {
          name: 'Tender Elevation',
          url:' https://anapy34.github.io/video-player/akd%20progressing/07%20-%20Akd%20-%20Tender%20Elevation.mp3'
        },
        {
          name: 'New Style Trance',
          url: 'https://anapy34.github.io/video-player/akd%20progressing/08%20-%20Akd%20-%20New%20Style%20Trance.mp3'
        },
      ],
},
  ];

  let currentAlbumIndex = 0;
  let isAlbumInfoOpen = false;
  let isSongInfoOpen = false;


  window.selectAlbum = function (index) {
    currentAlbumIndex = index;
    const currentAlbum = albums[currentAlbumIndex];
    const currentSong = currentAlbum.songs[0];

    audioPlayer.src = currentSong.url;
    audioPlayer.play();

    loadAlbumInfo(currentAlbum);
    // closeModal();
  };

  window.selectSong = function (index) {
    const currentAlbum = albums[currentAlbumIndex];
    const currentSong = currentAlbum.songs[index];

    audioPlayer.src = currentSong.url;
    audioPlayer.play();

    loadAlbumInfo(currentAlbum);
    closeModal();

    // Adicione a linha abaixo para atualizar o nome da música
    updateSongName(currentSong.name);
  };

  audioPlayer.addEventListener('ended', function () {
    playNext();
  });

  function loadAlbumInfo(album) {
    const albumSongInfo = document.getElementById('002');
    const albumNameElement = albumSongInfo.querySelector('.album-name');
    const artistNameElement = albumSongInfo.querySelector('.artist-name');
    const songNameElement = albumSongInfo.querySelector('.song-name');

    albumNameElement.textContent = album.name;
    artistNameElement.textContent = album.artist;
    songNameElement.textContent = album.songs[0].name; // Exibe o nome da primeira música ao carregar o álbum

    // Atualizar a imagem do álbum como plano de fundo da div 'bbody'
    const bbodyElement = document.getElementById('fundo');
    bbodyElement.style.backgroundImage = `url('${album.image}')`;
    bbodyElement.style.backgroundSize = 'cover'; // Adicione para cobrir toda a área da div
    bbodyElement.style.backgroundPosition = 'center center'; // Adicione para centralizar a imagem
    bbodyElement.style.backgroundRepeat = 'no-repeat';
    // bbodyElement.style.opacity = '0.5'; // Opacidade de 50%

    albumInfo.innerHTML = `
    <h2>${album.name} - ${album.artist}</h2>
    <img class="album-image" src="${album.image}" alt="Album Cover" width="80" height="80">
    <ul>
      ${album.songs.map((song, index) => `<li onclick="selectSong(${index})">${song.name}</li>`).join('')}
    </ul>
  `;

    albumImageDisplay.src = album.image;

    // Adiciona um ouvinte de evento para quando a música for trocada
    audioPlayer.addEventListener('ended', function () {
      const currentSongIndex = album.songs.findIndex(song => song.url === audioPlayer.src);
      const nextSongIndex = (currentSongIndex + 1) % album.songs.length;
      const nextSong = album.songs[nextSongIndex];

      songNameElement.textContent = nextSong.name;
    });
  }

  function updateSongName(songName) {
    const albumSongInfo = document.getElementById('002');
    const songNameElement = albumSongInfo.querySelector('.song-name');
    songNameElement.textContent = songName;
  }

  function togglePlayPause() {
    const playPauseIcons = document.querySelectorAll('.play-pause-icon');

    if (audioPlayer.paused) {
      const currentAlbum = albums[currentAlbumIndex];
      const currentSong = currentAlbum.songs[0];

      audioPlayer.src = currentSong.url;
      audioPlayer.play();

      playPauseIcons.forEach(icon => {
        icon.textContent = 'pause'; // Altere para o ícone de pausa do Material Icons
      });
    } else {
      audioPlayer.pause();

      playPauseIcons.forEach(icon => {
        icon.textContent = 'play_arrow'; // Altere para o ícone de play do Material Icons
      });
    }
  }

  function playNext() {
    const currentAlbum = albums[currentAlbumIndex];
    let currentSongIndex = currentAlbum.songs.findIndex(song => song.url === audioPlayer.src);

    if (currentSongIndex === -1) {
      // Se a música atual não for encontrada no array, toque a primeira música do álbum
      currentSongIndex = 0;
    } else {
      // Se houver uma próxima música no álbum, toque-a
      currentSongIndex = (currentSongIndex + 1) % currentAlbum.songs.length;
    }

    const currentSong = currentAlbum.songs[currentSongIndex];
    audioPlayer.src = currentSong.url;
    audioPlayer.play();

    loadAlbumInfo(currentAlbum);
    updateSongName(currentSong.name);
  }

  function playPrev() {
    const currentAlbum = albums[currentAlbumIndex];
    let currentSongIndex = currentAlbum.songs.findIndex(song => song.url === audioPlayer.src);

    if (currentSongIndex === -1 || currentSongIndex === 0) {
      // Se a música atual não for encontrada no array ou for a primeira música, toque a última música do álbum
      currentSongIndex = currentAlbum.songs.length - 1;
    } else {
      // Se houver uma música anterior no álbum, toque-a
      currentSongIndex = (currentSongIndex - 1) % currentAlbum.songs.length;
    }

    const currentSong = currentAlbum.songs[currentSongIndex];
    audioPlayer.src = currentSong.url;
    audioPlayer.play();

    loadAlbumInfo(currentAlbum);
    updateSongName(currentSong.name);
  }

  function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  function setVolume() {
    const volumeValue = volumeSlider.value;
    audioPlayer.volume = volumeValue;
  }

  function toggleMute() {
    const muteIcons = document.querySelectorAll('.mute-icon');

    audioPlayer.muted = !audioPlayer.muted;

    muteIcons.forEach(icon => {
      if (audioPlayer.muted) {
        icon.textContent = 'volume_off'; // Altere para o ícone de volume off do Material Icons
      } else {
        icon.textContent = 'volume_up'; // Altere para o ícone de volume up do Material Icons
      }
    });
  }

  function seek(event) {
    const offsetX = event.offsetX || event.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;

    if (!isNaN(offsetX) && !isNaN(progressBarWidth) && progressBarWidth > 0) {
      const seekPosition = (offsetX / progressBarWidth) * audioPlayer.duration;
      audioPlayer.currentTime = seekPosition;
    }
  }

  function updateCurrentTimeDisplay() {
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
  }

  function updateDurationDisplay() {
    durationDisplay.textContent = formatTime(audioPlayer.duration);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  // =========================================================


  window.selectAlbum = function (index) {
    currentAlbumIndex = index;
    const currentAlbum = albums[currentAlbumIndex];
    const currentSong = currentAlbum.songs[0];

    audioPlayer.src = currentSong.url;
    audioPlayer.play();

    loadAlbumInfo(currentAlbum);

    // closeModal();
    toggleAlbumInfo();
  };

  window.selectSong = function (index) {
    const currentAlbum = albums[currentAlbumIndex];
    const currentSong = currentAlbum.songs[index];

    audioPlayer.src = currentSong.url;
    updateSongName(currentSong.name);
    audioPlayer.play();

    // closeModal();
    toggleSongInfo();
  };


  function openAlbumInfo() {
    const albumsListHTML = albums.map((album, index) => `
      <li>
        <div class="album-item" onclick="selectAlbum(${index})">
          <img src="${album.image}" alt="Album Cover" width="80" height="80">

        </div>
      </li>
    `).join('');
    // <span>${album.name}</span>
    albumInfo.innerHTML = `
      <h3>Álbuns</h3>
      <ul>
        ${albumsListHTML}
      </ul>
    `;

    songInfo.innerHTML = '';
    albumInfo.style.display = 'flex';
    isAlbumInfoOpen = true;
  }


  function openSongInfo() {
    const currentAlbum = albums[currentAlbumIndex];
    const songsListHTML = currentAlbum.songs.map((song, index) => `
      <li onclick="selectSong(${index})">${song.name}</li>
    `).join('');

    songInfo.innerHTML = `

      <h3>${currentAlbum.name}</h3>
      <ul>
        ${songsListHTML}
      </ul>
    `;
    // - ${currentAlbum.artist}
    albumInfo.innerHTML = '';
    songInfo.style.display = 'flex';
    isSongInfoOpen = true;
  }


  // Função para abrir ou fechar o popup de álbuns
  function toggleAlbumInfo() {
    if (isSongInfoOpen) {
      closeSongInfo();
    }

    if (!isAlbumInfoOpen) {
      openAlbumInfo();
    } else {
      closeAlbumInfo();
    }
  }

  // Função para abrir ou fechar o popup de músicas
  function toggleSongInfo() {
    if (isAlbumInfoOpen) {
      closeAlbumInfo();
    }

    if (!isSongInfoOpen) {
      openSongInfo();
    } else {
      closeSongInfo();
    }
  }

  // Função para fechar o popup de álbuns
  function closeAlbumInfo() {
    albumInfo.style.display = 'none';
    isAlbumInfoOpen = false;
  }

  function closeSongInfo() {
    songInfo.style.display = 'none';
    isSongInfoOpen = false;
  }

  //=====================================================================

  // Inicialize o volume no valor desejado (50%)
  window.setVolume = setVolume;
  audioPlayer.volume = 0.8;
  volumeSlider.value = 0.8; // Corresponder ao volume inicial no html

  // ======================== Açoes dos botões

  showAlbumsButton.forEach(btn => btn.addEventListener('click', toggleAlbumInfo));
  albumInfo.addEventListener('click', closeAlbumInfo);
  showSongsButton.forEach(btn => btn.addEventListener('click', toggleSongInfo));
  songInfo.addEventListener('click', closeSongInfo);
  volumeSlider.addEventListener('input', setVolume);
  progressBar.addEventListener('click', seek);
  audioPlayer.addEventListener('durationchange', updateDurationDisplay);
  muteButton.addEventListener('click', toggleMute);
  audioPlayer.addEventListener('timeupdate', function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    updateCurrentTimeDisplay();
  });

  playPauseButtons.forEach(button => {
    button.addEventListener('click', togglePlayPause);
  });

  nextButtons.forEach(button => {
    button.addEventListener('click', playNext);
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', playPrev);
  });

  stopButtons.forEach(button => {
    button.addEventListener('click', stopAudio);
  });

  loadAlbumInfo(albums[currentAlbumIndex]);
});
