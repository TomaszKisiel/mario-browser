var Fizyka = {
	aktualizacja: function(dane) {
		Fizyka.zadania.Grawitacja(dane.obiekty.mario);
		Fizyka.zadania.WykrywanieKolizji(dane);
		Fizyka.zadania.Smierc(dane);
		
		dane.obiekty.tabelaPotworow.forEach(function(p) {
			Fizyka.zadania.Grawitacja(p);
			Fizyka.zadania.WykrywanieKolizji2(dane, p);
		});
	},
	
	zadania: {
		Grawitacja: function(obiekt) {
			obiekt.obecnyStan = obiekt.stan.skakanie;
			obiekt.pedY+=1;
			obiekt.y+=obiekt.pedY;
		},
		
		WykrywanieKolizji: function(dane) {
			var mario = dane.obiekty.mario;
			
			var WykrywanieKolizji = function(obiekt) {
				if(mario.x < obiekt.x + obiekt.w &&
				    mario.x + mario.w > obiekt.x &&
				    mario.y < obiekt.y + obiekt.h &&
				    mario.y +mario.h > obiekt.y) {
						Fizyka.zadania.Kolizja(dane, obiekt);
				}
			};
			
			dane.obiekty.tabelaScian.forEach(function(sciana) {
				WykrywanieKolizji(sciana);
			});
		},
		
		WykrywanieKolizji2: function(dane, p) {
			var WykrywanieKolizji2 = function(obiekt) {
				if(p.x < obiekt.x + obiekt.w && p.x + p.w > obiekt.x && p.y < obiekt.y + obiekt.h && p.y + p.h > obiekt.y) {
					Fizyka.zadania.Kolizja2(obiekt, p);
				}
			};
			
			dane.obiekty.tabelaScian.forEach(function(sciana) {
				WykrywanieKolizji2(sciana);
			});
		},
		
		Kolizja: function(dane, obiekt) {
			var mario = dane.obiekty.mario;
			
			if(obiekt.typ === "sciana") {
				if(mario.y+mario.h>obiekt.y && mario.x+mario.w > obiekt.x+10 && mario.x < obiekt.x+obiekt.w-10 && mario.pedY >= 0) {
					mario.obecnyStan = mario.stan.stanie;
					mario.y = obiekt.y - mario.h;
					mario.pedY = 0;
				}
				
				if(mario.x + mario.w > obiekt.x +16 && mario.x < obiekt.x + obiekt.w - 16 && mario.y > obiekt.y) {
					mario.y = obiekt.y + obiekt.h;
					mario.pedY = 1;
				}
				
				if(mario.x < obiekt.x && mario.y + mario.h > obiekt.y && mario.y < obiekt.y + obiekt.h) {
					mario.x = obiekt.x - mario.w;
				}
				
				if(mario.x > obiekt.x && mario.y + mario.h > obiekt.y && mario.y < obiekt.y + obiekt.h) {
					mario.x = obiekt.x + obiekt.w;
				}
			}
		},
		
		Kolizja2: function(obiekt, p) {
			if(obiekt.typ === "sciana") {
				if(p.y + p.h > obiekt.y && p.x + p.w > obiekt.x + 10 && p.x < obiekt.x + obiekt.w - 10 && p.pedY >= 0) {
					p.obecnyStan = p.stan.poruszanie;
					p.y = obiekt.y - p.h;
					p.pedY = 0;
				}
				if(p.x < obiekt.x && p.y + p.h > obiekt.y && p.y < obiekt.y + obiekt.h) {
					p.x = obiekt.x - p.w;
					p.kierunek = "lewo";
				}
				if(p.x > obiekt.x && p.y + p.h > obiekt.y && p.y < obiekt.y + obiekt.h) {
					p.x = obiekt.x + obiekt.w;
					p.kierunek = "prawo";
				}
			}
		},
		
		Smierc: function(dane) {
			if(dane.obiekty.mario.y > 624) Smierc.wywolanie(dane);
		}
	}
}