import "core-js/fn/object/assign";


interface iConfig {
    num: number
    lineNum: number
    dotNum: number
}

class CheckCode {
    canvas: HTMLCanvasElement
    options: iConfig
    ctx: CanvasRenderingContext2D
    w: number
    h: number
    alphabetList: string[]
    alphabetListLen: number
    charOffset: number
    constructor(selector, opts?) {
        this.canvas = document.querySelector(selector);
        this.options = (Object as any).assign({
            num: 4, // 验证码个数 
            lineNum: 5, // 干扰线个数
            dotNum: 20, // 干扰点个数
        }, opts || {});

        // init
        this.ctx = this.canvas.getContext("2d");
        this.w = 120; // 画布的宽
        this.h = 40; // 画布的高
        let dist = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.alphabetList = dist.split("");
        this.alphabetListLen = dist.split("").length;
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.charOffset = this.w / this.options.num | 0;
    }
    draw() {
        let i = 0;
        let str = "";
        this.ctx.clearRect(0, 0, this.w, this.h);
        this.drawBackGround();
        for (; i < this.options.num; i++) {
            let char = this.alphabetList[this.madeRandom(0, this.alphabetListLen)];
            str += char;
            this.drawText(char, this.charOffset * i);
        }
        this.drawDot();
        this.drawLine();
        return str;
    }
    madeRandom(max): number
    madeRandom(min, max): number
    madeRandom(min, max?): number {
        max === void 0 ? max = min : 0;
        return ~~((Math.random() * (max - min)) + min);
    }
    madeRandomColor(min, max) {
        min < 0 ? min = 0 : 0;
        max > 255 ? max = 255 : 0;
        let r = this.madeRandom(min, max);
        let g = this.madeRandom(min, max);
        let b = this.madeRandom(min, max);
        return `rgb(${r},${g},${b})`;
    }
    drawBackGround() {
        this.ctx.save();
        this.ctx.fillStyle = this.madeRandomColor(240, 250);
        this.ctx.fillRect(0, 0, this.w, this.h);
        this.ctx.restore();
    }
    drawDot(len = this.options.dotNum) {
        let x = 0;
        let y = 0;
        let r = 1;
        let i = 0;
        for (; i < len; i++) {
            x = this.madeRandom(0, this.w);
            y = this.madeRandom(0, this.h);
            this.ctx.beginPath();
            this.ctx.arc(x, y, r, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.madeRandomColor(150, 200);
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
    drawLine(len = this.options.lineNum) {
        let x1 = 0;
        let y1 = 0;
        let x2 = 0;
        let y2 = 0;
        let i = 0;
        for (; i < len; i++) {
            x1 = this.madeRandom(0, this.w);
            y1 = this.madeRandom(0, this.h);
            x2 = this.madeRandom(0, this.w);
            y2 = this.madeRandom(0, this.h);
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.strokeStyle = this.madeRandomColor(180, 200);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
    drawText(character, offset) {
        let fontSize = this.madeRandom(20, 40);
        let textColor = this.madeRandomColor(80, 150);
        let rad = this.madeRandom(-20, 20) * Math.PI / 180;
        this.ctx.save();
        this.ctx.font = `${fontSize}px Simhei`;
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = textColor;
        this.ctx.translate(offset + 18, 0);
        this.ctx.rotate(rad); // 弧度
        this.ctx.fillText(character, -10, this.h >> 1);
        this.ctx.restore();
    }
}

export default CheckCode