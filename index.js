//Atividade prática - CHUVA DE METEOROS
/*Serão utilizados métodos nativos para manipulação de strings em JavaScript
além da estrutura de repetição for/of. */
let titulo = " chuva de meteoros - hemisfério sul ";
/*O método nativo toUpperCase() vai converter para maiúsculas as letras
do título.*/
let tituloMaiuscula = titulo.toUpperCase();
console.log(`\nO título possui ${tituloMaiuscula.length} caracteres.`);
tituloMaiuscula = tituloMaiuscula.padStart(39, "*");
tituloMaiuscula = tituloMaiuscula.padEnd(42, "*");
console.log("\n"+tituloMaiuscula+"\n");
const chuvaMeteoros = [
    { nome: "Alfa Centaurídeos",       pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",          pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",             pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",           pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",     pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",  pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",     pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",               pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",         pico: "Dez 12",  velocidade: "40 km/s"}
];
/*Estrutura de repetição for...of vai fazer a iteração para exibir todos os 
valores das propriedades dos objetos do array chuvaMeteoros.*/
for (let chuva of chuvaMeteoros){
/*Foram criadas variáveis abaixo para que não seja necessário digitar o nome da
variável "chuva" seguida da chave/nome dos objetos literais. Isto facilita a 
escrita das linhas de código.*/
    let nomeChuva = chuva.nome;
    let picoChuva = chuva.pico;
    let velocidadeChuva = chuva.velocidade;
/*O método nativo split() foi usado para separar a string do nome/chave "pico" 
e selecionar o dia do mês em que houve o pico da chuva de meteoros. O parâmetro 
usado no método split foi o caractere espaço.*/

/* Variável criada para usar o método split() com o objetivo de separar a string 
da chave "pico" em substrings. */
    let picoMesDia = picoChuva.split(" ");
//Variável para saber o dia do pico da chuva de meteoros.
    let picoDia = picoMesDia[1];
//Variável para saber o mês.
    let picoMes = picoMesDia[0];
    velocidadeChuva = velocidadeChuva.replace("km/s", "quilômetros por segundo.");

/* -------------------------------------------------------------------- */
    let labelNome = "  Nome: ";
    console.log("\n" + labelNome.padEnd(30, ".") + " " + nomeChuva);
    let labelPico = "  Pico: ";
    console.log(labelPico.padEnd(30, ".") + " " + picoDia + " de "+picoMes);
    let labelVelocidade = "  Velocidade: ";
    console.log(labelVelocidade.padEnd(30, ".") + " " + velocidadeChuva);
 
}
