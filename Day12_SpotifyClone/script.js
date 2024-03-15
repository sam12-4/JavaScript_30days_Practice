// console.log("JavaScript Started");

// let currentSong = new Audio();
// let prevSong = null;
// let playbackPosition = 0;
// let currentlyPlayingSong = null;
// let prevSongElement = null;
// let seekerPlay = document.querySelector(".playIcons img:nth-child(2)");
// let sideSong= null;
// let track;
// let songPlaying =null;

// async function getSongs() {
//   try {
//     let response = await fetch("http://127.0.0.1:5500/songs");
//     let text = await response.text();
//     let div = document.createElement("div");
//     div.innerHTML = text;
//     let fetchSongs = div.getElementsByTagName("a");
//     let songs = [];
//     for (let index = 0; index < fetchSongs.length; index++) {
//       const element = fetchSongs[index];
//       if (element.href.endsWith(".mp3")) {
//         songs.push(element.href);
//       }
//     }
//     return songs;
//   } catch (error) {
//     console.error("Error fetching songs:", error);
//     return [];
//   }
// }

// playSong = (track, time) => {
//   currentSong.src = `songs/${track}`;
//   currentSong.currentTime = time;
//   currentSong.play();
// };

// function handleSeekerPlay() {
//   let sidePlayer = document.querySelector(".playIcons img:nth-child(2)");
//   if (currentSong.paused && currentSong.src.endsWith(".mp3")) {
//     sideSong.querySelector(".playNow").getElementsByTagName("img")[0].src = "pausebtn.svg";
//     if (sidePlayer != null) {
//       sidePlayer.src = "pausebtn.svg";
//     }
//     currentSong.play();
//   } else {
//     if (sideSong != null){
//       sideSong.querySelector(".playNow").getElementsByTagName("img")[0].src = "playbutton.svg";
//     }
//     if (sidePlayer != null) {
//       sidePlayer.src = "playbutton.svg";
//     }
//     currentSong.pause();
//   }
// }

// async function formatDuration(seconds) {
//   const minutes = await Math.floor(seconds / 60);
//   const remainingSeconds = await Math.floor(seconds % 60);
//   const formattedMinutes = await String(minutes).padStart(2, '0');
//   const formattedSeconds = await String(remainingSeconds).padStart(2, '0');
//   return `${formattedMinutes}:${formattedSeconds}`;
// }

// async function main() {
//   // Get the list of all the songs
//   let songArray = await getSongs();
//   let songUL = document.querySelector(".songsList ul");
//   for (song of songArray) {
//     let songsName = song.split("/").pop().replace(".mp3", "");
//     songUL.innerHTML += `
//       <li>
//         <img class="invert" src="music.svg" alt="">
//         <div class="songDetail">
//           <h5>${songsName}</h5>
//           <h5>Song Author</h5>
//         </div>
//         <div class="playNow">
//           Play Now
//           <img class="invert" src="playbutton.svg" alt="">
//         </div>
//       </li>`;
//   }

//   let songCard = document.querySelectorAll(".songsList li");
//   songCard.forEach((element) => {
//     element.addEventListener("click", () => {
//       track = element.querySelector(".songDetail h5").textContent + ".mp3";
//       if (currentSong.paused || currentlyPlayingSong !== track) {
//         currentlyPlayingSong = track;
//         seekerPlay.src = "pausebtn.svg";
//         element.querySelector(".playNow img").src = "pausebtn.svg";
//         // fillSeekBar()
//         if (prevSongElement !== null && prevSongElement !== element) {
//           prevSongElement.querySelector(".playNow img").src = "playbutton.svg";
//           // fillSeekBar()
//         }
//         else{
//           fillSeekBar()
//         }
//         playSong(track, 0);
//       } else {
//         // fillSeekBar()
//         currentlyPlayingSong = track;
//         element.querySelector(".playNow img").src = "playbutton.svg";
//         seekerPlay.src = "playbutton.svg"; 
//         currentSong.pause();
//         if (prevSongElement.querySelector(".songDetail h5").textContent + ".mp3" !== currentlyPlayingSong) {
//           // fillSeekBar()
//           prevSongElement.querySelector(".playNow img").src = "pausebtn.svg";
//         }
//         fillSeekBar()
//       }
//       prevSongElement = element;
//       sideSong = element;
//     });
//   });

// }

// movingCircle.addEventListener("click",()=>{
//   console.log('clicked');
// })

// palet.addEventListener("click",(e)=>{
//   let totalLength = 983
//   let percentage = (e.layerX/totalLength)*100;
//   movingCircle.style.left = `${percentage}%`
// })

// let songplayedTime = 0;
// async function fillSeekBar(){
//     let songDuration = await formatDuration(currentSong.duration);
//     if (!currentSong.paused){
//       songPlaying = setInterval(() => {
//         if (songplayedTime == songDuration){
//           currentSong.pause();
//         }
//         else{
//           songplayedTime +=1;
//           console.log(songplayedTime);
//           // songplayedTime = formatDuration(songplayedTime)
//           formatDuration(songplayedTime).then((e)=>{
//             document.querySelector(".songDuration").innerHTML = `${e}/${songDuration}`;        
//             movingCircle.style.left = `${percentage}%`
//           } )
//         }
//       }, 1000);
//     }
//     else{
//       clearInterval(songPlaying)
//     }
      
//     let songTitle = track.replace(".mp3","")
//     document.querySelector(".songTitle").innerHTML = songTitle;
//     console.log(songDuration);
//     console.log(songTitle);
// };
    

// main();

// seekerPlay.addEventListener("click", handleSeekerPlay);

console.log("JavaScript Started");

let currentSong = new Audio();
let prevSong = null;
let playbackPosition = 0;
let currentlyPlayingSong = null;
let prevSongElement = null;
let seekerPlay = document.querySelector(".playIcons img:nth-child(2)");
let sideSong= null;
let track;
let songPlaying =null;

async function getSongs() {
  try {
    let response = await fetch("http://127.0.0.1:5500/songs");
    let text = await response.text();
    let div = document.createElement("div");
    div.innerHTML = text;
    let fetchSongs = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < fetchSongs.length; index++) {
      const element = fetchSongs[index];
      if (element.href.endsWith(".mp3")) {
        songs.push(element.href);
      }
    }
    return songs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}

playSong = (track, time) => {
  currentSong.src = `songs/${track}`;
  currentSong.currentTime = time;
  currentSong.play();
};

function handleSeekerPlay() {
  fillSeekBar()
  let sidePlayer = document.querySelector(".playIcons img:nth-child(2)");
  if (currentSong.paused && currentSong.src.endsWith(".mp3")) {
    sideSong.querySelector(".playNow").getElementsByTagName("img")[0].src = "pausebtn.svg";
    if (sidePlayer != null) {
      sidePlayer.src = "pausebtn.svg";
    }
    currentSong.play();
  } else {
    if (sideSong != null){
      sideSong.querySelector(".playNow").getElementsByTagName("img")[0].src = "playbutton.svg";
    }
    if (sidePlayer != null) {
      sidePlayer.src = "playbutton.svg";
    }
    currentSong.pause();
  }
}

async function formatDuration(seconds) {
  const minutes = await Math.floor(seconds / 60);
  const remainingSeconds = await Math.floor(seconds % 60);
  const formattedMinutes = await String(minutes).padStart(2, '0');
  const formattedSeconds = await String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

async function main() {
  // Get the list of all the songs
  let songArray = await getSongs();
  let songUL = document.querySelector(".songsList ul");
  for (song of songArray) {
    let songsName = song.split("/").pop().replace(".mp3", "");
    songUL.innerHTML += `
      <li>
        <img class="invert" src="music.svg" alt="">
        <div class="songDetail">
          <h5>${songsName}</h5>
          <h5>Song Author</h5>
        </div>
        <div class="playNow">
          Play Now
          <img class="invert" src="playbutton.svg" alt="">
        </div>
      </li>`;
  }

  let songCard = document.querySelectorAll(".songsList li");
  songCard.forEach((element) => {
    element.addEventListener("click", () => {
      track = element.querySelector(".songDetail h5").textContent + ".mp3";
      if (currentSong.paused || currentlyPlayingSong !== track) {
        currentlyPlayingSong = track;
        seekerPlay.src = "pausebtn.svg";
        element.querySelector(".playNow img").src = "pausebtn.svg";
        // fillSeekBar()
        if (prevSongElement !== null && prevSongElement !== element) {
          prevSongElement.querySelector(".playNow img").src = "playbutton.svg";
          // fillSeekBar()
        }
        else{
          fillSeekBar()
        }
        playSong(track, 0);
      } else {
        // fillSeekBar()
        currentlyPlayingSong = track;
        element.querySelector(".playNow img").src = "playbutton.svg";
        seekerPlay.src = "playbutton.svg"; 
        currentSong.pause();
        if (prevSongElement.querySelector(".songDetail h5").textContent + ".mp3" !== currentlyPlayingSong) {
          // fillSeekBar()
          prevSongElement.querySelector(".playNow img").src = "pausebtn.svg";
        }
        fillSeekBar()
      }
      prevSongElement = element;
      sideSong = element;
    });
  });

}

movingCircle.addEventListener("click",()=>{
  console.log('clicked');
})

palet.addEventListener("click",(e)=>{
  let totalLength = 983
  let percentage = (e.layerX/totalLength)*100;
  movingCircle.style.left = `${percentage}%`
})

let songplayedTime = 0;
async function fillSeekBar(){
  let songDuration = await currentSong.duration;
  if (!currentSong.paused){
    // Reset songplayedTime when a new song starts playing
    
    songPlaying = setInterval(async () => {
      if (songplayedTime >= songDuration){
        currentSong.pause();
        clearInterval(songPlaying); // Stop interval when song ends
      }
      else{
        songplayedTime++;
        let formattedTime = await formatDuration(songplayedTime);
        document.querySelector(".songDuration").innerHTML = `${formattedTime} / ${await formatDuration(songDuration)}`;
        movingCircle.style.left = `${(songplayedTime / songDuration) * 100}%`;
      }
    }, 1000);
  }
  else{
    clearInterval(songPlaying);
  }
}


main();

seekerPlay.addEventListener("click", handleSeekerPlay);

