let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create a audio Element
let track = document.createElement('audio');

//All songs list
let All_song = [
    {
        name: 'Wayne Brady',
        path: 'music/song1.mp3',
        img: 'images/img1.jpg',
        singer: 'Brady/Chappelle'
    },
    {
        name: 'Arsenio Hall',
        path: 'music/song2.mp3',
        img: 'images/img2.jpg',
        singer: 'Good Ass Cheese'
    },
    {
        name: 'Wu-Tang',
        path: 'music/song3.mp3',
        img: 'images/img3.jpg',
        singer: 'Triumph'
    },
  
    {
        name: 'Pulp Fiction',
        path: 'music/song4.mp3',
        img: 'images/img4.jpg',
        singer: 'Royale with Cheese'
    },
    {
        name: 'Krayzie Bone',
        path: 'music/song5.mp3',
        img: 'images/img5.jpg',
        singer: 'Life is a lesson to learn'
    },
    {
        name: 'Layzie Bone',
        path: 'music/song6.mp3',
        img: 'images/img6.jpg',
        singer: 'New Life'
    },
    {
        name: 'Bone Thugs',
        path: 'music/song7.mp3',
        img: 'images/img7.jpg',
        singer: '1st of the Month'
    },
    {
        name: 'Bone Thugs',
        path: 'music/song8.mp3',
        img: 'images/img8.jpg',
        singer: 'Thuggish Ruggish'
    },
    {
        name: 'Bone Thugs',
        path: 'music/song9.mp3',
        img: 'images/img9.jpg',
        singer: 'Crossroads'
    },
    {
        name: '2pac',
        path: 'music/song10.mp3',
        img: 'images/img10.jpg',
        singer: 'Live & Die in LA'
    },
    {
        name: '2pac',
        path: 'music/song11.mp3',
        img: 'images/img11.jpg',
        singer: 'Keep your head up'
    },
    {
        name: '2pac',
        path: 'music/song12.mp3',
        img: 'images/img12.jpg',
        singer: 'Only god can judge me'
    },
    {
        name: 'R.E.M',
        path: 'music/song13.mp3',
        img: 'images/img13.jpg',
        singer: 'Man in the Moon'
    },
    {
        name: 'R.E.M',
        path: 'music/song14.mp3',
        img: 'images/img14.jpg',
        singer: 'Losing my Religion'
    },
    {
        name: 'Doors',
        path: 'music/song15.mp3',
        img: 'images/img15.jpg',
        singer: 'Love her Madly'
    },
    {
        name: 'Doors',
        path: 'music/song16.mp3',
        img: 'images/img16.jpg',
        singer: 'This is the end'
    },
    {
        name: 'Doors',
        path: 'music/song17.mp3',
        img: 'images/img17.jpg',
        singer: 'People are strange'
    },
    {
        name: 'Run DMC',
        path: 'music/song18.mp3',
        img: 'images/img18.jpg',
        singer: 'King of Rock'
    },
    {
        name: 'Mark Morrison',
        path: 'music/song19.mp3',
        img: 'images/img19.jpg',
        singer: 'Return of the Mack'
    },
    {
        name: 'Enigma',
        path: 'music/song20.mp3',
        img: 'images/img20.jpg',
        singer: 'Return of the innocence'
    },
    {
        name: 'Rihanna',
        path: 'music/song21.mp3',
        img: 'images/img21.jpg',
        singer: 'Like the way you love'
    },
    {
        name: 'Rihanna',
        path: 'music/song22.mp3',
        img: 'images/img22.jpg',
        singer: 'Monster'
    },
    {
        name: 'Rihanna',
        path: 'music/song23.mp3',
        img: 'images/img23.jpg',
        singer: 'Diamonds'
    },
    {
        name: 'JayZ & Alicia Keys',
        path: 'music/song24.mp3',
        img: 'images/img24.jpg',
        singer: 'Empire state of mind'
    },
    {
        name: 'ReaperBlue oystercult',
        path: 'music/song25.mp3',
        img: 'images/img25.jpg',
        singer: 'CowBell'
    },
    {
        name: 'White boy Rick',
        path: 'music/song26.mp3',
        img: 'images/img26.jpg',
        singer: 'I feel love'
    },
    {
        name: 'Hippie Sabotage',
        path: 'music/song27.mp3',
        img: 'images/img27.jpg',
        singer: 'Devil Eyes'
    },
    {
        name: 'Post Malone',
        path: 'music/song28.mp3',
        img: 'images/img28.jpg',
        singer: 'Sun flower'
    },
    {
        name: 'Squadda B',
        path: 'music/song29.mp3',
        img: 'images/img29.jpg',
        singer: 'North Oakland Extasy'
    },
    {
        name: 'Ricky Desktop',
        path: 'music/song30.mp3',
        img: 'images/img30.jpg',
        singer: 'Banjo Beat'
    },
    {
        name: 'Squadda B',
        path: 'music/song31.mp3',
        img: 'images/img31.jpg',
        singer: 'Space age hustle'
    }
    
];

//All function


//function load the track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);

}
load_track(index_no);


//mute sound
function mute_sound() {
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}


//reset song slider
function reset_slider() {
    slider.value = 0;
}

//checking the song is playing or not
function justplay() {
    if(playing_song == false) {
        playsong();
    } else {
        pausesong();
    }
}

//play song 
function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}


//pause song
function pausesong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

//next song
function next_song() {
    if(index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

//previous song
function previous_song() {
    if(index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

//change volume
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

//change slider position
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}


//autoplay function
function autoplay_switch() {
    if(autoplay==1) {
        autoplay=0;
        auto_play.style.background = 'rgba(255, 255, 255, 0.2)';
    } else {
        autoplay = 1;
        auto_play.style.background = '#FF8A65';
    }
}
function range_slider() {
    let position = 0;

    //update slider position
    if(!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

//function will run when the song is over
if(track.ended) {
    play.innerHTML = '<i class="fa fa-play"></i>';
    if(autoplay==1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
}
}