function loco(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
loco();

function cursorAnimation(){
    var main = document.querySelector("#main");
    var cursor = document.querySelector("#cursor");
    document.addEventListener("mousemove",(dets)=>{
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 0.8,
            easing: "easeInOut",
            mixBlendMode: "difference"
        });
    });
    main.addEventListener("mouseenter", ()=>{
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    });
    main.addEventListener("mouseleave", ()=>{
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    });
}
cursorAnimation();

var tl_1 = gsap.timeline();
tl_1.from("#nav-left h1",{
    x:-200,
    opacity:0,
    delay:0.5,
    duration: 0.6
});
tl_1.from("#nav-center a",{
    y:-200,
    opacity:0,
    duration:0.8,
    stagger:0.2,
    delay:-0.6
});
tl_1.from("#nav-right button",{
    x:200,
    opacity:0,
    duration: 0.6,
    delay:-0.4
});
tl_1.from("#go-down",{
    y:-20,
    repeat:-1,
    yoyo:true
});

var typed = new Typed('#typed', {
    strings: ['Full Stack Web Developer', 'React Programmer', 'Django Programmer', 'Web Designer', 'MERN Stack Developer', 'Database Engineer', 'Graphic Designer'],
    typeSpeed: 20,
    backSpeed: 40,
    smartBackspace: true,
    backDelay: 1500,
    loop: true 
});

var tl_2 = gsap.timeline();
tl_2.from("#about-header p, #about-header h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#about-header h1",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 55%",
        scrub:2
    }
});
tl_2.from("#about-img img",{
    x:-200,
    opacity:0,
    rotate:-45,
    scrollTrigger:{
        trigger:"#about-img img",
        scroller:"#main",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:2
    }
});
tl_2.from("#about-card",{
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#about-card",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_2.to("#go-down",{
    opacity:0,
    display:"none",
    scrollTrigger:{
        trigger:"#about-header h1",
        scroller:"#main",
        scrub:true,
        // markers:true,
        start:"top 100%",
        end:"top 80%"
    }
});

var tl_3 = gsap.timeline();
tl_3.from("#education-header p, #education-header h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#education-header h1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 65%",
        scrub:2
    }
});
tl_3.from("#edu-images img",{
    y:-200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#edu-images",
        scroller:"#main",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:2
    }
});
tl_3.from(".edu-v-line",{
    x:-1000,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".edu-v-line",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 70%",
        scrub:2
    }
})
tl_3.from(".education h3, .education p",{
    y:200,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#edu-descriptions",
        scroller:"#main",
        // markers:true,
        start:"top 92%",
        end:"top 78%",
        scrub:2
    }
});

var tl_4 = gsap.timeline();
tl_4.from("#technical-skill-header p, #technical-skill-header h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#technical-skill-header h1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 65%",
        scrub:2
    }
});
tl_4.to(".html",{
    width:"100%",
    scrollTrigger:{
        trigger:".html",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".css",{
    width:"100%",
    scrollTrigger:{
        trigger:".css",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".js",{
    width:"100%",
    scrollTrigger:{
        trigger:".js",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".gsap",{
    width:"100%",
    scrollTrigger:{
        trigger:".gsap",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".tail",{
    width:"75%",
    scrollTrigger:{
        trigger:".tail",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".boot",{
    width:"95%",
    scrollTrigger:{
        trigger:".boot",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".c",{
    width:"80%",
    scrollTrigger:{
        trigger:".c",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".cpp",{
    width:"95%",
    scrollTrigger:{
        trigger:".cpp",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".java",{
    width:"100%",
    scrollTrigger:{
        trigger:".java",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".py",{
    width:"100%",
    scrollTrigger:{
        trigger:".py",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".dj",{
    width:"90%",
    scrollTrigger:{
        trigger:".dj",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".react",{
    width:"80%",
    scrollTrigger:{
        trigger:".react",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".redux",{
    width:"85%",
    scrollTrigger:{
        trigger:".redux",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".next",{
    width:"59%",
    scrollTrigger:{
        trigger:".next",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".node",{
    width:"71%",
    scrollTrigger:{
        trigger:".node",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".exp",{
    width:"80%",
    scrollTrigger:{
        trigger:".exp",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".dsa",{
    width:"82%",
    scrollTrigger:{
        trigger:".dsa",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".php",{
    width:"90%",
    scrollTrigger:{
        trigger:".php",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".mongo",{
    width:"95%",
    scrollTrigger:{
        trigger:".mongo",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".post",{
    width:"100%",
    scrollTrigger:{
        trigger:".post",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".canva",{
    width:"95%",
    scrollTrigger:{
        trigger:".canva",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".mysql",{
    width:"92%",
    scrollTrigger:{
        trigger:".mysql",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".git",{
    width:"100%",
    scrollTrigger:{
        trigger:".mysql",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});
tl_4.to(".socket",{
    width:"62%",
    scrollTrigger:{
        trigger:".mysql",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top 68%",
        scrub:2
    }
});

var tl_5 = gsap.timeline();
tl_5.from("#non-technical-skill-header p, #non-technical-skill-header h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#non-technical-skill-header h1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 65%",
        scrub:2
    }
});
tl_5.to(".lead",{
    backgroundImage: "conic-gradient(#00ff15 345deg, #000000 0 235deg, #000000 0)",
    scrollTrigger:{
        trigger:".lead",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:2
    }
});
tl_5.to(".pers",{
    backgroundImage: "conic-gradient(#00ff15 310deg, #000000 0 235deg, #000000 0)",
    scrollTrigger:{
        trigger:".pers",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:2
    }
});
tl_5.to(".resi",{
    backgroundImage: "conic-gradient(#00ff15 320deg, #000000 0 235deg, #000000 0)",
    scrollTrigger:{
        trigger:".resi",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:2
    }
});
tl_5.to(".hard",{
    backgroundImage: "conic-gradient(#00ff15 290deg, #000000 0 235deg, #000000 0)",
    scrollTrigger:{
        trigger:".hard",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:2
    }
});
tl_5.to(".crtv",{
    backgroundImage: "conic-gradient(#00ff15 350deg, #000000 0 235deg, #000000 0)",
    scrollTrigger:{
        trigger:".crtv",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:2
    }
});
tl_5.to(".invt",{
    backgroundImage: "conic-gradient(#00ff15 340deg, #000000 0 235deg, #000000 0)",
    scrollTrigger:{
        trigger:".invt",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:2
    }
});

var tl_6 = gsap.timeline();
tl_6.from("#project-header p, #project-header h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#project-header h1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 65%",
        scrub:2
    }
});
tl_6.from(".apple>.project-cover",{
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".apple>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".apple>.project-name>h1, .apple>.project-name>p",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".apple>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".magma>.project-cover",{
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".magma>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".magma>.project-name>h1, .magma>.project-name>p",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".magma>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".toyfight>.project-cover",{
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".toyfight>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".toyfight>.project-name>h1, .toyfight>.project-name>p",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".toyfight>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".niccolo>.project-cover",{
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".niccolo>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".niccolo>.project-name>h1, .niccolo>.project-name>p",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".niccolo>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".wondermart>.project-cover",{
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".wondermart>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".wondermart>.project-name>h1, .wondermart>.project-name>p",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".wondermart>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".planit>.project-cover",{
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".planit>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".planit>.project-name>h1, .planit>.project-name>p",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".planit>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".textutils>.project-cover",{
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".textutils>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".textutils>.project-name>h1, .textutils>.project-name>p",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".textutils>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".newsmonkey>.project-cover",{
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".newsmonkey>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from(".newsmonkey>.project-name>h1, .newsmonkey>.project-name>p",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".newsmonkey>.project-name>h1",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
});
tl_6.from("#more-projects p",{
    x:-300,
    opacity:0,
    scrollTrigger:{
        trigger:"#more-projects p",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2
    }
});

const navLinks = document.querySelectorAll("#nav-center a");
navLinks.forEach((link)=>{
    link.addEventListener("mouseenter",()=>{
        gsap.to(link,{
            color:"#b0b0b0"
        });
    });
});
navLinks.forEach((link)=>{
    link.addEventListener("mouseleave",()=>{
        gsap.to(link,{
            color:"#fff"
        });
    });
});

const contactButton = document.querySelector("#nav-right button");
contactButton.addEventListener("mouseenter",()=>{
    gsap.to(contactButton,{
        backgroundColor:"#d1d1d1"
    });
});
contactButton.addEventListener("mouseleave",()=>{
    gsap.to(contactButton,{
        backgroundColor:"#fff"
    });
});

const aboutImage = document.querySelector("#about-img img");
aboutImage.addEventListener("mouseenter",()=>{
    gsap.to(aboutImage,{
        scale:1.1,
        opacity:1,
        boxShadow:"0px 0px 50px rgba(255, 255, 255, 0.5)"
    });
});
aboutImage.addEventListener("mouseleave",()=>{
    gsap.to(aboutImage,{
        scale:1,
        opacity:0.8,
        boxShadow:"0px 0px 0px transparent"
    });
});

const aboutCard = document.querySelector("#about-card");
aboutCard.addEventListener("mouseenter",()=>{
    gsap.to(aboutCard,{
        backgroundColor: "rgba(255, 255, 255, 0.150)"
    });
});
aboutCard.addEventListener("mouseleave",()=>{
    gsap.to(aboutCard,{
        backgroundColor: "rgba(255, 255, 255, 0.110)"
    });
});

const educationImages = document.querySelectorAll("#edu-images img");
educationImages.forEach((image)=>{
    image.addEventListener("mouseenter",()=>{
        gsap.to(image,{
            scale:1.1
        });
    });
});
educationImages.forEach((image)=>{
    image.addEventListener("mouseleave",()=>{
        gsap.to(image,{
            scale:1
        });
    });
});

const skillImages = document.querySelectorAll(".tech-skill-logo img");
skillImages.forEach((image)=>{
    image.addEventListener("mouseenter",()=>{
        gsap.to(image,{
            scale:1.1
        });
    });
});
skillImages.forEach((image)=>{
    image.addEventListener("mouseleave",()=>{
        gsap.to(image,{
            scale:1
        });
    });
});

const skillPies = document.querySelectorAll(".pie");
skillPies.forEach((pie)=>{
    pie.addEventListener("mouseenter",()=>{
        gsap.to(pie,{
            scale:1.1
        });
    });
});
skillPies.forEach((pie)=>{
    pie.addEventListener("mouseleave",()=>{
        gsap.to(pie,{
            scale:1
        });
    });
});

const projectImages = document.querySelectorAll(".project-cover a img");
projectImages.forEach((image)=>{
    image.addEventListener("mouseenter",()=>{
        gsap.to(image,{
            scale:1.1
        });
    });
});
projectImages.forEach((image)=>{
    image.addEventListener("mouseleave",()=>{
        gsap.to(image,{
            scale:1
        });
    });
});

const gitLogo = document.querySelector("#more-projects>p>a>i");
gitLogo.addEventListener("mouseenter",()=>{
    gsap.to(gitLogo,{
        color:"#b0b0b0"
    });
});
gitLogo.addEventListener("mouseleave",()=>{
    gsap.to(gitLogo,{
        color:"#fff"
    });
});
