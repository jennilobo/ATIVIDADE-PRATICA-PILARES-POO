//atividade1
export abstract class Ingresso {
    constructor(protected valor: number) {}

    abstract imprimeValor(): void;
}

export class Normal extends Ingresso {
    imprimeValor() {
        console.log(`Valor do Ingresso Normal: R$ ${this.valor}`);
    }
}

export class VIP extends Ingresso {
    constructor(valor: number, protected adicional: number) {
        super(valor);
    }

    imprimeValor() {
        const valorTotal = this.valor + this.adicional;
        console.log(`Valor do Ingresso VIP: R$ ${valorTotal}`);
    }
}

export class Camarote extends Ingresso {
    constructor(valor: number, protected adicional: number) {
        super(valor);
    }

    imprimeValor() {
        const valorTotal = this.valor + this.adicional;
        console.log(`Valor do Camarote: R$ ${valorTotal}`);
    }
}


//atividade 2
export class Imovel {
    constructor(private endereco: string, private preco: number) {}

    getEndereco(): string {
        return this.endereco;
    }

    getPreco(): number {
        return this.preco;
    }
}

export class Novo extends Imovel {
    constructor(endereco: string, preco: number, private adicional: number) {
        super(endereco, preco);
    }

    getAdicional(): number {
        return this.adicional;
    }
}

export class Velho extends Imovel {
    constructor(endereco: string, preco: number, private desconto: number) {
        super(endereco, preco);
    }

    getDesconto(): number {
        return this.desconto;
    }
}


// atividade 3
export class Animal {
    constructor(private nome: string, private idade: number) {}

    fazerBarulho(): void {
        console.log("O animal faz algum barulho.");
    }

    mover(): void {
        console.log("O animal se move de alguma forma.");
    }

    alimentar(): void {
        console.log("O animal se alimenta.");
    }

    dormir(): void {
        console.log("O animal dorme.");
    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }
}

export class Cachorro extends Animal {
    latir(): void {
        console.log("O cachorro late.");
    }

    farejar(): void {
        console.log("O cachorro fareja algo.");
    }

    brincar(): void {
        console.log("O cachorro brinca com seu dono.");
    }
}

export class Cavalo extends Animal {
    relinchar(): void {
        console.log("O cavalo relincha.");
    }

    galopar(): void {
        console.log("O cavalo galopa no campo.");
    }

    puxarCarruagem(): void {
        console.log("O cavalo puxa uma carruagem.");
    }
}

export class Gato extends Animal {
    miar(): void {
        console.log("O gato mia.");
    }

    caçar(): void {
        console.log("O gato caça um pássaro.");
    }

    dormirMais(): void {
        console.log("O gato dorme em um lugar ensolarado.");
    }
}



