class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataques = {
            Mago: 'magia',
            Guerreiro: 'espada',
            Monge: 'artes marciais',
            Ninja: 'shuriken',
            Mestre: ''
        };
    }

    atacar() {
        const ataque = this.ataques[this.tipo] || 'um ataque desconhecido';
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo
const heroi1 = new Heroi("Aidan", 35, "Guerreiro");
const heroi2 = new Heroi("Horadrim", 150, "Mago");
const heroi3 = new Heroi("Khazarim", 100, "Monge");
const heroi4 = new Heroi("Jackie Chan", 25, "Ninja");
const heroi5 = new Heroi("Felipao", 28, "Mestre");

heroi1.atacar(); // O Guerreiro atacou usando espada
heroi2.atacar(); // O Mago atacou usando magia
heroi3.atacar(); // O Monge atacou usando artes marciais
heroi4.atacar(); // O Ninja atacou usando shuriken
heroi5.atacar(); // O Mestre atacou usando um ataque desconhecido
