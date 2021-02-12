class Obiekty {
  constructor(dane) {
    let niebo = {
			obraz: new Obraz(dane.grafika, 2448, 0, 960, 208),
			x: 0,
			y: 0,
			w: 2880,
			h: 624
		};

		let mapa = {
			obraz: new Obraz(dane.grafika, 0, 0, 2448, 208),
			x: 0,
			y: 0,
			w: 2448*3,
			h: 208*3
		};

		let mario = new Mario(dane.grafika,0,0,48,48);

		let sciany = [[-48,0,48,624],[7344,0,48,624],[0,528,1056,96],[960,480,48,48],[1008,432,48,96],
                  [1056,384,48,240],[1344,528,432,96],[1296,384,48,240],[1344,432,48,96],[1392,480,48,48],
                  [1776,480,48,144],[1920,432,48,192],[2064,384,48,240],[2208,336,48,288],[2352,528,524,96],
                  [2976,528,144,48],[3264,480,144,48],[3552,432,144,48],[3792,384,524,96],[3792,576,524,48],
                  [4320,576,480,48],[4800-48,340,48,48],
                  [4800,240,96,384],[4896,576,1008,48],[4992,384,672,96],[5664,240,48,240],[5712,-480,48,960],
                  [5904,528,48,96],[6144,432,48,192],[6384,480,48,144],[6432,528,336,96],[6528,480,48,48],
                  [6576,432,48,96],[6624,384,48,144],[6672,336,48,192],[6720,288,48,240],[6768,240,48,384],
                  [7056,528,288,96]];

		let potwory = [[912, 480],[1440, 480], [2880, 480]];

    let monety = [[1008,240],[1056,192],[1104,144],[1152,96],[1200,96],[1248,144],[1296,192],[1344,240],
                  [3792,480],[3840,480],[3888,480],[3936,480],[3984,480],[4032,480],[4080,480],[4128,480],
                  [4176,480],[4224,480],[4272,480]];

    let bloczkiMonet = [[528,336],[576,336],[624,336]];

		dane.obiekty = {};
		dane.obiekty.niebo = niebo;
		dane.obiekty.mapa = mapa;
		dane.obiekty.mario = mario;
		dane.obiekty.tabelaScian = [];
		dane.obiekty.tabelaPotworow = [];
    dane.obiekty.tabelaMonet = [];
    dane.obiekty.tabelaBloczkowMonet = [];

		sciany.forEach(function(z) {
			dane.obiekty.tabelaScian.push(new Sciana(z[0],z[1],z[2],z[3]));
		});

		potwory.forEach(function(p) {
			dane.obiekty.tabelaPotworow.push(new Potwor(dane.grafika, p[0], p[1], 48, 48));
		});

		monety.forEach(function(m) {
			dane.obiekty.tabelaMonet.push(new Moneta(dane.grafika, m[0], m[1], 48, 48));
		});

    bloczkiMonet.forEach(function(bm) {
			dane.obiekty.tabelaBloczkowMonet.push(new BloczekMonet(dane.grafika, bm[0], bm[1], 48, 48));
		});
  }
}
