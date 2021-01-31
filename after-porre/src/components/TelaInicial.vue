<template>
    <v-container fluid> 
        <v-row justify="center" align="end">
            <v-col cols="12" sm="6" justify="center" align="end">
                <TituloInicial />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import TituloInicial from './TituloInicial';

export default {
    data: () => ({
    }),
    components:{
        TituloInicial
    },
    methods: {      
    }
  }
</script>
