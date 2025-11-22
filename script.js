function calcular() {
    const idade = parseFloat(document.getElementById('age').value);
    const peso = parseFloat(document.getElementById('weight').value);
    const altura = parseFloat(document.getElementById('height').value);
    
    if (!idade || !peso || !altura) {
        alert('Preencha todos os campos!');
        return;
    }
    
    //Calcular IMC
    const imc = peso / (altura * altura);
    
    // Classificação IMC
    let classificacao = '';
    if (imc < 18.5) classificacao = 'Baixo peso';
    else if (imc < 25) classificacao = 'Normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 35) classificacao = 'Obesidade';
    else if (imc < 40) classificacao = 'Obesidade Mórbida';
    else classificacao = 'Obesidade Mórbida Grave';
    
    // Fator de comorbidade
    let fator = 1;
    if (imc < 18.5) fator = 10;
    else if (imc < 25) fator = 1;
    else if (imc < 30) fator = 6;
    else if (imc < 35) fator = 10;
    else if (imc < 40) fator = 20;
    else fator = 30;
    
    // Operadora A
    const a1 = 100 + (idade * 10 * (imc / 10));
    const a2 = (150 + (idade * 15)) * (imc / 10);
    const a3 = (200 - (imc * 10) + (idade * 20)) * (imc / 10);
    
    // Operadora B
    const b1 = 100 + (fator * 10 * (imc / 10));
    const b2 = (150 + (fator * 15)) * (imc / 10);
    const b3 = (200 - (imc * 10) + (fator * 20)) * (imc / 10);
    
    // Resultados
    document.getElementById('imcBox').innerHTML = 
        `<strong>IMC: ${imc.toFixed(1)}</strong><br>${classificacao}`;
    
    document.getElementById('planA1').textContent = 
        `Básico: R$ ${a1.toFixed(2)}`;
    document.getElementById('planA2').textContent = 
        `Standard: R$ ${a2.toFixed(2)}`;
    document.getElementById('planA3').textContent = 
        `Premium: R$ ${a3.toFixed(2)}`;
    
    document.getElementById('planB1').textContent = 
        `Básico: R$ ${b1.toFixed(2)}`;
    document.getElementById('planB2').textContent = 
        `Standard: R$ ${b2.toFixed(2)}`;
    document.getElementById('planB3').textContent = 
        `Premium: R$ ${b3.toFixed(2)}`;
    
    // Melhor plano
    const planos = [
        {nome: 'Operadora A - Básico', preco: a1},
        {nome: 'Operadora A - Standard', preco: a2},
        {nome: 'Operadora A - Premium', preco: a3},
        {nome: 'Operadora B - Básico', preco: b1},
        {nome: 'Operadora B - Standard', preco: b2},
        {nome: 'Operadora B - Premium', preco: b3}
    ];
    
    planos.sort((x, y) => x.preco - y.preco);
    const melhor = planos[0];
    
    document.getElementById('best').innerHTML = 
        `<strong>MELHOR OPÇÃO</strong><br>${melhor.nome}<br>R$ ${melhor.preco.toFixed(2)}/mês`;
    
    document.getElementById('results').classList.add('show');
}
