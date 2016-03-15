$(document).ready(function(){


	function Jukebox(current_song){
		this.current_song = current_song;
		this.song_directory = [];
		this.song_names = [];
		this.play_list = [];

		this.song_display = function(){
			for (i in this.song_directory){
				this.song_names.push('<a href="#" class="song_list" onclick="jukebox.change_song()" data-location="' + this.song_directory[i].location + '">' + this.song_directory[i].songName + '</a>');
			};
		}

		// song_list = $('.song_list');


		this.add_song_to_directory = function(song3){
			this.song_directory.push(song3);
			return this.song_directory;
		};

		// this.load_song = function(song2){
		// 	this.song = song2;
		// 	// this.current_song = song;	
		// }

		// this.play_song = function(song1){
		// 	this.current_song = song1;
		// 	player.play();
		// };

		// this.stop_song = function(){
		// 	player.pause();
		// };

		// this.queue_song = function(){

		// };


		this.change_song = function(str){
			console.log(str);
			var str = str;
			audio = $("#player");
			$('source').remove();
			$('#player').append('<source src="' + str + '" type="audio/mpeg">');
			audio[0].pause();
			audio[0].load();

			audio[0].oncanplaythrough = audio[0].play();
		}


	};






	function Song(songName, title, location){
		this.songName = songName
		this.title = title;
		this.location = location;
	};








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








	$('#song_directory').html(jukebox.song_names.join(" "));




	this.sauce = $('#src1');
	source = this.sauce.src;




	$('.song_list').click(function(){
	  var load_track = $(this).attr('data-location');
	  jukebox.change_song(load_track);
	});
















});