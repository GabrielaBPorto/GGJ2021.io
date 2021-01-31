// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    getSoundById: (state) => (id) => {
        return state.sounds.find(sound => sound.id === id).path
    },
    getImageById: (state) => (id) => {
        return state.images.find(img => img.id === id).path
    },
    getDialog: (state) => (cena, sequencia) => {
        return state.dialogs.find(dialog => dialog.cena === cena & dialog.sequencia === sequencia)
    },
    getImageByScene: (state, getters) => () => {
        switch (state.cena) {
            case 0:
                return getters.getImageById('tela_inicial')
            case 1:
                return getters.getImageById('quarto_manha')
            case 2:
                return getters.getImageById('bar')
            case 3:
                return getters.getImageById('quarto_amigo')
            case 4:
                return getters.getImageById('quarto_noite')
            case 5:
                return getters.getImageById('quarto_dia')
            case 6:
                return getters.getImageById('cartorio')
            default:
                return getters.getImageById('tela_inicial')
        }
    },
    getSceneMusicStart: (state) => () => {
        switch (state.cena) {
            case 0:
                return 'inicio_inicio'
            case 1:
                return 'quarto_inicio'
            case 3:
                return 'balada_inicio'
            default:
                return 'inicio_inicio'
        }
    },
    getSceneMusicLoop: (state) => () => {
        switch (state.cena) {
            case 0:
                return 'inicio_loop'
            case 1:
                return 'quarto_loop'
            case 3:
                return 'balada_loop'
            default:
                return 'inicio_loop'
        }
    },
    getMsgs: (state) => (cena, msg) => {
        return state.msgs_cel.find(dialog => dialog.cena === cena & dialog.msg === msg)
    },
    getObjectMsg: (state) => (cena, item) => {
        return state.objetos.find(objeto => objeto.cena === cena & objeto.objeto === item)
    },
    getLastDialog: (state) => () => {
        var dialog = state.dialogos_vistos.slice(-1)[0]

        return dialog
    },
    getLastMsg: (state) => () => {
        var dialog = state.msgs_vistas.slice(-1)[0]
        return dialog
    },
    getCellNotif: (state) => () => {
        return state.notif_celular
    },
    readyNextScene: (state) => () => {
        var ready = false

        if (state.cena === 1 && state.dialogo_sequencia === 9 && state.msgs_sequencia === 33){
            ready = true
        }

        return ready
    },
    getChoice: (state) => () => {
        var choice = {}

        console.log('weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
        console.log(state.rotaCena1)
        if (state.cena === 1 && state.dialogo_sequencia === 8 && state.msgs_sequencia === 14 && state.rotaCena1 == 0){
            choice = state.escolhas.find(escolha => escolha.id === 1)
        }
        return choice
    },
    getRandomInterfaceSound: (state) => () => {
        var rand = Math.floor(Math.random() * 4)
        return state.interface_sounds[rand].path
    }
}