<template>
    <v-container fluid class="mx-0 pa-0" :style="styleBlur">
        <v-img id="fundo"
            :lazy-src="backgroundImage()"
            :src="backgroundImage()"
            :style="checkOculoStyle()"
            ></v-img>
        <v-container fluid style="position:absolute;top:50%;left:55%;z-index:90" v-if="checkIfGlassesOnScreen()" @click="getGlasses()">
            <v-img :src="this.$store.getters.getImageById('oculos')" max-height="100" max-width="100"></v-img>
        </v-container>
        <v-container fluid style="position:absolute;top:0px;" id="tela">
            <v-row style="right:0px">
                <v-container fluid class="ma-2 d-flex justify-end">
                    <v-col cols="12" sm="2">
                        <v-card flat @click="openPhone()" :ripple="false" id="celular" class="d-flex justify-end" style="background-color: transparent !important;">
                            <v-img :src="cellphoneImage()" contain max-height="150" max-width="250"></v-img>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
            <v-row style="right:0px;min-height:380px;" class="mt-10 pt-10">
                <v-container fluid class="ma-2 d-flex justify-end" v-for="escolha in choices" :key="escolha.index" >
                    <v-col cols="12" sm="4">
                        <v-card min-height="100px" class="caixaTexto" tile @click="chooseOption(escolha.index)">
                            <v-card-text>
                                {{ escolha.msg }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
            <v-row style="right:0px" class="mt-7 pt-7" >
                <v-container fluid class="ma-2 d-flex justify-end" style="position:relative;">
                    <v-col cols="12" sm="12">
                        <v-card class="caixaTexto" min-height="200px" max-height="200px" @click="getNextDialog()" >
                            <v-img :src="characterImage()" max-height="180" max-width="180"
                            style="position:relative; display:inline-block;top:0;"
                            class="mt-2">
                            </v-img>
                            <v-card-text id="dialogo">
                                {{ this.textoAtual }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="2" style="position:absolute;top:-10%;left:10%">
                        <v-card class="caixaTexto" style="background: rgba(0, 0, 0, 1) !important;">
                            <v-card-text>
                                {{ this.nomePersonagem }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
        </v-container>
        <v-dialog
            v-model="phone"
            fullscreen
            >
                <v-container class="mt-0 pt-0">
                <v-card
                    max-width="450"
                    class="mx-auto"
                >
                    <v-card max-width="450" class="pa-2" color="cyan">
                        
                        <v-card color="#0E1621">
                            <v-toolbar
                            color="green"
                            dark
                            >
                                
                                <v-icon @click="openPhone()" >mdi-keyboard-backspace</v-icon>
                                <v-avatar>
                                    <v-img :src="characterImage()"></v-img>
                                </v-avatar>
                                <v-spacer></v-spacer>
                                <v-toolbar-title >Tulio Jorge (DESEMPREGADO)</v-toolbar-title>
                                <v-spacer></v-spacer>
                                </v-toolbar>
                            <v-virtual-scroll
                                :bench="benched"
                                :items="messages"
                                height="730"
                                item-height="80"
                                id="scroll"
                            >
                                <template v-slot:default="{ item }">
                                    <v-container fluid v-if="!item.sender" :key="item.id" class="my-2 pa-1">

                                            <v-list-item
                                            :key="item.title"
                                            class="d-flex justify-center"
                                            style="background-color:#FCFCFC;border:solid;border-radius:50px" 
                                            >

                                                <v-list-item-content >
                                                
                                                        <span class="mt-2" >{{ item.text }}</span>
                                                        <v-list-item-subtitle class="d-flex justify-end align-end">{{ item.time }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-container>
                                        <v-container fluid v-if="item.sender" :key="item.id" class="my-2 pa-1">
                                            <v-list-item
                                            :key="item.title"
                                            class="d-flex justify-center"
                                            style="background-color:#E3AFFA;border:solid;border-radius:50px"
                                            >
                                                <v-list-item-content  >
                                                        <span class="mt-2" >{{ item.text }}</span>
                                                        <v-list-item-subtitle class="d-flex justify-end align-end">{{ item.time }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-container>
                                </template>
                            </v-virtual-scroll>
                            <v-card @click="getNextMsg()">
                                <v-textarea
                                    disabled
                                    class="ma-1 pa-1"
                                    filled
                                    dense
                                    height="40px"
                                    value=". . ."
                                    append-icon="mdi-send"
                                    :ripple="false"
                                    ></v-textarea>
                                
                            </v-card>
                        </v-card>
                    </v-card>
                </v-card>
            </v-container>
            
        </v-dialog>
    </v-container>
</template>
<script>


export default {
    data: () => ({
        notificationCelular: false,
        choices : [],
        textoAtual : '. . .',
        imagemPersonagem : 'transparente',
        sequencia: 0,
        dialog: {},
        nomePersonagem: '',
        phone: false,
        styleBlur: 'filter: blur(0px);',
        messages : [],
        benched: 0,
        glasses: true,
    }),
    methods: {
        getNextMsg(){
            this.choices = this.$store.getters.getChoice()
            if (this.choices.options == undefined){
                this.$store.dispatch('proxMsg')
                let message = this.$store.getters.getLastMsg()
                this.messages.push(message)
            }
            else {
                this.choices = this.choices.options
            }
        },
        backgroundImage() {
            return this.$store.getters.getImageByScene()
        },
        changePhoneNotification(){
            this.notificationCelular = ! this.notificationCelular
        },
        cellphoneImage(){
            if (this.notificationCelular){
                return this.$store.getters.getImageById('icone_celular_notif')
            }
            else {
                return this.$store.getters.getImageById('icone_celular')
            }
        },
        oculosImage(){
            return this.$store.getters.getImageById('oculos')
        },
        getNextDialog(){
            if (!this.$store.getters.readyNextScene()){
                this.$store.dispatch('proxDialog')
                this.dialog = this.$store.getters.getLastDialog()
                this.textoAtual = this.dialog.text
                this.notificationCelular = this.$store.getters.getCellNotif()
                this.nomePersonagem = this.dialog.nome
                this.imagemPersonagem = this.dialog.imagem
            }
            else {
                this.$store.dispatch('trocarCena')
                this.$router.push('/cena')
                this.$store.dispatch('musicStart')
            }
        },
        characterImage() {
            return this.$store.getters.getImageById(this.imagemPersonagem)
        },
        openPhone(){
            this.phone = !this.phone
            this.notificationCelular = this.$store.getters.getCellNotif()
            this.getNextMsg()
            if(this.phone){
                this.styleBlur = "filter: blur(10px)"
                this.imagemPersonagem = 'melhor_amigo'
            }
            else{
                this.styleBlur = 'filter: blur(0px);'
                this.imagemPersonagem = 'transparente'
            }
                
        },
        getGlasses(){
            this.$store.state.oculos = 1
            this.glasses = false
            this.checkOculoStyle()
        },
        checkOculoStyle(){
            if(this.$store.state.oculos == 0){
                return "filter: blur(10px);"
            }else{
                return "filter: blur(0px);"
            }
        },
        checkIfGlassesOnScreen(){
            if(this.glasses && this.$store.state.cena == 1){
                return true
            }
            else{
                return false
            }
        },
        chooseOption(index) {
            console.log(index)
            this.$store.dispatch('rotaCena1',index)
            this.getNextMsg()
            this.getNextDialog()

        }
    }

  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
#fundo {
    height: 100%;
    width: 100%;
    position:relative; display:inline-block;
}
#teste {
    position: absolute;
}
.caixaTexto{
    background: rgba(0, 0, 0, 0.35) !important;
    border: solid;
    border-color: #20e2e3 !important;
}
.v-card__text{
    font-family: 'VT323', monospace;
    font-size: 24px !important;
    color: white !important;
}
#dialogo{
    font-size: 30px !important;
    -webkit-text-stroke: 0.5px black;
    position:absolute;
    top:0;
    left:10%;
    margin-top:15px
}
.celular {
    max-width:250px;
    max-height:250px;
    width: auto;
    height: auto;
}

</style>
