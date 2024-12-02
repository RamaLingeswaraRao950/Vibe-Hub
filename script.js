const sounds = ['drum', 'flute', 'guitar', 'piano', 'sitar', 'violin']

// Define specific colors for each instrument
const colors = {
    drum: '#D35400',   // Burnt Orange
    flute: '#87CEFA',  // Light Sky Blue
    guitar: '#D4A373', // Warm Tan
    piano: '#000000',  // Classic Black
    sitar: '#B8860B',  // Antique Gold
    violin: '#8B4513'  // Rustic Brown
}

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    // Set the background color for each button
    btn.style.backgroundColor = colors[sound]

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}
