console.log("JavaScript Started");

let currentSong = new Audio();
let playbackPosition = 0;
let currentlyPlayingSong = null;
let prevSongElement = null;
let sideSong = null;
let songPlaying = null;
let songDuration;
let songs;
let sidePlayer =  document.querySelector(".playIcons img:nth-child(2)");;
let songCards;
let folder;
let songFolder;
let afterSong;
let newSong;
let seekerPlay = document.querySelector(".playIcons img:nth-child(2)");

async function Capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);

}

async function setSeekBarOnPrevAndNext(){
  await Array.from(document.querySelectorAll(".songsList ul li")).forEach(e=>{
    if(e.querySelector(".songDetail>h5").innerHTML ==  currentSong.src.split("/").pop().replace(".mp3","")){
      if(currentSong.paused){
        e.querySelector(".playNow img").src ="playbutton.svg"
      }
      else{
        e.querySelector(".playNow img").src ="pausebtn.svg"
      }
    }
    else{
      e.querySelector(".playNow img").src ="playbutton.svg"
    }
})
await uri

} 

async function fillSeekBar() {
  songDuration = await currentSong.duration;
  if (!currentSong.paused) {
    // Reset songplayedTime when a new song starts playing
    songPlaying = await setInterval(async () => {
      if (songplayedTime >= songDuration) {
        currentSong.pause();
        await Array.from(document.querySelectorAll(".songsList ul li")).forEacha(async e=>{
          if(e.getElementsByTagName("h5")[0].innerHTML== currentSong.src.split("/").pop().replace(".mp3", "")){
            e.querySelector(".playNow").getElementsByTagName("img")[0].src =  await  "pausebtn.svg"
          }
          else{
            e.querySelector(".playNow").getElementsByTagName("img")[0].src = await  "playbutton.svg"
          }
        })
        clearInterval(songPlaying); // Stop interval when song ends
        console.log("Song done1");
      } else {
        songplayedTime++;
        let formattedTime = await formatDuration(currentSong.currentTime);
        document.querySelector(".songTitle").innerHTML = await Capitalize(currentSong.src.split("/").pop().replace(".mp3", ""));
        document.querySelector(".songDuration").innerHTML = `${formattedTime} / ${await formatDuration(currentSong.duration)}`;
        movingCircle.style.left = `${(currentSong.currentTime / currentSong.duration) * 100}%`;
        if (currentSong.currentTime == currentSong.duration) {
          sideSong.querySelector(".playNow").getElementsByTagName("img")[0].src = "playbutton.svg";
          await playNextSong();
        }
      }
    }, await 1000);
  } else {
    clearInterval(songPlaying);
  }
}

async function playPreviousSong() {
  let songs = await getSongs(folder);
  for (let i = 0; i < songs.length; i++) {
    let songsBundle = songs[i].split("/").pop();
    let newSong = currentSong.src.split("/").pop();
    if (newSong === songsBundle) {
      let beforeSong = songs[i - 1];
      if (beforeSong) {
        playSong(beforeSong.split("/").pop(), 0);
        break; // Exit the loop after playing the previous song
      } else {
        // If there's no previous song, play the last song in the list
        beforeSong = songs[songs.length - 1];
        playSong(beforeSong.split("/").pop(), 0);
        break;
      }
    }
  }
  setSeekBarOnPrevAndNext()

}


async function playNextSong() {
  let songs = await getSongs(folder);
  
  for (let i = 0; i < songs.length; i++) {
    let songsBundle = songs[i].split("/").pop();
    let newSong = currentSong.src.split("/").pop();
    if (newSong === songsBundle) {
      let beforeSong = songs[i + 1];
      if (beforeSong) {
        playSong(beforeSong.split("/").pop(), 0);
        break; // Exit the loop after playing the previous song
      } else {
        // If there's no previous song, play the last song in the list
        beforeSong = songs[0];
        playSong(beforeSong.split("/").pop(), 0);
        break;
      }
    }
  }
  setSeekBarOnPrevAndNext()
}



// Function to get songs from albums
async function getSongs(folder) {
  try {
    let response = await fetch(`http://127.0.0.1:5501/songs/${folder}`);
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

// Function to play a song
function playSong(track, time) {
  currentSong.src = `songs/${folder}/${track}`;
  currentSong.currentTime = time;
  currentSong.play();
}

async function updateSongUI(folder) {
  let songArray = await getSongs(folder);
  let songUL = await document.querySelector(".songsList ul");
  songUL.innerHTML = await ""; // Clear previous songs

  for (let song of songArray) {
    let songsName = await song.split("/").pop().replace(".mp3", "");
    let li = await document.createElement("li");
    li.innerHTML = `
      <img class="invert" src="music.svg" alt="">
      <div class="songDetail">
        <h5>${songsName}</h5>
        <h5>Song Author</h5>
      </div>
      <div class="playNow">
        Play Now
        <img class="invert" src="playbutton.svg" alt="">
      </div>`;

    await songUL.appendChild(li);

    // Add event listener to the new song item
    li.addEventListener("click", () => {
      let track = `${songsName}.mp3`;
      if (currentSong.paused || currentlyPlayingSong !== track) {
        currentlyPlayingSong = track;
        seekerPlay.src = "pausebtn.svg";
        li.querySelector(".playNow img").src = "pausebtn.svg";
        if (prevSongElement !== null && prevSongElement !== li) {
          prevSongElement.querySelector(".playNow img").src = "playbutton.svg";
        } else {
          fillSeekBar();
        }
        playSong(track, 0);
      } else {
        fillSeekBar();
        currentlyPlayingSong = track;
        li.querySelector(".playNow img").src = "playbutton.svg";
        seekerPlay.src = "playbutton.svg";
        currentSong.pause();
        if (prevSongElement.querySelector(".songDetail h5").textContent + ".mp3" !== currentlyPlayingSong) {
          prevSongElement.querySelector(".playNow img").src = "pausebtn.svg";
        }
        fillSeekBar();
      }
      prevSongElement = li;
      sideSong = li;
    });
  }
}



// Function to handle seeker play
function handleSeekerPlay() {
  fillSeekBar();
  if (currentSong.paused && currentSong.src.endsWith(".mp3")) {
    // sideSong.querySelector(".playNow").getElementsByTagName("img")[0].src = "pausebtn.svg";
    if (sidePlayer != null) {
      sidePlayer.src = "pausebtn.svg";
    }
    currentSong.play();
  } else {
    if (sideSong != null) {
      sideSong.querySelector(".playNow").getElementsByTagName("img")[0].src = "playbutton.svg";
    }
    if (sidePlayer != null) {
      sidePlayer.src = "playbutton.svg";
    }
    currentSong.pause();
  }
}

// Function to format duration
async function formatDuration(seconds) {
  const minutes = await Math.floor(seconds / 60);
  const remainingSeconds = await Math.floor(seconds % 60);
  const formattedMinutes = await String(minutes).padStart(2, '0');
  const formattedSeconds = await String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

async function main() {
  // Get the list of all the songs
  let songArray = await getSongs(folder);
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

  songCards = document.querySelectorAll(".songsList li");
  songCards.forEach((element) => {
    element.addEventListener("click", () => {
      let track = element.querySelector(".songDetail h5").textContent + ".mp3";
      if (currentSong.paused || currentlyPlayingSong !== track) {
        currentlyPlayingSong = track;
        seekerPlay.src = "pausebtn.svg";
        element.querySelector(".playNow img").src = "pausebtn.svg";
        if (prevSongElement !== null && prevSongElement !== element) {
          prevSongElement.querySelector(".playNow img").src = "playbutton.svg";
        } else {
          fillSeekBar();
        }
        playSong(track, 0);
      } else {
        fillSeekBar();
        currentlyPlayingSong = track;
        element.querySelector(".playNow img").src = "playbutton.svg";
        seekerPlay.src = "playbutton.svg";
        currentSong.pause();
        if (prevSongElement.querySelector(".songDetail h5").textContent + ".mp3" !== currentlyPlayingSong) {
          prevSongElement.querySelector(".playNow img").src = "pausebtn.svg";
        }
        fillSeekBar();
      }
      prevSongElement = element;
      sideSong = element;
    });
  });

}

// Event Listener for volume
document.querySelector(".setVolume").getElementsByTagName("input")[0].addEventListener("input", (e) => {
  currentSong.volume = (e.target.value) / 100;
  if (currentSong.volume == 0) {
    document.getElementById("volumeBtn").src = "noVolumebtn.svg";
  } else {
    document.getElementById("volumeBtn").src = "volume.svg";
  }
  console.log("Volume changed");
});

// Event Listener for Next and Previous Songs to play
previousSong.addEventListener("click", playPreviousSong);
nextSong.addEventListener("click", playNextSong);

// Event Listener for Seeker Play
seekerPlay.addEventListener("click", handleSeekerPlay);

// Main function call
main();

// Event Listener for hamburger icon to open navbar
document.querySelector(".arrows button:first-child").addEventListener("click", () => {
  document.querySelector(".left").style.left = "1%";
});

// Event Listener for Close icon to close Navbar
document.querySelector(".closebtn").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-115%";
});

// Event Listener for moving circle
movingCircle.addEventListener("click", async () => {
  console.log('clicked');
});

// Event Listener for palet
palet.addEventListener("click", async (e) => {
  let totalLength = await e.target.getBoundingClientRect().width;
  let percentage = await (e.offsetX / totalLength) * 100;
  movingCircle.style.left = `${percentage}%`;
  currentSong.currentTime = (e.offsetX / totalLength) * currentSong.duration;
  let formattedTime = await formatDuration(currentSong.currentTime);
  document.querySelector(".songDuration").innerHTML = `${formattedTime} / ${await formatDuration(currentSong.duration)}`;
});

let songplayedTime = 0;

// Adding an Event listener to Sideplayer
sidePlayer.addEventListener("click", async ()=>{
  if (sidePlayer.src = "playbutton.svg"  && (currentSong.src)){
      if (currentSong.paused){
        sidePlayer.src = "playbutton.svg"
        await setSeekBarOnPrevAndNext()
      }
      else{
        sidePlayer.src = "pausebtn.svg"
        await setSeekBarOnPrevAndNext()
      }
      
    }
    else{
      sidePlayer.src = "playbutton.svg"
      await setSeekBarOnPrevAndNext()
  }
})


// Adding an Event listener to each card so that clicking on it shows all the songs on the side bar
Array.from(document.getElementsByClassName("card")).forEach((e)=>{
  e.addEventListener("click", async ()=>{
    folder = e.dataset.folder;
    console.log("Folder selected:", folder); // Log the folder variable to check if it's set correctly
    await updateSongUI(folder);
    console.log("Songs updated for folder:", folder); // Log after updating the UI to check if it's using the correct folder
  });
});

