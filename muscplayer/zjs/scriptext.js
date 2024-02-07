document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.querySelector('.audio-player');
  const playPauseButtons = document.querySelectorAll('.play-pause-btn');
  const prevButtons = document.querySelectorAll('.prev-btn');
  const nextButtons = document.querySelectorAll('.next-btn');
  const stopButtons = document.querySelectorAll('.stop-btn');
  const showAlbumsBtn = document.querySelectorAll('.show-albums-btn');
  const showSongsBtn = document.querySelectorAll('.show-songs-btn');
  const albumImageDisplay = document.querySelectorAll('.album-image');
  const albumNameElement = document.querySelectorAll('.album-name');
  const artistNameElement = document.querySelectorAll('.artist-name');
  const songNameElement = document.querySelectorAll('.song-name');
  const muteButtons = document.querySelectorAll('.mute-btn');
  const volumeSliders = document.querySelectorAll('.volume-slider');
  const progressBars = document.querySelectorAll('.progress-bar');
  const currentTimeDisplays = document.querySelectorAll('.current-time');
  const durationDisplays = document.querySelectorAll('.duration');


  // const albums = [

  //   {
  //     name: 'cicero',
  //     artist: 'canções de Apartamento',
  //     image: 'https://i.scdn.co/image/ab67616d0000b273bad7f5839b4b166fd8b323e5',
  //     songs: [   
  //       {
  //         name: 'tempo de pipa',
  //         url: 'https://anapy34.github.io/video-player/cicero/Can%C3%A7%C3%B5es%20De%20Apartamento%20MP3/01%20Tempo%20De%20Pipa.mp3'
  //       },
  //       {
  //         name: 'Vagalumes Cegos',
  //         url: 'https://anapy34.github.io/video-player/cicero/Canções De Apartamento MP3/02 Vagalumes Cegos.mp3'
  //       },
  //       {
  //         name: 'make-me-move',
  //         url: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/286/make-me-move-feat-karra-1586948725-C9SPOA3UZn.mp3'
  //       },
  //       {
  //         name: 'Christmas Rap',
  //         url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Christmas%20Rap.mp3'
  //       },
  //       {
  //         name: 'Dont Strat Now',
  //         url: 'https://rolandhu.github.io/lyrics-synchronization/dont-start-now.mp3'
  //       },
  //     ],
  //   },


  // ];

  let currentAlbumIndex = 0;
  let currentSongIndex = 0;


  // =================================== **************
  function loadAlbumInfo(album) {
    const defaultThumbnail = 'https://cdn-icons-png.flaticon.com/512/4173/4173686.png';
    if (album.image) {
      //   // document.body.style.backgroundImage = `url(${album.image})`;
      //   // document.body.style.backgroundSize = 'cover'; // Adicione isso se quiser cobrir toda a área da div
      //   // document.body.style.backgroundPosition = 'center center'; // Adicione isso se quiser centralizar a imagem
      //   // document.body.style.backgroundRepeat = 'no-repeat';
      albumImageDisplay.forEach((element) => {
        element.src = "";
        element.src = album.image;
        // Adiciona um ouvinte de evento para verificar se a imagem foi carregada com sucesso
        element.addEventListener('error', function () {
          // Se ocorrer um erro (imagem não carregada), define a imagem padrão
          element.src = defaultThumbnail;
        });
      });
    } else {
      // Se o álbum não tiver uma imagem, define a imagem padrão
      albumImageDisplay.forEach((element) => {
        element.src = defaultThumbnail;
      });
    }

    // Preenche o nome do álbum, se existir
    if (album.name) {
      albumNameElement.forEach((element) => {
        element.textContent = album.name;
      });
    }

    // Preenche o nome do artista, se existir
    if (album.artist) {
      artistNameElement.forEach((element) => {
        element.textContent = album.artist;
        element.addEventListener('error', function () {
          element.src = defaultThumbnail;
        });
      });
    } else {
      // Se o álbum não tiver uma imagem, define a imagem padrão
      artistNameElement.forEach((element) => {
        element.src = defaultThumbnail;
      });
    }

    // Preenche o nome da música, se existir
    if (album.songs && album.songs.length > 0 && album.songs[currentSongIndex].name) {
      songNameElement.forEach((element) => {
        element.textContent = album.songs[currentSongIndex].name;
      });
    }
  }
  // =================================== **************

  audioPlayer.addEventListener('ended', function () {
    playNext();
  });

  setTimeout(() => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    hideAlbums();
    hideSongs();
  }, 0); // Aguarde 100 milissegundos antes de pausar o áudio



  function updateSongInfo(song) {
    songNameElement.textContent = `${song.name}`;
  }

  audioPlayer.addEventListener('ended', function () {
    const currentSongIndex = album.songs.findIndex(song => song.url === audioPlayer.src);
    const nextSongIndex = (currentSongIndex + 1) % album.songs.length;
    const nextSong = album.songs[nextSongIndex];

    songNameElement.textContent = nextSong.name;
  });


  // =================================== **************
  function togglePlayPause() {
    const icon = document.querySelector('.play-pause-btn');
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButtons.forEach(button => button.textContent = 'pause');
    } else {
      audioPlayer.pause();
      playPauseButtons.forEach(button => button.textContent = 'play_arrow');
    }
  }

  // Adicione o ouvinte de evento para todos os botões de play/pause
  playPauseButtons.forEach(button => button.addEventListener('click', togglePlayPause));

  function playNext() {
    currentSongIndex = (currentSongIndex + 1) % albums[currentAlbumIndex].songs.length;
    loadSong(currentAlbumIndex, currentSongIndex);
    // loadAlbumInfo(currentAlbumIndex, currentSongIndex);
  }

  function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + albums[currentAlbumIndex].songs.length) % albums[currentAlbumIndex].songs.length;
    loadSong(currentAlbumIndex, currentSongIndex);
    // loadAlbumInfo(currentAlbumIndex, currentSongIndex);
  }

  function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  function toggleMute() {
    const muteIcons = document.querySelectorAll('.mute-btn');

    audioPlayer.muted = !audioPlayer.muted;

    muteIcons.forEach(icon => {
      if (audioPlayer.muted) {
        icon.textContent = 'volume_off'; // Altere para o ícone de volume off do Material Icons
      } else {
        icon.textContent = 'volume_up'; // Altere para o ícone de volume up do Material Icons
      }
    });
  }

  function updateCurrentTimeDisplay() {
    currentTimeDisplays.textContent = formatTime(audioPlayer.currentTime);
  }

  function updateDurationDisplay() {
    durationDisplays.textContent = formatTime(audioPlayer.duration);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }


  // Implemente a lógica para exibir a lista de álbuns
  function updateCurrentTimeDisplay() {
    currentTimeDisplays.forEach(display => {
      display.textContent = formatTime(audioPlayer.currentTime);
    });
    updateProgressBar();
  }

  function updateDurationDisplay() {
    durationDisplays.forEach(display => {
      display.textContent = formatTime(audioPlayer.duration);
    });
  }

  function updateProgressBar() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBars.forEach(progressBar => {
      progressBar.value = progress;
    });
  }

  function setVolume(event) {
    const volume = event ? event.target.value : 0.1; //  defina altura inicial do volume
    audioPlayer.volume = volume;

    // Atualizar a posição do slider em todas as instâncias
    volumeSliders.forEach(slider => {
      if (slider !== event?.target) {
        slider.value = volume;
      }
    });
  }

  setVolume();

  function setProgress(event) {
    const progress = event.target.value;
    const seekTime = (progress / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;

    // // Atualizar o volume com base na posição da barra de progresso (opcional)
    // const volume = progress / 100;
    // audioPlayer.volume = volume;

    // Atualizar a posição da barra de progresso em todas as instâncias
    progressBars.forEach(progressBar => {
      if (progressBar !== event.target) {
        progressBar.value = progress;
      }
    });
  }

  // Adicione os ouvintes de evento para todos os sliders relevantes
  volumeSliders.forEach(slider => slider.addEventListener('input', setVolume));
  progressBars.forEach(progressBar => progressBar.addEventListener('input', setProgress));

  // Implemente a lógica para exibir a lista de músicas do álbum selecionado
  function loadSong(albumIndex, songIndex) {
    const song = albums[albumIndex].songs[songIndex];
    audioPlayer.src = song.url;
    loadAlbumInfo(albums[albumIndex]);
    updateSongInfo(song);
    audioPlayer.play();
  }

  window.selectAlbum = function (index) {
    currentAlbumIndex = index;
    loadAlbumInfo(albums[currentAlbumIndex]);
    selectSong(0); // Selecionar a primeira música ao escolher um álbum
  };

  window.selectSong = function (index) {
    currentSongIndex = index;
    loadSong(currentAlbumIndex, currentSongIndex);
  };

  // Adicione os ouvintes de eventos para os botões e elementos relevantes
  playPauseButtons.forEach(button => button.addEventListener('click', togglePlayPause));
  prevButtons.forEach(button => button.addEventListener('click', playPrev));
  nextButtons.forEach(button => button.addEventListener('click', playNext));
  stopButtons.forEach(button => button.addEventListener('click', stopAudio));
  muteButtons.forEach(button => button.addEventListener('click', toggleMute));
  volumeSliders.forEach(slider => slider.addEventListener('input', setVolume));
  audioPlayer.addEventListener('timeupdate', updateCurrentTimeDisplay);
  audioPlayer.addEventListener('durationchange', updateDurationDisplay);



  function showAlbums() {
    const defaultThumbnail = 'https://cdn-icons-png.flaticon.com/512/4173/4173686.png';
  
    const albumInfo = document.querySelector('.album-info-select');
  
    // Criar a lista não ordenada (ul) se ainda não existir
    let albumList = albumInfo.querySelector('ul');
    if (!albumList) {
      albumList = document.createElement('ul');
      albumInfo.appendChild(albumList);
    }
  
    // Adicionar ou modificar elementos na lista
    albums.forEach((album, index) => {
      // Verificar se o item da lista já existe
      let albumListItem = albumList.children[index];
      if (!albumListItem) {
        // Criar um item de lista (li) se não existir
        albumListItem = document.createElement('li');
        albumList.appendChild(albumListItem);
      }
  
      // Criar ou atualizar a imagem do álbum
      let albumImage = albumListItem.querySelector('img');
      if (!albumImage) {
        albumImage = document.createElement('img');
        albumListItem.appendChild(albumImage);
      }
  
      // Verificar se a imagem do álbum existe
      if (album.image) {
        albumImage.src = album.image;
      } else {
        albumImage.src = defaultThumbnail; // Usar a imagem padrão se não existir uma imagem do álbum
      }
  
      albumImage.alt = album.name;
      albumImage.width = 100;
      albumImage.height = 100;
  
      // Adicionar evento de clique para ativar o álbum
      albumImage.addEventListener('click', () => {
        selectAlbum(index);
        albumInfo.style.display = 'none';
        // audioPlayer.play();
        playPauseButtons.forEach(button => button.textContent = 'pause');
        showAlbumsBtn.forEach(btn => btn.textContent = 'album');
      });
    });
  
    // Excluir itens extras, se houver mais itens do que álbuns
    while (albumList.children.length > albums.length) {
      albumList.removeChild(albumList.lastChild);
    }
  
    albumInfo.style.display = 'flex'; // Mostrar a div de informações do álbum
    hideSongs();
  }
  
  // Exemplo de uso
  showAlbums();

  

  // function showAlbums() {
  //   const defaultThumbnail = 'https://cdn-icons-png.flaticon.com/512/4173/4173686.png';

  //   const albumInfo = document.querySelector('.album-info-select');
  //   albumInfo.innerHTML = ''; // Limpar o conteúdo atual
  //   // Criar a lista não ordenada (ul)
  //   const albumList = document.createElement('ul');
  //   // Mostrar imagens de todos os álbuns
  //   albums.forEach((album, index) => {
  //     // Criar um item de lista (li) para cada álbum
  //     const albumListItem = document.createElement('li');
  //     // Criar a imagem do álbum
  //     const albumImage = document.createElement('img');
      
  //     // Verificar se a imagem do álbum existe
  //     if (album.image) {
  //       albumImage.src = album.image;
  //     } else {
  //       albumImage.src = defaultThumbnail; // Usar a imagem padrão se não existir uma imagem do álbum
  //     }
  
  //     albumImage.alt = album.name;
  //     albumImage.width = 100;
  //     albumImage.height = 100;
  //     // Adicionar evento de clique para ativar o álbum
  //     albumImage.addEventListener('click', () => {
  //       selectAlbum(index);
  //       albumInfo.style.display = 'none';
  //       // audioPlayer.play();
  //       playPauseButtons.forEach(button => button.textContent = 'pause');
  //       showAlbumsBtn.forEach(btn => btn.textContent = 'album');
  //     });
  //     // Adicionar a imagem do álbum ao item de lista
  //     albumListItem.appendChild(albumImage);
  //     // Adicionar o item de lista à lista não ordenada
  //     albumList.appendChild(albumListItem);
  //   });
  //   // Adicionar a lista não ordenada ao elemento .album-info-select
  //   albumInfo.appendChild(albumList);
  //   albumInfo.style.display = 'flex'; // Mostrar a div de informações do álbum
  //   hideSongs();
  // }

  function hideAlbums() {
    const albumInfo = document.querySelector('.album-info-select');
    albumInfo.style.display = 'none';
  }

  function showSongs() {
    const songInfo = document.querySelector('.song-info-select');
    
    // Criar a lista não ordenada (ul) se ainda não existir
    let songList = songInfo.querySelector('ul');
    if (!songList) {
      songList = document.createElement('ul');
      songInfo.appendChild(songList);
    }
  
    // Mostrar a lista de músicas do álbum ativo
    const activeAlbum = albums[currentAlbumIndex];
    activeAlbum.songs.forEach((song, index) => {
      // Verificar se o item da lista já existe
      let listItem = songList.children[index];
      if (!listItem) {
        // Criar um item de lista (li) se não existir
        listItem = document.createElement('li');
        songList.appendChild(listItem);
      }
  
      listItem.textContent = song.name;
  
      // Adicionar evento de clique para reproduzir a música
      listItem.addEventListener('click', () => {
        selectSong(index);
        songInfo.style.display = 'none'; // Ocultar a lista de músicas ao selecionar uma música
        // audioPlayer.play();
        playPauseButtons.forEach(button => button.textContent = 'pause');
        showSongsBtn.forEach(btn => btn.textContent = 'subject');
      });
    });
  
    // Excluir itens extras, se houver mais itens do que músicas
    while (songList.children.length > activeAlbum.songs.length) {
      songList.removeChild(songList.lastChild);
    }
  
    // Mostrar a div de informações da música
    songInfo.style.display = 'flex';
    hideAlbums();
  }
  

  
  // function showSongs() {
  //   const songInfo = document.querySelector('.song-info-select');
  //   songInfo.innerHTML = ''; // Limpar o conteúdo atual
  //   // Mostrar a lista de músicas do álbum ativo
  //   const activeAlbum = albums[currentAlbumIndex];
  //   activeAlbum.songs.forEach((song, index) => {
  //     const listItem = document.createElement('li');
  //     listItem.textContent = song.name;
  //     // Adicionar evento de clique para reproduzir a música
  //     listItem.addEventListener('click', () => {
  //       selectSong(index);
  //       songInfo.style.display = 'none'; // Ocultar a lista de músicas ao selecionar uma música
  //       // audioPlayer.play();
  //       playPauseButtons.forEach(button => button.textContent = 'pause');
  //       showSongsBtn.forEach(btn => btn.textContent = 'subject');
  //     });
  //     songInfo.appendChild(listItem);

  //   });

  //   // Mostrar a div de informações da música
  //   songInfo.style.display = 'flex';
  //   hideAlbums()
  // }

  function hideSongs() {
    const songInfo = document.querySelector('.song-info-select');
    songInfo.style.display = 'none';
  }

  function toggleAlbums() {
    const albumInfo = document.querySelector('.album-info-select');
    if (albumInfo.style.display === 'none' || albumInfo.style.display === '') {
      showAlbums();
      showAlbumsBtn.forEach(btn => btn.textContent = 'window');
      showSongsBtn.forEach(btn => btn.textContent = 'subject');
    } else {
      hideAlbums();
      showAlbumsBtn.forEach(btn => btn.textContent = 'album');
    }
  }

  function toggleSongs() {
    const songInfo = document.querySelector('.song-info-select');
    if (songInfo.style.display === 'none' || songInfo.style.display === '') {
      showSongs();
      showSongsBtn.forEach(btn => btn.textContent = 'queue_music');
      showAlbumsBtn.forEach(btn => btn.textContent = 'album');
    } else {
      hideSongs();
      showSongsBtn.forEach(btn => btn.textContent = 'subject');
    }
  }

  // Adicione os ouvintes de eventos para os botões relevantes
  showAlbumsBtn.forEach(btn => btn.addEventListener('click', toggleAlbums));
  showSongsBtn.forEach(btn => btn.addEventListener('click', toggleSongs));


  selectAlbum(3); // Inicializa a interface com álbum
  selectSong(0); // Inicializa a interface com a música do álbum
  loadSong();
});


