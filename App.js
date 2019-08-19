/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class Botao extends Component{

  constructor(props){
    super(props);

    this.style = StyleSheet.create({
      botao:{
        width:250,
        height:60,
        marginTop:50,
      },
      botao_area: {
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:this.props.background,
        borderWidth: 1,
        borderColor:this.props.color,
        borderRadius: 10
      },
      btn_text:{
        fontSize:15,
        color:this.props.color,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center"
      }
    });
  }

  render(){
    
    return(
        <TouchableOpacity style={this.style.botao} onPress={this.props.onPress}>
          <View style={this.style.botao_area}>
            <Text style={this.style.btn_text}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

export default class biscoitoDaSorte extends Component {

  constructor(props){
    super(props);
    this.state = {frase:"..."};
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.bd_frases = ["Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos – James Cameron, cineasta",
    "O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo",
    "A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete",
    "Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva",
    "Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor",
    "Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu",
    "Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor",
    "Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor",
    "Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político",
    "Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador",
    "Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator",
    "Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo",
    "Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico",
    "Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo",
    "A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor",
    "Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor",
    "Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista",
    "Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA",
    "O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor",
    "Se você está atravessando um inferno, continue atravessando – Churchill",
    "O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor",
    "A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista",
    "Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor",
    "A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor",
    "Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein",
    "Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo",
    "Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista",
    "As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator",
    "Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político",
    "O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia – Robert Collier, escritor",
    "Todo progresso acontece fora da zona de conforto – Michael John Bobak",
    "Coragem é a resistência e o domínio do medo, não a ausência dele – Mark Twain, escritor",
    "Só evite fazer algo hoje se você quiser morrer e deixar assuntos inacabados – Pablo Picasso, pintor",
    "O único lugar em que o sucesso vem antes do trabalho é no dicionário – Vidal Sassoon, cabeleireiro",
    "Não sei qual é a chave para o sucesso, mas a chave para o fracasso é tentar agradar a todos – Bill Cosby, comediante",
    "Embora ninguém possa voltar atrás e começar tudo de novo, qualquer um pode ter um ótimo final – Carl Bard",
    "Descobri que, se você tem vontade de viver e curiosidade, dormir não é a coisa mais importante – Martha Stewart, apresentadora",
    "Daqui a vinte anos, você não terá arrependimento das coisas que fez, mas das que deixou de fazer. Por isso, veleje longe do seu porto seguro. Pegue os ventos. Explore. Sonhe. Descubra – Twain",
    "O primeiro passo rumo ao sucesso é dado quando você se recusa ao ser um refém do ambiente em que se encontra – Mark Caine, jornalista",
    "Sempre que você se encontrar do lado da maioria, é hora de parar e refletir – Twain",
    "Continue andando. Haverá a chance de você ser barrado por um obstáculo, talvez por algo que você nem espere. Mas siga, até porque eu nunca ouvi falar de ninguém que foi barrado enquanto estava parado – Charles F. Kettering, inventor",
    "Se você realmente quer algo, não espere. Ensine você mesmo a ser impaciente – Gurbaksh Chahal, empreendedor",
    "Se você quer uma mudança permanente, pare de focar no tamanho de seus problemas e comece a focar no seu tamanho! – T. Harv Eker, autor",
    "Pessoas de sucesso fazem o que pessoas mal sucedidas não querem fazer. Não queira que a vida seja mais fácil. Deseje que você seja ainda melhor – Rohn",
    "A primeira razão para o fracasso de alguém é escutar amigos, família e vizinhos – Hill",
    "O sucesso não consiste em não errar, mas não cometer os mesmos equívocos mais de uma vez – George Bernard Shaw, autor",
    "A motivação é o que faz o empreendedor começar e o hábito é o que nos faz continuar – Jim Rynn",
    "Nosso maior medo não deve ser o fracasso, mas ser bem-sucedidos em algo que não importa – Francis Chan, pastor",
    "Se você não traçou um plano para você mesmo, é possível que você caia no plano de outra pessoa. E adivinha o que ele planejou para você? Não muito – Rohn",
    "Você deve lutar mais de uma batalha para se tornar um vencedor – Margaret Thatcher, política",
    "Eu devo meu sucesso a meu hábito de respeitosamente ouvir conselhos e fazer exatamente o contrário – G. K. Chesterton, escritor",
    "Muitas das falhas da vida ocorrem quando não percebemos o quão próximos estávamos do sucesso na hora em que desistimos – Edison",
    "Quanto maior o artista, maior a dúvida. Confiança grande demais é algo destinados aos menos talentosos como um prêmio de consolação – Robert Hughes, crítico de arte",
    "Uma fórmula para o sucesso? É bem simples, na verdade: dobre a probabilidade de fracasso da sua empresa. Você pensa que a falha é um inimigo do sucesso. Mas não é, de jeito nenhum. Você pode ser desencorajado com os erros ou aprender com eles, então siga em frente e continue falhando. Erre o máximo que puder. É aí que você vai conseguir o sucesso – Thomas J. Watson, empreendedor",
    "Tenha em mente que o seu desejo em atingir o sucesso é mais importante que qualquer coisa – Abraham Lincoln, político",
    "Fique contente em agir. Deixe a fala para os outros – Baltasar Gracián, filósofo",
    "Para conquistar o sucesso, você precisa aceitar todos os desafios que vierem na sua frente. Você não pode apenas aceitar os que você preferir – Mike Gafka, palestrante",
    "O guerreiro de sucesso é um homem médio, mas com um foco apurado como um raio laser – Bruce Lee, ator",
    "A lógica pode levar de um ponto A a um ponto B. A imaginação pode levar a qualquer lugar – Einstein",
        ];
  }

  quebrarBiscoito(){
    let s = this.state;
    let frase_select = this.bd_frases[Math.floor(Math.random() * this.bd_frases.length)];
    s.frase = frase_select;
    this.setState(s);
  }

  render(){
    
    return (
        <View style={styles.body}>
          <View style={[styles.img_area,styles.body]}>
            <Image source={require("./images/cookie.png")}></Image>
            <Text style={styles.texto}>{this.state.frase}</Text>
          </View>
          <View style={styles.b_botom}>
            <Botao color="lightblue" background="white" title="Quebrar biscoitos" onPress={this.quebrarBiscoito} />
          </View>
        </View>
    );
  };
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  img_area:{
    marginTop:100,
  },
  b_botom:{
    flex:1,
    justifyContent:"flex-end",
    marginBottom:100,
  },
  texto:{
    textAlign:'center',
    fontSize:18,
    color:'purple',
    fontWeight:'bold',
    margin:30,
  }
});
