const toggle = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

const saved = localStorage.getItem('theme') || 'dark';
document.body.classList.add(saved);
updateIcon(saved);

toggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    document.body.classList.replace(isDark ? 'dark' : 'light', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
});

function updateIcon(theme) {
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}