function ScrabbleWordScore(word) {
    var score = 0;
    var word = word.toUpperCase();
    for (i = 0; i < word.length; i++) {

        if (word.charAt(i) === 'A' || word.charAt(i) === 'E' ||
             word.charAt(i) === 'I' || word.charAt(i) === 'O' ||
             word.charAt(i) === 'U' || word.charAt(i) === 'L' || 
             word.charAt(i) === 'N' ||word.charAt(i) === 'S' || 
             word.charAt(i) === 'T' || word.charAt(i) === 'R' ) {
            score = score + 1;
        }

        else if (word.charAt(i) === 'D' || word.charAt(i) === 'G') {
            score = score + 2;
        }

        else if (word.charAt(i) === 'B' || word.charAt(i) === 'C' || word.charAt(i) === 'M' || word.charAt(i) === 'P' ) {
            score = score + 3;
        }

        else if (word.charAt(i) === 'F' || word.charAt(i) === 'H' || word.charAt(i) === 'V' ||
           word.charAt(i) === 'W' || word.charAt(i) === 'Y' ) {
            score = score + 4;
        }

       else if (word.charAt(i) === 'K') {
            score = score + 5;
        }

        else if (word.charAt(i) === 'J' || word.charAt(i) === 'X') {
            score = score + 8;
        }

        else if (word.charAt(i) === 'Q' || word.charAt(i) === 'Z') {
            score = score + 10;
        }
    }
    return score;
}
module.exports = ScrabbleWordScore;