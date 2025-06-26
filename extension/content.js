function hideSidebar() {
  const secondary = document.querySelector('#secondary'); // right side recommendations
  if (secondary) secondary.style.display = 'none';

  const comments = document.querySelector('ytd-comments');
  if (comments) comments.style.marginRight = '0px';
}

function showSidebar() {
  const secondary = document.querySelector('#secondary');
  if (secondary) secondary.style.display = '';

  const comments = document.querySelector('ytd-comments');
  if (comments) comments.style.marginRight = '';
}

function applyState(enabled) {
  if (enabled) hideSidebar();
  else showSidebar();
}

// Apply on load
chrome.storage.sync.get('enabled', (data) => {
  applyState(data.enabled);
});

// Apply again if YouTube navigates using SPA routing
const observer = new MutationObserver(() => {
  chrome.storage.sync.get('enabled', (data) => {
    applyState(data.enabled);
  });
});
observer.observe(document.body, { childList: true, subtree: true });
