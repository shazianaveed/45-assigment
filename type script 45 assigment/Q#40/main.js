function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("shazia", "Album title 1");
var album2 = make_album(" soha", "album title 2");
var album3 = make_album(" naveed", "album title 3");
console.log(album1);
console.log(album2);
console.log(album3);
