/**
 * Cycles the theme: auto → light → dark → auto.
 * Sets data-theme on <html> (makr.css themes) and remembers the choice.
 * The inline script in layout.antlers.html applies it before first paint
 */
const KEY = 'makr-theme';
const ORDER = ['auto', 'light', 'dark'];
const LABELS = {
    auto: 'Theme: automatic (click for light)',
    light: 'Theme: light (click for dark)',
    dark: 'Theme: dark (click for automatic)',
};

export default () => ({
    mode: document.documentElement.dataset.theme || 'auto',

    get label() {
        return LABELS[this.mode] ?? 'Change color theme';
    },

    cycle() {
        this.mode = ORDER[(ORDER.indexOf(this.mode) + 1) % ORDER.length];
        document.documentElement.dataset.theme = this.mode;
        try {
            localStorage.setItem(KEY, this.mode);
        } catch (e) {
            // storage unavailable (private mode) — theme still applies for this page
        }
    },
});
