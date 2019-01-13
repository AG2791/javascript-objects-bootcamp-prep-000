var playlist = {artistName:"songTitles"}

function updatePlaylist(playlist, artistName,songTitles) {
  // playlist['artistName'] =songTitles;
  
  Object.assign({}, playlist, { artistName: [''] })
  
  return playlist;
}