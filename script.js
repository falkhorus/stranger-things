// Usar Gsap para fazer: SCROLL SUAVE => ANIMAÇÕES => ANIMAÇÕES COM ROLAGEM => ANIMAÇÕES NO TEXTO




gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// 1. FORÇAR O SITE A INICIAR NO TOPO (Limpa a memória de scroll do navegador)
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// 2. CRIAR E PAUSAR O SCROLL SMOOTHER IMEDIATAMENTE
const smoother = ScrollSmoother.create({
     smooth: 1.5,
     effects: true
});
smoother.paused(true); // Pausa a rolagem do GSAP


// Obs: Coloquei um atributo chamado data-speed na tag html
//  picture para poder movimentar as imagens em paralax
// através do ScrollSmoother que já reconhece esse atributo.






function animarPagina(){

// ANIMAÇÕES HERO

gsap.from(".hero", {   // O From cria uma animação inicial e o TO cria para uma animação que já foi iniciada.
    opacity: 0,
    duration: 1
})


gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1
})

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
})

// ANIMAÇÕES CARD

gsap.from(".card", {
    opacity: 0,
    // duration: 1, 
    y: 30,
    filter: "blur(20px)",
    stagger: .5,

    scrollTrigger: {
        trigger: ".cards",
        // markers: true,
        start: "0% 75%",
        end: "100% 70%",
        scrub: true  // O scrub: true faz com que a animação seja executada de acordo com o scroll, ou seja, se o scroll estiver no meio da animação, a animação também estará no meio.

    }
    
})

// ANIMAÇÕES FOOTER


gsap.from("footer", {  
    y: "-30%",                  // O Y negativo faz a animação subir e o positivo descer
    immediateRender: false,     // O immediateRender: false faz com que a animação só seja executada quando o scroll chegar no footer

    scrollTrigger: {            // O scrollTrigger faz com que a animação seja executada quando o scroll chegar no footer
        trigger: "footer",      
        scrub: true,            // O scrub: true faz com que a animação seja executada de acordo com o scroll, ou seja, se o scroll estiver no meio da animação, a animação também estará no meio.
        invalidateOnRefresh: true,  // O invalidateOnRefresh: true faz com que a animação seja reiniciada quando o scroll for atualizado, ou seja, quando o usuário redimensionar a tela.
        end: "100% 100%"            // O end: "100% 100%" faz com que a animação seja executada até o final do footer, ou seja, quando o scroll chegar no final do footer.
    }
})


// ANIMAÇÕES LETRAS

//SELECIONA TODOS OS ELEMENTOS DA PÁGINA QUE TEM A CLASSE .textoSplit
const grupoTextoSplit = document.querySelectorAll(".textoSplit");

// Para animar cada elemento desse grupamento -> ForEach

grupoTextoSplit.forEach((textoUnicoSplit) => {

    const split = SplitText.create(textoUnicoSplit, {
        type: "lines, words, chars",
        mask: "lines",
    });



    gsap.from(split.chars, {
        y: 40, 
        opacity: 0,
        stagger: .03,
        duration: .3,

        scrollTrigger: {
            trigger: textoUnicoSplit,
            start: "0% 80%",
            
        }

    });

});

}



// PRELOADER -> CRIA TIMELINE

const tl = gsap.timeline({
    onComplete(){
        // Remove a trava de scroll do CSS nativo
        document.body.classList.remove("loading");
        
        // Libera o ScrollSmoother do GSAP para o usuário poder rolar a página
        smoother.paused(false); 
        
        // Inicia as animações internas do site
        animarPagina();
        
        // Some com o preloader suavemente
        gsap.to("#preloader", {
            opacity: 0,
            duration: 0.5, // Adicionado para suavizar o sumiço
            onComplete(){
                gsap.to("#preloader", {
                    display: "none"
                });
            }
        });
    }
});

tl.to("#preloader path", {
    duration: 2.5,
    strokeDashoffset: 0
});

tl.to("#preloader path", {
    fill: "rgb(168, 19, 19)", 
    strokeDashoffset: 0
});