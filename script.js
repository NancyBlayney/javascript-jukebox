$(document).ready(function(){


	function Jukebox(current_song){
		var that = this;
		this.current_song = "";
		this.song_directory = [];
		this.song_names = [];
		this.play_list = [];
		queueClicker = 0;


//Shows a list of all of the songs in the Jukebox object
		this.song_display = function(){
			for (i in this.song_directory){
				this.song_names.push('<div class="song_item"><div class="circle"></div><a href="#" class="song_list" onClick="selectSong.call(this)" data-location="' + this.song_directory[i].location + '">' + this.song_directory[i].songName + '</a></div>');
			};
			$('#song_directory').html(this.song_names.join(" "));
		}


//finds the current_song location and returns the object in a variable
		this.findCurrentSong = function(){
			currentSong = this.current_song;
		}


//Adds a song to the Jukebox object
		this.add_song_to_directory = function(song3){
			this.song_directory.push(song3);
			return this.song_directory;
		};


//Grabs the song object location from the browser, then runs it through a loop to find the whole Song object & displays the name of the current song in the browser
		this.showCurrentSong = function(){
			for (i in this.song_directory){
				if (this.current_song == this.song_directory[i].location){
				  nowPlaying = this.song_directory[i].songName.toUpperCase(); 
				}
			}
			$('#current_song_playing').clearQueue().html("")
			showText(nowPlaying, 0);
		};

		var showText = function (message, index) { 
			if (index < message.length) {
		    $('#current_song_playing').append(message[index++]);
		    setTimeout(function () { showText(message, index, 300); }, 300);
		  }
		}

//Plays the current song
		playSong = function(){
			player.play();
		};


//Pauses the current song
		stopSong = function(){
			player.pause();
		};




//sets the queue clicker, which influences the actions of the selectSong function
		queueSong = function(){
			if (queueClicker == 0){
				queueClicker = 1;
			}
			else {
				queueClicker = 0;
			}
		};


//Grabs the current song from the browser and passes it to the change_song method
//If queueClicker is set to 0, this will happen immediately
//If queueClicker is set to 1, the current song will finish playing before the next song plays
		selectSong = function(){
			var callingElement = this;
			this.current_song = callingElement;
		  var load_track = $(this).attr('data-location');
			if (queueClicker == 0){
			  that.change_song(load_track);
			}
			else {
				$('audio').on("ended", function(){
					if (queueClicker == 1){
						queueClicker = 0;
						that.change_song(load_track);
					};
				});
			};
		}


//Plays the song that is grabbed from the browser by the selectSong method and then passed over
		this.change_song = function(str){
		  this.current_song = str;
			var str = str;
			audio = $("#player");
			$('source').remove();
			$('#player').append('<source src="' + str + '" type="audio/mpeg">');
			audio[0].pause();
			audio[0].load();
			audio[0].oncanplaythrough = audio[0].play();
			this.showCurrentSong();
		}

	};



	function Song(songName, title, location){
		this.songName = songName
		this.title = title;
		this.location = location;
	};



//CSS helper - a module will pop up to explain how to use the "queue" function
	$('.help').mouseover(function(){
		$('.popup').toggle();
	}).mouseout(function(){
		$('.popup').toggle();
	});


$('.disco').mouseover(function(){
	$(".dancers").effect( "shake", {times:4}, 1000 )
});





	mercury = new Song("Mercury", "mercury.mp3", "audio/mercury.mp3");
	echo = new Song("Echo", "echo.mp3", "audio/echo.mp3");
	graffiti = new Song("Graffiti", "graffiti.mp3", "audio/graffiti.mp3");
	intro = new Song("Intro", "intro.mp3", "audio/intro.mp3");
	jazz = new Song("Jazz", "jazz.mp3", "audio/jazz.mp3");
	raven = new Song("Raven", "raven.mp3", "audio/raven.mp3");

  jukebox = new Jukebox(mercury);

	jukebox.add_song_to_directory(mercury);
	jukebox.add_song_to_directory(echo);
	jukebox.add_song_to_directory(graffiti);
	jukebox.add_song_to_directory(intro);
	jukebox.add_song_to_directory(jazz);
	jukebox.add_song_to_directory(raven);



	jukebox.song_display();
	jukebox.showCurrentSong();







	// $('#song_directory').html(jukebox.song_names.join(" "));




	// this.sauce = $('#src1');
	// source = this.sauce.src;




	// $('.song_list').click(function(){
	//   var load_track = $(this).attr('data-location');
	//   jukebox.change_song(load_track);
	// });
















});