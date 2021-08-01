const CURENT_TURN_CLASS = "player-overview-current-turn-bg";
const LOGGING_PREFIX = "AWBW Jukebox:";
const MESSAGE_TYPE = {
  INFO: "info",
  ACTION: "action"
}

// runs on document idle
console.log(LOGGING_PREFIX, 'Loaded');
chrome.runtime.sendMessage({ type: "info", body: "AWBW Content Loaded" });

playCurrentTheme();

function playCurrentTheme() {
  let playerOverviewElement = document.getElementsByClassName(CURENT_TURN_CLASS)[0];
  if (playerOverviewElement === undefined) {
    console.log(LOGGING_PREFIX, 'No current player found');
    chrome.runtime.sendMessage({ type: MESSAGE_TYPE.INFO, body: "Current player background class not found"});
    return;
  }

  let coAnchorElement = playerOverviewElement.getElementsByTagName('a')[0];
  if (coAnchorElement === undefined) {
    console.log(LOGGING_PREFIX, 'Cannot identify current CO');
    chrome.runtime.sendMessage({ type: MESSAGE_TYPE.INFO, body: "Current player CO anchor not found"});    
    return;
  }

  let coName = coAnchorElement.getAttribute('href').split('#')[1];
  console.log(LOGGING_PREFIX, 'Current CO Found', coName);
  chrome.runtime.sendMessage({ type: MESSAGE_TYPE.ACTION, body: coName});
}