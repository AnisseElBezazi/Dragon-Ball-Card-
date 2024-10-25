let basecarte = 0; 

function slider_de_carte() {
   const cartes= document.querySelectorAll('.carte');
    const total_cartes=cartes.length;

    const deplacement=-basecarte *350 ;
    document.querySelector('.cartes').style.transform = `translateX(${deplacement}px)`;

    cartes.forEach((carte,index) => {
        carte.classList.remove('active');
    });
        cartes[basecarte].classList.add('active');
        
    }
function moveSlide(direction){
const cartes=document.querySelectorAll('.carte');
  const total_cartes=cartes.length;

    basecarte= (basecarte+direction+total_cartes)%total_cartes; 
    slider_de_carte();
}

slider_de_carte();