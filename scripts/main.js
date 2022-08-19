const toggleTheme = document.querySelector('#ToggleTheme');
const body = document.body;
const theme = localStorage.getItem('color-scheme');

function enableDarkMode() {
	body.setAttribute('color-scheme', 'dark');
	localStorage.setItem('color-scheme', 'dark');
	toggleTheme.setAttribute('aria-label', 'Switch to light theme');
}

function enableLightMode() {
	body.setAttribute('color-scheme', 'light');
	localStorage.setItem('color-scheme', 'light');
	toggleTheme.setAttribute('aria-label', 'Switch to dark theme');
}

function setThemePreference() {
	if (
		window.matchMedia('(prefers-color-scheme: dark)').matches ||
		theme === 'dark'
	) {
		enableDarkMode();
		console.log('dark mode');
		return;
	}
	enableLightMode();
}

document.onload = setThemePreference();

toggleTheme.addEventListener('click', (e) => {
	body.getAttribute('color-scheme') == 'light'
		? enableDarkMode()
		: enableLightMode();
});
