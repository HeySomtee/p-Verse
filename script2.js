const enterMain = {
    button1: document.getElementById('y'),
    button2: document.getElementById('h-y'),
    arrow: document.getElementById('ent'),
    anchor: document.getElementById('ref'),
};

document.getElementById('intro-btn').addEventListener("click", ()=>{
    document.getElementById('xvx').style.display = "block";
})

enterMain.button1.onclick = () => {
   
    updateName();
};

enterMain.button2.onclick = () => {
    
    updateName();
};

function updateName(params) {
    let first = document.getElementById("introduction");
    let second = document.getElementById("uidText");
    let second2 = document.getElementById("uidText2");
    let span = document.getElementById("placeTwitId");
    first.innerHTML = `Hi, ${second.value}`;
    //debugger1
    let entry = second.value
    let k = entry.length
    if (entry.length > 6) {
        let rowEl = entry.slice(0, 3);
        let rowEnd = entry.slice(k-1);
        let lastEl = entry.slice(k-3, k-0);
        first.innerHTML = `Hi, ${rowEl}...${rowEnd}`;

        if (entry.length-6 > 3) {
            first.innerHTML = `Hi, ${rowEl}...${lastEl}`;
        }
    }
    ////////////////////////////////
    console.log(first.innerHTML);///
    ////////////////////////////////

    if (second.value == "") {
        alert("fill the required field")
    } else if (second2.value == "") {
        alert("fill the required field")
    }

    if (second.value != "" && second2.value ) {
        enterMain.arrow.style.color = "#fff"
        enterMain.arrow.style.pointerEvents = "all"
        enterMain.anchor.href = "#root2";
    }

    //
    span.innerHTML = second2.value;
    document.getElementById('twitterLink').href = `https://twitter.com/${second2.value}`;
}

//debugger

// function nam(params) {
//     let second = document.getElementById("uidText");
//     console.log('debugger');
    
// }
// nam();

document.getElementById('about').addEventListener('click', () => {
    document.getElementById('Oalert').style.display = "grid";
    document.getElementById('alertWin').style.display = "grid";
    document.getElementById('alertWin2').style.display = "none";

});

document.getElementById('team').addEventListener('click', () => {
    document.getElementById('Oalert').style.display = "grid";
    document.getElementById('alertWin').style.display = "none";
    document.getElementById('alertWin2').style.display = "grid";

});


document.getElementById('closeAlert').addEventListener('click', () => {
    document.getElementById('Oalert').style.display = "none";
});

document.getElementById('closeAlert2').addEventListener('click', () => {
    document.getElementById('Oalert').style.display = "none";
});

// enterMain.arrow.onclick = () =>{
//     alert(' ')
// }

const icons = {
    bullHorn: document.getElementById('fa-bullhorn'),
    image: document.getElementById('fa-image'),
    music: document.getElementById('fa-music'),

}

icons.bullHorn.addEventListener('click', bullHornFunc)
icons.image.addEventListener('click', imageFunc)
icons.music.addEventListener('click', musicFunc)

const DOMs = {
    ann : document.getElementById('forAnn'),
    muc : document.getElementById('for-music'),
    img : document.getElementById('for-image'),
}

function bullHornFunc(params) {
    icons.bullHorn.style.backgroundColor = "rgb(63, 87, 190)"
    icons.bullHorn.style.padding = '60px'

    icons.image.style.backgroundColor = "transparent"
    icons.image.style.padding = '0px'

    icons.music.style.backgroundColor = "transparent"
    icons.music.style.padding = '0px'

    Object.values(DOMs)[0].style = "display: block";
    Object.values(DOMs)[1].style = "display: none";
    Object.values(DOMs)[2].style = "display: none";

}

function imageFunc(params) {
    icons.bullHorn.style.backgroundColor = "transparent"
    icons.bullHorn.style.padding = '0px'

    icons.image.style.backgroundColor = "rgb(63, 87, 190)"
    icons.image.style.padding = '60px'

    icons.music.style.backgroundColor = "transparent"
    icons.music.style.padding = '0px'

    Object.values(DOMs)[0].style = "display: none";
    Object.values(DOMs)[1].style = "display: none";
    Object.values(DOMs)[2].style = "display: grid";

}

function musicFunc(params) {
    icons.bullHorn.style.backgroundColor = "transparent"
    icons.bullHorn.style.padding = '0px'

    icons.image.style.backgroundColor = "transparent"
    icons.image.style.padding = '0px'

    icons.music.style.backgroundColor = "rgb(63, 87, 190)"
    icons.music.style.padding = '60px'

    Object.values(DOMs)[0].style = "display: none";
    Object.values(DOMs)[1].style = "display: block";
    Object.values(DOMs)[2].style = "display: none";

}

const songsBtn = {
    song1: document.getElementById('song1'),
    song2: document.getElementById('song2'),
    song3: document.getElementById('song3'),
    song4: document.getElementById('song4'),
    song5: document.getElementById('song5'),
    audioP: document.getElementById('audio'),
    pauseB: document.getElementById('onBtn')//
    // pauseB.onclick =
}

songsBtn.pauseB.addEventListener('click', () => {
    songsBtn.audioP.pause();
})

function song1(params) {
    songsBtn.audioP.src = "./Ed_Sheeran_I_Don_t_Care_(thinkNews.com.ng).mp3"
    playy();
}

function song2(params) {
    songsBtn.audioP.src = "./Elvis-Presley-Heartbreak-Hotel-Audio.mp3"
    playy();
}

function song3(params) {
    songsBtn.audioP.src = "./NF_Let_You_Down_(thinkNews.com.ng).mp3"
    playy();
}

function song4(params) {
    songsBtn.audioP.src = "./Polo-G-Don-t-Believe-The-Hype.mp3"
    playy();
}

function song5(params) {
    songsBtn.audioP.src = "./Post-Malone-Waiting-For-Never-24Naijamuzic-com.mp3"
    playy();
}

function playy(params) {
    songsBtn.audioP.play()
}

const videoProps = {
    vid1: document.getElementById('vid1'),
    vid2: document.getElementById('vid2'),
    vid3: document.getElementById('vid3'),
    vidMain: document.getElementById('vidMain'),

}

videoProps.vid1.addEventListener('click', () => {
    videoProps.vidMain.src = videoProps.vid1.src;
});

videoProps.vid2.addEventListener('click', () => {
    videoProps.vidMain.src = videoProps.vid2.src;
});

videoProps.vid3.addEventListener('click', () => {
    videoProps.vidMain.src = videoProps.vid3.src;
});

const closeBlur = document.getElementById('closeBlur')
const blurWin = document.getElementById('blur');
const win2 = document.getElementById('win2');
const win1 = document.getElementById('win1');

blurWin.addEventListener('click', () => {
    win2.style = "display : none";
    document.getElementById('otu').style = "display : none";
    document.getElementById('abo').style = "display : none";
    win1.style.animationName = "pulldown";
    document.getElementById('iframe').style = "display : block";
    closeBlur.style = "display : block";
});

closeBlur.addEventListener('click', () => {
    closeBlur.style = "display : none";
    win2.style = "display : block";
    win1.style.animationName = "pullup";
    document.getElementById('iframe').style = "display : none";
    document.getElementById('otu').style = "display : grid";
    document.getElementById('abo').style = "display : grid";

})

const modes = {
    light : document.getElementById('white-mode'),
    dark : document.getElementById('dark-mode'),
};
const modePointer = document.getElementById("pointer");
const page_two = document.getElementById('root2');
let val = 0
document.getElementById("light-modes").addEventListener("click", ()=>{
    ++val
    if ( val%2 != 1) {
        modePointer.style.animationName = "turn"
        page_two.className = "root2";
        
    } else  if (val%2 == 1){
        modePointer.style.animationName = "turn2"
        console.log(page_two.style.backgroundColor);
        page_two.className = "rooot2";
    }
    
    console.log(val);
})

// modes.dark.addEventListener('click', () => {
//     alert(' ')
// })
