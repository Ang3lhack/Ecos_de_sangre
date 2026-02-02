/**
 * Ecos de Sangre - Lógica Interactiva
 */

const poems = [
    {
        title: "Aceite y Sangre",
        author: "William Butler Yeats",
        es: `En tumbas de oro y lapislázuli\ncadáveres de santos y santas exudan\naceite milagroso, fragancia de violeta.\n\nPero bajo los pesados túmulos de pisoteada arcilla\nyacen cuerpos de vampiros pletóricos de sangre;\nsus mortajas están ensangrentadas y sus labios, húmedos.`,
        original: `In tombs of gold and lapis lazuli\nBodies of holy men and women exude\nMiraculous oil, odour of violet.\n\nBut under heavy loads of trampled clay\nLie bodies of the vampires full of blood;\nTheir shrouds are bloody and their lips are wet.`,
        langLabel: "ENGLISH"
    },
    {
        title: "Amor y Sueño",
        author: "Algernon Charles Swinburne",
        es: `Tendida y dormida entre caricias nocturnas\nvi a mi amor inclinarse sobre mi triste lecho,\npálida como el fruto y la hoja del lirio más oscuro,\nrasa, despojada y sombría, con el cuello desnudo, listo para ser mordido,\ndemasiado blanca para el rubor y demasiado ardiente para estar inmaculada,\npero del color perfecto, ausente de blanco y rojo.\n\nY sus labios se entreabrieron tiernamente, y dijo\n-en una sola palabra- placer.\nY toda su cara era miel para mi boca,\ny todo su cuerpo era alimento para mis ojos;\nSus largos y aéreos brazos y sus manos más ardientes que el fuego\nsus extremidades palpitando, el olor de su cabello austral.`,
        original: `Lying asleep between the strokes of night\nI saw my love lean over my sad bed,\nPale as the duskiest lily's leaf or head,\nSmooth-skinned and dark, with bare throat made to bite,\nToo wan for blushing and too warm for white,\nBut perfect-coloured without white or red.\n\nAnd her lips opened amorously, and said -\nI wist not what, saving one word - Delight.\nAnd all her face was honey to my mouth,\nAnd all her body pasture to mine eyes;\nThe long lithe arms and hotter hands than fire,\nThe quivering flanks, hair smelling of the south.`,
        langLabel: "ENGLISH"
    },
    {
        title: "Boca a Boca",
        author: "Delmira Agustini",
        es: `Copa de vino donde quiero y sueño\nbeber la muerte con fruición sombría,\nsurco de fuego donde logra Ensueño\nfuertes semillas de melancolía.\n\nBoca que besas a distancia y llamas\nen silencio, pastilla de locura,\ncolor de sed y húmeda de llamas...\n¡Verja de abismos es tu dentadura!\n\nJoya de sangre y luna, vaso pleno\nde rosas de silencio y de armonía,\nnectario de su miel y su veneno,\nvampiro vuelto mariposa al día.`,
        original: null, 
        langLabel: ""
    },
    {
        title: "Canción de Cuna para un Vampiro",
        author: "Lisa Ben",
        es: `Duerme profundamente en tu tumba silenciosa,\nsueña con el festín carmesí que anhelas,\nhasta que el hambre te despierte\ny debas abandonar\ntu lugar de descanso.\n\nSueña, sueña con tu furtivo vuelo\na las tierras sombrías de la noche.\nTus colmillos se encuentran con la suave carne blanca\ny regresas rejuvenecido.\nTus labios son una mancha escarlata.`,
        original: `Sleep, deep in your silent grave,\nDream of the crimson feast you crave,\n'Til hunger bids you wake\nAnd you must forsake\nThe place where you have lain.\n\nDream, dream of your stealthy flight\nInto the shadowlands of the night.\nSharp fangs meet soft white flesh\nAnd you return refreshed.\nYour lips a scarlet stain.`,
        langLabel: "ENGLISH"
    },
    {
        title: "El Intruso",
        author: "Margaret Stavely",
        es: `Pienso, mientras me siento aquí y escribo,\nque algo se ha deslizado detrás de mi espalda\npara leer mis palabras, algo negro,\nmalvado, una parte de la noche.\n\nNo me volveré, porque podría ver su rostro,\ny, sabiendo lo que es,\nparte de mí sería suya.`,
        original: `I think, as I sit here and write,\nThat something has sneaked behind my back\nTo read my words, something black,\nEvil, and a part of the night.\nI will not turn, for I might see\nHis face, and knowing what he is\nAt last trade part of me for what is his.`,
        langLabel: "ENGLISH"
    },
    {
        title: "El Vampiro",
        author: "Charles Baudelaire",
        es: `Tú que como una cuchillada\nentraste en mi triste pecho,\ntú que, fuerte cual un rebaño\nde demonios, viniste, loca,\na hacer tu lecho y tu dominio\nen mi espíritu humillado.\n\n-Infame a quien estoy unido\ncomo a su cadena el galeote,\ncomo al juego el jugador,\ncomo a la botella el borracho\ncomo al gusano la carroña,\n-imaldita seas, maldita!`,
        original: `Toi qui, comme un coup de couteau,\nDans mon coeur plaintif es entrée;\nToi qui, forte comme un troupeau\nDe démons, vins, folle et parée,\nDe mon esprit humilié\nFaire ton lit et ton domaine;\n\n-Infâme à qui je suis lié\nComme le forçat à la chaîne,\nComme au jeu le joueur têtu,\nComme à la bouteille l'ivrogne,\nComme aux vermines la charogne\n-Maudite, maudite sois-tu!`,
        langLabel: "FRANÇAIS"
    },
    {
        title: "El Vampiro (II)",
        author: "Delmira Agustini",
        es: `En el regazo de la tarde triste\nyo invoqué tu dolor... Sentirlo era\nSentirte el corazón!\n\nPalideciste\nhasta la voz, tus párpados de cera\nBajaron...y callaste...Pareciste\noír pasar la muerte... Yo que abriera\ntu herida mordí en ella ¿Me sentiste?-\n¡Como en el oro de un panal mordiera!`,
        original: null,
        langLabel: ""
    },
    {
        title: "Embrujada",
        author: "Amy Lowell",
        es: `¡Mira! Él arrastra los dedos de los pies\nbajo los largos rayos de la luna,\ny las uñas de sus dedos brillan;\ndestellan y arañan entre las copas de los árboles.\nSus labios succionan mi ventana abierta,\nsu aliento se desliza por mi cuerpo\nse acumula en charcos bajo mis rodillas.`,
        original: `See! He trails his toes\nThrough the long streaks of moonlight,\nAnd the nails of his fingers glitter;\nThey claw and flash among the tree-tops.\nHis lips suck at my open window,\nAnd his breath creeps about my body\nAnd lies in pools under my knees.`,
        langLabel: "ENGLISH"
    }
];

let currentIndex = 0;
let currentLang = 'es'; // 'es' o 'original'
let autoRotateTimer = null;
let switchLangTimer = null;

// Selectores DOM
const domTitle = document.getElementById('poem-title');
const domAuthor = document.getElementById('poem-author');
const domText = document.getElementById('poem-text');
const btnLang = document.getElementById('lang-toggle'); // Botón de idioma
const domDisplay = document.getElementById('poem-display');
const listContainer = document.getElementById('poem-list');
const listContainerMobile = document.getElementById('mobile-poem-list');
const audio = document.getElementById('bg-music');
const welcomeOverlay = document.getElementById('welcome-overlay');

const TIME_READING = 40000; // 40 segs lectura por defecto

function init() {
    renderSidebar();
    loadPoem(0);

    // CONFIGURACIÓN DE AUDIO Y ENTRADA
    const enterBtn = document.getElementById('enter-btn');
    enterBtn.addEventListener('click', () => {
        // 1. Iniciar Audio
        audio.volume = 0.5;
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                console.log("Audio iniciado correctamente.");
            }).catch(error => {
                console.log("Autoplay bloqueado, se necesita interacción.", error);
            });
        }

        // 2. Ocultar Overlay
        welcomeOverlay.style.opacity = '0';
        welcomeOverlay.style.visibility = 'hidden';
        
        // 3. Iniciar timers
        resetTimers();
    });

    // Botones de Navegación
    document.getElementById('next-btn').addEventListener('click', () => {
        nextPoem();
        resetTimers();
    });
    document.getElementById('prev-btn').addEventListener('click', () => {
        prevPoem();
        resetTimers();
    });

    // Botón de cambio de idioma manual
    btnLang.addEventListener('click', manualToggleLanguage);
}

// Renderizado Sidebar
function renderSidebar() {
    listContainer.innerHTML = '';
    listContainerMobile.innerHTML = '';

    poems.forEach((poem, index) => {
        const item = document.createElement('button');
        item.className = `list-group-item list-group-item-action ${index === 0 ? 'active' : ''}`;
        item.innerText = poem.title;
        item.onclick = () => {
            loadPoem(index);
            resetTimers();
            // Cerrar menú móvil si está abierto
            const offcanvasEl = document.getElementById('offcanvasSidebar');
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if(offcanvas) offcanvas.hide();
        };
        listContainer.appendChild(item);
        
        // Clon para menú móvil
        const itemMob = item.cloneNode(true);
        itemMob.onclick = item.onclick;
        listContainerMobile.appendChild(itemMob);
    });
}

function updateSidebarActive() {
    const items = listContainer.children;
    const itemsMob = listContainerMobile.children;
    for(let i=0; i<items.length; i++) {
        if(i === currentIndex) {
            items[i].classList.add('active');
            itemsMob[i].classList.add('active');
        } else {
            items[i].classList.remove('active');
            itemsMob[i].classList.remove('active');
        }
    }
}

// Cargar Poema
function loadPoem(index) {
    currentIndex = index;
    currentLang = 'es'; // Reset a español al cambiar de poema
    updateSidebarActive();
    renderContent(true); // true = con animación
}

function renderContent(animate = false) {
    const poem = poems[currentIndex];
    
    // Función interna para actualizar el DOM
    const updateDOM = () => {
        domTitle.innerText = poem.title;
        domAuthor.innerText = poem.author;
        
        if (currentLang === 'es') {
            domText.innerText = poem.es;
            btnLang.innerText = "VERSIÓN ORIGINAL";
            btnLang.classList.remove('btn-light');
            btnLang.classList.add('btn-outline-secondary');
        } else {
            domText.innerText = poem.original || poem.es;
            btnLang.innerText = "VOLVER A ESPAÑOL (" + (poem.langLabel || "ORIGINAL") + ")";
            btnLang.classList.remove('btn-outline-secondary');
            btnLang.classList.add('btn-light'); // Resaltar botón en modo original
        }

        // Si no tiene traducción, ocultar botón
        if (!poem.original) {
            btnLang.style.display = 'none';
        } else {
            btnLang.style.display = 'inline-block';
        }
    };

    if (animate) {
        domDisplay.classList.remove('fade-in');
        domDisplay.classList.add('fade-out');
        setTimeout(() => {
            updateDOM();
            domDisplay.classList.remove('fade-out');
            domDisplay.classList.add('fade-in');
        }, 500);
    } else {
        updateDOM();
    }
}

// Cambio Manual de Idioma
function manualToggleLanguage() {
    const poem = poems[currentIndex];
    if (!poem.original) return;

    // Alternar estado
    currentLang = (currentLang === 'es') ? 'original' : 'es';
    
    // Renderizar sin fade largo (cambio rápido)
    renderContent(false);
    
    // Reiniciar temporizador para no cambiar automáticamente de inmediato
    resetTimers();
}

// Sistema de Rotación Automática
function startAutoRotation() {
    // Timer 1: Cambiar idioma a la mitad del tiempo
    switchLangTimer = setTimeout(() => {
        const poem = poems[currentIndex];
        if (poem.original && currentLang === 'es') {
            currentLang = 'original';
            renderContent(true);
        }
    }, TIME_READING);

    // Timer 2: Cambiar al siguiente poema al final del tiempo
    autoRotateTimer = setTimeout(() => {
        nextPoem();
        resetTimers(); // Reinicia el ciclo
    }, TIME_READING * 2);
}

function resetTimers() {
    clearTimeout(switchLangTimer);
    clearTimeout(autoRotateTimer);
    startAutoRotation();
}

function nextPoem() {
    let nextIndex = (currentIndex + 1) % poems.length;
    loadPoem(nextIndex);
}

function prevPoem() {
    let prevIndex = (currentIndex - 1 + poems.length) % poems.length;
    loadPoem(prevIndex);
}

// Arrancar al cargar la página
window.onload = init;