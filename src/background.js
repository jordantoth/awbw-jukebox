// import { Howl } from 'howler';

const MESSAGE_TYPE = {
  INFO: 'info',
  ACTION: 'action',
};

const URL = 'https://d14ieuh7s5leqe.cloudfront.net';

// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'onboarding.html'
//     });
//   }
// });

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === MESSAGE_TYPE.INFO) {
    console.log(message.body);
  } else if (message.type === MESSAGE_TYPE.ACTION) {
    console.log('received request to play track for:', message.body);
    playSong();
  }
});

function playSong() {
  console.log('playing song');
  const src = `${URL}/ds/andy.mp3`;
  console.log(src);
  let sound = new Audio(src);
  // let sound = new Howl({
  //   src: [src],
  //   html5: true,
  //   format: ['mp3'],
  // });
  // sound.once('load', function(){
  //   console.log('sound loaded, playing');
  //   sound.play();
  // });
  sound.play();
}
