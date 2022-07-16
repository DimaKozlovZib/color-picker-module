function colorPicker(box) {
    document.querySelector("head").insertAdjacentHTML("afterbegin", `<link rel="stylesheet" href="color.css">`)
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
    let block = document.querySelector(".color-block");
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
                }
            }
        }
        block.onmouseup = () => {
            moveCircal = false;
        }
        block.onmouseout = () => {
            moveCircal = false;
        }
    }
    mouseMoveToGetColor();
}
colorPicker()