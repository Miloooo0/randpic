const imagenes = [
  { src: "pecesblanco/31 - CALAMAR.png", titulo: "CALAMAR" },
  { src: "pecesblanco/2 - ANGUILA.png", titulo: "ANGUILA" },
  { src: "pecesblanco/17 - PEZ LINTERNA.png", titulo: "PEZ LINTERNA" },
  { src: "pecesblanco/37 - FOCA.png", titulo: "FOCA" },
  { src: "pecesblanco/41 - MEDUSA.png", titulo: "MEDUSA" },
  { src: "pecesblanco/38 - LANGOSTA.png", titulo: "LANGOSTA" },
  { src: "pecesblanco/35 - ERIZO DE MAR.png", titulo: "ERIZO DE MAR" },
  { src: "pecesblanco/26 - TIBURON TIGRE.png", titulo: "TIBURÓN TIGRE" },
  { src: "pecesblanco/44 - PEZ GLOBO.png", titulo: "PEZ GLOBO" },
  { src: "pecesblanco/48 - SALMÓN.png", titulo: "SALMÓN" },
  { src: "pecesblanco/39 - LEÓN MARINO.png", titulo: "LEÓN MARINO" },
  { src: "pecesblanco/23 - TIBURON BALLEN.png", titulo: "TIBURÓN BALLENA" },
  { src: "pecesblanco/47 - PULPO.png", titulo: "PULPO" },
  { src: "pecesblanco/34 - DELFÍN.png", titulo: "DELFIN" },
  { src: "pecesblanco/33 - CARACOL MARINO.png", titulo: "CARACOL MARINO" },
  { src: "pecesblanco/29 - BALLENA (1).png", titulo: "BALLENA" },
  { src: "pecesblanco/8 - MEJILLON.png", titulo: "MEJILLÓN" },
  { src: "pecesblanco/40 - MANTA.png", titulo: "MANTA" },
  { src: "pecesblanco/42 - MERO.png", titulo: "MERO" },
  { src: "pecesblanco/36 - ESTRELLA DE MAR.png", titulo: "ESTRELLA DE MAR" },
  { src: "pecesblanco/4 - BARRACUDA.jpg", titulo: "BARRACUDA" },
  { src: "pecesblanco/46 - PEZ PAYASO.png", titulo: "PEZ PAYASO" },
  { src: "pecesblanco/18 - PEZ LORO.png", titulo: "PEZ LORO" },
  { src: "pecesblanco/10 - NUTRIA MARINA.png", titulo: "NUTRIA MARINA" },
  { src: "pecesblanco/43 - ORCA.png", titulo: "ORCA" },
  { src: "pecesblanco/3 - BACALAO.png", titulo: "BACALAO" },
  { src: "pecesblanco/5 - CORAL.png", titulo: "CORAL" },
  { src: "pecesblanco/7 - LANGOSTINO.png", titulo: "LANGOSTINO" },
  { src: "pecesblanco/16 - PEZ ESPADA.png", titulo: "PEZ ESPADA" },
  { src: "pecesblanco/11 - OSTRA.png", titulo: "OSTRA" },
  { src: "pecesblanco/24 - TIBURON BLANCO.png", titulo: "TIBURÓN BLANCO" },
  { src: "pecesblanco/9 - NARVAL.png", titulo: "NARVAL" },
  { src: "pecesblanco/13 - PEZ AGUJA.png", titulo: "PEZ AGUJA" },
  { src: "pecesblanco/25 - TIBURON MARTILLO.png", titulo: "TIBURÓN MARTILLO" },
  { src: "pecesblanco/12 - PEZ ABISAL.png", titulo: "PEZ ABISAL" },
  { src: "pecesblanco/6 - GAMBA.png", titulo: "GAMBA" },
  { src: "pecesblanco/28 - ATÚN.png", titulo: "ATÚN" },
  { src: "pecesblanco/14 - PEZ ANGEL.png", titulo: "PEZ ÁNGEL" },
  { src: "pecesblanco/1 - ALMEJA.png", titulo: "ALMEJA" },
  { src: "pecesblanco/15 - PEZ CIRUJANO AZUL.png", titulo: "PEZ CIRUJANO AZUL" },
  { src: "pecesblanco/45 - PEZ LEON.jpg", titulo: "PEZ LEÓN" },
  { src: "pecesblanco/49 - TIBURÓN.png", titulo: "TIBURÓN" },
  { src: "pecesblanco/32 - CANGREJO.png", titulo: "CANGREJO" },
  { src: "pecesblanco/50 - TORTUGA.png", titulo: "TORTUGA" },
  { src: "pecesblanco/27 - ANÉMONA.png", titulo: "ANÉMONA" },
  { src: "pecesblanco/20 - PEZ MARTILLO.png", titulo: "PEZ MARTILLO" },
  { src: "pecesblanco/19 - PEZ MARIPOSA.png", titulo: "PEZ MARIPOSA" },
  { src: "pecesblanco/30 - CABALLITO DE MAR.png", titulo: "CABALLITO DE MAR" },
  { src: "pecesblanco/21 - PINWINO.png", titulo: "PINGÜINO" },
  { src: "pecesblanco/22 - RAYA ELECTRICA.png", titulo: "RAYA ELÉCTRICA" }
];

const boton = document.getElementById("boton");
const img = document.getElementById("imagen");
const nombre = document.getElementById("nombre-imagen");

boton.addEventListener("click", () => {
  const aleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
  img.src = aleatoria.src;
  img.style.display = "block";
  nombre.textContent = aleatoria.titulo;
});
