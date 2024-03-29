// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

//P: string
//R: check if string has valid spacing (no start, end, and double spaces)
//E: given 'Hello world' => true
//   given ' Hello world' => false
//   given 'Hello  world' => false
//PC: create a function with condtional to check if string has valid spacing

function validSpacing(s) {
    return s.startsWith(' ') ? false : s.endsWith(' ') ? false : s.includes('  ') ? false : true
}