const sounds = ['drum', 'flute', 'guitar', 'piano', 'sitar', 'violin']

const colors = {
    drum: '#D35400',
    flute: '#87CEFA',
    guitar: '#D4A373',
    piano: '#000000',
    sitar: '#B8860B',
    violin: '#8B4513'
}

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

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
