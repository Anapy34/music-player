
/**
 * Quick & easy spectrum analyzer with audioMotion!
 *
 * For audioMotion-analyzer documentation and
 * more demos, visit https://audiomotion.dev
 */

// load module from Skypack CDN
import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';

// audio source
const audioEl = document.querySelector('.audio-player');

// instantiate analyzer
const audioMotion = new AudioMotionAnalyzer(
  document.getElementById('analizador'),
  {
    source: audioEl,
    height: window.innerHeight - 50,
    // you can set other options below - check the docs!
    mode: 4,
    barSpace: .3,
    ledBars: true,
  }
);

// // display module version
// document.getElementById('version').innerText = `v${AudioMotionAnalyzer.version}`;

// // play stream
// document.getElementById('live').addEventListener( 'click', () => {
//   audioEl.src = 'https://icecast2.ufpel.edu.br/live';
//   audioEl.play();
// });

// // file upload
// document.getElementById('upload').addEventListener( 'change', e => {
// 	const fileBlob = e.target.files[0];

// 	if ( fileBlob ) {
// 		audioEl.src = URL.createObjectURL( fileBlob );
// 		audioEl.play();
// 	}
// });