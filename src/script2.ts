import { Menu } from "./Menu";
import { mostraMenu } from "./mostraMenu";

const option = mostraMenu();

if (option == Menu.Cadastro) {
  console.log('Faz o cadastro');
}

const vetor: number[] = [7, 40, 13, 5, 190, 30];
const found = vetor.filter(element => element > 30);

let soma = 0;
found.forEach((item) => {
  soma += item;
});

const cardapio = [];
cardapio['Hamburguer'] = 20;
cardapio['Refrigerante'] = 6;
cardapio['Batata frita'] = 5;

console.log(cardapio['Hamburguer']);
