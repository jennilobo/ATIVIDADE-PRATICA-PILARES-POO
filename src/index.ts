//atividade 1
console.log("Atividade 1:");

import { Normal, VIP, Camarote } from './classes';
import { Novo, Velho } from './classes';
import { Animal, Cachorro, Cavalo, Gato } from './classes';

const ingressoNormal = new Normal(50);
const ingressoVIP = new VIP(100, 30);
const camarote = new Camarote(150, 50);

ingressoNormal.imprimeValor();
ingressoVIP.imprimeValor();
camarote.imprimeValor();

console.log("--------------------------------------------------------");

// atividade2
console.log("Atividade 2:");

const imovelNovo = new Novo('Endereço 1, 123', 100000, 20000);
const imovelVelho = new Velho('Endereço 2, 456', 80000, 10000);

console.log(`Endereço do Imóvel Novo: ${imovelNovo.getEndereco()}`);
console.log(`Preço do Imóvel Novo: R$ ${imovelNovo.getPreco()}`);
console.log(`Adicional do Imóvel Novo: R$ ${imovelNovo.getAdicional()}`);

console.log(`Endereço do Imóvel Velho: ${imovelVelho.getEndereco()}`);
console.log(`Preço do Imóvel Velho: R$ ${imovelVelho.getPreco()}`);
console.log(`Desconto do Imóvel Velho: R$ ${imovelVelho.getDesconto()}`);

console.log("--------------------------------------------------------");

// atividade 3
console.log("Atividade 3:");

const meuCachorro = new Cachorro("Fido", 3);
const meuCavalo = new Cavalo("Relâmpago", 5);
const meuGato = new Gato("Whiskers", 2);

console.log(`Nome do cachorro: ${meuCachorro.getNome()}`);
console.log(`Idade do cavalo: ${meuCavalo.getIdade()}`);

meuCachorro.latir();
meuCachorro.farejar();
meuCachorro.brincar();

meuCavalo.relinchar();
meuCavalo.galopar();
meuCavalo.puxarCarruagem();

meuGato.miar();
meuGato.caçar();
meuGato.dormirMais();

