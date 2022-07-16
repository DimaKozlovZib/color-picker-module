function colorPicker(box) {
    document.querySelector("head").insertAdjacentHTML("afterbegin", `<link rel="stylesheet" href="color.css">`);
    let H, S, V;
    let block = document.querySelector(".color-block");

    function gradient() {
        //w - width canvas, h - heigth canvas
        let canvas = document.querySelector("#gradient-canvas");
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        let cx = canvas.getContext("2d");
        let gradientBg = cx.createLinearGradient(w / 2, 0, w / 2, h);
        let hue = [[225, 0, 0], [225, 225, 0], [0, 225, 0], [0, 225, 225], [0, 0, 225], [225, 0, 225], [225, 0, 0]];
        for (let i = 0; i <= 6; i++) {
            let color = `rgb(${hue[i][0]},${hue[i][1]},${hue[i][2]})`
            gradientBg.addColorStop(i * 1 / 6, color);
        };
        cx.fillStyle = gradientBg;
        cx.fillRect(0, 0, w, h);
    }
    gradient();


    function mouseMoveToGetColor() {
        let moveCircal = false;

        block.onmousedown = () => {
            moveCircal = true;
        }
        block.onmousemove = (event) => {
            if (moveCircal) {
                let y = event.clientY - block.offsetTop;
                let h = block.offsetHeight;
                if (y <= h - 15 && y >= 0) {
                    document.querySelector(".color-block .circal").style.top = y + "px";
                    H = Math.floor(y / 235 * 360);
                    document.querySelector(".wrapper").style.background = `rgb(${HueToRgb(H, 100, 100)})`;
                }
            }
        }
        block.onmouseup = () => {
            moveCircal = false;
            console.log("up")
        }
        block.onmouseout = () => {
            moveCircal = false;
            console.log("out")
        }
    }
    mouseMoveToGetColor();
}
colorPicker();

function HueToRgb(H, S, V) {
    let f, p, q, t, lh, R, G, B;
    S /= 100;
    V /= 100;
    lh = Math.floor(H / 60);
    f = H / 60 - lh;
    p = V * (1 - S);
    q = V * (1 - S * f);
    t = V * (1 - (1 - f) * S);
    switch (lh) {
        case 0: R = V; G = t; B = p; break;
        case 1: R = q; G = V; B = p; break;
        case 2: R = p; G = V; B = t; break;
        case 3: R = p; G = q; B = V; break;
        case 4: R = t; G = p; B = V; break;
        case 5: R = V; G = p; B = q; break;
    }
    return [parseInt(R * 225), parseInt(G * 225), parseInt(B * 225)]
}