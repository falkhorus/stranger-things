// Usar Gsap para fazer: SCROLL SUAVE => ANIMAÇÕES => ANIMAÇÕES COM ROLAGEM => ANIMAÇÕES NO TEXTO




gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

 ScrollSmoother.create({
     smooth: 1.5,
     effects: true
 })

// Obs: Coloquei um atributo chamado data-speed na tag html
//  picture para poder movimentar as imagens em paralax
// através do ScrollSmoother que já reconhece esse atributo.


// ANIMAÇÕES HERO

gsap.from(".hero", {
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
    duration: 1, 
    y: 30,
    filter: "blur(20px)",
    stagger: .3,

    scrollTrigger: {
        trigger: ".cards",
        // markers: true,
        start: "0% 75%"

    }
    
})