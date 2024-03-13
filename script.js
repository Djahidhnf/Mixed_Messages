//Object for quran verses in english
const englishVerses = {
    sad: ["Allah does not burden a soul beyond that it can bear", "Do not lose hope, nor be sad. You will surely be victorious if you are true believers", "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient"],
    angry: ["My success is not but through Allah. Upon him I have relied, and to Him I return", "And to your Lord direct [your] longing"],
    lost: ["Whoever puts his trust in Allah; He will be enough for Him"]
};

const arabicVerses = {
    sad: ["لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ", "يَا أَيُّهَا الَّذِينَ آمَنُواْ اسْتَعِينُواْ بِالصَّبْرِ وَالصَّلاَةِ إِنَّ اللّهَ مَعَ الصَّابِرِينَ"],
    angry: ["وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ", "وَإِلَىٰ رَبِّكَ فَارْغَب"],
    lost: ["وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ"]
}

//function for getting a random idx
function getRandomIdx (verses) {
    return Math.round(Math.random() * verses.length - 1);
}

//function for getting a random verse
function printRandomVerse () {
    let idx = getRandomIdx(englishVerses[feeling]);
    console.log('\n' + englishVerses[feeling][idx]);
    console.log(arabicVerses[feeling][idx]);
}

//user input on how they feel
const prompt = require('prompt-sync')();
let feeling = prompt('Choose how are you feeling? sad, angry, lost: ').toLowerCase();

printRandomVerse();