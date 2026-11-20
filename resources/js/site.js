/**
 * Makr Starter — site JavaScript
 * Alpine.js for small interactions, makr.js for tabs/accordions,
 * highlight.js only on pages that have code blocks.
 */
import Alpine from 'alpinejs';

import './vendor/makr.js';
import themeToggle from './modules/theme-toggle.js';
import share from './modules/share.js';
import videoEmbed from './modules/video-embed.js';

Alpine.data('themeToggle', themeToggle);
Alpine.data('share', share);
Alpine.data('videoEmbed', videoEmbed);

window.Alpine = Alpine;
Alpine.start();

// Lazy-load syntax highlighting
if (document.querySelector('pre code')) {
    import('./modules/highlight.js').then(({ default: highlight }) => highlight());
}
