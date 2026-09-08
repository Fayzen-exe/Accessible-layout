document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('diff-toggle');
  const table = document.getElementById('compare-table');
  const rows = table.querySelectorAll('tbody tr');

  // Mark differences on load
  rows.forEach(row => {
    if (row.getAttribute('data-diff') === 'true') {
      row.classList.add('is-different');
    }
  });

  // Handle highlight toggle switch
  toggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.body.classList.add('highlight-diffs');
    } else {
      document.body.classList.remove('highlight-diffs');
    }
  });
});