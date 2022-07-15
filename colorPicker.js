function colorPicker(box) {

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
}
colorPicker()