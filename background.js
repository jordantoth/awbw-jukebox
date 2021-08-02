const MESSAGE_TYPE = {
  INFO: 'info',
  ACTION: 'action'
}
const CO_URL_MAP = {
  andy: 'https://www.youtube.com/watch?v=XGjmcUhdQXE', // Todo, listen to ALL, maybe start at a different time
  hachi:'https://www.youtube.com/watch?v=Q7jTW7Ks9Yw',
  jake: 'https://www.youtube.com/watch?v=T8lEWH5WBfY', // Todo, this one's not done by the same channel
  max: 'https://www.youtube.com/watch?v=WnnxCkhOm3g',
  nell: 'https://www.youtube.com/watch?v=IjS68u0e88I',
  rachel: 'https://www.youtube.com/watch?v=ppSTGK7XCM8',
  sami: 'https://www.youtube.com/watch?v=xfD4V4C3mY0',
  colin: 'https://www.youtube.com/watch?v=-P9RrlVE0lA',
  grit: 'https://www.youtube.com/watch?v=HivbtzotFCE',
  olaf: 'https://www.youtube.com/watch?v=st4z_4xXLHs',
  sasha: 'https://www.youtube.com/watch?v=gfk9eKbojhs',
  drake: 'https://www.youtube.com/watch?v=-Jgt_iIyNAc',
  eagle: 'https://www.youtube.com/watch?v=H01dbjPY7l0',
  javier: 'https://www.youtube.com/watch?v=4NQRJYAUXKg',
  jess: 'https://www.youtube.com/watch?v=uhEDNXhIbMY',
  grimm: 'https://www.youtube.com/watch?v=timyAe6limY',
  kanbei: 'https://www.youtube.com/watch?v=0Uo_AMfgQCQ',
  sensei: 'https://www.youtube.com/watch?v=ubDTOR5sbYc',
  sonja: 'https://www.youtube.com/watch?v=-vsVkNrHcJM',
  adder: 'https://www.youtube.com/watch?v=VvlDXKu71_8',
  flak: 'https://www.youtube.com/watch?v=7u-2cjJpmKA',
  hawke: 'https://www.youtube.com/watch?v=4SSDJUr7Drw',
  jugger: 'https://www.youtube.com/watch?v=Y8mErMJNhlU', // 10 minute
  kindle: 'https://www.youtube.com/watch?v=tW3L4E__QS8', // 10 minute
  koal: 'https://www.youtube.com/watch?v=PKXuagNH3Yo',
  lash: 'https://www.youtube.com/watch?v=DW6P9UwWJ8k', // Same channel, only 10 minutes tho
  sturm: 'https://www.youtube.com/watch?v=j-cmSTqrIic', // 10 hour lol
  vonbolt: 'https://www.youtube.com/watch?v=VUU3JAwsxes',
  tag: 'https://www.youtube.com/watch?v=NwflCwBRT3w'
}

const url = 'https://d14ieuh7s5leqe.cloudfront.net'


// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'onboarding.html'
//     });
//   }
// });

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === MESSAGE_TYPE.INFO) {
    console.log(message.body);
  } else if (message.type === MESSAGE_TYPE.ACTION) {
    console.log('received request to play track for:', message.body)

  }
})