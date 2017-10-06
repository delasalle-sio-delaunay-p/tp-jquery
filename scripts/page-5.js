// qd le doc sera prêt, il faudra appeler la fct init
$(document).ready(initialisations);

// variable globale pr accéder à une photo
var index = 0;

function initialisations() {
	// fct allerAuPrecedent s'exécutera lors d'un clic sur le btnPrecedent
	$("#btnPrecedent").click (allerAuPrecedent);
	// fct allerAuSuivant s'exécutera lors d'un clic sur le btnSuivant
	$("#btnSuivant").click (allerAuSuivant);
	
	// fonction défilement automatique des images toutes les 3 secondes
	defilement();
	
	$('#pauseDefilement').click(function() {
	    
		
	});
	
	
	$('#reprendreDefilement').click(function() {
		defilement();
	});
	
}; // fin fct initialisations



// passe à la photo précédente, suite à un clic sur le btnPrecedent
function allerAuPrecedent () {
	index--;
	//
	rotationCarrousel(index);
};

// passe à la photo suivante, site à une clic sur le btnSuivant

function allerAuSuivant () {
	index++;
	//
	rotationCarrousel(index);
};

// fonction de rotation des photos pr aller à la position souhaitée

function rotationCarrousel(indexPhoto) {
	// rotation du carrousel jusqu'à cette position (24 ° par photo pour 15 photos)
	var angle = indexPhoto * 24 * -1;
	// création de la transformation
	var carrouselTransform = 'translateZ(-1150px) rotateY(' + angle + 'deg)';
	$("#carrousel").css({
		WebkitTransform: carrouselTransform,
		MozTransform: carrouselTransform,
		transform: carrouselTransform	
	});
	// récupération de la légende de la photo à partir de l'attribut "alt" de la balise <img> et d'un modulo 15
	var texte = $("#carrousel img:nth-child(" + ((index % 15)+ 1) + ")").attr("alt");
	// affichage de la légende de la photo
	$('#libelle-photo').html(texte);
};

function defilement(){

    setTimeout(function(){
    	    	
    	allerAuSuivant();
    	
        defilement(); // relance la fonction
    }, 3000);

};