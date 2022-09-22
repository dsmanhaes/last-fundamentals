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

const texto = 'Hamburguer';

console.log(cardapio[texto]);

vetor.forEach((item) => {
  console.log(item);
});

const vetor2 = vetor.map((item) => {
  return item * 2;
});

let media = (nota1: number, nota2: number) => {
  return (nota1 + nota2) / 2;
};

const mediaNotas = media(7, 6);
