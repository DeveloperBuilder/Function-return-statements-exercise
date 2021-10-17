const checkTheNumbers = function (number){
 const Getal = number;
 if (Getal < 100)
  {
   return "false";
  }
  else return "true";
  }
console.log (checkTheNumbers(150)); 
console.log (checkTheNumbers(30)); 

 const getBouncerReaction = function(
  maxBezoekers,
  huidigeBezoekers,
  leeftijd) 
  {
  if (leeftijd < 18) 
    {
      return "This is a club for adults";
    }
  if (huidigeBezoekers <= maxBezoekers) 
    {
      return "Come in";
    } 
    else 
    {
      return "It's too busy now, come back later";
    }
};

console.log(getBouncerReaction(20, 13, 9)); 
console.log(getBouncerReaction(50, 34, 29)); 
console.log(getBouncerReaction(25, 35, 23)); 
console.log(getBouncerReaction(100, 123, 40)); 

 const GemiddeldeBerekenen = function(
  number1,
  number2,
  number3,
  number4,
  number5
) {
  const totaal = number1 + number2 + number3 + number4 + number5;
  const gemiddelde = totaal / 5;
  return gemiddelde;
};

console.log(GemiddeldeBerekenen(19, 14, 8, 14, 66)); 
console.log(GemiddeldeBerekenen(2, 3, 5, 0, 7)); 
console.log(GemiddeldeBerekenen(134, 38, 54, 88, 67)); 


const GemiddeldeBerekenen2 = function(
  number1,
  number2,
  number3,
  number4,
  number5) 
{
  const totaal2 = number1 + number2 + number3 + number4 + number5;
  const gemiddelde2 = totaal2 / 5;
  const gemiddeldeAfgerond = Math.round(gemiddelde2);
  return gemiddeldeAfgerond;
};

console.log(GemiddeldeBerekenen2(19, 14, 8, 14, 66)); 
console.log(GemiddeldeBerekenen2(2, 3, 5, 0, 7)); 
console.log(GemiddeldeBerekenen2(134, 38, 54, 88, 67)); 











































































