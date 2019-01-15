// 'it should return a string where each landmarks are placed between "<b>" tag for the given input array of landmarks.',() => { 
//     expect(highlightLandmarks('if one word could encapsulate the essence of this historic city it would be drama start your day at the show stopping pantheon followed by a gelato at the acclaimed trevi fountain then hop between buzzing bars in vivacious trastevere', ['pantheon','trevi','trastevere'])).toBe('if one word could encapsulate the essence of this historic city it would be drama start your day at the show stopping <b>pantheon</b> followed by a gelato at the acclaimed <b>trevi</b> fountain then hop between buzzing bars in vivacious <b>trastevere</b>');
//   });


function highlightLandmarks(a,b){
 for (var i=0;i<b.length; i++){
     
         if (a.includes(b[i])){
 a= a.replace(b[i],`<b>${b[i]}</b>`)
         }       
      
    }
 return a;
}
console.log(highlightLandmarks('if one word could encapsulate the essence of this historic city it would be drama start your day at the show stopping pantheon followed by a gelato at the acclaimed trevi fountain then hop between buzzing bars in vivacious trastevere', ['pantheon','trevi','trastevere']));



