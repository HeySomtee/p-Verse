const audioFileBtn = document.getElementById('disk');
const songBar = document.getElementById('option-middle');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('faPlay');
const playText = document.getElementById('playText');
const playText2 = document.getElementById('playText2');
const playText3 = document.getElementById('playText3');
const playText4 = document.getElementById('playText4');
const playText5 = document.getElementById('playText5');
//For mobile
const playTextm = document.getElementById('playTextm');
const playText2m = document.getElementById('playText2m');
const playText3m = document.getElementById('playText3m');
const playText4m = document.getElementById('playText4m');
const playText5m = document.getElementById('playText5m');



const audioFreqImg = document.getElementById('gif');
const audioFreqImgm = document.getElementById('gifm');

function showEffect() {
    audioFreqImg.style.display = "block";
    playBtn.className = "fa-solid fa-pause";
}

function showEffectm() {
    audioFreqImgm.style.display = "block";
    
}

playBtn.addEventListener('click', pauseFunc);
function pauseFunc(e) {
    audioPlayer.pause();
    playBtn.className = "fa-solid fa-play";
    e.stopImmediatePropagation();
    this.removeEventListener("click", pauseFunc);
    var doc = document.getElementById('faPlay')
    doc.onclick = playFunc;
};

function playFunc(e) {
    audioPlayer.play();
    playBtn.className = "fa-solid fa-pause";
    e.stopImmediatePropagation();
    this.removeEventListener("click", playFunc);
    var doc = document.getElementById('faPlay')
    doc.onclick = pauseFunc;
}

const songTitle1 = document.getElementById("title1");
const songTitle2 = document.getElementById("title2");
const songTitle3 = document.getElementById("title3");
const songTitle4 = document.getElementById("title4");
const songTitle5 = document.getElementById("title5");
//for mobile
const songTitle1m = document.getElementById("title1m");
const songTitle2m = document.getElementById("title2m");
const songTitle3m = document.getElementById("title3m");
const songTitle4m = document.getElementById("title4m");
const songTitle5m = document.getElementById("title5m");


songTitle2.onclick = function name(params) {
    playText.innerHTML = ""
    playText2.innerHTML = "Now playing..."
    playText3.innerHTML = ""
    playText4.innerHTML = ""
    playText5.innerHTML = ""
}

songTitle3.onclick = function name(params) {
    playText.innerHTML = ""
    playText2.innerHTML = ""
    playText3.innerHTML = "Now playing..."
    playText4.innerHTML = ""
    playText5.innerHTML = ""
}

songTitle4.onclick = function name(params) {
    playText.innerHTML = ""
    playText2.innerHTML = ""
    playText3.innerHTML = ""
    playText4.innerHTML = "Now playing..."
    playText5.innerHTML = ""
}

songTitle5.onclick = function name(params) {
    playText.innerHTML = ""
    playText2.innerHTML = ""
    playText3.innerHTML = ""
    playText4.innerHTML = ""
    playText5.innerHTML = "Now playing..."
}

//For mobile 


songTitle1m.onclick = function name(params) {
    playTextm.innerHTML = "Now playing..."
    playText2m.innerHTML = ""
    playText3m.innerHTML = ""
    playText4m.innerHTML = ""
    playText5m.innerHTML = ""
}

songTitle2m.onclick = function name(params) {
    playTextm.innerHTML = ""
    playText2m.innerHTML = "Now playing..."
    playText3m.innerHTML = ""
    playText4m.innerHTML = ""
    playText5m.innerHTML = ""
}

songTitle3m.onclick = function name(params) {
    playTextm.innerHTML = ""
    playText2m.innerHTML = ""
    playText3m.innerHTML = "Now playing..."
    playText4m.innerHTML = ""
    playText5m.innerHTML = ""
}

songTitle4m.onclick = function name(params) {
    playTextm.innerHTML = ""
    playText2m.innerHTML = ""
    playText3m.innerHTML = ""
    playText4m.innerHTML = "Now playing..."
    playText5m.innerHTML = ""
}

songTitle5m.onclick = function name(params) {
    playTextm.innerHTML = ""
    playText2m.innerHTML = ""
    playText3m.innerHTML = ""
    playText4m.innerHTML = ""
    playText5m.innerHTML = "Now playing..."
}

// songTitle1m.addEventListener('click', pley1)

// nowPlaying();
//////////////////////////
//////////////////
songTitle1.addEventListener('click', function pley1() {
    showEffect();
    audioPlayer.src = ""
    audioPlayer.src = "/Ruth-B-Dandelions.mp3";
    audioPlayer.play();
    console.log(audioPlayer.src);

})

songTitle1m.addEventListener('click', function pley1() {
    showEffectm();
    audioPlayer.src = ""
    audioPlayer.src = "/Ruth-B-Dandelions.mp3";
    audioPlayer.play();
    console.log(audioPlayer.src);

})
/////////
songTitle2.addEventListener('click', function pley2() {
    showEffect();
    audioPlayer.src = ""
    audioPlayer.src = "/NF_Let_You_Down_(thinkNews.com.ng).mp3"
    audioPlayer.load()
    audioPlayer.play();
    console.log(audioPlayer.src);
    
})

songTitle2m.addEventListener('click', function pley2() {
    showEffectm();
    audioPlayer.src = ""
    audioPlayer.src = "/NF_Let_You_Down_(thinkNews.com.ng).mp3"
    audioPlayer.load()
    audioPlayer.play();
    console.log(audioPlayer.src);
    
})
/////////////////
songTitle3.addEventListener('click', function pley3() {
    showEffect();

    audioPlayer.src = ""
    audioPlayer.src = "/Ed_Sheeran_I_Don_t_Care_(thinkNews.com.ng).mp3"
    audioPlayer.load()
    audioPlayer.play();
    console.log(audioPlayer.src);
})

songTitle3m.addEventListener('click', function pley3() {
    showEffectm();

    audioPlayer.src = ""
    audioPlayer.src = "/Ed_Sheeran_I_Don_t_Care_(thinkNews.com.ng).mp3"
    audioPlayer.load()
    audioPlayer.play();
    console.log(audioPlayer.src);
})
///////////////
songTitle4.addEventListener('click', function pley4() {
    showEffect();

    audioPlayer.src = ""
    audioPlayer.src = "/Elvis-Presley-Heartbreak-Hotel-Audio.mp3"
    audioPlayer.load()
    audioPlayer.play();
    console.log(audioPlayer.src);
})

songTitle4m.addEventListener('click', function pley4() {
    showEffectm();

    audioPlayer.src = ""
    audioPlayer.src = "/Elvis-Presley-Heartbreak-Hotel-Audio.mp3"
    audioPlayer.load()
    audioPlayer.play();
    console.log(audioPlayer.src);
})
//////////////////////
songTitle5.addEventListener('click', function pley5() {
    showEffect();

    audioPlayer.src = ""
    audioPlayer.src = "/Polo-G-Don-t-Believe-The-Hype.mp3"
    audioPlayer.load()
    audioPlayer.play();
    console.log(audioPlayer.src);
})

songTitle5m.addEventListener('click', function pley5() {
    showEffectm();

    audioPlayer.src = ""
    audioPlayer.src = "/Polo-G-Don-t-Believe-The-Hype.mp3"
    audioPlayer.load()
    audioPlayer.play();
    console.log(audioPlayer.src);
})

document.getElementById('task1').addEventListener('click', name);
audioFileBtn.addEventListener('click', name);

function name(params) {
    annTab.style.display = "none";
    taskBar.style.display = "block";
    optionBar.style.marginLeft = "8vw";
    optionBar.style.width = "19vw";
    songBar.style.display = "block";
    document.getElementById('task2').style.backgroundColor = "";
    document.getElementById('task3').style.backgroundColor = "";
    document.getElementById('task1').style.backgroundColor = "#888";
    document.getElementById('flip-grid').style.display = 'none';

}

function closeWin(params) {
    let xBtn = document.getElementById('x');
    xBtn.onclick = function (params) {
        document.getElementById('sneakArea').style.display = 'none';
    }
}
closeWin()

document.getElementById('task2').addEventListener('click', openWin);

function openWin() {
    document.getElementById('sneakArea').style.display = 'grid';
    document.getElementById('task1').style.backgroundColor = "";
    document.getElementById('task2').style.backgroundColor = "#888";
    document.getElementById('task3').style.backgroundColor = "";
    document.getElementById('flip-grid').style.display = 'none';

}

document.getElementById('task3').addEventListener('click', openFrame);

function openFrame() {
    document.getElementById('flip-grid').style.display = 'grid';
    document.getElementById('sneakArea').style.display = 'none';
    document.getElementById('task1').style.backgroundColor = "";
    document.getElementById('task2').style.backgroundColor = "";
    document.getElementById('task3').style.backgroundColor = "#888";
}

document.getElementById('box').addEventListener('click', () => {
    document.getElementById('blob-inner').style.animationName = "slide-up";
    document.getElementById('opa2').style.display = 'none';
    document.getElementById('bottomm').style.opacity = '0'
    
    setTimeout(() => {
        if (    document.getElementById('blob-inner').style.animationName == "slide-up"
        ) {
            document.getElementById("writeAbout").style.display = "block";
        }
    }, 3100);
})


document.getElementById('box2').addEventListener('click', () => {
    document.getElementById('blob-inner2').style.animationName = "slide-up";
    document.getElementById('opa1').style.display = 'none';
    document.getElementById('bottomm').style.opacity = '0'
    // document.getElementById('opa1').style.marginLeft = '40vw';
    document.getElementById('bottom-main').style.display = 'none'
    setTimeout(() => {
        if (    document.getElementById('blob-inner2').style.animationName == "slide-up"
        ) {
            document.getElementById("writeTeam").style.display = "block";
        }
    }, 3100);

})

const blobCloseBtn1 = document.getElementById('blob-close');
const blobCloseBtn2 = document.getElementById('blob-close2');
const innerDiv = document.getElementById('blob-inner');
const innerDiv2 = document.getElementById('blob-inner2')

blobCloseBtn1.addEventListener('click', wrap1);
function wrap1() {
   innerDiv.id = 'kk';
   document.getElementById("writeAbout").style.display = "none";
   document.getElementById('kk').style.animationName = "returnn" 
   document.getElementById('bottomm').style.opacity = '1'
   setTimeout(() => {
    innerDiv.id = 'blob-inner';
        // innerDiv2.style.display = "blovk"
        document.getElementById('opa1').style.display = 'block';
        document.getElementById('opa2').style.display = 'block';
   }, 3200);
   

   console.log(innerDiv2.style.display);
}

blobCloseBtn2.addEventListener('click', wrap2);

function wrap2() {
   innerDiv2.id = 'kk';
   document.getElementById('kk').style.animationName = "returnn" 
   document.getElementById('bottomm').style.opacity = '1'

   document.getElementById('bottom-main').style.display = 'block'
   document.getElementById("writeTeam").style.display = "none";

   setTimeout(() => {
    innerDiv2.id = 'blob-inner2';
        // innerDiv2.style.display = "blovk"
        document.getElementById('opa1').style.display = 'block';
        // document.getElementById('opa1').style.marginLeft = '60vw';
        document.getElementById('opa2').style.display = 'block';
   }, 3200);


   console.log(innerDiv2.style.display);
}

document.getElementById('down1').addEventListener('click', () => {
    document.getElementById('roadmap').style.display = 'block';
    document.getElementById('ahoy').innerHTML = "click the image to exit.."
})

document.getElementById('rmImg').addEventListener('click', () => {
    document.getElementById('roadmap').style.display = 'none';
    document.getElementById('ahoy').innerHTML = "Roadmap";

})


const input = document.querySelector("textarea");
const btn = document.querySelector(".btn");
const btnn = document.getElementById('roww-img')
const limit = document.querySelector(".limit");
const addTweetBtn = document.getElementById('addTweet');
const hiddenDiv = document.getElementById('hiddenDivv')
let max = 50;






addTweetBtn.addEventListener('click', addTweet);
function addTweet(e) {
    hiddenDiv.style.display = "grid"
    addTweetBtn.className = "fa-solid fa-minus"
    // input.value = "What I freaking want it to be "
    e.stopImmediatePropagation();
    this.removeEventListener("click", addTweet);
    var doc = document.getElementById('addTweet')
    doc.onclick = removeTweet;
};

function removeTweet(e) {
    hiddenDiv.style.display = "none"
    addTweetBtn.className = "fa-solid fa-plus"

    e.stopImmediatePropagation();
    this.removeEventListener("click", removeTweet);
    var doc = document.getElementById('addTweet')
    doc.onclick = addTweet;
}


const updateLimit = () => {
  limit.textContent = max;
  input.addEventListener("input", () => {
    let inputLength = input.value.length;
    limit.textContent = max - inputLength;
    if (inputLength > max) {
      btn.disabled = true;
      limit.style.color = "red";
    } else {
      btn.disabled = false;
      limit.style.color = "black";
    }
  });
};
updateLimit();

btn.addEventListener("click", (e) => {
    e.preventDefault();
    tweett();
});

btnn.addEventListener("click", (e) => {
  e.preventDefault();
  tweet();
});

const tweet = () => {
    var today = new Date();
    var time = today.getHours();
    console.log(time);

    if (time >=0 && time < 12 ) {
        input.value = 'GM @SaishuMirai 🥱🌞'
        console.log( input.value );
        // alert('It\'s Morning!')

    }else if( time >= 12 && time < 19 ){
        input.value = 'Good Day @SaishuMirai  🌅 '
        console.log( input.value );
        // alert("Good day!")
      
    }else if ( time >= 19 ) {
        input.value = 'GN @SaishuMirai 😴'
        console.log( input.value );
        // alert("it's Night!")
        
    }

    let tweetInput = "https://twitter.com/intent/tweet?text=";
    window.open(`${tweetInput}${input.value}`);
};

function tweett() {
    let tweetInput = "https://twitter.com/intent/tweet?text=";
    window.open(`${tweetInput}${input.value} @paraverse_world`);
}

const userSettings = document.getElementById('userSettings')
const userName = document.getElementById('name-div');


userSettings.addEventListener('click', () => {
    userName.innerHTML = "Enter username"
    document.getElementById('rb1').style.display = "grid"
    
})

document.getElementById('submit').addEventListener('click', ()=>{
    let userText = document.getElementById('rb11').value;
    userName.innerHTML = userText.toUpperCase();
    document.getElementById('rb11').style.display = "none";
    document.getElementById('submit').style.display = "none"
    document.getElementById('rb1').innerHTML = 'choose your sms avatar';
    setTimeout(() => {
        document.getElementById('blue').style.display = "none";
        document.getElementById('rb2').style.display = "grid"
    }, 1000);
    setTimeout(() => {
        document.getElementById('rb3').style.display = "grid"
    }, 1500);
    setTimeout(() => {
        document.getElementById('rb4').style.display = "grid"
    }, 2000);
    setTimeout(() => {
        document.getElementById('rb5').style.display = "grid"

    }, 2500);
    setTimeout(() => {
        document.getElementById('rb1').style.animationName = "alert"
        document.getElementById('rb2').style.animationName = "expand"
        document.getElementById('rb3').style.animationName = "expand"
        document.getElementById('rb4').style.animationName = "expand"
        // document.getElementById('rb5').style.animationName = "expand"
    }, 3200);
    setTimeout(() => {
        display()
    }, 4000);
})

const imgx1 = document.getElementById("imgx1");
const imgx2 = document.getElementById("imgx2");
const imgx3 = document.getElementById("imgx3");
const rb1 = document.getElementById('rb1');
const rb2 = document.getElementById('rb2');
const rb3 = document.getElementById('rb3');
const rb4 = document.getElementById('rb4');
const avatar = document.getElementById('techCircle');

// const imgx1 = document.getElementById("imgx1");

function display
() {
    document.getElementById("imgx1").style.display = 'block';   
    document.getElementById("imgx2").style.display = 'block';   
    document.getElementById("imgx3").style.display = 'block';
    rb1.style.display = "none"   
    document.getElementById('social-div').style.display = "flex";
    // document.getElementById("imgx4").style.display = 'block';   

}

function selectImg
() {
    rb2.style.display = "none";
    rb3.style.display = "none";
    rb4.style.display = "none";
}

imgx1.addEventListener('click', () => {
    selectImg();
    avatar.src = imgx1.src;
    console.log(avatar.src);
    document.getElementById('blue').style.display = "grid";
});

imgx2.addEventListener('click', () => {
    selectImg();
    avatar.src = imgx2.src;
    console.log(avatar.src);
    document.getElementById('blue').style.display = "grid";
});

imgx3.addEventListener('click', () => {
    selectImg();
    avatar.src = imgx3.src;
    console.log(avatar.src);
    document.getElementById('blue').style.display = "grid";
});

const musicMode = document.getElementById("music-mode");
const storyMode = document.getElementById("story-mode");
const sneakpMode = document.getElementById("sneakp-mode");

musicMode.addEventListener("click", mM);
function mM(params) {
    // alert('music mode is working')
    multiFunc()
    document.getElementById('cc').style.display = 'none'
    document.getElementById('ccc').style.display = 'block'
    document.getElementById('sneakArea-m').style.display = 'none';
}

storyMode.addEventListener("click", sM);
function sM(params) {
    // alert('story mode is working')
    multiFunc()
    document.getElementById('cc').style.display = 'block'
    document.getElementById('ccc').style.display = 'none'
    document.getElementById('sneakArea-m').style.display = 'none';

}

sneakpMode.addEventListener("click", spM);
function spM(params) {
    // alert('sneak peek mode is working')
    multiFunc()
    document.getElementById('cc').style.display = 'none'
    document.getElementById('ccc').style.display = 'none'
    document.getElementById('sneakArea-m').style.display = 'block';

}

const utilBody = document.getElementById('util-body');
const utilIcon = document.getElementById('i');

utilIcon.addEventListener('click', utilFunc);
function utilFunc(e) {
    console.log('utility is working')
    utilBody.style.display = "grid"
    utilBody.style.animationName = "up-up-up"
    utilIcon.style.animationName = "turn"
    e.stopImmediatePropagation();
    this.removeEventListener("click", utilFunc);
    var doc = utilIcon
    doc.onclick = util2Func;
}

function util2Func(e) {
    
    utilBody.style.display = 'none'
    utilIcon.style.animationName = "turn2"
    e.stopImmediatePropagation();
    this.removeEventListener("click", util2Func);
    var doc = utilIcon
    doc.onclick = utilFunc;
}

function multiFunc(params) {
    utilBody.style.display = "grid"
    utilBody.style.animationName = "up-up-up"
    utilIcon.style.animationName = "turn"
}

document.getElementById('flipbookF').addEventListener('click', () =>{
    alert(' ')
})

const announceTab = document.getElementById('down2');
const taskBar = document.getElementById('task-bar');
const optionBar = document.getElementById('option-bar');
const closeTab = document.getElementById('closeTab');
const annTab = document.getElementById("annTab");

announceTab.onclick = () => {
    taskBar.style.display = "none";
    songBar.style.display = "none";
    optionBar.style.marginLeft = "0vw";
    optionBar.style.width = "27vw";

    setTimeout(() => {
        annTab.style.display = "block";
    }, 200);
} 

closeTab.addEventListener('click', () => {
    annTab.style.display = "none";
    taskBar.style.display = "block";
    optionBar.style.marginLeft = "8vw";
    optionBar.style.width = "19vw";
})
