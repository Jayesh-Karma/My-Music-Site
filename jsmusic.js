window.addEventListener('scroll',()=>{
    if(window.pageYOffset >= 35){
        document.getElementById("nav").style.cssText = ` background-color:black; height:100px; transition:all ease 0.5s;`
    }
    else if(window.pageYOffset <=35){
        document.getElementById("nav").style.cssText = ``
    }
});

console.log("I am attached");

// Initialization of variables

let audioElement = new Audio("Demo_Music/Do_you_know.mp3");
let Progress = document.getElementById("progressBar");
let play = document.getElementById("play")
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let songItem =Array.from( document.getElementsByClassName("song"));
let index=0;



// Song list=------------
let songs = [
    { song:"Do You Know-Diljit",pathname:"Demo_Music/Do_you_know.mp3" , Cover:"Images/do-you-know.jpg"},
    { song:"chala jata hu",pathname:"Demo_Music/chala-jata-hu.mp3" , Cover:"Images/chala-jata-hu.jpg"},
    { song:"Lemonade-Diljit",pathname:"Demo_Music/Lemonade.mp3" , Cover:"Images/Diljit.jpg"},
    { song:"Perfect-ED Sherran",pathname:"Demo_Music/Perfect.mp3" , Cover:"Images/Ed_Sheeran_Perfect_Single_cover.jpg"},
    { song:"Tum Kya MIle -Arijit",pathname:"Demo_Music/Tum Kya Mile(PagalWorld.com.se).mp3" , Cover:"Images/tum kya milee.jpeg"},
    { song:"Prada-Jass Manak",pathname:"Demo_Music/Prada.mp3" , Cover:"Images/Prada.jpg"},
    {
        song:"Tujhse Mehka Mehka sa hu",
        pathname:"Demo_music/Tujhse-mehka.mp3",
        Cover:"Images/tujhse-mehka.jpg"
    },
    {
        song:"Pyar hota kayi bar hai",
        pathname:"Demo_music/Pyaar Hota Kayi Baar Hai Remix - DJ Dharak(PagalWorld.com.se).mp3",
        Cover:"Images/logo/honey.jpg"
    }

]
// -----songss

songItem.forEach((element , i)=>{
    // console.log(element,i);
 element.getElementsByClassName('covers')[0].src= songs[i].Cover;

 element.getElementsByClassName('songName')[0].innerHTML=songs[i].song;

})

// for playing each songs 

Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
    element.addEventListener('click',(i)=>{
        console.log(i.target);
        makeAll();
        i.target.classList.remove("fa-play")
        i.target.classList.add
          ("fa-pause")


           index = parseInt(i.target.id); 
        audioElement.src = songs[index].pathname;
        
        audioElement.play();
        audioElement.currentTime = 0;


        play.classList.remove("fa-play")
       play.classList.add("fa-pause")
        

       document.getElementById("coverimg").src = songs[index].Cover;
     
     
       document.getElementById("songName").innerHTML = songs[index].song;



    })
})
const makeAll = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((elem)=>{
        elem.classList.remove("fa-pause")
        elem.classList.add("fa-play")
    })
}



// ---play pause buttons --------

play.addEventListener('click',()=>{
    if(audioElement.currentTime < 0 || audioElement.paused){
        audioElement.play();
      play.classList.remove("fa-play")
       play.classList.add("fa-pause")
    } else{
        audioElement.pause();
        play.classList.add("fa-play")
         play.classList.remove("fa-pause")
    }
})
// -------forward backward
document.getElementById("backward").addEventListener('click',()=>{
    index = index -1;
    if(index <1){
        index = 6;
    audioElement.src = songs[index].pathname;
        
    audioElement.play();
    audioElement.currentTime = 0;

    play.classList.remove("fa-play")
    play.classList.add("fa-pause")
    }else{
        audioElement.src = songs[index].pathname;
        
        audioElement.play();
        audioElement.currentTime = 0;
    
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
    }

    document.getElementById("coverimg").src = songs[index].Cover;
     
     
    document.getElementById("songName").innerHTML = songs[index].song;


})
document.getElementById("forward").addEventListener('click',()=>{
    index = index+1;
    if(index >6){
        index = 1;
        
        
      
    }
    if(audioElement.currentTime==audioElement.duration){
        index= index+1;

    }
    else{
        index;
      
        
       
    }
    
    audioElement.src = songs[index].pathname;
    audioElement.play();
    audioElement.currentTime = 0;

    play.classList.remove("fa-play")
    play.classList.add("fa-pause")
    
    document.getElementById("coverimg").src = songs[index].Cover;
     
     
    document.getElementById("songName").innerHTML = songs[index].song;

})



// --------progress bar--------

audioElement.addEventListener('timeupdate',()=>{
    let Progressbar = parseInt((audioElement.currentTime/audioElement.duration)*100)
// console.log(Progressbar)

// ----Start / End time------
Progress.value = Progressbar;
startTime.innerHTML ="0"+parseInt(audioElement.currentTime.toFixed(2));
endTime.innerHTML = parseInt(audioElement.duration/60)+ ":00";
// console.log(audioElement.currentTime)

})
// ------Updatin seek bar------

Progress.addEventListener('change',()=>{
   audioElement.currentTime = (Progress.value*audioElement.duration)/100
})


