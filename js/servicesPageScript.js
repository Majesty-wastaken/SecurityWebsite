
                     // Toggle

    // Buttons

const selCam = document.getElementsByClassName('camera')[0];
const selPad = document.getElementsByClassName('keypad')[0];
const selDetector = document.getElementsByClassName('detector')[0];
const selAll = document.getElementsByClassName('selAll')[0];

var toggler = document.querySelectorAll('.toggler');


    // Genres

var cams = document.querySelectorAll('.cam');

var pads = document.querySelectorAll('.pad');

var smokes = document.querySelectorAll('.smoke');

function camGenre() {

    for (let num = 0 ; num < toggler.length ; num++) {
        toggler[num].classList.remove('selected');
    }
    selCam.classList.add('selected');


    for (let camNum = 0 ; camNum < cams.length ; camNum++) {
        cams[camNum].style.display = "block";
    }

    for (let padNum = 0 ; padNum < pads.length ; padNum++) {
        pads[padNum].style.display = "none";
    }

    for (let smokeNum = 0 ; smokeNum < smokes.length ; smokeNum++) {
        smokes[smokeNum].style.display = "none";
    }

}

function padGenre() {

    for (let num = 0 ; num < toggler.length ; num++) {
        toggler[num].classList.remove('selected');
    }
    selPad.classList.add('selected');

    for (let camNum = 0 ; camNum < cams.length ; camNum++) {
        cams[camNum].style.display = "none";
    }

    for (let padNum = 0 ; padNum < pads.length ; padNum++) {
        pads[padNum].style.display = "block";
    }

    for (let smokeNum = 0 ; smokeNum < smokes.length ; smokeNum++) {
        smokes[smokeNum].style.display = "none";
    }

}

function smokeGenre() {

    for (let num = 0 ; num < toggler.length ; num++) {
        toggler[num].classList.remove('selected');
    }
    selDetector.classList.add('selected');

    for (let camNum = 0 ; camNum < cams.length ; camNum++) {
        cams[camNum].style.display = "none";
    }

    for (let padNum = 0 ; padNum < pads.length ; padNum++) {
        pads[padNum].style.display = "none";
    }

    for (let smokeNum = 0 ; smokeNum < smokes.length ; smokeNum++) {
        smokes[smokeNum].style.display = "block";
    }

}

function allGenres() {

    for (let num = 0 ; num < toggler.length ; num++) {
        toggler[num].classList.remove('selected');
    }
    selAll.classList.add('selected');

    for (let camNum = 0 ; camNum < cams.length ; camNum++) {
        cams[camNum].style.display = "block";
    }

    for (let padNum = 0 ; padNum < pads.length ; padNum++) {
        pads[padNum].style.display = "block";
    }

    for (let smokeNum = 0 ; smokeNum < smokes.length ; smokeNum++) {
        smokes[smokeNum].style.display = "block";
    }
}