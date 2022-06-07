function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance<=400)
  {
   return 'This one is on me!';
  }
  else if(distance <= 2499)
  {
  return 'I will gladly take your thirty bucks.';
  }
  else
  {
 return 'No can do.';
}
}
  // Write your code here!
  function ternaryCheckCity(city){
    return city === 'NYC'? "Ok, sounds good.": "No go.";
  }

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything' :
      return 'Bye.';
  }
}
