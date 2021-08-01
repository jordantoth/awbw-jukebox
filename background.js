let color = '#3aa757';

let coToThemeMap = {
  "andy": "https://www.youtube.com/watch?v=JdRuVBhZuGY"
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onMessage.addListener((message) => {
  console.log(message.body);
  console.log(coToThemeMap.andy);
})