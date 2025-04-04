
let mostrarMensaje = false;
let mensajeInicio = 0;
let miURL = "https://adriannf2005.github.io/JuegosSV"; // o lo que uses tú

let orbitron;

let pastelColors;
let colorIndex = 0;
let t = 0;

let ID_PROYECTOR = 1; //Cambiar este ID en funcion del proyector asignado.

var firebaseConfig = {
  apiKey: "AIzaSyDF_0fXUVHiauVr83vsVIqBMkoXjNzRKlY",
  authDomain: "san-valero-4b07e.firebaseapp.com",
  databaseURL:
    "https://san-valero-4b07e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "san-valero-4b07e",
  storageBucket: "san-valero-4b07e.firebasestorage.app",
  messagingSenderId: "200137559098",
  appId: "1:200137559098:web:eab160b3bd45ba282ab903",
  measurementId: "G-0BS3YBJ3KG", 
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

let MouseIndice = 0;

let URLOpened = false;

let sonido;
let audioCargando = false; // Para evitar que se recargue el audio en bucle

let SubidaTextCredits = 300;

let SubidaTextCredits2 = -700;

let MaxYmouse = 720;
let MinYmouse = 0;

let TasaMustreo = 5;

let FloatIcon = -1.5;

let TransicionIMG = 0;

let NUser = 1;

let DataShareIcon = 1;
let JuegoSVIcon = 1;
let RecomendadoIcon = 1;
let SVOnlineIcon = 1;

let FloatLeyenda = 0;

let OpacidadAllIcons = 0;

let GameOpacity = 255;

let posicionIMG = 1;
let posicionIMGini = 0;

let JuegoSeleccionadoData = -1;

let posIMG0 = 1280 / 2 - 1280 * 0.7;
let posIMG1 = 1280 / 2 - 1280 * 0.43;
let posIMG2 = 1280 / 2 - 1280 * 0.245;
let posIMG3 = 1280 / 2;
let posIMG4 = 1280 / 2 + 1280 * 0.245;
let posIMG5 = 1280 / 2 + 1280 * 0.43;
let posIMG6 = 1280 / 2 + 1280 * 0.7;

let MultiplicadoIMG1 = 0.37;
let MultiplicadoIMG2 = 0.26;
let MultiplicadoIMG3 = 0.2;
let MultiplicadoIMG4 = 0.00001;

let Tamaño0 = posIMG3;
let Tamaño1 = posIMG4;
let Tamaño2 = posIMG5;
let Tamaño3 = posIMG6;
let Tamaño4 = posIMG6;
let Tamaño5 = posIMG6;
let Tamaño6 = posIMG6;
let Tamaño7 = posIMG6;
let Tamaño8 = posIMG0;
let Tamaño9 = posIMG0;
let Tamaño10 = posIMG0;
let Tamaño11 = posIMG0;
let Tamaño12 = posIMG0;
let Tamaño13 = posIMG0;
let Tamaño14 = posIMG1;
let Tamaño15 = posIMG2;

let posicion0 = MultiplicadoIMG1;
let posicion1 = MultiplicadoIMG2;
let posicion2 = MultiplicadoIMG3;
let posicion3 = MultiplicadoIMG4;
let posicion4 = MultiplicadoIMG4;
let posicion5 = MultiplicadoIMG4;
let posicion6 = MultiplicadoIMG4;
let posicion7 = MultiplicadoIMG4;
let posicion8 = MultiplicadoIMG4;
let posicion9 = MultiplicadoIMG4;
let posicion10 = MultiplicadoIMG4;
let posicion11 = MultiplicadoIMG4;
let posicion12 = MultiplicadoIMG4;
let posicion13 = MultiplicadoIMG4;
let posicion14 = MultiplicadoIMG3;
let posicion15 = MultiplicadoIMG2;

let ACTTamaño0 = Tamaño0;
let ACTTamaño1 = Tamaño1;
let ACTTamaño2 = Tamaño2;
let ACTTamaño3 = Tamaño3;
let ACTTamaño4 = Tamaño4;
let ACTTamaño5 = Tamaño5;
let ACTTamaño6 = Tamaño6;
let ACTTamaño7 = Tamaño7;
let ACTTamaño8 = Tamaño8;
let ACTTamaño9 = Tamaño9;
let ACTTamaño10 = Tamaño10;
let ACTTamaño11 = Tamaño11;
let ACTTamaño12 = Tamaño12;
let ACTTamaño13 = Tamaño13;
let ACTTamaño14 = Tamaño14;
let ACTTamaño15 = Tamaño15;

let ACTposicion0 = posicion0;
let ACTposicion1 = posicion1;
let ACTposicion2 = posicion2;
let ACTposicion3 = posicion3;
let ACTposicion4 = posicion4;
let ACTposicion5 = posicion5;
let ACTposicion6 = posicion6;
let ACTposicion7 = posicion7;
let ACTposicion8 = posicion8;
let ACTposicion9 = posicion9;
let ACTposicion10 = posicion10;
let ACTposicion11 = posicion11;
let ACTposicion12 = posicion12;
let ACTposicion13 = posicion13;
let ACTposicion14 = posicion14;
let ACTposicion15 = posicion15;

let BACTTamaño0 = Tamaño0;
let BACTTamaño1 = Tamaño1;
let BACTTamaño2 = Tamaño2;
let BACTTamaño3 = Tamaño3;
let BACTTamaño4 = Tamaño4;
let BACTTamaño5 = Tamaño5;
let BACTTamaño6 = Tamaño6;
let BACTTamaño7 = Tamaño7;
let BACTTamaño8 = Tamaño8;
let BACTTamaño9 = Tamaño9;
let BACTTamaño10 = Tamaño10;
let BACTTamaño11 = Tamaño11;
let BACTTamaño12 = Tamaño12;
let BACTTamaño13 = Tamaño13;
let BACTTamaño14 = Tamaño14;
let BACTTamaño15 = Tamaño15;

let BACTposicion0 = posicion0;
let BACTposicion1 = posicion1;
let BACTposicion2 = posicion2;
let BACTposicion3 = posicion3;
let BACTposicion4 = posicion4;
let BACTposicion5 = posicion5;
let BACTposicion6 = posicion6;
let BACTposicion7 = posicion7;
let BACTposicion8 = posicion8;
let BACTposicion9 = posicion9;
let BACTposicion10 = posicion10;
let BACTposicion11 = posicion11;
let BACTposicion12 = posicion12;
let BACTposicion13 = posicion13;
let BACTposicion14 = posicion14;
let BACTposicion15 = posicion15;

let millisRefresData = -60000;

let CalibracionPantalla;

let images = [];
let videos = [];
let currentImageIndex = 0;
let nextImageIndex = 1;
let currentVideoIndex = 0;
let imageSlideCounter = 0;
let mode = "blackScreen"; // Empezamos con pantalla negra
let imageTimer = 0;
let blackScreenDuration = 1000; // 5 segundos de pantalla negra
let imageDisplayDuration = 30000; // Duración de cada imagen (3 segundos)
let ytApiReady = false;
let player;
let videoContainer;
let maxImages = 0;
let animDuration = 1000; // Duración de la animación para cada imagen
let animStartTime = 0;
let transitioning = false;
let ImagePrev;
let ImagePrev2;

let TiempoUnderProyector = 100000;
//let TiempoUnderProyector = 1000;
let proyectorMillisANT = 0;
let Etapa = 7;
let OpcacidadTrans = 0;

let MostrarImagenesVideos = false;
let TemporizadorMinTempPir = 0;
let TemporizadorMinTempPir2 = 0;
let TiempoPirDebeEstarEncendido = 160000;
let TiempoPirApagadoMin = 8000;

let started = false; // Variable para controlar el inicio

let stars = [];
let maxStars = 30;

let font;
var dots = [];
var things;
let down = false;
var placed = 0;
let opac = 255;
var wide;
let a = 0;
let easing = 0.1;
let hours;
let minutes;
let seconds;
let TemperaturaDegrees = 0;
let HumidityDegrees = 0;
let PreasureDegrees = 0;

let iframe;
let urls = [
  "https://editor.p5js.org/AdrianNF/full/aShD2Ck6z",
  "https://editor.p5js.org/AdrianNF/full/7tsAq46Ww",
  "https://editor.p5js.org/AdrianNF/full/PGmg8Nnkg",
  "https://www.airconsole.com/?role",
  "https://editor.p5js.org/AdrianNF/full/nZXwfaQaY",
  "https://editor.p5js.org/AdrianNF/full/b_df6BHa2",
  "https://adriannf2005.github.io/Game7/",
  "https://adriannf2005.github.io/Game8/",
  "https://adriannf2005.github.io/Game9/",
  "https://adriannf2005.github.io/Game10/",
  "https://adriannf2005.github.io/Game11/",
]; // Lista de URLs

let categories = ["ACTUALIDAD", "EVENTOS", "OTROS"]; // Orden de prioridad
let currentCategoryIndex = 0;
let imgIndex = 1;
let currentImage;
let errorImage;
let categoryHasImages = false; // Variable para saber si una categoría tiene imágenes

let r = 0;
let g = 0;
let b = 0;

let ano;
let mes;
let dia;
let diaSem;
let bissexto;
let daysNumber;
let daySquare = 100;
let weekDaysFull = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
let weekdays = ["L", "M", "X", "J", "V", "S", "D"];
let nameMonth = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let days = [];
let d;
let f;
let img;
let years = [];

let VolumenAltavoz = -1;

let videoFinishSignal = false;

let weatherData;
let temperature, humidity, pressure, windSpeed;
let weatherCode;
let weatherIconUrl;
let weatherIcon;
let lastUpdateTime = 0; // Tiempo de la última actualización
let updateInterval = 10 * 60 * 1000; // 10 minutos en milisegundos (600,000 ms)

let startX, startY, endX, endY;
let posX, posY;
let startTime;
let duration;
let angle = 0;
let rotationSpeed;
let isWaiting = false;
let waitStartTime;
let waitDuration;

let VolverActualizarDatos = true;

let PistaAudio = 0;

let FadeCalibracion = 0;

let MusicaTestTrack = 4;

let videoPlayed = false;

let TransparenciaCalibracion = 0;

let VecesTotalEncendido = -1;

let VecesTotalJuego0 = -1;

let VecesTotalJuego1 = -1;

let VecesTotalJuego2 = -1;

let VecesTotalJuego3 = -1;

let VecesTotalJuego4 = -1;

let VecesTotalJuego5 = -1;

let VecesTotalJuego6 = -1;

let VecesTotalJuego7 = -1;

let VecesTotalJuego8 = -1;

let VecesTotalJuego9 = -1;

let VecesTotalJuego10 = -1;

let ContarVecesEncendido = true;

function UsoDeJuego0(data) {
  VecesTotalJuego0 = data.val();
}

function UsoDeJuego1(data) {
  VecesTotalJuego1 = data.val();
}

function UsoDeJuego2(data) {
  VecesTotalJuego2 = data.val();
}

function UsoDeJuego3(data) {
  VecesTotalJuego3 = data.val();
}

function UsoDeJuego4(data) {
  VecesTotalJuego4 = data.val();
}

function UsoDeJuego5(data) {
  VecesTotalJuego5 = data.val();
}

function UsoDeJuego6(data) {
  VecesTotalJuego6 = data.val();
}

function UsoDeJuego7(data) {
  VecesTotalJuego7 = data.val();
}

function UsoDeJuego8(data) {
  VecesTotalJuego8 = data.val();
}

function UsoDeJuego9(data) {
  VecesTotalJuego9 = data.val();
}

function UsoDeJuego10(data) {
  VecesTotalJuego10 = data.val();
}

function VecesEncendidoProyector(data) {
  VecesTotalEncendido = data.val();
}

function Calibracion(data) {
  CalibracionPantalla = data.val();
}

function Volumen(data) {
  VolumenAltavoz = data.val();
}

function GetPistaN(data) {
  PistaAudio = data.val();
}

function preload() {
  
  if (isMobileDevice()) {
    
    QRImage = loadImage("QR Code.png");
    
    orbitron = loadFont("Fuente.ttf");
    
  } else {
    
  font = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/font.ttf"
  );
  video = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Bot.mp4"
  );
  video.hide();
  WallPaper = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/WallPapers/" +
      floor(random(1, 10)) +
      ".png"
  );

  Fuente1 = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/Font1.otf"
  );
  Fuente2 = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/Font2.ttf"
  );
  Fuente3 = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/Font3.otf"
  );
  Fuente4 = loadFont(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Fonts/SuperMario256.ttf"
  );

  CalibracionIMG2 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/TestAudioVisuales2.png"
  );
  
  CalibracionIMG1 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/TestAudioVisuales.png"
  );
  
  AlturaIcon = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AlturaIcon.png"
  );
  ClimaIcon = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Clima.png"
  );
  IconTiempo = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/IconTiempo.png"
  );
  SVLOGO = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/SV%20DUCK.png"
  );
  Corners = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Corners.png"
  );
  Border = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Border.png"
  );
  errorImage = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/ERROR.png"
  );
  DuckSpace = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AstronautDuck.png"
  );

  videos = loadStrings(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/VIDEOS/Enlaces%20Videos.txt"
  );

  // Imágenes del menú de juegos
  IG0 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DuckTris.png"
  );
  IG1 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/JustDanceSV.png"
  );
  IG2 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/4%20en%20Raya.png"
  );
  IG3 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/PongSv.png"
  );
  IG4 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/Flappy%20Duck.png"
  );
  IG5 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/Airconsole.png"
  );
  IG6 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/RompeBloques.png"
  );
  IG7 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DinoDuck.png"
  );
  IG8 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/Doodle%20Jump.png"
  );
  IG9 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DriveMad.png"
  );
  IG10 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/Tap%20Tap%20Shots.png"
  );
  IG11 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/RainbowStacker.png"
  );
  IG12 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/FlipBottle.png"
  );
  IG13 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Creditos/BorderClipCreditos.png"
  );
  IG14 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DuckBlingsSV.png"
  );
  IG15 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Preview/DuckBusters.png"
  );
  
  ARROWDER = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/ARROWDERGAME.png"
  );

  DataShare = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/Data%20share.png"
  );
  GameSV = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/GameSanValero.png"
  );
  Leyenda = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/Leyenda.png"
  );
  Recomendado = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/Recomendado.png"
  );
  SVOnline = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/SV%20Online.png"
  );
  UserIcon = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/UsuarioIcon.png"
  );
  GameSystem = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/MenuJuegos/GameSystem.png"
  );

  // Pantallas de calibración
  Pantalla0 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla%20de%20calibraci%C3%B3n.png"
  );
  Pantalla1 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla1.png"
  );
  Pantalla2 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla2.png"
  );
  Pantalla3 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla3.png"
  );
  Pantalla4 = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Pantalla4.png"
  );
  CornersCal = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Calibraci%C3%B3n/Corners.png"
  );

  BorderVideo = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/SOLO%20BORDE%20NO%20USAR.png"
  );

  TEXTCreditos = loadImage(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Creditos/Creditos%20Text.png"
  );

  musicaCreditos = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Creditos/Musica%20MarioKart.mp3"
  );

  MusicDuckBlings = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Principal/DuckBlings.mp3"
  );

  MusicDuckBusters = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Principal/DuckBusters.mp3"
  );

  MusicDuckTris = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Principal/DuckTris.mp3"
  );
  
  MusicaTest1 = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/Skyhook%20–%20Soundtrack%20(2019).mp3"
  );
  MusicaTest2 = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/Trust%20–%20Soundtrack%20(2019).mp3"
  );
  MusicaTest3 = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/Black%20Holes%202021%20–%20Soundtrack%20(2021).mp3"
  );
  MusicaTest4 = loadSound(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/Behind%20the%20Lies%20–%20Soundtrack%20(2021).mp3"
  );

  // Video de calibración
  VideoCalibracion = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Blue%20Streaks%20Abstract%20Shapes%20Geometric%20Moving%20Animated%20Background%20Loop.mp4"
  );
  VideoCalibracion.hide();

  VIDEO4Raya = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/4%20en%20Raya.mp4"
  );
  VIDEO4Raya.hide();

  VIDEOAirConsole = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/AirConsole.mp4"
  );
  VIDEOAirConsole.hide();

  VIDEOBottleFlip = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/BottleFlip.mp4"
  );
  VIDEOBottleFlip.hide();

  VIDEODinoDuck = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/DinoDuck.mp4"
  );
  VIDEODinoDuck.hide();

  VIDEODoodleJump = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Doodle%20Jump.mp4"
  );
  VIDEODoodleJump.hide();

  VIDEODriveMad = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/DriveMad.mp4"
  );
  VIDEODriveMad.hide();

  VIDEOFlappyDuck = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Flappy%20Duck.mp4"
  );
  VIDEOFlappyDuck.hide();

  VIDEOPongSV = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/PongSV.mp4"
  );
  VIDEOPongSV.hide();

  VIDEORainbow = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Rainbow%20Stacker.mp4"
  );
  VIDEORainbow.hide();

  VIDEORompeBloques = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Rompe%20bloques.mp4"
  );
  VIDEORompeBloques.hide();

  VIDEOTapTap = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/Cropped/Tap%20Tap%20SHOTS.mp4"
  );
  VIDEOTapTap.hide();

  VIDEOJustDanceSV = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Video%20Principal/JustDanceSV.mp4"
  );
  VIDEOJustDanceSV.hide();
  
  VIDEOInicioProyector = createVideo("https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/PantallaInicio/VideoInicio.mp4"); // Carga el video
  video.hide(); // Oculta los controles del video (se dibujará en el canvas)
  video.onended(() => {
    videoPlayed = true; // Cambia el estado cuando el video termine
  });
  VIDEOInicioProyector.hide();

  VIDEOCreditos = createVideo(
    "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/AsetsGames/Creditos/Video%20De%20fondo%20Final%203MB.mp4"
  );
  VIDEOCreditos.hide();
    
  }
}

function setup() {
  
  if (isMobileDevice()) {
    
      // Colores pastel para el degradado animado
  pastelColors = [
    color(255, 193, 227), // Rosa pastel
    color(191, 223, 255), // Azul claro
    color(209, 191, 255)  // Lila claro
  ];
    
    createCanvas(windowWidth, windowHeight);
    
    imageMode(CENTER);
    
    frameRate(10);
    
    textAlign(CENTER, CENTER);
    
    textFont(orbitron);
    
    textSize(20);

  } else {

  createCanvas(1280, 720);
  
  let scaleFactor = Math.min(windowWidth / 1280, windowHeight / 720);
  let canvasElement = document.querySelector("canvas");
  canvasElement.style.transform = `scale(${scaleFactor})`;
  
  angleMode(RADIANS);

  VIDEO4Raya.volume(0);
  VIDEOAirConsole.volume(0);
  VIDEOBottleFlip.volume(0);
  VIDEODinoDuck.volume(0);
  VIDEODoodleJump.volume(0);
  VIDEODriveMad.volume(0);
  VIDEOFlappyDuck.volume(0);
  VIDEOPongSV.volume(0);
  VIDEORainbow.volume(0);
  VIDEORompeBloques.volume(0);
  VIDEOTapTap.volume(0);
  VIDEOJustDanceSV.volume(0);
  
    ref = database.ref("Juegos/CuatroRaya/Partida1");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1CuatroRayaPlayer");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2CuatroRayaPlayer");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3CuatroRayaPlayer");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1Fin");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2Fin");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3Fin");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1PlayerPos");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2PlayerPos");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3PlayerPos");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1Hour");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2Hour");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3Hour");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1Min");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2Min");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3Min");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida1Sec");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida2Sec");

    ref.set(0);
    
    ref = database.ref("Juegos/CuatroRaya/Partida3Sec");

    ref.set(0);
    
    
    
    ref = database.ref("Juegos/SVPong/BallVXPlay1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVXPlay2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVXPlay3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVYPlay1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVYPlay2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallVYPlay3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/BallXPlay1");

    ref.set(640);
    
    ref = database.ref("Juegos/SVPong/BallXPlay2");

    ref.set(640);
    
    ref = database.ref("Juegos/SVPong/BallXPlay3");

    ref.set(640);
    
    ref = database.ref("Juegos/SVPong/BallYPlay1");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/BallYPlay2");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/BallYPlay3");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/MaxTouchLocal1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/MaxTouchLocal2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/MaxTouchLocal3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/Partida1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/Partida2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/Partida3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/Player1PosPartida1");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player1PosPartida2");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player1PosPartida3");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player2PosPartida1");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player2PosPartida2");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/Player2PosPartida3");

    ref.set(360);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer1Game1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer1Game2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer1Game3");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer2Game1");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer2Game2");

    ref.set(0);
    
    ref = database.ref("Juegos/SVPong/ScorePlayer2Game3");

    ref.set(0);
  
    ref = database.ref("Proyectores/InicioProyectores");

    ref.set(1);
  
    ref = database.ref("Proyectores/Proyector" + ID_PROYECTOR + "JuegoSel");
  
    ref.set(-2);
  
    ref = database.ref("Proyectores/PuntoMaximoProyector" + ID_PROYECTOR);
  
    ref.set(0);
  
    ref = database.ref("Proyectores/PuntoMinimoProyector" + ID_PROYECTOR);
  
    ref.set(720);
  
  
    VIDEOInicioProyector.play();
  
    video.loop();
  
  VIDEOCreditos.loop();
  
    started = true;
    
  VIDEOInicioProyector.time(56); // Establece el tiempo de inicio en 56 segundos
  
  }
}

function draw() {

  if (isMobileDevice()) {
    
    resizeCanvas(windowWidth, windowHeight);
    background(0);

    // Escalar imagen
    let imgW = QRImage.width;
    let imgH = QRImage.height;
    let scaleFactor = min(width / imgW * 0.8, height / imgH * 0.8, 1);
    let newW = imgW * scaleFactor;
    let newH = imgH * scaleFactor;

    // Color animado
    let c1 = pastelColors[colorIndex % pastelColors.length];
    let c2 = pastelColors[(colorIndex + 1) % pastelColors.length];
    let blend = lerpColor(c1, c2, t);
    fill(blend);

    if (height > width) {
      // VERTICAL
      let imgX = width / 2;
      let imgY = height / 2.9;
      image(QRImage, imgX, imgY, newW, newH);

      textSize(clampTextSize(width * 2.1));
      text("Prueba en PC", width / 2, imgY - newH / 2 - height * 0.04);
      textSize(clampTextSize(width * 1));
      text("(Estos juegos se han creado específicamente", width / 2, imgY + newH / 2 + height * 0.11);
      text("para PC, introduce esta URL o escanea el código", width / 2, imgY + newH / 2 + height * 0.16);
      text("QR para acceder a todos desde un ordenador)", width / 2, imgY + newH / 2 + height * 0.21);
      textSize(clampTextSize(width * 1.3));
      fill(250, 150, 150);
      text("Toca la pantalla para copiar la URL", width / 2, imgY + newH / 2 + height * 0.29);
      
      if (mouseIsPressed) {

        fill(250, 180, 50);

      } else {
       
        fill(255);
        
      }
      
      textSize(clampTextSize(width * 1.16));
      text(miURL, width / 2, imgY + newH / 2 + height * 0.04);
      
    } else {
      // HORIZONTAL (landscape)
      let imgX = width / 7; // Un poco a la izquierda
      let imgY = height / 2;
      image(QRImage, imgX, imgY, newW, newH);

      if (mouseIsPressed) {

        fill(250, 180, 50);

      } else {
       
        fill(255);
        
      }
      
      textSize(clampTextSize(width * 0.8));
      text(miURL, width / 1.6, height / 2); // A la derecha, centrado verticalmente
    }

    // Avanza la animación del color
    t += 0.03;
    if (t >= 1) {
      t = 0;
      colorIndex = (colorIndex + 1) % pastelColors.length;
    }
    
  } else {
    
    if (URLOpened == false) {
      noStroke();

      fill(0, 0, 0);

      rect(0, 0, width, height);

      push();

      if (posicionIMG == 0) {
        NUser = 2;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG3;
        Tamaño1 = posIMG4;
        Tamaño2 = posIMG5;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG6;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG0;
        Tamaño13 = posIMG0;
        Tamaño14 = posIMG1;
        Tamaño15 = posIMG2;

        posicion0 = MultiplicadoIMG1;
        posicion1 = MultiplicadoIMG2;
        posicion2 = MultiplicadoIMG3;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG3;
        posicion15 = MultiplicadoIMG2;
      } else if (posicionIMG == 1) {
        NUser = 4;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 1;
        SVOnlineIcon = 1;

        Tamaño0 = posIMG2;
        Tamaño1 = posIMG3;
        Tamaño2 = posIMG4;
        Tamaño3 = posIMG5;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG6;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG0;
        Tamaño13 = posIMG0;
        Tamaño14 = posIMG0;
        Tamaño15 = posIMG1;

        posicion0 = MultiplicadoIMG2;
        posicion1 = MultiplicadoIMG1;
        posicion2 = MultiplicadoIMG2;
        posicion3 = MultiplicadoIMG3;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG3;
      } else if (posicionIMG == 2) {
        NUser = 2;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 1;

        Tamaño0 = posIMG1;
        Tamaño1 = posIMG2;
        Tamaño2 = posIMG3;
        Tamaño3 = posIMG4;
        Tamaño4 = posIMG5;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG6;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG0;
        Tamaño13 = posIMG0;
        Tamaño14 = posIMG0;
        Tamaño15 = posIMG0;

        posicion0 = MultiplicadoIMG3;
        posicion1 = MultiplicadoIMG2;
        posicion2 = MultiplicadoIMG1;
        posicion3 = MultiplicadoIMG2;
        posicion4 = MultiplicadoIMG3;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 3) {
        NUser = 2;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 1;
        SVOnlineIcon = 1;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG1;
        Tamaño2 = posIMG2;
        Tamaño3 = posIMG3;
        Tamaño4 = posIMG4;
        Tamaño5 = posIMG5;
        Tamaño6 = posIMG6;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG0;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG3;
        posicion2 = MultiplicadoIMG2;
        posicion3 = MultiplicadoIMG1;
        posicion4 = MultiplicadoIMG2;
        posicion5 = MultiplicadoIMG3;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 4) {
        NUser = 1;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG1;
        Tamaño3 = posIMG2;
        Tamaño4 = posIMG3;
        Tamaño5 = posIMG4;
        Tamaño6 = posIMG5;
        Tamaño7 = posIMG6;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG3;
        posicion3 = MultiplicadoIMG2;
        posicion4 = MultiplicadoIMG1;
        posicion5 = MultiplicadoIMG2;
        posicion6 = MultiplicadoIMG3;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 5) {
        NUser = 8;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 1;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG1;
        Tamaño4 = posIMG2;
        Tamaño5 = posIMG3;
        Tamaño6 = posIMG4;
        Tamaño7 = posIMG5;
        Tamaño8 = posIMG6;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG3;
        posicion4 = MultiplicadoIMG2;
        posicion5 = MultiplicadoIMG1;
        posicion6 = MultiplicadoIMG2;
        posicion7 = MultiplicadoIMG3;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 6) {
        NUser = 1;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG0;
        Tamaño4 = posIMG1;
        Tamaño5 = posIMG2;
        Tamaño6 = posIMG3;
        Tamaño7 = posIMG4;
        Tamaño8 = posIMG5;
        Tamaño9 = posIMG6;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG3;
        posicion5 = MultiplicadoIMG2;
        posicion6 = MultiplicadoIMG1;
        posicion7 = MultiplicadoIMG2;
        posicion8 = MultiplicadoIMG3;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 7) {
        NUser = 1;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG0;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG0;
        Tamaño4 = posIMG0;
        Tamaño5 = posIMG1;
        Tamaño6 = posIMG2;
        Tamaño7 = posIMG3;
        Tamaño8 = posIMG4;
        Tamaño9 = posIMG5;
        Tamaño10 = posIMG6;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG3;
        posicion6 = MultiplicadoIMG2;
        posicion7 = MultiplicadoIMG1;
        posicion8 = MultiplicadoIMG2;
        posicion9 = MultiplicadoIMG3;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 8) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG0;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG0;
        Tamaño4 = posIMG0;
        Tamaño5 = posIMG0;
        Tamaño6 = posIMG1;
        Tamaño7 = posIMG2;
        Tamaño8 = posIMG3;
        Tamaño9 = posIMG4;
        Tamaño10 = posIMG5;
        Tamaño11 = posIMG6;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG3;
        posicion7 = MultiplicadoIMG2;
        posicion8 = MultiplicadoIMG1;
        posicion9 = MultiplicadoIMG2;
        posicion10 = MultiplicadoIMG3;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 9) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 1;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG0;
        Tamaño3 = posIMG0;
        Tamaño4 = posIMG0;
        Tamaño5 = posIMG0;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG1;
        Tamaño8 = posIMG2;
        Tamaño9 = posIMG3;
        Tamaño10 = posIMG4;
        Tamaño11 = posIMG5;
        Tamaño12 = posIMG6;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG3;
        posicion8 = MultiplicadoIMG2;
        posicion9 = MultiplicadoIMG1;
        posicion10 = MultiplicadoIMG2;
        posicion11 = MultiplicadoIMG3;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 10) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG0;
        Tamaño5 = posIMG0;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG1;
        Tamaño9 = posIMG2;
        Tamaño10 = posIMG3;
        Tamaño11 = posIMG4;
        Tamaño12 = posIMG5;
        Tamaño13 = posIMG6;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG3;
        posicion9 = MultiplicadoIMG2;
        posicion10 = MultiplicadoIMG1;
        posicion11 = MultiplicadoIMG2;
        posicion12 = MultiplicadoIMG3;
        posicion13 = MultiplicadoIMG4;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 11) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 1;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG0;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG1;
        Tamaño10 = posIMG2;
        Tamaño11 = posIMG3;
        Tamaño12 = posIMG4;
        Tamaño13 = posIMG5;
        Tamaño14 = posIMG6;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG3;
        posicion10 = MultiplicadoIMG2;
        posicion11 = MultiplicadoIMG1;
        posicion12 = MultiplicadoIMG2;
        posicion13 = MultiplicadoIMG3;
        posicion14 = MultiplicadoIMG4;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 12) {
        NUser = 1;

        DataShareIcon = 0;
        JuegoSVIcon = 0;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG1;
        Tamaño11 = posIMG2;
        Tamaño12 = posIMG3;
        Tamaño13 = posIMG4;
        Tamaño14 = posIMG5;
        Tamaño15 = posIMG6;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG3;
        posicion11 = MultiplicadoIMG2;
        posicion12 = MultiplicadoIMG1;
        posicion13 = MultiplicadoIMG2;
        posicion14 = MultiplicadoIMG3;
        posicion15 = MultiplicadoIMG4;
      } else if (posicionIMG == 13) {
        NUser = 0;

        DataShareIcon = 0;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG6;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG1;
        Tamaño12 = posIMG2;
        Tamaño13 = posIMG3;
        Tamaño14 = posIMG4;
        Tamaño15 = posIMG5;

        posicion0 = MultiplicadoIMG4;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG3;
        posicion12 = MultiplicadoIMG2;
        posicion13 = MultiplicadoIMG1;
        posicion14 = MultiplicadoIMG2;
        posicion15 = MultiplicadoIMG3;
      } else if (posicionIMG == 14) {
        NUser = 8;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 1;

        Tamaño0 = posIMG5;
        Tamaño1 = posIMG6;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG1;
        Tamaño13 = posIMG2;
        Tamaño14 = posIMG3;
        Tamaño15 = posIMG4;

        posicion0 = MultiplicadoIMG3;
        posicion1 = MultiplicadoIMG4;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG3;
        posicion13 = MultiplicadoIMG2;
        posicion14 = MultiplicadoIMG1;
        posicion15 = MultiplicadoIMG2;
      } else if (posicionIMG == 15) {
        NUser = 6;

        DataShareIcon = 1;
        JuegoSVIcon = 1;
        RecomendadoIcon = 0;
        SVOnlineIcon = 0;

        Tamaño0 = posIMG4;
        Tamaño1 = posIMG5;
        Tamaño2 = posIMG6;
        Tamaño3 = posIMG6;
        Tamaño4 = posIMG6;
        Tamaño5 = posIMG6;
        Tamaño6 = posIMG0;
        Tamaño7 = posIMG0;
        Tamaño8 = posIMG0;
        Tamaño9 = posIMG0;
        Tamaño10 = posIMG0;
        Tamaño11 = posIMG0;
        Tamaño12 = posIMG0;
        Tamaño13 = posIMG1;
        Tamaño14 = posIMG2;
        Tamaño15 = posIMG3;

        posicion0 = MultiplicadoIMG2;
        posicion1 = MultiplicadoIMG3;
        posicion2 = MultiplicadoIMG4;
        posicion3 = MultiplicadoIMG4;
        posicion4 = MultiplicadoIMG4;
        posicion5 = MultiplicadoIMG4;
        posicion6 = MultiplicadoIMG4;
        posicion7 = MultiplicadoIMG4;
        posicion8 = MultiplicadoIMG4;
        posicion9 = MultiplicadoIMG4;
        posicion10 = MultiplicadoIMG4;
        posicion11 = MultiplicadoIMG4;
        posicion12 = MultiplicadoIMG4;
        posicion13 = MultiplicadoIMG3;
        posicion14 = MultiplicadoIMG2;
        posicion15 = MultiplicadoIMG1;
      }

      imageMode(CENTER);

      image(
        IG0,
        BACTposicion0,
        height / 2,
        IG5.width * BACTTamaño0,
        IG5.height * BACTTamaño0
      );
      image(
        IG1,
        BACTposicion1,
        height / 2,
        IG5.width * BACTTamaño1,
        IG5.height * BACTTamaño1
      );
      image(
        IG2,
        BACTposicion2,
        height / 2,
        IG5.width * BACTTamaño2,
        IG5.height * BACTTamaño2
      );
      image(
        IG3,
        BACTposicion3,
        height / 2,
        IG5.width * BACTTamaño3,
        IG5.height * BACTTamaño3
      );
      image(
        IG4,
        BACTposicion4,
        height / 2,
        IG5.width * BACTTamaño4,
        IG5.height * BACTTamaño4
      );
      image(
        IG5,
        BACTposicion5,
        height / 2,
        IG5.width * BACTTamaño5,
        IG5.height * BACTTamaño5
      );
      image(
        IG6,
        BACTposicion6,
        height / 2,
        IG5.width * BACTTamaño6,
        IG5.height * BACTTamaño6
      );
      image(
        IG7,
        BACTposicion7,
        height / 2,
        IG5.width * BACTTamaño7,
        IG5.height * BACTTamaño7
      );
      image(
        IG8,
        BACTposicion8,
        height / 2,
        IG5.width * BACTTamaño8,
        IG5.height * BACTTamaño8
      );
      image(
        IG9,
        BACTposicion9,
        height / 2,
        IG5.width * BACTTamaño9,
        IG5.height * BACTTamaño9
      );
      image(
        IG10,
        BACTposicion10,
        height / 2,
        IG5.width * BACTTamaño10,
        IG5.height * BACTTamaño10
      );
      image(
        IG11,
        BACTposicion11,
        height / 2,
        IG5.width * BACTTamaño11,
        IG5.height * BACTTamaño11
      );
      image(
        IG12,
        BACTposicion12,
        height / 2,
        IG5.width * BACTTamaño12,
        IG5.height * BACTTamaño12
      );

      image(
        VIDEOCreditos,
        BACTposicion13,
        height / 2,
        IG5.width * BACTTamaño13,
        IG5.height * BACTTamaño13
      );

      image(
        IG13,
        BACTposicion13,
        height / 2,
        IG5.width * BACTTamaño13,
        IG5.height * BACTTamaño13
      );
      image(
        IG14,
        BACTposicion14,
        height / 2,
        IG5.width * BACTTamaño14,
        IG5.height * BACTTamaño14
      );
      image(
        IG15,
        BACTposicion15,
        height / 2,
        IG5.width * BACTTamaño15,
        IG5.height * BACTTamaño15
      );

      if (posicionIMG == 2 && posicionIMGini == 2) {
        if (OpacidadAllIcons == 795) {
          VIDEO4Raya.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEO4Raya.time() < VIDEO4Raya.duration()
        ) {
          image(
            VIDEO4Raya,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 3 && posicionIMGini == 3) {
        if (OpacidadAllIcons == 795) {
          VIDEOPongSV.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOPongSV.time() < VIDEOPongSV.duration()
        ) {
          image(
            VIDEOPongSV,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 4 && posicionIMGini == 4) {
        if (OpacidadAllIcons == 795) {
          VIDEOFlappyDuck.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOFlappyDuck.time() < VIDEOFlappyDuck.duration()
        ) {
          image(
            VIDEOFlappyDuck,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 5 && posicionIMGini == 5) {
        if (OpacidadAllIcons == 795) {
          VIDEOAirConsole.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOAirConsole.time() < VIDEOAirConsole.duration()
        ) {
          image(
            VIDEOAirConsole,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 6 && posicionIMGini == 6) {
        if (OpacidadAllIcons == 795) {
          VIDEORompeBloques.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEORompeBloques.time() < VIDEORompeBloques.duration()
        ) {
          image(
            VIDEORompeBloques,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 7 && posicionIMGini == 7) {
        if (OpacidadAllIcons == 795) {
          VIDEODinoDuck.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEODinoDuck.time() < VIDEODinoDuck.duration()
        ) {
          image(
            VIDEODinoDuck,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 8 && posicionIMGini == 8) {
        if (OpacidadAllIcons == 795) {
          VIDEODoodleJump.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEODoodleJump.time() < VIDEODoodleJump.duration()
        ) {
          image(
            VIDEODoodleJump,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 9 && posicionIMGini == 9) {
        if (OpacidadAllIcons == 795) {
          VIDEODriveMad.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEODriveMad.time() < VIDEODriveMad.duration()
        ) {
          image(
            VIDEODriveMad,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 10 && posicionIMGini == 10) {
        if (OpacidadAllIcons == 795) {
          VIDEOTapTap.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOTapTap.time() < VIDEOTapTap.duration()
        ) {
          image(
            VIDEOTapTap,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 11 && posicionIMGini == 11) {
        if (OpacidadAllIcons == 795) {
          VIDEORainbow.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEORainbow.time() < VIDEORainbow.duration()
        ) {
          image(
            VIDEORainbow,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 12 && posicionIMGini == 12) {
        if (OpacidadAllIcons == 795) {
          VIDEOBottleFlip.play();
        }

        if (
          URLOpened == false &&
          OpacidadAllIcons >= 800 &&
          VIDEOBottleFlip.time() < VIDEOBottleFlip.duration()
        ) {
          image(
            VIDEOBottleFlip,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
          image(
            BorderVideo,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 13 && posicionIMGini == 13) {
        //Creditos

        if (OpacidadAllIcons == 400) {
          musicaCreditos.play();
        }

        SubidaTextCredits = SubidaTextCredits + 30 / frameRate();

        if (SubidaTextCredits > height * 2.75) {
          SubidaTextCredits = 0;
        }

        SubidaTextCredits2 = SubidaTextCredits2 + 30 / frameRate();

        if (SubidaTextCredits2 > height * 2.75) {
          SubidaTextCredits2 = 0;
        }

        if (OpacidadAllIcons >= 400) {
          if (OpacidadAllIcons < 800) {
            push();

            tint(255, map(OpacidadAllIcons, 400, 800, 0, 255));

            image(
              TEXTCreditos,
              posIMG3,
              height +
                (TEXTCreditos.height * MultiplicadoIMG1 * 0.9) / 2 -
                SubidaTextCredits,
              TEXTCreditos.width * MultiplicadoIMG1 * 0.9,
              TEXTCreditos.height * MultiplicadoIMG1 * 0.9
            );

            pop();
          } else {
            image(
              TEXTCreditos,
              posIMG3,
              height +
                (TEXTCreditos.height * MultiplicadoIMG1 * 0.9) / 2 -
                SubidaTextCredits,
              TEXTCreditos.width * MultiplicadoIMG1 * 0.9,
              TEXTCreditos.height * MultiplicadoIMG1 * 0.9
            );

            image(
              TEXTCreditos,
              posIMG3,
              height +
                (TEXTCreditos.height * MultiplicadoIMG1 * 0.9) / 2 -
                SubidaTextCredits2,
              TEXTCreditos.width * MultiplicadoIMG1 * 0.9,
              TEXTCreditos.height * MultiplicadoIMG1 * 0.9
            );
          }

          rect(width * 0.4, 0, width * 0.2, height * 0.1);

          rect(width * 0.4, height * 0.9, width * 0.2, height * 0.1);

          image(
            IG13,
            posIMG3,
            height / 2,
            IG5.width * MultiplicadoIMG1,
            IG5.height * MultiplicadoIMG1
          );
        }
      } else if (posicionIMG == 14 && posicionIMGini == 14) {
        //DuckBlings

        if (OpacidadAllIcons == 400) {
          MusicDuckBlings.play();
        }
      } else if (posicionIMG == 15 && posicionIMGini == 15) {
        //DuckBusters

        if (OpacidadAllIcons == 400) {
          MusicDuckBusters.play();
        }
      } else if (posicionIMG == 0 && posicionIMGini == 0) {
        //DuckTris

        if (OpacidadAllIcons == 400) {
          MusicDuckTris.play();
        }
      } else if (posicionIMG == 1 && posicionIMGini == 1) {
        //JustDance

        if (OpacidadAllIcons >= 800) {
          if (!audioCargando) {
            // Solo cargar un nuevo audio si no se está cargando uno
            let ref = database.ref("Proyectores/AudioJustDanceSV");

            ref.once("value", (snapshot) => {
              // Obtener el valor UNA SOLA VEZ
              let PistaAudio = snapshot.val(); // Guardar el número de pista

              // Reiniciar el contador si llega a 79
              if (PistaAudio === 79) {
                PistaAudio = 1; // Reiniciar el contador a 1
              } else {
                PistaAudio += 1; // Incrementar el valor de la pista
              }

              // Actualizar la base de datos con el nuevo valor de pista
              ref.set(PistaAudio);

              // Crear la URL del audio
              let urlAudio =
                "https://raw.githubusercontent.com/AdrianNF2005/San-Valero-Projectors/main/ASSETS%20PROYECTORES/Canciones30Seg/" +
                PistaAudio +
                ".mp3";

              // Marcar como audio cargando
              audioCargando = true;

              // Cargar y reproducir el sonido solo cuando esté listo
              loadSound(
                urlAudio,
                (nuevoSonido) => {
                  // Asegurarse de no tener múltiples instancias de sonido
                  if (sonido) {
                    sonido.stop(); // Detener cualquier audio que estuviera sonando
                  }

                  sonido = nuevoSonido; // Asignar el nuevo sonido cargado
                  sonido.play();
                  VIDEOJustDanceSV.play();

                  // Aquí sabemos que el sonido ha comenzado a reproducirse
                  let audioInterval = setInterval(() => {
                    if (URLOpened == false) {
                      if (!sonido.isPlaying()) {
                        OpacidadAllIcons = 795; // Cambiar el valor cuando el audio termine

                        // Detener el intervalo después de que el audio termine
                        clearInterval(audioInterval);

                        // Marcar que el audio ha terminado y permitir cargar el siguiente
                        audioCargando = false;
                      }
                    }
                  }, 100); // Verifica cada 100ms si el sonido está en reproducción
                },
                (err) => {
                  console.error("Error al cargar el audio:", err);
                  audioCargando = false; // Si ocurre un error, liberamos el flag
                }
              );
            });
          }

          if (
            OpacidadAllIcons >= 800 &&
            VIDEOJustDanceSV.time() < VIDEOJustDanceSV.duration()
          ) {
            image(
              VIDEOJustDanceSV,
              posIMG3,
              height / 2,
              IG5.width * MultiplicadoIMG1 * 0.8,
              IG5.height * MultiplicadoIMG1 * 0.8
            );
            push();
            rectMode(CENTER);
            fill(0, 100);
            noStroke();
            rect(
              posIMG3,
              height / 2,
              IG5.width * MultiplicadoIMG1 * 0.8,
              IG5.height * MultiplicadoIMG1 * 0.8
            );
            pop();
            image(
              VIDEOJustDanceSV,
              posIMG3,
              height / 2,
              IG5.width * MultiplicadoIMG1 * 0.68,
              IG5.height * MultiplicadoIMG1 * 0.68
            );
            image(
              BorderVideo,
              posIMG3,
              height / 2,
              IG5.width * MultiplicadoIMG1,
              IG5.height * MultiplicadoIMG1
            );
          }
        }
      }

      image(
        Leyenda,
        map(sin(FloatLeyenda), 0, 1, -Leyenda.width * 0.8, width * 0.14),
        height * 0.78,
        Leyenda.width * 0.8,
        Leyenda.height * 0.8
      );

      push();

      if (OpacidadAllIcons <= 255) {
        tint(255, OpacidadAllIcons);
      }

      let Rows = 1;

      if (NUser == 6) {
        Rows = 2;
        NUser = 3;
      }

      if (NUser == 8) {
        Rows = 2;
        NUser = 4;
      }

      for (let BarRows = 1; BarRows <= Rows; BarRows++) {
        for (let ShowUser = 0; ShowUser < NUser; ShowUser++) {
          if (RecomendadoIcon == 1) {
            image(
              UserIcon,
              width * 0.89 -
                width * (0.015 * NUser * 1.5) +
                ShowUser * width * 0.05,
              height * 0.795 + height * 0.08 * BarRows,
              UserIcon.width * 0.22,
              UserIcon.height * 0.22
            );
          } else {
            image(
              UserIcon,
              width * 0.522 -
                width * (0.015 * NUser * 1.5) +
                ShowUser * width * 0.05,
              height * 0.795 + height * 0.08 * BarRows,
              UserIcon.width * 0.22,
              UserIcon.height * 0.22
            );
          }
        }
      }

      //fill(0, 255 - OpacidadAllIcons);
      //noStroke();
      //rectMode(CENTER, CENTER);
      //rect(width*0.93, height*0.09, DataShare.width*0.18, DataShare.height*0.18);
      //rect(width*0.5, height*0.12, GameSV.width*0.4, GameSV.height*0.4, 30);
      //rect(width*0.5, height*0.9, Recomendado.width*0.17, Recomendado.height*0.17, 30);
      //rect(width*0.16, height*0.16, SVOnline.width*0.3, SVOnline.height*0.3, 50);

      pop();

      image(
        GameSystem,
        width * 0.18,
        height * 0.04,
        GameSystem.width * 0.48,
        GameSystem.height * 0.48
      );

      if (OpacidadAllIcons >= 200) {
        if (DataShareIcon == 1) {
          image(
            DataShare,
            width * 0.93,
            height * 0.09,
            DataShare.width * 0.18,
            DataShare.height * 0.18
          );
        }

        if (JuegoSVIcon == 1) {
          image(
            GameSV,
            width * 0.5,
            height * 0.1,
            GameSV.width * 0.4,
            GameSV.height * 0.4
          );
        }

        if (RecomendadoIcon == 1) {
          image(
            Recomendado,
            width * 0.5,
            height * 0.91,
            Recomendado.width * 0.17 +
              map(
                sin(frameCount * 0.04),
                -1,
                1,
                -Recomendado.width * 0.006,
                Recomendado.width * 0.006
              ),
            Recomendado.height * 0.17 +
              map(
                sin(frameCount * 0.04),
                -1,
                1,
                -Recomendado.height * 0.006,
                Recomendado.height * 0.006
              )
          );
        }

        if (SVOnlineIcon == 1) {
          image(
            SVOnline,
            width * 0.16,
            height * 0.16,
            SVOnline.width * 0.3 +
              map(
                sin(frameCount * 0.06),
                -1,
                1,
                -SVOnline.width * 0.006,
                SVOnline.width * 0.006
              ),
            SVOnline.height * 0.3 +
              map(
                sin(frameCount * 0.06),
                -1,
                1,
                -SVOnline.height * 0.006,
                SVOnline.height * 0.006
              )
          );
        }
      }

      if (FloatLeyenda < HALF_PI) {
        FloatLeyenda = FloatLeyenda + 0.01;
      }

      if (OpacidadAllIcons < 1000) {
        OpacidadAllIcons = OpacidadAllIcons + 5;
      }
      
      ref = database.ref("Proyectores/PuntoMinimoProyector" + ID_PROYECTOR);

      ref.set(round(MinYmouse));
      
      ref = database.ref("Proyectores/PuntoMaximoProyector" + ID_PROYECTOR);

      ref.set(round(MaxYmouse));

      let RangeY = round(map(mouseY, MinYmouse, MaxYmouse, 0, 100));

      if (RangeY <= 0) {
        RangeY = 0;
      }

      if (RangeY >= 100) {
        RangeY = 100;
      }
      
      

      if (MouseIndice == 1 && OpacidadAllIcons >= 1000) {
        //Seleccionar urls de juego

        if (posicionIMG == 2 && posicionIMGini == 2) {
          abrirIframe(0);
        } else if (posicionIMG == 3 && posicionIMGini == 3) {
          abrirIframe(1);
        } else if (posicionIMG == 4 && posicionIMGini == 4) {
          abrirIframe(2);
        } else if (posicionIMG == 5 && posicionIMGini == 5) {
          abrirIframe(3);
        } else if (posicionIMG == 6 && posicionIMGini == 6) {
          abrirIframe(4);
        } else if (posicionIMG == 7 && posicionIMGini == 7) {
          abrirIframe(5); 
        } else if (posicionIMG == 8 && posicionIMGini == 8) {
          abrirIframe(6);
        } else if (posicionIMG == 9 && posicionIMGini == 9) {
          abrirIframe(7);
        } else if (posicionIMG == 10 && posicionIMGini == 10) {
          abrirIframe(8);
        } else if (posicionIMG == 11 && posicionIMGini == 11) {
          abrirIframe(9);
        } else if (posicionIMG == 12 && posicionIMGini == 12) {
          abrirIframe(10);
        }
      }

      if (MouseIndice == 2) {
        if (posicionIMGini == posicionIMG) {
          TransicionIMG = -HALF_PI;

          ACTTamaño0 = Tamaño0;
          ACTTamaño1 = Tamaño1;
          ACTTamaño2 = Tamaño2;
          ACTTamaño3 = Tamaño3;
          ACTTamaño4 = Tamaño4;
          ACTTamaño5 = Tamaño5;
          ACTTamaño6 = Tamaño6;
          ACTTamaño7 = Tamaño7;
          ACTTamaño8 = Tamaño8;
          ACTTamaño9 = Tamaño9;
          ACTTamaño10 = Tamaño10;
          ACTTamaño11 = Tamaño11;
          ACTTamaño12 = Tamaño12;
          ACTTamaño13 = Tamaño13;
          ACTTamaño14 = Tamaño14;
          ACTTamaño15 = Tamaño15;

          ACTposicion0 = posicion0;
          ACTposicion1 = posicion1;
          ACTposicion2 = posicion2;
          ACTposicion3 = posicion3;
          ACTposicion4 = posicion4;
          ACTposicion5 = posicion5;
          ACTposicion6 = posicion6;
          ACTposicion7 = posicion7;
          ACTposicion8 = posicion8;
          ACTposicion9 = posicion9;
          ACTposicion10 = posicion10;
          ACTposicion11 = posicion11;
          ACTposicion12 = posicion12;
          ACTposicion13 = posicion13;
          ACTposicion14 = posicion14;
          ACTposicion15 = posicion15;

          if (posicionIMG < 15) {
            posicionIMG = posicionIMG + 1;
          } else {
            posicionIMG = 0;
          }

          OpacidadAllIcons = -400;
        }
      }

      if (posicionIMGini != posicionIMG) {
        TransicionIMG = TransicionIMG + 0.02;

        if (TransicionIMG >= HALF_PI) {
          TransicionIMG = HALF_PI;

          posicionIMGini = posicionIMG;

          VIDEO4Raya.stop();
          VIDEOAirConsole.stop();
          VIDEOBottleFlip.stop();
          VIDEODinoDuck.stop();
          VIDEODoodleJump.stop();
          VIDEODriveMad.stop();
          VIDEOFlappyDuck.stop();
          VIDEOPongSV.stop();
          VIDEORainbow.stop();
          VIDEORompeBloques.stop();
          VIDEOTapTap.stop();
          VIDEOJustDanceSV.stop();

          if (sonido) {
            sonido.stop();
          }

          if (musicaCreditos) {
            musicaCreditos.stop();
          }

          if (MusicDuckBlings) {
            MusicDuckBlings.stop();
          }

          if (MusicDuckBusters) {
            MusicDuckBusters.stop();
          }

          if (MusicDuckTris) {
            MusicDuckTris.stop();
          }

          VIDEO4Raya.volume(1);
          VIDEOAirConsole.volume(1);
          VIDEOBottleFlip.volume(1);
          VIDEODinoDuck.volume(1);
          VIDEODoodleJump.volume(1);
          VIDEODriveMad.volume(1);
          VIDEOFlappyDuck.volume(1);
          VIDEOPongSV.volume(1);
          VIDEORainbow.volume(1);
          VIDEORompeBloques.volume(1);
          VIDEOTapTap.volume(1);
          VIDEOJustDanceSV.volume(1);

          if (sonido) {
            sonido.setVolume(1);
          }

          if (musicaCreditos) {
            musicaCreditos.setVolume(1);
          }

          if (MusicDuckBlings) {
            MusicDuckBlings.setVolume(1);
          }

          if (MusicDuckBusters) {
            MusicDuckBusters.setVolume(1);
          }

          if (MusicDuckTris) {
            MusicDuckTris.setVolume(1);
          }
        } else {
          VIDEO4Raya.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOAirConsole.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOBottleFlip.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEODinoDuck.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEODoodleJump.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEODriveMad.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOFlappyDuck.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOPongSV.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEORainbow.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEORompeBloques.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOTapTap.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          VIDEOJustDanceSV.volume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));

          if (sonido) {
            sonido.setVolume(map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0));
          }

          if (musicaCreditos) {
            musicaCreditos.setVolume(
              map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0)
            );
          }

          if (MusicDuckBlings) {
            MusicDuckBlings.setVolume(
              map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0)
            );
          }

          if (MusicDuckBusters) {
            MusicDuckBusters.setVolume(
              map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0)
            );
          }

          if (MusicDuckTris) {
            MusicDuckTris.setVolume(
              map(TransicionIMG, -HALF_PI, HALF_PI, 1, 0)
            );
          }
        }

        BACTposicion0 = map(sin(TransicionIMG), -1, 1, ACTTamaño0, Tamaño0);
        BACTposicion1 = map(sin(TransicionIMG), -1, 1, ACTTamaño1, Tamaño1);
        BACTposicion2 = map(sin(TransicionIMG), -1, 1, ACTTamaño2, Tamaño2);
        BACTposicion3 = map(sin(TransicionIMG), -1, 1, ACTTamaño3, Tamaño3);
        BACTposicion4 = map(sin(TransicionIMG), -1, 1, ACTTamaño4, Tamaño4);
        BACTposicion5 = map(sin(TransicionIMG), -1, 1, ACTTamaño5, Tamaño5);
        BACTposicion6 = map(sin(TransicionIMG), -1, 1, ACTTamaño6, Tamaño6);
        BACTposicion7 = map(sin(TransicionIMG), -1, 1, ACTTamaño7, Tamaño7);
        BACTposicion8 = map(sin(TransicionIMG), -1, 1, ACTTamaño8, Tamaño8);
        BACTposicion9 = map(sin(TransicionIMG), -1, 1, ACTTamaño9, Tamaño9);
        BACTposicion10 = map(sin(TransicionIMG), -1, 1, ACTTamaño10, Tamaño10);
        BACTposicion11 = map(sin(TransicionIMG), -1, 1, ACTTamaño11, Tamaño11);
        BACTposicion12 = map(sin(TransicionIMG), -1, 1, ACTTamaño12, Tamaño12);
        BACTposicion13 = map(sin(TransicionIMG), -1, 1, ACTTamaño13, Tamaño13);
        BACTposicion14 = map(sin(TransicionIMG), -1, 1, ACTTamaño14, Tamaño14);
        BACTposicion15 = map(sin(TransicionIMG), -1, 1, ACTTamaño15, Tamaño15);

        BACTTamaño0 = map(sin(TransicionIMG), -1, 1, ACTposicion0, posicion0);
        BACTTamaño1 = map(sin(TransicionIMG), -1, 1, ACTposicion1, posicion1);
        BACTTamaño2 = map(sin(TransicionIMG), -1, 1, ACTposicion2, posicion2);
        BACTTamaño3 = map(sin(TransicionIMG), -1, 1, ACTposicion3, posicion3);
        BACTTamaño4 = map(sin(TransicionIMG), -1, 1, ACTposicion4, posicion4);
        BACTTamaño5 = map(sin(TransicionIMG), -1, 1, ACTposicion5, posicion5);
        BACTTamaño6 = map(sin(TransicionIMG), -1, 1, ACTposicion6, posicion6);
        BACTTamaño7 = map(sin(TransicionIMG), -1, 1, ACTposicion7, posicion7);
        BACTTamaño8 = map(sin(TransicionIMG), -1, 1, ACTposicion8, posicion8);
        BACTTamaño9 = map(sin(TransicionIMG), -1, 1, ACTposicion9, posicion9);
        BACTTamaño10 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion10,
          posicion10
        );
        BACTTamaño11 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion11,
          posicion11
        );
        BACTTamaño12 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion12,
          posicion12
        );
        BACTTamaño13 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion13,
          posicion13
        );
        BACTTamaño14 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion14,
          posicion14
        );
        BACTTamaño15 = map(
          sin(TransicionIMG),
          -1,
          1,
          ACTposicion15,
          posicion15
        );
      }

      if (GameOpacity > 0) {
        GameOpacity = GameOpacity - 3;

        noStroke();

        fill(0, GameOpacity);

        rect(0, 0, width, height);
      }
    }
  
  image(ARROWDER, width*0.94, height*0.5 + map(
                sin(frameCount * 0.04),
                -1,
                1,
                6,
                -6
              ), ARROWDER.width*0.8, ARROWDER.height*0.8);
  
  MouseIndice = 0;
    
  }
  
}

let smoothValue = 0; // Variable suavizada
let smoothFactor = 0.1; // Factor de suavizado (0.0 - 1.0)

function smoothVariable(targetValue) {
  smoothValue += (targetValue - smoothValue) * smoothFactor;
  return smoothValue;
}

// Función para abrir el iframe con la URL actual
function abrirIframe(indice) {
  
  push();
  noStroke();
  fill(0);
  stroke(0);
  rectMode(CENTER)
  rect(width/2, height/2, width, height);
  pop();
  
  if (URLOpened == false) {
    
    ref = database.ref("Proyectores/Proyector" + ID_PROYECTOR + "JuegoSel");
    ref.set(indice);
    
    JuegoSeleccionadoData = indice;
    
    /*Object.defineProperty(navigator, "userAgent", {
            get: function () {
                return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36";
            } 
    });*/
    
    let url = urls[indice]; // Selecciona la URL actual
    let iframe = createElement("iframe");
iframe.attribute("src", url);
iframe.attribute("width", "100%");
iframe.attribute("height", "100%");
iframe.position(-1, -1);  // Esto asegura que el iframe comience desde la esquina superior izquierda
    URLOpened = true;
    
  }

  VIDEO4Raya.stop();
  VIDEOAirConsole.stop();
  VIDEOBottleFlip.stop();
  VIDEODinoDuck.stop();
  VIDEODoodleJump.stop();
  VIDEODriveMad.stop();
  VIDEOFlappyDuck.stop();
  VIDEOPongSV.stop();
  VIDEORainbow.stop();
  VIDEORompeBloques.stop();
  VIDEOTapTap.stop();
  VIDEOJustDanceSV.stop();

  if (sonido) {
    sonido.stop();
  }

  if (musicaCreditos) {
    musicaCreditos.stop();
  }

  if (MusicDuckBlings) {
    MusicDuckBlings.stop();
  }

  if (MusicDuckBusters) {
    MusicDuckBusters.stop();
  }

  if (MusicDuckTris) {
    MusicDuckTris.stop();
  }

  VIDEO4Raya.volume(1);
  VIDEOAirConsole.volume(1);
  VIDEOBottleFlip.volume(1);
  VIDEODinoDuck.volume(1);
  VIDEODoodleJump.volume(1);
  VIDEODriveMad.volume(1);
  VIDEOFlappyDuck.volume(1);
  VIDEOPongSV.volume(1);
  VIDEORainbow.volume(1);
  VIDEORompeBloques.volume(1);
  VIDEOTapTap.volume(1);
  VIDEOJustDanceSV.volume(1);

  if (sonido) {
    sonido.setVolume(1);
  }

  if (musicaCreditos) {
    musicaCreditos.setVolume(1);
  }

  if (MusicDuckBlings) {
    MusicDuckBlings.setVolume(1);
  }

  if (MusicDuckBusters) {
    MusicDuckBusters.setVolume(1);
  }

  if (MusicDuckTris) {
    MusicDuckTris.setVolume(1);
  }
}

// Función para cerrar el iframe
function cerrarIframe() {
  if (iframe) {
    iframe.remove(); // Elimina el iframe del DOM
    URLOpened = false; // Permitir abrirlo nuevamente
    VolverActualizarDatos = true;
    ref = database.ref("Proyectores/Proyector" + ID_PROYECTOR + "JuegoSel");
    ref.set(-2);
  }
}

function windowResized() {
  
  if (!isMobileDevice()) {
  
  let scaleFactor = Math.min(windowWidth / 1280, windowHeight / 720);
  let canvasElement = document.querySelector("canvas");
  canvasElement.style.transform = `scale(${scaleFactor})`;
    
  }
  
}

function mousePressed() {
     
    if (dist(mouseX, mouseY, width*0.85, height*0.5 + map(
                sin(frameCount * 0.04),
                -1,
                1,
                6,
                -6
              )) <= ARROWDER.width*1) {
        
      MouseIndice = 2;
        
    } else {
      
      MouseIndice = 1;
      
    } 
  
}


function isMobileDevice() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function clampTextSize(w) {
  return constrain(w * 0.045, 16, 40); // Tamaño de texto adaptable
}

function mousePressed() {
  if (isMobileDevice()) {
    if (document.hasFocus()) {
      navigator.clipboard.writeText(miURL)
        .then(() => {
          mostrarMensaje = true;
          mensajeInicio = millis();
        })
        .catch(err => {
          console.error("Error al copiar:", err);
        });
    } else {
      console.warn("Documento sin foco, no se puede copiar.");
    }
  
  if (navigator.share) {
    navigator.share({
      title: "Juegos SV",
      text: "¡Juega a todos los juegos de San Valero creados por AdriánNF y más usando el siguiente enlace!",
      url: miURL
    }).then(() => {
      console.log("Compartido con éxito");
    }).catch(err => {
      console.warn("No se pudo compartir:", err);
    });
  } else {
    // Fallback si no soporta share (copiar al portapapeles por ejemplo)
    navigator.clipboard.writeText(miURL)
      .then(() => {
        navigator.vibrate?.(100);
        mostrarMensaje = true;
        mensajeInicio = millis();
      });
  }
  }
}
