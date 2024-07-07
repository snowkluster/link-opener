document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('openLinks').addEventListener('click', function() {
    let linksTextarea = document.getElementById('links');
    let links = linksTextarea.value.split('\n').map(link => link.trim()).filter(link => link !== '');
    links.forEach(link => {
      chrome.tabs.create({ url: link });
    });
  });
});
