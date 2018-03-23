//Library
const Library = function (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function (playlist) {
  return this.playlists.push(playlist);
}

//Playlist
const Playlist = function (name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function (track) {
  return this.tracks.push(track);
}

Playlist.prototype.overallRating = function () {
  let aveRating = 0;
  let tempSum = 0;

  this.tracks.forEach(track => {
    tempSum += track.rating;
  });

  aveRating = tempSum / this.tracks.length;

  return aveRating;
}

Playlist.prototype.totalDuration = function () {
  let totalDuration = 0;

  this.tracks.forEach(track => {
    totalDuration += track.length;
  });

  return totalDuration;
}

//Track
const Track = function (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const newLibrary = new Library('testLibrary', 'me');

const newTrack = new Track('testTitle', 3, 300);
const newTrack2 = new Track('testTitle2', 4, 400);

const newPlaylist = new Playlist('testPlaylist');

newPlaylist.addTrack(newTrack);
newPlaylist.addTrack(newTrack2);

// console.log('the tracks are: ', newTrack, newTrack2);
// console.log('the playlist is: ', newPlaylist);
// console.log('average rating is: ', newPlaylist.overallRating());
// console.log('total length is: ', newPlaylist.totalDuration());

newLibrary.addPlaylist(newPlaylist);

// console.log('the library is: ', newLibrary); 