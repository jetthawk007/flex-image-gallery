type V = {
    s: string;
    m: number;
    h: number;
    b: number;
} & VideoType;

type VideoType = {
    type?: string;
    p?: "http" | "https";
    id?: string;
};

export function setVideoIFrame(v: V) {
    return `
        <div class="fotorama__video">
            <iframe
            src=${`${v.p +
        (v.type === "youtube"
            ? "youtube.com/embed/"
            : "player.vimeo.com/video/") +
        v.id
        }?autoplay=1${v.type !== "custom" && v.s ? "&" + v.s : ""}`}
            frameborder="0"
            allowfullscreen
            ></iframe>
        </div>
    `;
}
