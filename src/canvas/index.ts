export let isWx=typeof CanvasRenderingContext2D!=="function";

if (!isWx) {
    (Object as any).assign(CanvasRenderingContext2D.prototype, {
        setFillStyle(color) {
            this.fillStyle = color;
        },
        setStrokeStyle(color) {
            this.strokeStyle = color;
        },
        setFontSize(size) {
            this.font = `${size}px Simhei`;
        },
        setTextBaseline(pos) {
            this.textBaseline = pos;
        },
    });
}
