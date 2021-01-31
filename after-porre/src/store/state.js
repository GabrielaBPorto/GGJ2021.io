// https://vuex.vuejs.org/en/state.html

export default () => ({
    valor: 0,

    // Músicas & Efeitos Sonoros
    sounds: [
      { id: 'inicio_inicio', path: require('@/assets/sounds/inicio_inicio.mp3')},
      { id: 'inicio_loop', path: require('@/assets/sounds/inicio_loop.mp3')},

      { id: 'balada_inicio', path: require('@/assets/sounds/balada_inicio.mp3')},
      { id: 'balada_loop', path: require('@/assets/sounds/balada_loop.mp3')},

      { id: 'quarto_inicio', path: require('@/assets/sounds/quarto_inicio.mp3')},
      { id: 'quarto_loop', path: require('@/assets/sounds/quarto_loop.mp3')},

      { id: 'externa_noite_inicio', path: require('@/assets/sounds/externa_noite_inicio.mp3')},
      { id: 'externa_noite_loop', path: require('@/assets/sounds/externa_noite_loop.mp3')},

      { id: 'externa_dia_inicio', path: require('@/assets/sounds/externa_dia_inicio.mp3')},
      { id: 'externa_dia_loop', path: require('@/assets/sounds/externa_dia_loop.mp3')},

      { id: 'melhor_amigo_inicio', path: require('@/assets/sounds/melhor_amigo_inicio.mp3')},
      { id: 'melhor_amigo_loop', path: require('@/assets/sounds/melhor_amigo_loop.mp3')},

      { id: 'interesse_romantico_inicio', path: require('@/assets/sounds/interesse_romantico_inicio.mp3')},
      { id: 'interesse_romantico_loop',   path: require('@/assets/sounds/interesse_romantico_loop.mp3')},

      { id: 'cartorio_inicio', path: require('@/assets/sounds/cartorio_inicio.mp3')},
      { id: 'cartorio_loop',   path: require('@/assets/sounds/cartorio_loop.mp3')},

      { id: 'notif_celular',   path: require('@/assets/sounds/notif_celular.mp3')},

      { id: 'mensagem_enviada_chat', path: require('@/assets/sounds/mensagem_enviada_chat.mp3')},
      { id: 'mensagem_recebida_chat',   path: require('@/assets/sounds/mensagem_recebida_chat.mp3')},

      { id: 'pegar_chave', path: require('@/assets/sounds/pegar_chave.mp3')},

      { id: 'pegar_oculos',   path: require('@/assets/sounds/pegar_oculos.mp3')},
      { id: 'colocar_oculos',   path: require('@/assets/sounds/colocar_oculos.mp3')},

      { id: 'resposta_1',   path: require('@/assets/sounds/resposta_1.mp3')},
      { id: 'resposta_2',   path: require('@/assets/sounds/resposta_2.mp3')},
      { id: 'resposta_3',   path: require('@/assets/sounds/resposta_3.mp3')},

      { id: 'pegar_celular', path: require('@/assets/sounds/pegar_celular.mp3')},
      { id: 'abrir_celular', path: require('@/assets/sounds/abrir_celular.mp3')},

      { id: 'pegar_tecido', path: require('@/assets/sounds/pegar_tecido.mp3')},      
    ],

    interface_sounds: [
      { id: 'interface_1',   path: require('@/assets/sounds/interface_1.mp3')},
      { id: 'interface_2',   path: require('@/assets/sounds/interface_2.mp3')},
      { id: 'interface_3',   path: require('@/assets/sounds/interface_3.mp3')},
      { id: 'interface_4',   path: require('@/assets/sounds/interface_4.mp3')},
    ],

    // Imagens
    images: [
      // Ícones & Objetos
      { id: 'icone_celular', path: require('@/assets/images/icone_celular.png')},
      { id: 'icone_celular_notif', path: require('@/assets/images/icone_celular_notif.png')},
      { id: 'tela_inicial', path: require('@/assets/images/afterporreTelaInicial.png')},
      { id: 'celular', path: require('@/assets/images/objetos/celular.png')},
      { id: 'coisas', path: require('@/assets/images/objetos/coisas.png')},
      { id: 'cueca', path: require('@/assets/images/objetos/cueca.png')},
      { id: 'oculos', path: require('@/assets/images/objetos/oculos.png')},
      { id: 'papel', path: require('@/assets/images/objetos/papel.png')},
      { id: 'remedio', path: require('@/assets/images/objetos/remedio.png')},
      { id: 'transparente', path: require('@/assets/images/transparente.png')},

      // Bartender
      { id: 'bartender_feliz', path: require('@/assets/images/bartender/bartender_feliz.png')},
      { id: 'bartender_nojo', path: require('@/assets/images/bartender/bartender_nojo.png')},
      { id: 'bartender_pensativa', path: require('@/assets/images/bartender/bartender_pensativa.png')},
      { id: 'bartender_rindo', path: require('@/assets/images/bartender/bartender_rindo.png')},
      { id: 'bartender_seria', path: require('@/assets/images/bartender/bartender_seria.png')},
      { id: 'bartender_surpresa', path: require('@/assets/images/bartender/bartender_surpresa.png')},
      { id: 'bartender', path: require('@/assets/images/bartender/bartender.png')},
      { id: 'bartender_pe', path: require('@/assets/images/bartender/bartender_pe.png')},

      // Interesse Romantico
      { id: 'ir_blush', path: require('@/assets/images/interesse_romantico/ir_blush.png')},
      { id: 'ir_nojo', path: require('@/assets/images/interesse_romantico/ir_nojo.png')},
      { id: 'ir_pensando_blush', path: require('@/assets/images/interesse_romantico/ir_pensando_blush.png')},
      { id: 'ir_pensando', path: require('@/assets/images/interesse_romantico/ir_pensando.png')},
      { id: 'ir_rindo', path: require('@/assets/images/interesse_romantico/ir_rindo.png')},
      { id: 'ir_serio', path: require('@/assets/images/interesse_romantico/ir_serio.png')},
      { id: 'ir_sorrindo_blush', path: require('@/assets/images/interesse_romantico/ir_sorrindo_blush.png')},
      { id: 'ir_sorrindo', path: require('@/assets/images/interesse_romantico/ir_sorrindo.png')},
      { id: 'ir_surpreso_blush', path: require('@/assets/images/interesse_romantico/ir_surpreso_blush.png')},
      { id: 'ir_surpreso', path: require('@/assets/images/interesse_romantico/ir_surpreso.png')},
      { id: 'ir', path: require('@/assets/images/interesse_romantico/ir.png')},
      { id: 'ir_pe', path: require('@/assets/images/interesse_romantico/ir_pe.png')},

      // Melhor Amigo
      { id: 'melhor_amigo_pensativo', path: require('@/assets/images/melhor_amigo/melhor_amigo_pensativo.png')},
      { id: 'melhor_amigo_ressaca', path: require('@/assets/images/melhor_amigo/melhor_amigo_ressaca.png')},
      { id: 'melhor_amigo_serio', path: require('@/assets/images/melhor_amigo/melhor_amigo_serio.png')},
      { id: 'melhor_amigo_surpreso', path: require('@/assets/images/melhor_amigo/melhor_amigo_surpreso.png')},
      { id: 'melhor_amigo_zoando', path: require('@/assets/images/melhor_amigo/melhor_amigo_zoando.png')},
      { id: 'melhor_amigo', path: require('@/assets/images/melhor_amigo/melhor_amigo.png')},
      { id: 'melhor_amigo_pe', path: require('@/assets/images/melhor_amigo/melhor_amigo_pe.png')},

      // Cenários
      { id: 'bar', path: require('@/assets/images/cenario/bar.png')},
      { id: 'cartorio', path: require('@/assets/images/cenario/cartorio.png')},
      { id: 'quarto_amigo', path: require('@/assets/images/cenario/quarto_amigo.png')},
      { id: 'quarto_dia', path: require('@/assets/images/cenario/quarto_dia.png')},
      { id: 'quarto_manha', path: require('@/assets/images/cenario/quarto_manha.png')},
      { id: 'quarto_noite', path: require('@/assets/images/cenario/quarto_noite.png')},
      { id: 'quarto_amigo_papel', path: require('@/assets/images/cenario/quarto_amigo_papel.png')}
    ],

    // Diálogos
    dialogs: [
      { cena: 1, sequencia: 1, personagem: 'mc', text: 'Acordo grunhindo em minha cama, olhos sensíveis a pouca luz do Sol entrando no quarto.', nome: 'ALEX', imagem: 'transparente'},
      { cena: 1, sequencia: 2, personagem: 'mc', text: '"Uuuugggghhh... que dor de cabeça... será que alguém anotou a placa do ônibus que me atropelou?"', nome: 'ALEX', imagem: 'transparente'},
      { cena: 1, sequencia: 3, personagem: 'mc', text: '"A propósito, como será que eu cheguei em casa?"', nome: 'ALEX', imagem: 'transparente'},
      { cena: 1, sequencia: 4, personagem: 'mc', text: 'Coloco as mãos na cabeça, massageando minhas têmporas para fazer passar a dor.', nome: 'ALEX', imagem: 'transparente'},
      { cena: 1, sequencia: 5, personagem: 'mc', text: '"Não consigo lembrar de nada que aconteceu ontem a noite... e já é tarde, mal entra luz pela janela..."', nome: 'ALEX', imagem: 'transparente'},     
      { cena: 1, sequencia: 6, personagem: 'mc', text: '"Preciso achar meus óculos, não estou enxergando nada."', nome: 'ALEX', imagem: 'transparente'},
      { cena: 1, sequencia: 7, personagem: 'mc', text: '"Droga, se esse é meu óculos antigo, onde será que está o novo? Bom, melhor que nada."', nome: 'ALEX', imagem: 'transparente'},      
      { cena: 1, sequencia: 8, personagem: 'mc', text: '"Quantas mensagens não lidas..."', nome: 'ALEX', imagem: 'transparente'},
      { cena: 1, sequencia: 9, personagem: 'mc', text: '"Além da carteira e dos meus óculos, espero encontrar minha dignidade no Velvet também..."', nome: 'ALEX', imagem: 'transparente'},

      { cena: 2, sequencia: 1, personagem: 'mc', text: 'Depois de conversar com Túlio, me dirijo para a Velvet.', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 2, personagem: 'mc', text: 'O motorista me olha de um jeito esquisito quando peço informações, antes de checar suas coisas', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 3, personagem: 'mc', text: 'Ele me mostra minha carteira, dizendo que foi encontrada no chão do banheiro por outra pessoa.', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 4, personagem: 'mc', text: 'Também me disse que eu passei MUITO mal ontem no banheiro... que vergonha.', nome: '', imagem: 'transparente'},      
      { cena: 2, sequencia: 5, personagem: 'mc', text: 'Mas pelo lado bom, recuperei minha carteira - vamos ver o que mais encontro por aqui.', nome: 'ALEX', imagem: 'transparente'},     
      { cena: 2, sequencia: 6, personagem: 'mc', text: 'Me aproximo do balcão, atendido por uma moça de cabelos azuis e orelhas de... coelhinho?.', nome: 'ALEX', imagem: 'transparente'},
      
      { cena: 2, sequencia: 7, personagem: 'mc', text: 'Encaro a garota até ela puxar assunto.', nome: 'ALEX', imagem: 'transparente'},      
      { cena: 2, sequencia: 8, personagem: 'mc', text: '"Hã, com licença moça?"', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 9, personagem: 'lola', text: '"Boa noite! Chegou cedo hoje hein? A festa mal começou ainda hahaha."', nome: 'LOLA AYANAMI', imagem: 'bartender_feliz'},
      { cena: 2, sequencia: 10, personagem: 'lola', text: '"Quer pedir algum drink? O especial da noite é o Soco no Estômago!"', nome: 'LOLA AYANAMI', imagem: 'bartender_feliz'},
      { cena: 2, sequencia: 11, personagem: 'lola', text: '"É uma mistura de vodka, refrigerante de guaraná e chocolate branco."', nome: 'LOLA AYANAMI', imagem: 'bartender_feliz'},

      // Cena 2, Escolha 1, Rota 2 - Bad End
      { cena: 2, sequencia: 12, personagem: 'mc', text: '"Acho que eu não deveria... mas vou querer um Soco no Estômago!"', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 13, personagem: 'mc', text: '"Você bebeu demais, outra vez."', nome: 'BAD ENDING', imagem: 'transparente'},

      // Cena 2, Escolha 1, Rota 1
      { cena: 2, sequencia: 14, personagem: 'mc', text: '"Na verdade... hoje vou ficar só na água com gás."', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 15, personagem: 'lola', text: '"Aqui está! Mas e então, o que lhe trás tão cedo aqui?"', nome: 'LOLA AYANAMI', imagem: 'bartender'},
      { cena: 2, sequencia: 16, personagem: 'mc', text: '"Ah, eu vim aqui ontem e acabei perdendo algumas coisas durante a noite."', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 17, personagem: 'mc', text: '"Então voltei para procurar. Já consegui pegar a carteira com o segurança."', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 18, personagem: 'lola', text: '"Entendi! Não estava trabalhando ontem, mas meu colega comentou sobre alguém que exagerou na bebida."', nome: 'LOLA AYANAMI', imagem: 'bartender_feliz'},
      { cena: 2, sequencia: 19, personagem: 'lola', text: '"E ela acabou passando MUITA vergonha durante a noite! HAHAHAHA!"', nome: 'LOLA AYANAMI', imagem: 'bartender_feliz'},
      { cena: 2, sequencia: 20, personagem: 'mc', text: 'Mas não é possível...', nome: 'ALEX', imagem: 'transparente'},

      { cena: 2, sequencia: 21, personagem: 'mc', text: '"Nossa, mas o que exatamente essa pessoa fez??? Hahahaha..."', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 22, personagem: 'lola', text: '"Ah, ele me contou que ela dormiu no fumódromo, hahaha!"', nome: 'LOLA AYANAMI', imagem: 'bartender_pensativa'},

      { cena: 2, sequencia: 23, personagem: 'mc', text: 'Rindo de nervoso, respondo: "Hahaha...."', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 24, personagem: 'lola', text: '"E ela também chegou a lamber o corrimão da balada HAHAHAHAHA!!!"', nome: 'LOLA AYANAMI', imagem: 'bartender_rindo'},

      // Cena 2, Escolha 2, Rota 1
      { cena: 2, sequencia: 25, personagem: 'mc', text: '....', nome: 'ALEX', imagem: 'transparente'},      
      { cena: 2, sequencia: 26, personagem: 'lola', text: '"Aconteceu alguma coisa?"', nome: 'LOLA AYANAMI', imagem: 'bartender_seria'},
      { cena: 2, sequencia: 27, personagem: 'mc', text: '"Eu... acho que... eu  era essa pessoa..."', nome: 'ALEX', imagem: 'transparente'},
      { cena: 2, sequencia: 28, personagem: 'lola', text: '"..."', nome: 'LOLA AYANAMI', imagem: 'bartender_nojo'},

      // Cena 2, Escolha 2, Rota 2
      { cena: 2, sequencia: 29, personagem: 'mc', text: '"Hahaha... hilário... mas e aí, qual seu nome mesmo?"', nome: 'ALEX', imagem: 'transparente'},            
      { cena: 2, sequencia: 30, personagem: 'lola', text: '"Lola Ayanami"', nome: 'LOLA AYANAMI', imagem: 'bartender'},
      { cena: 2, sequencia: 31, personagem: 'mc', text: '"Isso é tipo... seu nome de verdade mesmo?"', nome: 'ALEX', imagem: 'transparente'},      
      { cena: 2, sequencia: 32, personagem: 'lola', text: '"É artístico."', nome: 'LOLA AYANAMI', imagem: 'bartender_seria'},
    ],
    
    msgs_cel: [
      { cena: 1, msg: 1, chat: 'melhor_amigo', sender: false, time: '04:07', text: 'Kdê vcê?????'},
      { cena: 1, msg: 2, chat: 'melhor_amigo', sender: false, time: '05:11', text: 'Te perdi na festa e já voltei pra casa.' },
      { cena: 1, msg: 3, chat: 'melhor_amigo', sender: false, time: '05:12', text: 'Avisa quando chegar em casa!'},
      { cena: 1, msg: 4, chat: 'melhor_amigo', sender: false, time: '13:58', text: 'Já acordou?????'},
      { cena: 1, msg: 5, chat: 'melhor_amigo', sender: false, time: '15:33', text: 'Alou???'},
      { cena: 1, msg: 6, chat: 'melhor_amigo', sender: false, time: '16:00', text: 'Você tem duas ligações perdidas'},

      { cena: 1, msg: 7, chat: 'melhor_amigo', sender: true, time: '16:59', text: 'Bom dia...'},
      { cena: 1, msg: 8, chat: 'melhor_amigo', sender: true, time: '17:00', text: 'Não sei como nem quando cheguei'},
      { cena: 1, msg: 9, chat: 'melhor_amigo', sender: true, time: '17:00', text: 'Mas tirando a ressaca eu tô bem, acho'},
      { cena: 1, msg: 10, chat: 'melhor_amigo', sender: true, time: '17:01', text: 'O que foi que aconteceu ontem a noite???'},

      { cena: 1, msg: 11, chat: 'melhor_amigo', sender: false, time: '17:01', text: 'AMADA... eu que te pergunto o que rolou'},
      { cena: 1, msg: 12, chat: 'melhor_amigo', sender: false, time: '17:02', text: 'Eu te levei até o bar num momento da festa'},
      { cena: 1, msg: 13, chat: 'melhor_amigo', sender: false, time: '17:03', text: 'Depois disso eu acho que tu tomou um chá de sumiço'},
      { cena: 1, msg: 14, chat: 'melhor_amigo', sender: false, time: '17:02', text: 'E daí eu não vi nem sombra tua por lá'},

      // Cena 1, Rota 1 - Não acho que eles tem esse drink no cardápio...
      { cena: 1, msg: 15, chat: 'melhor_amigo', sender: true, time: '17:03', text: 'Não acho que eles tem esse drink no cardápio....'},
      { cena: 1, msg: 16, chat: 'melhor_amigo', sender: false, time: '17:03', text: 'HAHAHAHAHA SUA RIDÍCULA'},
      { cena: 1, msg: 17, chat: 'melhor_amigo', sender: false, time: '17:04', text: 'Mas foi de vdd a última vez que te vi na festa'},
      { cena: 1, msg: 18, chat: 'melhor_amigo', sender: false, time: '17:07', text: 'Você tava muuuuuito bebada já'},
      { cena: 1, msg: 19, chat: 'melhor_amigo', sender: false, time: '17:07', text: 'Mas pensei que não era o bastante pra perder a memória'},
      { cena: 1, msg: 20, chat: 'melhor_amigo', sender: false, time: '17:08', text: 'Depois disso só Deus sabe o que que rolou'},

      { cena: 1, msg: 21, chat: 'melhor_amigo', sender: true, time: '17:10', text: 'Entendi...'},
      { cena: 1, msg: 22, chat: 'melhor_amigo', sender: true, time: '17:10', text: 'Bom, a menos que eu tenha batido a cabeça, eu tava bêbada o bastante sim'},
      { cena: 1, msg: 23, chat: 'melhor_amigo', sender: false, time: '17:11', text: 'Eu não duvido de nada'},

      // Cena 1, Rota 2 - Como assim eu sumi? A balada nem é tão grande assim
      { cena: 1, msg: 24, chat: 'melhor_amigo', sender: true, time: '17:03', text: 'Como assim eu sumi? A balada nem é tão grande assim'},
      { cena: 1, msg: 25, chat: 'melhor_amigo', sender: false, time: '17:05', text: 'Olha, ou você saiu de lá ou se escondou muito bem'},
      { cena: 1, msg: 26, chat: 'melhor_amigo', sender: true, time: '17:06', text: 'Mas sair com quem???'},
      { cena: 1, msg: 27, chat: 'melhor_amigo', sender: true, time: '17:07', text: 'Eu duvido que estivesse em condições pra falar com alguém pra isso'},
      { cena: 1, msg: 28, chat: 'melhor_amigo', sender: false, time: '17:09', text: 'Aaaah minha querida, confio mt nas suas habilidades sociais'},
      { cena: 1, msg: 30, chat: 'melhor_amigo', sender: false, time: '17:10', text: 'Tenho certeza que rolou algo assim'},

      { cena: 1, msg: 31, chat: 'melhor_amigo', sender: true, time: '17:11', text: 'Hahahaha. A propósito, vou ter que passar na Velvet agora'},
      { cena: 1, msg: 32, chat: 'melhor_amigo', sender: true, time: '17:12', text: 'Acho que perdi algumas coisas por lá'},
      { cena: 1, msg: 33, chat: 'melhor_amigo', sender: true, time: '17:12', text: 'Devem estar nos achados e perdidos'},
    ],

    objetos: [
      { cena: 1, objeto: 'celular', text: 'É, sem meus óculos não vou conseguir ler nada...', nome: 'ALEX', imagem: 'oculos'},
      { cena: 1, objeto: 'cueca_blur', text: 'O que diabos será que é isso?', nome: 'ALEX', imagem: 'transparente'},
      { cena: 1, objeto: 'cueca', text: '.... de quem é essa cueca e como ela veio parar aqui?', nome: 'ALEX', imagem: 'cueca'},
      { cena: 1, objeto: 'remedio', text: 'Espero que isso pare minha tontura.', nome: 'ALEX', imagem: 'remedio'}
    ],

    escolhas: [
      { id: 1, options: [{index: 1, msg: '"Não acho que eles tem esse drink no cardápio..."'}, {index:2, msg: '"Como assim eu sumi? A balada nem é tão grande assim"'}]},
      { id: 2, options: [{index: 1 ,msg: 'Encaro a garota até ela puxar assunto.'},{index:2, msg: '"Hã, com licença moça?"'}]},
      { id: 3, options: [{index: 1 ,msg: '"Na verdade... hoje vou ficar só na água com gás."'}, {index:2, msg: '"Acho que eu não deveria... mas vou querer um Soco no Estômago!"'}]},

    ],

    // Estados Internos do Jogo
    oculos: 0,
    notif_celular: false,
    cena: 0,
    musica_inicio: 'inicio_inicio',
    musica_loop: 'inicio_loop',
    rotaCena1: 0,
    cena2_escolha1: 0,
    cena2_escolha2: 0,
    audioIsPlaying: false,
    music: Audio,
    effects: Audio,
    dialogo_sequencia: 0,
    msgs_sequencia: 0,
    dialogos_vistos: [],
    msgs_vistas: []
})
