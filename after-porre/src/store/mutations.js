// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    trocarCena (state) {
        state.cena++
    },
    
    oculosAntigos (state) {
        state.oculos = 1
    },

    oculosNovos (state) {
        state.oculos = 2
    },

    alterarMusica (state, payload ){
        state.musica_inicio = payload.inicio;
        state.musica_loop = payload.loop;
    },

    rotaCena1 (state, rota){
        state.rotaCena1 = rota
    },

    changeMusic (state,  payload){
        if (state.music.src !== undefined){
            state.music.load()
        }
        state.music = new Audio(payload.inicio)
        state.music.volume = 0.3
        state.music.play()

        state.music.addEventListener('ended', () => {
            console.log('Música original se encerrou')
            state.music.load()
            state.music.src = payload.loop
            state.music.volume = 0.3
            state.music.loop = true
            state.music.play()
        });
    },
    
    soundEffect (state, efeito) {
        state.effects = new Audio(efeito)
        var effectPromise = state.effects.play()
        if (effectPromise !== undefined) {
            effectPromise.then(() => {
                console.log('Tocando efeito: ' + efeito )
            })
            effectPromise.catch(error => {
                console.error('Erro: ' + error)
            })
        }
    },

    interfaceEffect (state, efeito) {
        state.effects = new Audio(efeito)
        state.effects.volume = 0.2
        var effectPromise = state.effects.play()
        if (effectPromise !== undefined) {
            effectPromise.then(() => {
                console.log('Tocando efeito: ' + efeito )
            })
            effectPromise.catch(error => {
                console.error('Erro: ' + error)
            })
        }
    },

    phoneEffect (state, efeito) {
        state.effects = new Audio(efeito)
        state.effects.volume = 0.2
        var effectPromise = state.effects.play()
        if (effectPromise !== undefined) {
            effectPromise.then(() => {
                console.log('Tocando efeito: ' + efeito )
            })
            effectPromise.catch(error => {
                console.error('Erro: ' + error)
            })
        }
    },

    audioPlaying (state, isPlaying) {
        state.audioIsPlaying = isPlaying
    },

    resetSequencias (state){
        state.dialogo_sequencia = 0
        state.msgs_sequencia = 0
    },

    adicionaDialogVisto (state, dialog){
        state.dialogos_vistos.push(dialog)
    },

    adicionaMsgVista (state, msg){
        state.msgs_vistas.push(msg)
    },

    nextDialog (state){
        state.dialogo_sequencia++
    },

    nextMsg (state){
        state.msgs_sequencia++
    },

    notif_celular (state){
        state.notif_celular = !state.notif_celular
    },

    setDialogSequence (state, jump){
        state.dialogo_sequencia = jump
    },

    setMsgsSequence (state, jump){
        state.msgs_sequencia = jump
    },
    
}
  
  
  