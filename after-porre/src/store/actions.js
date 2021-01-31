// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    trocarCena( { commit, getters }) {
        commit('trocarCena');
        const payload = { 'inicio': getters.getSceneMusicStart(), 'loop': getters.getSceneMusicLoop()}
        commit('alterarMusica', payload)
        commit('audioPlaying', false)
        commit('resetSequencias')
    },

    rotaCena1 ( {commit}, rota ) {
        commit('rotaCena1', rota)
        commit('notif_celular')
    },
    
    musicStart ( {commit, state, getters }) {
        if (!state.audioIsPlaying){
            commit('audioPlaying', true)
            const payload = { 'inicio': getters.getSoundById(state.musica_inicio), 'loop': getters.getSoundById(state.musica_loop) }
            commit('changeMusic', payload)
        }
    },

    proxDialog ( { state, dispatch }){
        if (state.cena === 1){
            dispatch('proxDialogCena1')
        }

    },

    proxDialogCena1 ( { commit, state, getters }){
        var dialog = []        

        if (state.cena === 1 && state.dialogo_sequencia < 6 && state.oculos === 0){
            commit('nextDialog')
            dialog = getters.getDialog(state.cena, state.dialogo_sequencia)
            commit('adicionaDialogVisto', dialog)
            if (state.dialogo_sequencia === 8){
                commit('notif_celular')
                commit('soundEffect', getters.getSoundById('notif_celular'))
            }
        }
        if (state.cena === 1 && state.dialogo_sequencia < 8 && state.oculos > 0 && !state.rotaCena1){
            commit('nextDialog')
            dialog = getters.getDialog(state.cena, state.dialogo_sequencia)
            commit('adicionaDialogVisto', dialog)
            if (state.dialogo_sequencia === 8){
                commit('notif_celular')
                commit('soundEffect', getters.getSoundById('notif_celular'))
            }
        }
        if (state.cena === 1 && state.dialogo_sequencia === 8 && state.msgs_sequencia === 33){
            commit('nextDialog')
            dialog = getters.getDialog(state.cena, state.dialogo_sequencia)
            commit('adicionaDialogVisto', dialog)
        }
        
        if (dialog.cena > 0){
            commit('interfaceEffect', getters.getRandomInterfaceSound())
        }
    },

    proxMsg ( { state, dispatch }){
        if (state.cena === 1){
            dispatch('proxMsgCena1')
        }
    },

    proxMsgCena1 ( { commit, state, getters } ){
        var dialog = {}        
        if(state.cena === 1 && state.msgs_sequencia < 14 && !state.rotaCena1){
            commit('nextMsg')
            dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
            commit('adicionaMsgVista', dialog)
            if(state.msgs_sequencia == 14){
                commit('notif_celular')
            }
        }

        if(state.cena === 1 && state.msgs_sequencia === 14 && state.rotaCena1 === 1){
            commit('setMsgsSequence', 15)
            dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
            commit('adicionaMsgVista', dialog)
        }

        if(state.cena === 1 && state.msgs_sequencia === 14 && state.rotaCena1 === 2){
            commit('setMsgsSequence', 24)
            dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
            commit('adicionaMsgVista', dialog)
        }

        if(state.cena === 1 && state.msgs_sequencia < 33 && state.rotaCena1 > 0){
            if (state.msgs_sequencia === 23){
                commit('setMsgsSequence', 31)
            }
            else{
                commit('nextMsg')
            }
            dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
            commit('adicionaMsgVista', dialog)

            if (state.msgs_sequencia === 33){
                commit('notif_celular')
            }
        }

        if (dialog.cena){
            if (dialog.sender === true){
                commit('phoneEffect', getters.getSoundById('mensagem_enviada_chat'))
            }
            else{
                commit('phoneEffect', getters.getSoundById('mensagem_recebida_chat'))
            }
        }
    },

    objectClick ( { state, dispatch }, idObjeto){
        if (state.cena === 1){
            dispatch('objectClickCena1', idObjeto)
        }
    },

    objectClickCena1 ( { commit, state, getters }, idObjeto){
        var dialog = {}
        var item = idObjeto

        if (state.oculos === 0 && item === 'cueca'){
            item = 'cueca_blur'
        }

        dialog = getters.getObjectMsg(state.cena, item)
        commit('adicionaDialogoVisto', dialog)
    },
}
  
  
  