function hideElements() {
  const sidebar = document.querySelector('#secondary');
  const homeGrid = document.querySelector('ytd-rich-grid-renderer');
  const guide = document.querySelector('ytd-mini-guide-renderer');

  if (sidebar) sidebar.style.display = 'none';
  if (homeGrid) homeGrid.style.display = 'none';
  if (guide) guide.style.display = 'none';
}

function showElements() {
  const sidebar = document.querySelector('#secondary');
  const homeGrid = document.querySelector('ytd-rich-grid-renderer');
  const guide = document.querySelector('ytd-mini-guide-renderer');

  if (sidebar) sidebar.style.display = '';
  if (homeGrid) homeGrid.style.display = '';
  if (guide) guide.style.display = '';
}

function applyState(enabled) {
  if (enabled) hideElements();
  else showElements();
}

// Load state on initial load
chrome.storage.sync.get('enabled', (data) => {
  applyState(data.enabled);
});

// Watch for YouTube internal routing (SPA-style)
const observer = new MutationObserver(() => {
  chrome.storage.sync.get('enabled', (data) => {
    applyState(data.enabled);
  });
});

observer.observe(document.body, { childList: true, subtree: true });
