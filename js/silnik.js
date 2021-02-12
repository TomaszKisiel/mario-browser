var Silnik = {
	ini: function() {
		var skyCanvas = document.getElementById("sky-canvas");
		var bgCanvas = document.getElementById("bg-canvas");
		var fgCanvas = document.getElementById("fg-canvas");
		
		var canvas = {
			skyCanvas: skyCanvas,
			bgCanvas: bgCanvas,
			fgCanvas: fgCanvas,
			skyCtx: skyCanvas.getContext("2d"),
			bgCtx: bgCanvas.getContext("2d"),
			fgCtx: fgCanvas.getContext("2d"),
		};
		
		var grafika = new Image();
		grafika.src = "img/stylesheet.png";
		
		grafika.addEventListener("load", function() {
			var grafika = this;
		});
		
		var dane = {
			nrKlatki: 0,
			canvas: canvas,
			grafika: grafika,
      audio: {
        melodia: new Audio("audio/theme_melody.mp3"),    
        skok: new Audio("audio/jump_melody.mp3"),    
        moneta: new Audio("audio/coin_melody.mp3") 
      }
		};
    
    dane.canvas.skyCtx.imageSmoothingEnabled = false;
    dane.canvas.bgCtx.imageSmoothingEnabled = false;
    dane.canvas.fgCtx.imageSmoothingEnabled = false;
    
    dane.audio.melodia.loop = true;
    setTimeout(function() {
      dane.audio.melodia.play();
    },1000);
		
		Wejscie.ini(dane);
		Obiekty.ini(dane);
		Silnik.start(dane);
	},
	
	start: function(dane) {
		var petla = function() {
			Silnik.wejscie(dane);
			Silnik.aktualizacje(dane);
			Silnik.render(dane);
			
			dane.nrKlatki++;
			
			window.requestAnimationFrame(petla);
		};
		
		petla();
	},
	
	wejscie: function(dane) {
		Wejscie.aktualizacja(dane);
	},
	
	aktualizacje: function(dane) {
		Poruszanie.aktualizacja(dane);
		Animacje.aktualizacja(dane);
		Fizyka.aktualizacja(dane);
	},
	
	render: function(dane) {
		Render.aktualizacja(dane);
	}
};

window.onload = Silnik.ini();