class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(stc) {
    return stc.replace(/[^a-z0-9' '-]/gi, '')
  }
  static titleize(word) {

    let wordsToRemove = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from' ];
    
    return word.split(' ').map(ele => {
      return wordsToRemove.includes(ele) ? word.indexOf(ele) == 0 ? ele.charAt(0).toUpperCase() : ele : ele.charAt(0).toUpperCase() + ele.slice(1);
    }).join(' ');
  }
}

Formatter.capitalize("crocodile")
Formatter.sanitize("ca$@#tching cold")
Formatter.titleize("getting of giggles")



// function titleize(word) {
//   let wordsToRemove = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  
//   return word.split(' ').map(ele => {
//     console.log(word.indexOf(ele) == 0)
//     return wordsToRemove.includes(ele) ? word.indexOf(ele) == 0 && ele.charAt(0).toUpperCase() : ele.charAt(0).toUpperCase() + ele.slice(1);
    
//   });
// }
// console.log(titleize('a tale of two cities'));