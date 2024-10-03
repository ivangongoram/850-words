let currentWordIndex = 0;
let correctAnswerIndex = 0;
let correctAnswer;
let cout = 0;

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function loadNewWord() {
    const currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("word").textContent = currentWord.word;
    correctAnswer = currentWord.translate;

    document.getElementById("contador").textContent = "Counter: "+cout;
    document.getElementById("category").textContent = "Category: "+currentWord.category + " - " + currentWord.subcategory;

    const options = shuffleArray([
        currentWord.translate,
        ...shuffleArray(words)
            .slice(0, 3)
            .map(word => word.translate)
    ]);

    correctAnswerIndex = options.indexOf(currentWord.translate);
    document.querySelectorAll(".option").forEach((button, index) => {
        button.textContent = options[index];
    });

    document.getElementById("result").textContent = "";
    document.getElementById("answer").textContent = "";
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === correctAnswerIndex) {
        document.getElementById("result").textContent = "Correcto!";
        cout++;
        setTimeout(loadNewWord, 500);
    } else {
        document.getElementById("result").textContent = "Incorrecto, inténtalo de nuevo.";
        document.getElementById("answer").textContent = correctAnswer;
        cout = 0;
        setTimeout(loadNewWord, 2000);
    }
}

window.onload = loadNewWord;

const words = [
    {
        "word": "AWAKE",
        "translate": "DESPIERTO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "BAD",
        "translate": "MALO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "BENT",
        "translate": "DOBLADO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "BITTER",
        "translate": "AMARGO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "BLUE",
        "translate": "AZUL",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "CERTAIN",
        "translate": "CIERTO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "COLD",
        "translate": "FRÍO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "COMPLETE",
        "translate": "COMPLETO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "CRUEL",
        "translate": "CRUEL",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "DARK",
        "translate": "OSCURO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "DEAD",
        "translate": "MUERTO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "DEAR",
        "translate": "QUERIDO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "DELICATE",
        "translate": "DELICADO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "DIFFERENT",
        "translate": "DIFERENTE",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "DIRTY",
        "translate": "SUCIO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "DRY",
        "translate": "SECO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "FALSE",
        "translate": "FALSO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "FEEBLE",
        "translate": "DÉBIL",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "FEMALE",
        "translate": "FEMENINO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "FOOLISH",
        "translate": "TONTOS",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "FUTURE",
        "translate": "FUTURO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "GREEN",
        "translate": "VERDE",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "ILL",
        "translate": "ENFERMO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "LAST",
        "translate": "ÚLTIMO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "LATE",
        "translate": "TARDE",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "LEFT",
        "translate": "IZQUIERDO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "LOOSE",
        "translate": "SUELTO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "LOUD",
        "translate": "RUIDOSO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "LOW",
        "translate": "BAJO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "MIXED",
        "translate": "MEZCLADO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "NARROW",
        "translate": "ESTRECHO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "OLD",
        "translate": "VIEJO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "OPPOSITE",
        "translate": "OPUESTO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "PUBLIC",
        "translate": "PÚBLICO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "ROUGH",
        "translate": "ÁSPERO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SAD",
        "translate": "TRISTE",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SAFE",
        "translate": "SEGURO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SECRET",
        "translate": "SECRETO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SHORT",
        "translate": "CORTO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SHUT",
        "translate": "CERRADO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SIMPLE",
        "translate": "SIMPLE",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SLOW",
        "translate": "LENTO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SMALL",
        "translate": "PEQUEÑO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SOFT",
        "translate": "SUAVE",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SOLID",
        "translate": "SÓLIDO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "SPECIAL",
        "translate": "ESPECIAL",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "STRANGE",
        "translate": "RARO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "THIN",
        "translate": "DELGADO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "WHITE",
        "translate": "BLANCO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "WRONG",
        "translate": "EQUIVOCADO",
        "category": "Qualities",
        "subcategory": "Opposites"
    },
    {
        "word": "ABLE",
        "translate": "CAPAZ",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "ACID",
        "translate": "ÁCIDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "ANGRY",
        "translate": "ENOJADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "AUTOMATIC",
        "translate": "AUTOMÁTICO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "BEAUTIFUL",
        "translate": "HERMOSO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "BLACK",
        "translate": "NEGRO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "BOILING",
        "translate": "HIRVIENDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "BRIGHT",
        "translate": "BRILLANTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "BROKEN",
        "translate": "ROTO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "BROWN",
        "translate": "MARRÓN",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "CHEAP",
        "translate": "BARATO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "CHEMICAL",
        "translate": "QUÍMICO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "CHIEF",
        "translate": "PRINCIPAL",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "CLEAN",
        "translate": "LIMPIO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "CLEAR",
        "translate": "CLARO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "COMMON",
        "translate": "COMÚN",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "COMPLEX",
        "translate": "COMPLEJO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "CONSCIOUS",
        "translate": "CONSCIENTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "CUT",
        "translate": "CORTADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "DEEP",
        "translate": "PROFUNDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "DEPENDENT",
        "translate": "DEPENDIENTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "EARLY",
        "translate": "TEMPRANO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "ELASTIC",
        "translate": "ELÁSTICO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "ELECTRIC",
        "translate": "ELÉCTRICO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "EQUAL",
        "translate": "IGUAL",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "FAT",
        "translate": "GRASO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "FERTILE",
        "translate": "FÉRTIL",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "FIRST",
        "translate": "PRIMERO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "FIXED",
        "translate": "FIJO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "FLAT",
        "translate": "PLANO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "FREE",
        "translate": "LIBRE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "FREQUENT",
        "translate": "FRECUENTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "FULL",
        "translate": "LLENO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "GENERAL",
        "translate": "GENERAL",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "GOOD",
        "translate": "BUENO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "GREAT",
        "translate": "GRANDE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "GREY",
        "translate": "GRIS",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "HANGING",
        "translate": "COLGANTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "HAPPY",
        "translate": "FELIZ",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "HARD",
        "translate": "DURO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "HEALTHY",
        "translate": "SALUDABLE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "HIGH",
        "translate": "ALTO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "HOLLOW",
        "translate": "HUECO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "IMPORTANT",
        "translate": "IMPORTANTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "KIND",
        "translate": "AMABLE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "LIKE",
        "translate": "COMO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "LIVING",
        "translate": "VIVIENTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "LONG",
        "translate": "LARGO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "MALE",
        "translate": "MASCULINO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "MARRIED",
        "translate": "CASADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "MATERIAL",
        "translate": "MATERIAL",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "MEDICAL",
        "translate": "MÉDICO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "MILITARY",
        "translate": "MILITAR",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "NATURAL",
        "translate": "NATURAL",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "NECESSARY",
        "translate": "NECESARIO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "NEW",
        "translate": "NUEVO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "NORMAL",
        "translate": "NORMAL",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "OPEN",
        "translate": "ABIERTO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "PARALLEL",
        "translate": "PARALELO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "PAST",
        "translate": "PASADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "PHYSICAL",
        "translate": "FÍSICO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "POLITICAL",
        "translate": "POLÍTICO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "POOR",
        "translate": "POBRE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "POSSIBLE",
        "translate": "POSIBLE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "PRESENT",
        "translate": "PRESENTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "PRIVATE",
        "translate": "PRIVADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "PROBABLE",
        "translate": "PROBABLE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "QUICK",
        "translate": "RÁPIDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "QUIET",
        "translate": "SILENCIOSO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "READY",
        "translate": "LISTO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "RED",
        "translate": "ROJO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "REGULAR",
        "translate": "REGULAR",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "RESPONSIBLE",
        "translate": "RESPONSABLE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "RIGHT",
        "translate": "DERECHO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "ROUND",
        "translate": "REDONDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "SAME",
        "translate": "MISMO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "SECOND",
        "translate": "SEGUNDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "SEPARATE",
        "translate": "SEPARADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "SERIOUS",
        "translate": "SERIO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "SHARP",
        "translate": "AFILADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "SMOOTH",
        "translate": "SUAVE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "STICKY",
        "translate": "PEGAJOSO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "STIFF",
        "translate": "RÍGIDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "STRAIGHT",
        "translate": "RECTO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "STRONG",
        "translate": "FUERTE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "SUDDEN",
        "translate": "SÚBITO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "SWEET",
        "translate": "DULCE",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "TALL",
        "translate": "ALTO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "THICK",
        "translate": "GRUESO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "TIGHT",
        "translate": "AJUSTADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "TIRED",
        "translate": "CANSADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "TRUE",
        "translate": "VERDADERO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "VIOLENT",
        "translate": "VIOLENTO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "WAITING",
        "translate": "ESPERANDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "WARM",
        "translate": "CÁLIDO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "WET",
        "translate": "MOJADO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "WIDE",
        "translate": "ANCHO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "WISE",
        "translate": "SABIO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "YELLOW",
        "translate": "AMARILLO",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "YOUNG",
        "translate": "JOVEN",
        "category": "Qualities",
        "subcategory": "General"
    },
    {
        "word": "APPLE",
        "translate": "MANZANA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ARCH",
        "translate": "ARCO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ARM",
        "translate": "BRAZO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ANGLE",
        "translate": "ÁNGULO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "KNEE",
        "translate": "RODILLA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ANT",
        "translate": "HORMIGA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "KNIFE",
        "translate": "CUCHILLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "KNOT",
        "translate": "NUDO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "LEAR",
        "translate": "APRENDER",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ARMY",
        "translate": "EJÉRCITO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "LEG",
        "translate": "PIERNA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BABY",
        "translate": "BEBÉ",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "LIBRARY",
        "translate": "BIBLIOTECA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "LINE",
        "translate": "LÍNEA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "LIP",
        "translate": "LABIO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BAG",
        "translate": "BOLSA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BALL",
        "translate": "PELOTA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BAND",
        "translate": "BANDA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BASIN",
        "translate": "LAVABO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "LOCK",
        "translate": "CERRADURA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "MAP",
        "translate": "MAPA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "MATCH",
        "translate": "FOSFORO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BASKET",
        "translate": "CESTA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "MONKEY",
        "translate": "MONO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BATH",
        "translate": "BAÑO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "MOON",
        "translate": "LUNA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BED",
        "translate": "CAMA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "MOUTH",
        "translate": "BOCA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BEE",
        "translate": "ABEJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BELL",
        "translate": "CAMPANA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BERRY",
        "translate": "BAYAS",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "MUSCLE",
        "translate": "MÚSCULO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "NAIL",
        "translate": "UÑA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "NECK",
        "translate": "CUELLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "NEEDLE",
        "translate": "AGUJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BIRD",
        "translate": "PÁJARO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BLADE",
        "translate": "CUCHILLA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "NERVE",
        "translate": "NERVIO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "NET",
        "translate": "RED",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BOARD",
        "translate": "TABLERO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BOAT",
        "translate": "BOTE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BONE",
        "translate": "HUESO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "NOSE",
        "translate": "NARIZ",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "NUT",
        "translate": "NUEZ",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BOOK",
        "translate": "LIBRO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "OFFICE",
        "translate": "OFICINA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BOOT",
        "translate": "BOTA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ORANGE",
        "translate": "NARANJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BOTTLE",
        "translate": "BOTELLA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "OVEN",
        "translate": "HORNO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BOX",
        "translate": "CAJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BOY",
        "translate": "CHICO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PARCEL",
        "translate": "PAQUETE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PEN",
        "translate": "PLUMA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BRAIN",
        "translate": "CEREBRO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PENCIL",
        "translate": "LÁPIZ",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BRAKE",
        "translate": "FRENAR",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PICTURE",
        "translate": "IMAGEN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BRANCH",
        "translate": "RAMA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PIG",
        "translate": "CERDO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BRICK",
        "translate": "LADRILLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PIN",
        "translate": "CLAVO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BRIDGE",
        "translate": "PUENTE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PIPE",
        "translate": "TUBO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BRUSH",
        "translate": "CEPILLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PLANE",
        "translate": "AVIÓN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BUCKET",
        "translate": "BALDE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PLATE",
        "translate": "PLATO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BULB",
        "translate": "BULBO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PLOUGH",
        "translate": "ARADO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "POCKET",
        "translate": "BOLSILLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "BUTTON",
        "translate": "BOTÓN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CAKE",
        "translate": "TORTA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "POT",
        "translate": "MACETA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CAMERA",
        "translate": "CÁMARA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CARD",
        "translate": "TARJETA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "POTATO",
        "translate": "PATATA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PRISON",
        "translate": "PRISIÓN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CARRIAGE",
        "translate": "CARRUAJE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "PUMP",
        "translate": "BOMBA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CART",
        "translate": "CARRO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CAT",
        "translate": "GATO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "RAIL",
        "translate": "RAIL",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "RAT",
        "translate": "RATA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CHAIN",
        "translate": "CADENA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CHEESE",
        "translate": "QUESO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "RECEIPT",
        "translate": "RECIBO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "RING",
        "translate": "ANILLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CHEST",
        "translate": "CAJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ROD",
        "translate": "VARA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CHIN",
        "translate": "MENTÓN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CHURCH",
        "translate": "IGLESIA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ROOF",
        "translate": "TECHO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ROOT",
        "translate": "RAÍZ",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CIRCLE",
        "translate": "CÍRCULO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CLOCK",
        "translate": "RELOJ",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SAIL",
        "translate": "VELA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SCHOOL",
        "translate": "ESCUELA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SCISSORS",
        "translate": "TIJERAS",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CLOUD",
        "translate": "NUBE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "COAT",
        "translate": "ABRIGO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SCREW",
        "translate": "TORNILLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "COLLAR",
        "translate": "COLLAR",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "COMB",
        "translate": "PEINE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SEED",
        "translate": "SEMILLA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SHEEP",
        "translate": "OVEJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CORD",
        "translate": "CORDÓN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SHELF",
        "translate": "ESTANTE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SHIP",
        "translate": "BARCO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "COW",
        "translate": "VACA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CUP",
        "translate": "TAZA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SHIRT",
        "translate": "CAMISA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CURTAIN",
        "translate": "CORTINA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "CUSHION",
        "translate": "COJÍN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SKIN",
        "translate": "PIEL",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SHOE",
        "translate": "ZAPATO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "DOG",
        "translate": "PERRO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SKIRT",
        "translate": "FALDA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "DOOR",
        "translate": "PUERTA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "DRAIN",
        "translate": "DESAGÜE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SOCK",
        "translate": "MEDIA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SNAKE",
        "translate": "SERPIENTE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "DRAWER",
        "translate": "CAJÓN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "DRESS",
        "translate": "VESTIDO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "DRESS",
        "translate": "VESTIR",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SPADE",
        "translate": "PALA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SPONGE",
        "translate": "ESPONJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "DROP",
        "translate": "GOTEA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "EAR",
        "translate": "OREJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "EGG",
        "translate": "HUEVO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ENGINE",
        "translate": "MOTOR",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "EYE",
        "translate": "OJO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FACE",
        "translate": "CARA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FARM",
        "translate": "GRANJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SPOON",
        "translate": "CUCHARA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SPRING",
        "translate": "RESORTE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SQUARE",
        "translate": "CUADRADO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STAMP",
        "translate": "SELLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STAR",
        "translate": "ESTRELLA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STATION",
        "translate": "ESTACIÓN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STEM",
        "translate": "TALO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FEATHER",
        "translate": "PLUMA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FINGER",
        "translate": "DEDO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STICK",
        "translate": "PALITO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STOCKING",
        "translate": "MEDIAS",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STOMACH",
        "translate": "ESTÓMAGO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FISH",
        "translate": "PECES",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FLAG",
        "translate": "BANDERA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FLOOR",
        "translate": "SUELO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FLY",
        "translate": "MOSCA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FOOT",
        "translate": "PIE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FORK",
        "translate": "TENEDOR",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FOWL",
        "translate": "AVE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "FRAME",
        "translate": "MARCO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "GARDEN",
        "translate": "JARDÍN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "GIRL",
        "translate": "CHICA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "GLOVE",
        "translate": "GUANTE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "GOAT",
        "translate": "CABRA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "GUN",
        "translate": "PISTOLA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HAIR",
        "translate": "CABELLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STORE",
        "translate": "TIENDA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "STREET",
        "translate": "CALLE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "SUN",
        "translate": "SOL",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TABLE",
        "translate": "MESA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TAIL",
        "translate": "COLA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "THREAD",
        "translate": "HILO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "THROAT",
        "translate": "GARGANTA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "THUMB",
        "translate": "DEDO GORDO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TICKET",
        "translate": "BOLETO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TOE",
        "translate": "DEDO DEL PIE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TONGUE",
        "translate": "LENGUA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TOOTH",
        "translate": "DIENTE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TOWN",
        "translate": "PUEBLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HAMMER",
        "translate": "MARTILLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TRAIN",
        "translate": "TREN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TRAY",
        "translate": "BANDEJA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HAND",
        "translate": "MANO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HAN",
        "translate": "HAN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HAT",
        "translate": "SOMBRERO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HEAD",
        "translate": "CABEZA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HEART",
        "translate": "CORAZÓN",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HOOK",
        "translate": "GANCHO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HORN",
        "translate": "CUERNO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HORSE",
        "translate": "CABALLO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TREE",
        "translate": "ÁRBOL",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "TROUSERS",
        "translate": "PANTALONES",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "UMBRELLA",
        "translate": "PARAGUAS",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WALL",
        "translate": "PARED",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WATCH",
        "translate": "RELOJ",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WHEEL",
        "translate": "RUEDA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HOSPITAL",
        "translate": "HOSPITAL",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "HOUSE",
        "translate": "CASA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WHIP",
        "translate": "LATIGO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WHISTLE",
        "translate": "SILBATO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ISLAND",
        "translate": "ISLA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "JEWEL",
        "translate": "JOYA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "KETTLE",
        "translate": "HERVIDOR",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "KEY",
        "translate": "LLAVE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WINDOW",
        "translate": "VENTANA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WING",
        "translate": "ALA",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WIRE",
        "translate": "ALAMBRE",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "WORM",
        "translate": "GUSANO",
        "category": "Things",
        "subcategory": "Pictured"
    },
    {
        "word": "ACCOUNT",
        "translate": "CUENTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ACT",
        "translate": "ACTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ADDITION",
        "translate": "ADICIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ADJUSTMENT",
        "translate": "AJUSTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ADVERTISEMENT",
        "translate": "PUBLICIDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "AGREEMENT",
        "translate": "ACUERDO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "AIR",
        "translate": "AIRE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "AMOUNT",
        "translate": "CANTIDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EVENT",
        "translate": "EVENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EDUCATION",
        "translate": "EDUCACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "METAL",
        "translate": "METALES",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EFFECT",
        "translate": "EFECTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MIDDLE",
        "translate": "MEDIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SENSE",
        "translate": "SENTIDO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SERVANT",
        "translate": "SIRVIENTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "END",
        "translate": "FIN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MILK",
        "translate": "LECHE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MIND",
        "translate": "MENTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SEX",
        "translate": "SEXO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SHADE",
        "translate": "SOMBRA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ERROR",
        "translate": "ERROR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MINE",
        "translate": "MIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SHAKE",
        "translate": "SACUDIDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EXAMPLE",
        "translate": "EJEMPLO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EXCHANGE",
        "translate": "INTERCAMBIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MINUTE",
        "translate": "MINUTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MIST",
        "translate": "NEBLINA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SHAME",
        "translate": "VERGÜENZA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SHOCK",
        "translate": "IMPACTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EXISTENCE",
        "translate": "EXISTENCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EXPANSION",
        "translate": "EXPANSIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MONEY",
        "translate": "DINERO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SIDE",
        "translate": "LADO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SIGN",
        "translate": "SIGNO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "AMUSEMENT",
        "translate": "DIVERSION",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MONTH",
        "translate": "MES",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ANIMAL",
        "translate": "ANIMAL",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EXPERIENCE",
        "translate": "EXPERIENCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MORNING",
        "translate": "MAÑANA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SILK",
        "translate": "SEDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ANSWER",
        "translate": "RESPUESTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "APPARATUS",
        "translate": "APARATO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EXPERT",
        "translate": "EXPERTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FACT",
        "translate": "HECHO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MOTHER",
        "translate": "MADRE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SILVER",
        "translate": "PLATA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MOTION",
        "translate": "MOVIMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SISTER",
        "translate": "HERMANA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "APPROVAL",
        "translate": "APROBACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ARGUMENT",
        "translate": "ARGUMENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FALL",
        "translate": "CAÍDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FAMILY",
        "translate": "FAMILIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MOUNTAIN",
        "translate": "MONTAÑA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SIZE",
        "translate": "TAMAÑO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MOVE",
        "translate": "MOVER",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MUSIC",
        "translate": "MÚSICA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SKY",
        "translate": "CIELO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ART",
        "translate": "ARTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FATHER",
        "translate": "PADRE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SLEEP",
        "translate": "SUEÑO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ATTACK",
        "translate": "ATAQUE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ATTEMPT",
        "translate": "INTENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FEAR",
        "translate": "MIEDO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "NAME",
        "translate": "NOMBRE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "NATION",
        "translate": "NACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SLIP",
        "translate": "RESBALÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FEELING",
        "translate": "SENTIMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FICTION",
        "translate": "FICCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SLOPE",
        "translate": "INCLINACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ATTENTION",
        "translate": "ATENCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "NEED",
        "translate": "NECESIDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SMASH",
        "translate": "ROMPER",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ATTRACTION",
        "translate": "ATRACCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "AUTHORITY",
        "translate": "AUTORIDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FIELD",
        "translate": "CAMPO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FIGHT",
        "translate": "PELEA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "NEWS",
        "translate": "NOTICIAS",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "NIGHT",
        "translate": "NOCHE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SMELL",
        "translate": "OLOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SMILE",
        "translate": "SONRISA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BACK",
        "translate": "ESPALDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FIRE",
        "translate": "FUEGO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "NOISE",
        "translate": "RUIDO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SMOKE",
        "translate": "HUMO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BALANCE",
        "translate": "BALANCE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FLAME",
        "translate": "LLAMA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FLIGHT",
        "translate": "VUELO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "NOTE",
        "translate": "NOTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SNEEZE",
        "translate": "ESTORNUDO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SNOW",
        "translate": "NIEVE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BASE",
        "translate": "BASE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "NUMBER",
        "translate": "NÚMERO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "OBSERVATION",
        "translate": "OBSERVACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BEHAVIOUR",
        "translate": "COMPORTAMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FLOWER",
        "translate": "FLORES",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SOAP",
        "translate": "JABÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SOCIETY",
        "translate": "SOCIEDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BELIEF",
        "translate": "CREENCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BIRTH",
        "translate": "NACIMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FOLD",
        "translate": "DOBLAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "OFFER",
        "translate": "OFERTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FOOD",
        "translate": "COMIDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "OIL",
        "translate": "ACEITE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SON",
        "translate": "HIJO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BIT",
        "translate": "TROZO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FORCE",
        "translate": "FUERZA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FORM",
        "translate": "FORMULARIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "OPERATION",
        "translate": "OPERACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SONG",
        "translate": "CANCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SORT",
        "translate": "CLASIFICAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BITE",
        "translate": "MORDIDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "OPINION",
        "translate": "OPINIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BLOOD",
        "translate": "SANGRE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FRIEND",
        "translate": "AMIGO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FRIEND",
        "translate": "AMIGO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ORDER",
        "translate": "ORDEN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SOUND",
        "translate": "SONIDO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BLOW",
        "translate": "SOPLAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FRONT",
        "translate": "FRENTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ORGANIZATION",
        "translate": "ORGANIZACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SOUP",
        "translate": "SOPA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SPACE",
        "translate": "ESPACIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BODY",
        "translate": "CUERPO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "FRUIT",
        "translate": "FRUTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ORNAMENT",
        "translate": "ORNAMENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BRASS",
        "translate": "LATÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BREAD",
        "translate": "PAN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GLASS",
        "translate": "VASO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "OWNER",
        "translate": "DUEÑO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STAGE",
        "translate": "ESCENARIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "START",
        "translate": "INICIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GOLD",
        "translate": "ORO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PAGE",
        "translate": "PÁGINA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BREATH",
        "translate": "ALIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GOVERNMENT",
        "translate": "GOBIERNO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PAIN",
        "translate": "DOLOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BROTHER",
        "translate": "HERMANO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GRAIN",
        "translate": "GRANO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GRASS",
        "translate": "HIERBA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PAINT",
        "translate": "PINTURA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PAPER",
        "translate": "PAPEL",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STATEMENT",
        "translate": "DECLARACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STEAM",
        "translate": "VAPOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STEEL",
        "translate": "ACERO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BUILDING",
        "translate": "EDIFICIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BURN",
        "translate": "QUEMAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GRIP",
        "translate": "AGARRE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PART",
        "translate": "PARTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STEP",
        "translate": "PASO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BURST",
        "translate": "EXPLOSIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GROUP",
        "translate": "GRUPO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GROWTH",
        "translate": "CRECIMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PASTE",
        "translate": "PASTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STITCH",
        "translate": "PUNTADA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STONE",
        "translate": "PIEDRA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BUSINESS",
        "translate": "NEGOCIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PAYMENT",
        "translate": "PAGO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "BUTTER",
        "translate": "MANTEQUILLA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "GUIDE",
        "translate": "GUÍA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HARBOUR",
        "translate": "PUERTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PEACE",
        "translate": "PAZ",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STOP",
        "translate": "PARAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STORY",
        "translate": "HISTORIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CANVAS",
        "translate": "LONA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CARE",
        "translate": "CUIDADO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HARMONY",
        "translate": "ARMONÍA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CALISE",
        "translate": "CALIZ",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CHALK",
        "translate": "TIZA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CHANCE",
        "translate": "OPORTUNIDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HATE",
        "translate": "ODIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HEARING",
        "translate": "AUDICIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PERSON",
        "translate": "PERSONA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PLACE",
        "translate": "LUGAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PLANT",
        "translate": "PLANTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STRETCH",
        "translate": "ESTIRAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "STRUCTURE",
        "translate": "ESTRUCTURA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PLAY",
        "translate": "JUGAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PLEASURE",
        "translate": "PLACER",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SUBSTANCE",
        "translate": "SUSTANCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HEAT",
        "translate": "CALOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HELP",
        "translate": "AYUDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SUGAR",
        "translate": "AZÚCAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CHANGE",
        "translate": "CAMBIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CLOTH",
        "translate": "TELAS",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "POINT",
        "translate": "PUNTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "POISON",
        "translate": "VENENO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SUGGESTION",
        "translate": "SUGERENCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HISTORY",
        "translate": "HISTORIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SUMMER",
        "translate": "VERANO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COAL",
        "translate": "CARBÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HOLE",
        "translate": "HOLE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HOPE",
        "translate": "ESPERANZA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "POLISH",
        "translate": "PULIR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SUPPORT",
        "translate": "APOYO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SURPRISE",
        "translate": "SORPRESA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COLOUR",
        "translate": "COLOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COMFORT",
        "translate": "CONFORT",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COMMITTEE",
        "translate": "COMITÉ",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COMPANY",
        "translate": "EMPRESA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COMPARISON",
        "translate": "COMPARACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PORTER",
        "translate": "PORTERO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HOUR",
        "translate": "HORA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "POSITION",
        "translate": "POSICIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SWIM",
        "translate": "NADAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "HUMOUR",
        "translate": "HUMOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "POWDER",
        "translate": "POLVO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SYSTEM",
        "translate": "SISTEMA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ICE",
        "translate": "HIELO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "POWER",
        "translate": "PODER",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PRICE",
        "translate": "PRECIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TALK",
        "translate": "HABLAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "IDEA",
        "translate": "IDEA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TASTE",
        "translate": "SABOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COMPETITION",
        "translate": "COMPETENCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "IMPULSE",
        "translate": "IMPULSO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "INCREASE",
        "translate": "AUMENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PRINT",
        "translate": "IMPRESIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TAX",
        "translate": "IMPUESTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CONDITION",
        "translate": "CONDICIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CONNECTION",
        "translate": "CONEXIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "INDUSTRY",
        "translate": "INDUSTRIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PROCESS",
        "translate": "PROCESO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TEACHING",
        "translate": "ENSEÑANZA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PRODUCE",
        "translate": "PRODUCIR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TENDENCY",
        "translate": "TENDENCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CONTROL",
        "translate": "CONTROL",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "INK",
        "translate": "TINTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PROFIT",
        "translate": "GANANCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TEST",
        "translate": "PRUEBA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "THEORY",
        "translate": "TEORÍA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COOK",
        "translate": "COCINAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "INSECT",
        "translate": "INSECTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PROPERTY",
        "translate": "PROPIEDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COPPER",
        "translate": "COBRE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "INSTRUMENT",
        "translate": "INSTRUMENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PROSE",
        "translate": "PROSA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "THING",
        "translate": "COSA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COPY",
        "translate": "COPIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CORK",
        "translate": "CORCHO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "INSURANCE",
        "translate": "SEGURO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PROTEST",
        "translate": "PROTESTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PULL",
        "translate": "JALAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "THOUGHT",
        "translate": "PENSAMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "THUNDER",
        "translate": "TRUENO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "INTEREST",
        "translate": "INTERÉS",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COTTON",
        "translate": "ALGODÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "INVENTION",
        "translate": "INVENCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PUNISHMENT",
        "translate": "CASTIGO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PURPOSE",
        "translate": "PROPÓSITO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TIME",
        "translate": "TIEMPO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COUGH",
        "translate": "TOS",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COUNTRY",
        "translate": "PAÍS",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "IRON",
        "translate": "HIERRO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COVER",
        "translate": "CUBRIR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "JELLY",
        "translate": "GELATINA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "JOIN",
        "translate": "UNIR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "PUSH",
        "translate": "EMPUJAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "QUALITY",
        "translate": "CALIDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TIN",
        "translate": "ESTAÑO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TOP",
        "translate": "TOPE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TOUCH",
        "translate": "TOQUE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TRADE",
        "translate": "COMERCIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CRACK",
        "translate": "RUPTURA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "JOURNEY",
        "translate": "VIAJE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "QUESTION",
        "translate": "PREGUNTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CREDIT",
        "translate": "CRÉDITO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CRIME",
        "translate": "CRIMEN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "JUDGE",
        "translate": "JUEZ",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "JUMP",
        "translate": "SALTAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RAIN",
        "translate": "LLUVIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RANGE",
        "translate": "RANGO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TRANSPORT",
        "translate": "TRANSPORTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TRICK",
        "translate": "TRUCO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CRUSH",
        "translate": "APLASTAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CRY",
        "translate": "LLORAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "KICK",
        "translate": "PATADA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RATE",
        "translate": "TARIFA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TROUBLE",
        "translate": "PROBLEMA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "KISS",
        "translate": "BESO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RAY",
        "translate": "RAYO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TURN",
        "translate": "GIRO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "TWIST",
        "translate": "TORCEDURA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CURRENT",
        "translate": "CORRIENTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "CURVE",
        "translate": "CURVA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "KNOWLEDGE",
        "translate": "CONOCIMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "REACTION",
        "translate": "REACCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LAND",
        "translate": "TIERRA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "READING",
        "translate": "LECTURA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "UNIT",
        "translate": "UNIDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DAMAGE",
        "translate": "DAÑO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LANGUAGE",
        "translate": "LENGUAJE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "REASON",
        "translate": "RAZÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "USE",
        "translate": "USO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DANGER",
        "translate": "PELIGRO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DAUGHTER",
        "translate": "HIJA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DAY",
        "translate": "DÍA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DEATH",
        "translate": "MUERTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LAUGH",
        "translate": "RÍO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RECORD",
        "translate": "GRABAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "VALUE",
        "translate": "VALOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LAW",
        "translate": "LEY",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "REGRET",
        "translate": "ARREPENTIMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "VERSE",
        "translate": "VERSO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "VESSEL",
        "translate": "VASO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LEAD",
        "translate": "LIDERAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RELATION",
        "translate": "RELACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RELIGION",
        "translate": "RELIGIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LEARNING",
        "translate": "APRENDIZAJE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "VIEW",
        "translate": "VISTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DEBT",
        "translate": "DEUDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LEATHER",
        "translate": "CUERO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LETTER",
        "translate": "CARTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DECISION",
        "translate": "DECISIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "REPRESENTATIVE",
        "translate": "REPRESENTANTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "REQUEST",
        "translate": "SOLICITUD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "VOICE",
        "translate": "VOZ",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WALK",
        "translate": "CAMINAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DEGREE",
        "translate": "GRADO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LEVEL",
        "translate": "NIVEL",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RESPECT",
        "translate": "RESPETO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WAR",
        "translate": "GUERRA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DESIGN",
        "translate": "DISEÑO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LIFT",
        "translate": "LEVANTAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "REST",
        "translate": "DESCANSO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "REWARD",
        "translate": "RECOMPENSA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WASH",
        "translate": "LAVAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WASTE",
        "translate": "DESPERDICIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DESIRE",
        "translate": "DESEO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LIGHT",
        "translate": "LUZ",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DESTRUCTION",
        "translate": "DESTRUCCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LIMIT",
        "translate": "LÍMITE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RHYTHM",
        "translate": "RITMO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WATER",
        "translate": "AGUA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DETAIL",
        "translate": "DETALLE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LINEN",
        "translate": "LINO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RICE",
        "translate": "ARROZ",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WAVE",
        "translate": "OLA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WAX",
        "translate": "CERA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DEVELOPMENT",
        "translate": "DESARROLLO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LIQUID",
        "translate": "LÍQUIDO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RIVER",
        "translate": "RÍO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DIGESTION",
        "translate": "DIGESTIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DIRECTION",
        "translate": "DIRECCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LIST",
        "translate": "LISTA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LOOK",
        "translate": "MIRAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ROAD",
        "translate": "CAMINO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WAY",
        "translate": "MANERA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WEATHER",
        "translate": "CLIMA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ROLL",
        "translate": "RODAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "ROOM",
        "translate": "HABITACIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DISCOVERY",
        "translate": "DESCUBRIMIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LOSS",
        "translate": "PÉRDIDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "LOVE",
        "translate": "AMOR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WEEK",
        "translate": "SEMANA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WEIGHT",
        "translate": "PESO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DISCUSSION",
        "translate": "DISCUSIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RUB",
        "translate": "FROTAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RULE",
        "translate": "REGLA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DISEASE",
        "translate": "ENFERMEDAD",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DISGUST",
        "translate": "ASCO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DISTANCE",
        "translate": "DISTANCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DIVISION",
        "translate": "DIVISIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DOUBT",
        "translate": "DUDAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DRINK",
        "translate": "BEBER",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MACHINE",
        "translate": "MÁQUINA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MAN",
        "translate": "HOMBRE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MANAGER",
        "translate": "GERENTE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WIND",
        "translate": "VIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "RUN",
        "translate": "Correr",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SALT",
        "translate": "SAL",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WINE",
        "translate": "VINO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WINTER",
        "translate": "INVIERNO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DISTRIBUTION",
        "translate": "DISTRIBUCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MARK",
        "translate": "MARCA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MARKET",
        "translate": "MERCADO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SAND",
        "translate": "ARENA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SCALE",
        "translate": "ESCALA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WOMAN",
        "translate": "MUJER",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WOOD",
        "translate": "MADERA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MASS",
        "translate": "MASA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MEAL",
        "translate": "COMIDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SCIENCE",
        "translate": "CIENCIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SEA",
        "translate": "MAR",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WOOL",
        "translate": "LANA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WORD",
        "translate": "PALABRA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DRIVING",
        "translate": "CONDUCCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MEASURE",
        "translate": "MEDIDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SEAT",
        "translate": "ASIENTO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SECRETARY",
        "translate": "SECRETARIO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WORK",
        "translate": "TRABAJO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "DUST",
        "translate": "POLVO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EARTH",
        "translate": "TIERRA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "EDGE",
        "translate": "BORDES",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MEAT",
        "translate": "CARNE",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WOUND",
        "translate": "HERIDA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MEETING",
        "translate": "REUNIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "MEMORY",
        "translate": "MEMORIA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SELECTION",
        "translate": "SELECCIÓN",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "SELF",
        "translate": "UNO MISMO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "WRITING",
        "translate": "ESCRITURA",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "YEAR",
        "translate": "AÑO",
        "category": "Things",
        "subcategory": "General"
    },
    {
        "word": "COME",
        "translate": "VENIR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "GET",
        "translate": "CONSEGUIR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "GIVE",
        "translate": "DAR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "GO",
        "translate": "IR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "KEEP",
        "translate": "MANTENER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "LET",
        "translate": "DEJAR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "MAKE",
        "translate": "HACER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "PUT",
        "translate": "PONER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "SEEM",
        "translate": "PARECER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "TAKE",
        "translate": "TOMAR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "DO",
        "translate": "HACER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "HAVE",
        "translate": "TENER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "SAY",
        "translate": "DECIR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "SEE",
        "translate": "VER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "SEND",
        "translate": "ENVIAR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "MAY",
        "translate": "PODRÍA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WILL",
        "translate": "VOLVER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "ABOUT",
        "translate": "ACERCA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "AFTER",
        "translate": "DESPUÉS",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "DOWN",
        "translate": "ABAJO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "FROM",
        "translate": "DE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "OFF",
        "translate": "FUERA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "OVER",
        "translate": "SOBRE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "THROUGH",
        "translate": "A TRAVÉS",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "UNDER",
        "translate": "BAJO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WITH",
        "translate": "CON",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "FOR",
        "translate": "POR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "TILL",
        "translate": "HASTA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "THAN",
        "translate": "QUE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "THE",
        "translate": "EL",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "ANY",
        "translate": "CUALQUIER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "EVERY",
        "translate": "CADA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "OTHER",
        "translate": "OTRO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "SOME",
        "translate": "ALGUNOS",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "LITTLE",
        "translate": "POCO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "MUCH",
        "translate": "MUCHO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "SUCH",
        "translate": "TAL",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "THAT",
        "translate": "QUE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "THIS",
        "translate": "ESTE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WHO",
        "translate": "QUIÉN",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "AND",
        "translate": "Y",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "BECAUSE",
        "translate": "PORQUE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "THOUGH",
        "translate": "AUNQUE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WHILE",
        "translate": "MIENTRAS",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "HOW",
        "translate": "CÓMO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WHEN",
        "translate": "CUANDO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WHERE",
        "translate": "DÓNDE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WHY",
        "translate": "POR QUÉ",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "AGAIN",
        "translate": "DE NUEVO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "EVER",
        "translate": "NUNCA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "FORWARD",
        "translate": "ADELANTE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "HERE",
        "translate": "AQUÍ",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "NEAR",
        "translate": "CERCANO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "NOW",
        "translate": "AHORA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "STILL",
        "translate": "AÚN",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "THEN",
        "translate": "ENTONCES",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "BE",
        "translate": "SER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "ACROSS",
        "translate": "A TRAVÉS",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "AGAINST",
        "translate": "EN CONTRA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "AMONG",
        "translate": "ENTRE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "AT",
        "translate": "EN",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "BEFORE",
        "translate": "ANTES",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "BETWEEN",
        "translate": "ENTRE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "BY",
        "translate": "POR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "IN",
        "translate": "EN",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "ON",
        "translate": "EN",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "TO",
        "translate": "A",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "UP",
        "translate": "ARRIBA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "AS",
        "translate": "COMO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "OF",
        "translate": "DE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "ALL",
        "translate": "TODO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "NO",
        "translate": "NO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "HE",
        "translate": "ÉL",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "YOU",
        "translate": "TÚ",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "BUT",
        "translate": "PERO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "OR",
        "translate": "O",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "IF",
        "translate": "SI",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "FAR",
        "translate": "LEJOS",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "OUT",
        "translate": "FUERA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "THERE",
        "translate": "ALLÍ",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "TOGETHER",
        "translate": "JUNTOS",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WELL",
        "translate": "BIEN",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "ALMOST",
        "translate": "CASI",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "ENOUGH",
        "translate": "SUFICIENTE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "EVEN",
        "translate": "INCLUSO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "NOT",
        "translate": "NO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "ONLY",
        "translate": "SOLO",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "QUITE",
        "translate": "BASTANTE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "SO",
        "translate": "ASÍ",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "VERY",
        "translate": "MUY",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "TOMORROW",
        "translate": "MAÑANA",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "YESTERDAY",
        "translate": "AYER",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "NORTH",
        "translate": "NORTE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "SOUTH",
        "translate": "SUR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "EAST",
        "translate": "ESTE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "WEST",
        "translate": "OESTE",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "PLEASE",
        "translate": "POR FAVOR",
        "category": "Operations",
        "subcategory": "General"
    },
    {
        "word": "YES",
        "translate": "SÍ",
        "category": "Operations",
        "subcategory": "General"
    }
];
