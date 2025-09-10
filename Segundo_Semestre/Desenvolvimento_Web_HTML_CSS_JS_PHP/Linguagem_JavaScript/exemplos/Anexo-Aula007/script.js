const fibonacci = (x) => { // Cria uma função fibonacci que recebe um valor
    let fm1 = 1, fm2 = 1, fm; // Declara 3 variáveis
    
    if (x == 0 || x == 1) { // Se x for 0 ou 1
        return 1; // Retorna 1
    } else { // Se x for diferente de 0 ou 1

        for (let i = 2; i <= x; i++) { // usamos um loop que vai se repetir enquanto i for menor ou igual ao x 
            fm = fm1 + fm2; // fm recebe fm1 + fm2
            fm1 = fm2; // fm1 recebe fm2
            fm2 = fm; // fm2 recebe fm
        
            // Desse modo os valores vão se alterando conforme a sequencia de fibonacci
        }
        return fm; // Retorna o valor de fm
    }
}