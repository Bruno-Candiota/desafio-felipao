class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Define o ataque com base no tipo do herói
        const ataques = {
            mago: "usou magia",
            guerreiro: "usou espada",
            monge: "usou artes marciais",
            ninja: "usou shuriken"
        };

        // Seleciona o ataque apropriado com base no tipo do herói
        const ataque = ataques[this.tipo] || "realizou um ataque desconhecido";

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Ryu", 25, "monge");
const heroi4 = new Heroi("Shinobi", 20, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();  // O guerreiro atacou usando espada
heroi2.atacar();  // O mago atacou usando magia
heroi3.atacar();  // O monge atacou usando artes marciais
heroi4.atacar();  // O ninja atacou usando shuriken
