//necessary for opencvJS on static webpages. Creates the classifiers without needing a webserver
var Module = {
    wasmBinaryFile: 'https://huningxin.github.io/opencv.js/build/wasm/opencv_js.wasm',
    preRun: [function () {
        //Module.FS_createPreloadedFile('/', 'haarcascade_eye.xml', 'https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_eye.xml', true, false);
        Module.FS_createPreloadedFile('/', 'haarcascade_frontalface_default.xml', 'https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_frontalface_default.xml', true, false);
        //Module.FS_createPreloadedFile('/', 'haarcascade_profileface.xml', 'https://raw.githubusercontent.com/opencv/opencv/master/data/haarcascades/haarcascade_profileface.xml', true, false);
    }],
};
var test;


//imageElement: uses a button to open file explorer to pick a picture
let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

//the main meat of the face detection
imgElement.onload = function () {
    let src = cv.imread(imgElement);
    let gray = new cv.Mat();
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
    let faces = new cv.RectVector();
    let faceCascade = new cv.CascadeClassifier();

    faceCascade.load('haarcascade_frontalface_default.xml');

    faceCoordinates = [];
// detect faces
    let msize = new cv.Size(0, 0);
    try {
        faceCascade.detectMultiScale(gray, faces, 1.2, 3, 0, new cv.Size(gray.rows/30, gray.cols/30), msize);
    } catch (err) {
        console.log(err);
    }

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
    if (test != null) {
        test.remove();
    }
    test = new p5(sketch, 'output');
};