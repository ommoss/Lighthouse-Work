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
      console.log(i, ": ", y, " by ",  x[index].artist, " (", x[index].album, ")");
    }
  },
  printPlaylist: function (playlistId) {
    var playlist = this.playlists[playlistId];
    var libraryTracks = this.tracks;
    console.log(
      playlist.id, ": ",
      playlist.name, " - ",
      playlist.tracks.length,
      this.multiple(playlist.tracks.length)
      );
    for (var tracks of playlist.tracks) {
      var currentTrackNameArtist = tracks + ": " + libraryTracks[tracks].name + " by " + libraryTracks[tracks].artist;
      var currentAlbum = " (" + libraryTracks[tracks].album + ")";
      var bigLine = currentTrackNameArtist + currentAlbum;
      console.log(currentTrackNameArtist + currentAlbum);
    }
  },
  multiple: function (length){
    if(length === 0){
      return "no tracks";
    }else if(length === 1){
      return "track";
    }else{
      return "tracks";
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
    var y = this.uid();
    var newTrack = {
      id: y,
      name: name,
      artist: artist,
      album: album,
    };
    this.tracks[y] = newTrack;
    //console.log(this.tracks);
  },
  addPlaylist: function (name) {
    var y = this.uid();
   // console.log(y);
    var z = {
      id: y,
      name: name,
      tracks: [],
    };
    this.playlists[y] = z;
    //console.log(x);
  },
  printSearchResults: function(query) {
    console.log("Searching for", query, "This will only take a second!");
    var x = query.toLowerCase();
    var exp = new RegExp(x);
    var y = this.tracks
    var j = Math.floor((Math.random()*5)+1);

    function searching(){
      for (var h = 0; h < j; h++){
        setTimeout(function times(){
          console.log("Searching...")
        }, ((h * 1000) + 1000));
       }
    }
    searching();
    setTimeout(function (){
      var results = {};
      for(index in y){
        var q = y[index].name;
        q = q.toLowerCase();
        var w = y[index].artist;
        w = w.toLowerCase();
        var e = y[index].album;
        e = e.toLowerCase();
        if(q.search(exp) != -1){
          if (!results[index]){
            results[index] = y[index];
          }
        }
        if(w.search(exp) != -1){
          if (!results[index]){
            results[index] = y[index];
          }
        }
        if(e.search(exp) != -1){
          if (!results[index]){
            results[index] = y[index];
          }
        }
      }
      if(Object.keys(results).length === 0){
        console.log("Nothing found");
      }else{
        console.log("Results are: ");
        for(t in results){
         console.log(t, ": ", "Name =", results[t].name, "Artist =", results[t].artist, "Album =", results[t].album  );
        }
      }
    }, ((j * 1000) + 1000))
  }
}
//library.printPlaylists();
//library.printTracks();
//library.printPlaylist('p02');
//library.addTrackToPlaylist("t01", 'p02');
//library.addTrack("R U Mine?", "Arctic Monkeeys", "AM");
//library.addPlaylist('housemix');
library.printSearchResults('cage');