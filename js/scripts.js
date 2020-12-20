/**
 * This file is for general purpose scripts such as for onclick listeners
 * for buttons or selectors rather than for drawing or processing images.
 * @namespace scripts
 */

/**
 * This is the onclick function to the submit button after the user chooses their accessories.
 * If a previous picture has been modified already, replace the current one with the new modified picture.
 * Creates a new p5 instance in either case.
 * @function submitChoices
 * @memberof scripts
 */
function submitChoices() {
    if (skch != null) {
        skch.remove();
    }
    skch = new p5(sketch, 'output');
}

/**
 * This is the onclick function to the download button which allows the user
 * to download their edited photograph onto their computer.
 * @function download
 * @memberof scripts
 */
function download() {
    let download = document.getElementById("download");
    let image = document.getElementById("holiday").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}