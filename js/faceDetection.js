/**
*used to identify faces and provide the bounding boxes to sketch
*@namespace faceDetection
*/

/**
* necessary for opencvJS on static webpages. Creates the classifiers without needing a webserver
* @memberof faceDetection
* @member Module
*/
var Module = {
    wasmBinaryFile: 'https://huningxin.github.io/opencv.js/build/wasm/opencv_js.wasm',
    preRun: [function () {
        //Module.FS_createPreloadedFile('/', 'haarcascade_eye.xml', 'https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_eye.xml', true, false);
        Module.FS_createPreloadedFile('/', 'haarcascade_frontalface_default.xml', 'https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_frontalface_default.xml', true, false);
        //Module.FS_createPreloadedFile('/', 'haarcascade_profileface.xml', 'https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_profileface.xml', true, false);
    }],
};

let skch;

//imageElement: uses a button to open file explorer to pick a picture
let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

/**
*Collects the picture and uses classifiers to detect faces, putting the coordinates of the bounding box into an nx4 array
*@memberof faceDetection
*@function onLoad
*/
imgElement.onload = function () {
    let src = cv.imread(imgElement);
    let gray = new cv.Mat();
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
    let faces = new cv.RectVector();
    let faceCascade = new cv.CascadeClassifier();

    faceCascade.load('haarcascade_frontalface_default.xml');

    faceCoordinates = [];
    
    let msize = new cv.Size(0, 0);
    try {
        // detect faces
        faceCascade.detectMultiScale(gray, faces, 1.25, 3, 0, new cv.Size(gray.rows/30, gray.cols/30), msize);
    } catch (err) { console.log(err);}

    for (let i = 0; i < faces.size(); ++i) {
        faceCoordinates.push([faces.get(i).x, faces.get(i).y, faces.get(i).x + faces.get(i).width, faces.get(i).y + faces.get(i).height]);
        // detect eyes in face ROI
    }
    // cv.imshow('canvasOutput', src);
    src.delete();
    gray.delete();
    faceCascade.delete();
    faces.delete();
    console.log(faceCoordinates);

};

/**
* If a previous picture has been modified already, replace the current one with the new modified picture. 
* Creates a new p5 instance
* @function submitChoices
* @memberof faceDetection
*/
function submitChoices() {
    if (skch != null) {
        skch.remove();
    }
    skch = new p5(sketch, 'output');
}