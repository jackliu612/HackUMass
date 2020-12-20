/**
 * This file is for general purpose scripts such as for onclick listeners
 * for buttons or selectors rather than for drawing or processing images.
 * @namespace scripts
 */

/**
 * Function that is run when the page is loaded to complete any setup.
 * Sets an example picture to the canvas for the user to experiment with.
 * @function pageLoad
 * @memberOf scripts
 */
function pageLoad() {
    imgElement.src = 'img/example.jpg';
    faceCoordinates = [[2084, 1, 2175, 92], [1098, 11, 1199, 112], [403, 20, 502, 119], [686, 26, 787, 127], [524, 43, 627, 146], [1184, 63, 1282, 161], [1682, 74, 1782, 174], [2418, 73, 2520, 175], [1483, 92, 1579, 188], [844, 126, 947, 229], [2263, 121, 2365, 223], [1392, 131, 1498, 237], [2117, 133, 2208, 224], [1079, 142, 1192, 255], [276, 168, 371, 263], [2460, 181, 2553, 274], [195, 242, 294, 341], [1631, 251, 1732, 352], [422, 263, 529, 370], [1905, 261, 2012, 368], [639, 263, 767, 391], [2269, 265, 2403, 399], [1300, 317, 1402, 419], [332, 332, 438, 438], [1082, 338, 1198, 454], [1483, 335, 1609, 461], [1729, 351, 1839, 461], [2018, 360, 2135, 477], [55, 426, 164, 535], [780, 451, 881, 552], [1439, 447, 1564, 572], [1836, 466, 1958, 588], [422, 498, 544, 620], [1092, 533, 1200, 641], [691, 537, 808, 654], [933, 619, 1054, 740], [1248, 667, 1374, 793], [42, 666, 171, 795], [1517, 853, 1646, 982], [582, 858, 724, 1000], [172, 1198, 302, 1328], [1112, 1169, 1283, 1340], [2165, 531, 2293, 659], [1658, 624, 1802, 768], [294, 802, 432, 940], [1116, 818, 1271, 973], [1553, 1085, 1699, 1231], [502, 1228, 653, 1379], [1920, 1338, 2084, 1502], [1977, 828, 2136, 987], [2209, 1076, 2375, 1242], [782, 1099, 951, 1268], [141, 277, 319, 455]];
    console.log(faceCoordinates);
}

/**
 * Displays the welcome modal when the page is loaded. Checks localstorage to ensure
 * it is only displayed on the first visit to avoid spam and clutter
 * @function showModal
 * @memberOf scripts
 */
function showModal() {
    if (!localStorage.getItem("modalShown")) {
        $('#exampleModal').modal('show');
        localStorage.setItem("modalShown", 'yes');
    }
}

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