var playlist = {artistName:"songTitles"}

function updatePlaylist(playlist, artistName,songTitles) {
  // playlist['artistName'] =songTitles;
  
  playlist["Phil Ochs"] = "My Blood Valentine";
  
  return playlist;
}

function removeFromPlaylist (playlist,artistName) {
  delete playlist.artistName;
} 