const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

// Filter = retorna true ou falso

const caro = p => p.preco >= 500
const fragil = p => p.fragil

console.log(produtos.filter(caro).filter(fragil))