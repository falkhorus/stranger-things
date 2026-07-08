// Usar Gsap para fazer: SCROLL SUAVE => ANIMAÇÕES => ANIMAÇÕES COM ROLAGEM => ANIMAÇÕES NO TEXTO

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

 ScrollSmoother.create({
     smooth: 1.5,
     effects: true
 })

// Obs: Coloquei um atributo chamado data-speed na tag html
//  picture para poder movimentar as imagens em paralax
// através do ScrollSmoother que já reconhece esse atributo.