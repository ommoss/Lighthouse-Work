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
             },
  printPlaylists: function () {
    var x = this.playlists;

    for(index in x){
      var z = x[index].tracks.length;
    var y = x[index].name;
      var i = x[index].id;
      console.log(i, ": ", y, " - ", z, " tracks");
    }
  },
  printTracks: function () {
    var x = this.tracks;
    for(index in x){
      var z = x[index].album;
      var y = x[index].name;
      var i = x[index].id;
      var h = x[index].artist;
      console.log(i, ": ", y, " by ",  h, " (", z, ")");
    }
  },
  printPlaylist: function (playlistId) {
    var playlist = this.playlists[playlistId];
    var x = playlist.name;
    var y = playlist.id;
    var z = playlist.tracks.length;
    var libraryTracks = this.tracks;
    console.log(y, ": ", x, " - ", z, " tracks");
    for (var tracks of playlist.tracks) {
      var currentTrackNameArtist = tracks + ": " + libraryTracks[tracks].name + " by " + libraryTracks[tracks].artist;
      var currentAlbum = " (" + libraryTracks[tracks].album + ")";
      var bigLine = currentTrackNameArtist + currentAlbum;
      console.log(currentTrackNameArtist + currentAlbum);
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    //console.log(this.playlists[playlistId].tracks);
    var x = this.playlists[playlistId].tracks;
    x.push(trackId);
    //console.log(library.playlists[playlistId].tracks);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var x = this.tracks;
    var y = this.uid();
    var z = {
      id: y,
      name: name,
      artist: artist,
      album: album,
    };
    x[y] = z;
    //console.log(x);
  },
  addPlaylist: function (name) {
    var x = this;
    var y = this.uid();
    var z = {
      id: y,
      name: name,
      tracks: [],
    };
    x.playlists[y] = z;
    //console.log(x);
  },
  printSearchResults: function(query) {
  var x = query.toLowerCase();
  var exp = new RegExp(x);
  var y = this.tracks
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
}
//library.printPlaylists();
//library.printTracks();
//library.printPlaylist('p01');
library.addTrackToPlaylist("t01", 'p02');
library.addTrack("R U Mine?", "Arctic Monkeeys", "AM");
library.addPlaylist('housemix');
//library.printSearchResults('c')