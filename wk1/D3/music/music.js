var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var x = library.playlists;

  for(index in x){
    var z = x[index].tracks.length;
    var y = x[index].name;
    var i = x[index].id;
    console.log(i, ": ", y, " - ", z, " tracks");
  }
}
//printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
   var x = library.tracks;

  for(index in x){
    var z = x[index].album;
    var y = x[index].name;
    var i = x[index].id;
    var h = x[index].artist;

    console.log(i, ": ", y, " by ",  h, " (", z, ")");
  }
}
//printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  var x = playlist.name;
  var y = playlist.id;
  var z = playlist.tracks.length;
  var libraryTracks = library.tracks;
  console.log(y, ": ", x, " - ", z, " tracks");
  for (var tracks of playlist.tracks) {
   var currentTrackNameArtist = tracks + ": " + libraryTracks[tracks].name + " by " + libraryTracks[tracks].artist;
   var currentAlbum = " (" + libraryTracks[tracks].album + ")";
   var bigLine = currentTrackNameArtist + currentAlbum;
    console.log(currentTrackNameArtist + currentAlbum);
     }
  }

//printPlaylist('p01');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
console.log(library.playlists[playlistId].tracks);
var x = library.playlists[playlistId].tracks;
x.push(trackId);
//console.log(library.playlists[playlistId].tracks);
}
//addTrackToPlaylist("t01", 'p02');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var x = library.tracks;
  var y = uid();
  var z = {
    id: y,
    name: name,
    artist: artist,
    album: album,
  };
  x[y] = z;
}
//addTrack("R U Mine?", "Arctic Monkeeys", "AM");

// adds a playlist to the library

var addPlaylist = function (name) {
  var x = library;
  var y = uid();
  var z = {
    id: y,
    name: name,
    tracks: [],
  };
  x.playlists[y] = z;
  //console.log(library.playlists);
}
//addPlaylist('housemix');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  var x = query.toLowerCase();
  var exp = new RegExp(x);
  var y = library.tracks
  var results = [];
  for(index in y){
    var q = y[index].name;
    q = q.toLowerCase();
    var w = y[index].artist;
    w = w.toLowerCase();
    var e = y[index].album;
    e = e.toLowerCase();
    if(q.search(exp) != -1){
     console.log(y[index]);
    }
    if(w.search(exp) != -1){
      console.log(y[index])
    }
    if(e.search(exp) != -1){
      console.log(y[index]);
    }
  }
}
//printSearchResults('c')