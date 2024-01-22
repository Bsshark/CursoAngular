interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const [,, trunks = 'not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];




console.log(`Personaje 3: ${trunks}  `)

const { song: anotherSong, details } = audioPlayer;
const { author, year } = details;
console.log(`Song: ${anotherSong} | Author: ${author}`)