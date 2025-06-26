const toggleSwitch = document.getElementById('toggleSwitch');

chrome.storage.sync.get('enabled', (data) => {
  toggleSwitch.checked = data.enabled ?? true;
});

toggleSwitch.addEventListener('change', () => {
  chrome.storage.sync.set({ enabled: toggleSwitch.checked });
});
