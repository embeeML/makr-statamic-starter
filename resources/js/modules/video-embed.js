/**
 * Click-to-load video. Nothing is requested from YouTube/Vimeo until the
 * visitor presses play. YouTube uses youtube-nocookie.com, Vimeo uses dnt=1.
 * Reads the embed URL from data-src (Statamic's embed_url modifier).
 */
export default () => ({
    playing: false,
    src: '',

    init() {
        const url = new URL(this.$el.dataset.src, window.location.href);
        const youtube = /(^|\.)youtube\.com$/.test(url.hostname);

        if (youtube) {
            url.hostname = 'www.youtube-nocookie.com';
            const id = url.pathname.split('/').pop();
            // Poster from YouTube's image CDN (not a tracking domain) if none was uploaded
            const thumb = this.$refs.thumb;
            if (thumb && id) {
                thumb.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                thumb.hidden = false;
            }
        }
        if (/(^|\.)vimeo\.com$/.test(url.hostname)) {
            url.searchParams.set('dnt', '1');
        }

        url.searchParams.set('autoplay', '1');
        this.src = url.toString();
    },

    play() {
        this.playing = true;
    },
});
