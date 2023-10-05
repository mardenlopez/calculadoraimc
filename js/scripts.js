const form = document.getElementById('form');
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const imc = document.getElementById('imc')
const control = document.getElementById('form-control')
const result = document.getElementById('resultImc')
const btnBack = document.getElementById('btnBack')


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    calculate();
    showHide();
     ClearInput
})

function calculate() {
    const weightValue = weight.value;
    const heightValue = height.value;
    const calc = (weightValue / (heightValue * heightValue)).toFixed(2)
    let description = ''
    
    
    

    if(calc < 18.5) {
        description = 'Abaixo do peso'
        
        imc.classList.add('pesobaixo')        
    }else if(calc >= 18.5 && calc <= 24.9){
        description = 'normal'
        
        imc.classList.add('normal')
    }else if(calc >= 24.9 && calc <= 29.9){
        description = 'Sobrepeso'
        
        imc.classList.add('sobrepeso')
    }else if(calc >= 29.9 && calc <= 34.9){
        description = 'sobrepeso'
        
        imc.classList.add('obesidade1')
    }else if(calc >= 34.9 && calc <= 39.99){
        description = 'obesidade grau 2'
        
        imc.classList.add('obesidade2')
    }else if(calc > 40){
        description = 'obesidade grau 3';
        
        imc.classList.add('obesidade3')
    }

    imc.textContent = calc.replace('.',',')
    document.getElementById('description').textContent = description;
}

function showHide() {
    result.classList.toggle('hide')
    form.classList.toggle('hide')
}

function ClearInput(){
    height.value = '';
    weight.value = '';
}

btnBack.addEventListener('click', () =>{
    window.location.reload();
    showHide();
    ClearInput();
})
