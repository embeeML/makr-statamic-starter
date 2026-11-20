/**
 * Share buttons: native share sheet, copy link, and Mastodon
 * (asks for the visitor's server once, then remembers it).
 * Reads data-url / data-title from the .share element.
 */
const MASTODON_KEY = 'makr-mastodon-instance';

export default () => ({
    url: '',
    title: '',
    copied: false,
    status: '',
    mastodonOpen: false,
    instance: '',
    canNativeShare: typeof navigator !== 'undefined' && typeof navigator.share === 'function',

    init() {
        this.url = this.$el.dataset.url || window.location.href;
        this.title = this.$el.dataset.title || document.title;
        try {
            this.instance = localStorage.getItem(MASTODON_KEY) || '';
        } catch (e) {
            /* storage blocked */
        }
    },

    async nativeShare() {
        try {
            await navigator.share({ title: this.title, url: this.url });
        } catch (e) {
            // user cancelled — nothing to do
        }
    },

    async copy() {
        try {
            await navigator.clipboard.writeText(this.url);
        } catch (e) {
            // Fallback for older browsers / non-secure contexts
            const field = Object.assign(document.createElement('textarea'), { value: this.url });
            field.setAttribute('readonly', '');
            field.style.cssText = 'position:fixed;opacity:0';
            document.body.append(field);
            field.select();
            document.execCommand('copy');
            field.remove();
        }
        this.copied = true;
        this.status = 'Link copied to clipboard';
        setTimeout(() => {
            this.copied = false;
            this.status = '';
        }, 2000);
    },

    toggleMastodon() {
        this.mastodonOpen = !this.mastodonOpen;
        if (this.mastodonOpen) {
            this.$nextTick(() => this.$refs.instance?.focus());
        }
    },

    shareToMastodon() {
        const host = this.instance
            .trim()
            .replace(/^https?:\/\//i, '')
            .replace(/^@?[^@]*@(?=[^@]+$)/, '') // accept "@you@server.social"
            .replace(/\/.*$/, '');
        if (!host || !host.includes('.')) return;

        try {
            localStorage.setItem(MASTODON_KEY, host);
        } catch (e) {
            /* storage blocked */
        }
        const text = encodeURIComponent(`${this.title} ${this.url}`);
        window.open(`https://${host}/share?text=${text}`, '_blank', 'noopener');
        this.mastodonOpen = false;
    },
});
