$(document).ready(function(){

	var player = $('player');

	function Jukebox(current_song){
		this.current_song = current_song;
		this.song_directory = [];
		this.song_names = [];
		this.song_display = function(){
			for (i in this.song_directory){
				this.song_names.push('<span class="song_list">' + this.song_directory[i].songName + '</span>');
			};
		}
		
		this.play_list = [];
		this.add_song_to_directory = function(song){
			this.song_directory.push(song);
			return this.song_directory;
		};
		this.play_song = function(){
			// if (current_song.play?){
			// 	current_song.pause();
			// }
			// current_song = song
			player.play();
			return current_song;
		};
		this.stop_song = function(){
			current_song.pause();
		};
		this.queue_song = function(){

		};

	}

	function Song(songName, title, location){
		this.songName = songName
		this.title = title;
		this.location = location;
	}


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























});