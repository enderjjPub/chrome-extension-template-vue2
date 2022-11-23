// eslint-disable-next-line no-unused-vars
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background');
});
