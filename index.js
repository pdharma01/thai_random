let consons = [
    { "ก": "mid" },
    { "จ": "mid" },
    { "ด": "mid" }, { "ฎ": "mid" },
    { "ต": "mid" }, { "ฏ": "mid" },
    { "บ": "mid" },
    { "ป": "mid" },
    { "อ": "mid" },

    { "ข": "high" },
    { "ฉ": "high" },
    { "ถ": "high" }, { "ฐ": "high" },
    { "ผ": "high" },
    { "ฝ": "high" },
    { "ศ": "high" }, { "ส": "high" }, { "ษ": "high" },
    { "ห": "high" },

    { "ค": "low" }, { "ฆ": "low" },
    { "ช": "low" }, { "ฌ": "low" },
    { "ท": "low" }, { "ฑ": "low" },
    { "พ": "low" }, { "ภ": "low" },
    { "ฟ": "low" },
    { "ซ": "low" },
    { "ฮ": "low" },

    { "ง": "low" },
    { "น": "low" }, { "ณ": "low" },
    { "ฒ": "low" }, { "ธ": "low" },
    { "ม": "low" },
    { "ย": "low" }, { "ญ": "low" },
    { "ร": "low" },
    { "ล": "low" }, { "ฬ": "low" },
    { "ว": "low" },
];

let vowels = [
    // อ   - = consonate, = = final,   ่ = tone
    // http://www.thai-language.com/ref/vowels

    { "-ั่=": "Short" },
    { "-่ะ": "Short" },
    { "-่า=": "Long" },
    { "-่า": "Long" },

    { "แ-็่=": "Short" },
    { "แ-่ะ": "Short" },
    { "แ-่=": "Long" },
    { "แ-่": "Long" },

    { "เ-่าะ": "Short" },
    { "-็่": "Short" },
    { "-่อ=": "Long" },
    { "-่อ": "Long" },

    { "เ-็่=": "Short" },
    { "เ-่ะ": "Short" },
    { "เ-่=": "Long" },
    { "เ-่": "Long" },

    { "เ-ิ่=": "Short" },
    { "เ-่อะ": "Short" },
    { "เ-ิ่=": "Long" },
    { "เ-่อ": "Long" },

    { "-่=": "Short" },
    { "โ-่ะ": "Short" },
    { "โ-่=": "Long" },
    { "โ-่": "Long" },

    { "-ิ่=": "Short" },
    { "-ิ่": "Short" },
    { "-ี่=": "Long" },
    { "-ี่": "Long" },

    { "-ึ่=": "Short" },
    { "-ึ่": "Short" },
    { "-ื่=": "Long" },
    { "-ื่อ": "Long" },

    { "-ุ่=": "Short" },
    { "-ุ่": "Short" },
    { "-ู่=": "Long" },
    { "-ู่": "Long" },

    // 10 
    { "เ-ี่ยะ": "Short" },
    { "เ-ี่ย=": "Long" },
    { "เ-ี่ย": "Long" },

    { "เ-ื่อะ": "Short" },
    { "เ-ื่อ=": "Long" },
    { "เ-ื่อ": "Long" },

    { "-่ว=": "Long" },
    { "-ั่ว": "Long" },

    // 13

    { "ไ-่": "Short" },
    { "ใ-่": "Short" },

    { "เ-่า": "Short" },
    { "-่าว": "Long" },

    { "เ-็่ว": "Short" },
    { "เ-่ว": "Long" },

    { "-ิ่ว": "Short" },

    { "เ-ี่ยว": "Long" },

    { "่-ำ": "Short" },

];

let finals = [
    { "ก": "Ktp" },
    { "ด": "Ktp" },
    { "บ": "Ktp" },

    { "ง": "Sonorant" },
    { "น": "Sonorant" },
    { "ณ": "Sonorant" },
    { "ม": "Sonorant" },
    { "ย": "Sonorant" },
    { "ร": "Sonorant" },
    { "ถ": "Sonorant" },
    { "ว": "Sonorant" },
];

let tones = [{ "": 0 }, { " ่": 1 }, { " ้": 2 }, { " ๊": 3 }, { " ๋": 4 }
];


// conson  : /vowel/final/tone
let mid = {
    LongNone: "-",
    ShortNone: "\\",
    LongSonorant: "-",
    ShortSonorant: "-",
    LongKtp: "\\",
    ShortKtp: "\\",
    1: "\\",
    2: "^",
    3: "/",
    4: "V",
}
let high = {
    LongNone: "V",
    ShortNone: "\\",
    LongSonorant: "V",
    ShortSonorant: "V",
    LongKtp: "\\",
    ShortKtp: "\\",
    1: "\\",
    2: "^",
    3: "error",
    4: "error",
}
let low = {
    LongNone: "-",
    ShortNone: "/",
    LongSonorant: "-",
    ShortSonorant: "-",
    LongKtp: "^",
    ShortKtp: "/",
    1: "^",
    2: "/",
    3: "error",
    4: "error",
}


function getPhraseAnswer() {

    let vowel = vowels[Math.floor(Math.random() * vowels.length)];
    let conson = consons[Math.floor(Math.random() * consons.length)];
    let final = finals[Math.floor(Math.random() * finals.length)];
    let vowelType = Object.values(vowel)[0]
    let consonType = Object.values(conson)[0]


    let tone
    if (consonType == "mid") {
        tone = tones[Math.floor(Math.random() * tones.length)];
    } else {
        tone = tones[Math.floor(Math.random() * 3)];
    }


    let finalType = "";
    if (Object.keys(vowel)[0].includes("=")) {
        finalType = Object.values(final)[0]
    } else {
        finalType = "None"
    };


    let type = ""
    if (Object.values(tone)[0] > 0) {
        type = Object.values(tone)[0]
    } else {
        type = vowelType + finalType
    };


    let answer = eval(consonType)[type] + "  , " + consonType + type

    // replace consonant
    let phrase = Object.keys(vowel)[0].replace("-", Object.keys(conson)[0]);
    //replace final
    phrase = phrase.replace("=", Object.keys(final)[0]);
    // replace tone 
    phrase = phrase.replace("่", Object.keys(tone)[0]);


    return { phrase, answer }
}


// DOM--------------------------- 
let textField = document.querySelector(".text_field");
let answerField = document.querySelector(".answer_field");
let answerButton = document.querySelector(".answer-button");
let nextButton = document.querySelector(".next-button");

function getAnswer() {
    answerField.style.visibility = "visible";

}

function next() {
    let { phrase, answer } = getPhraseAnswer()
    textField.textContent = phrase;
    answerField.style.visibility = "hidden";
    answerField.textContent = answer;
}

next()
answerButton.addEventListener("click", getAnswer)
nextButton.addEventListener("click", next)
