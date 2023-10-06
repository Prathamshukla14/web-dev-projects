console.log("welcome to spotify");

// Initialize the variable

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
var masterSongName = document.getElementById('masterSongName'); 
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songname: "Woh lamhe", filepath: "song/1.mp3", coverpath: "covers/1.jpeg" },
    { songname: "Aadat - Kalyug Atif Aslam", filepath: "songs/2.mp3", coverpath: "covers/1.jpeg" },
    { songname: "Beete Lamhein - The Train", filepath: "songs/3.mp3", coverpath: "covers/1.jpeg" },
    { songname: "Jo Bejhi Thi Dua - Shanghai", filepath: "songs/4.mp3", coverpath: "covers/1.jpeg" },
    { songname: "Kaho Na Kaho - Murder", filepath: "songs/5.mp3", coverpath: "covers/1.jpeg" },
    { songname: "Tu Hi Meri Shab Hai - Gangster", filepath: "songs/6.mp3", coverpath: "covers/1.jpeg" },
    { songname: "Tujhe Sochta Hoon - Jannat 2", filepath: "songs/7.mp3", coverpath: "covers/1.jpeg" },
]

songitems.forEach((Element,i)=>{
    // console.log(Element,i); 
    Element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    Element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})


// audioElement.play();

// handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }

})
//listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressbar.value * audioElement.duration/100; 
})

const makesallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
        Element.classList.remove('fa-pause');
        Element.classList.add('fa-play');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        makesallplay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>6){
        songitems = 0
    }
    else{
        songIndex +=1 ;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songitems = 0
    }
    else{
        songIndex -=1 ;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})