document.addEventListener('DOMContentLoaded',function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll',function(){
            const possicaoAtual = window.scrollY

            if(possicaoAtual < alturaHero){
                ocutarElementos();
            } else {
                exibirElementos();
            }
        })
        



// programação das abas //
        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', function(botao){
                const abaAlvo = botao.target.dataset.tabButton;
                const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
                escondAbas();
                aba.classList.add('shows__list--is-active')
                removerBotaoactive()
                botao.target.classList.add('shows__tabs__button--is-active')
            })
    
        }
        for(let i = 0; i < questions.length; i++){
            questions[i].addEventListener('click',abreOufecharesposta)
        }
   
    

    })
 
function ocutarElementos(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibirElementos(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}







// programação das acordions //
function abreOufecharesposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);

}

function removerBotaoactive(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
       
        
    }
}



function escondAbas(){
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabContainer.length; i++){
        tabContainer[i].classList.remove('shows__list--is-active')
    }
}
