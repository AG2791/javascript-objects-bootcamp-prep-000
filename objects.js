var playlist = {artistName:"songTitles"}

function updatePlaylist(playlist, artistName,songTitles) {
  // playlist['artistName'] =songTitles;
  
  Object.assign({}, playlist, { artistName: [''Phil Ochs', "Here's to the State of Mississippi'] })
  
  return playlist;
}