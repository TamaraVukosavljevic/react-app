import operate from "./operate";
import isNumber from "./isNumber";

/**

 *   total:String     total
 *   next:String      broj nad kojim se vrsi operacija sa total
 *   operation:String  operacije +, -, *, :.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  //ako je AC isprazniti ceo objekat
//ako je unet broj
  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }
    //ako je broj nula onda vrati prazan objekat
    
    if (obj.operation) {
      //ako postoji operacija +,-,*,:
      if (obj.next) {
        return { next: obj.next + buttonName };
        //ako vec postoji next nadovezi novu vrednost
      }
      return { next: buttonName };
      //ako ne postoji samo vrati tu vrednost
    }
    // ako ne postoji operacija samo update-uj ili vrati vrednost next
    if (obj.next) {
      //ako postoji next
      const next = obj.next === "0" ? buttonName : obj.next + buttonName;
      //i nula je samo vrati ime dugmeta, ako je nesto drugo update-uj next
      return {
        next,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

 

 
//ako nije broj onda je operacija 
//ako je jednako i operacija i next nisu prazni obaviti operaciju nad total i next
  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' bez operacije vraca prazan objekat
      return {};
    }
  }

 

  //Operacije

  //replace operacije, ako vec postoji operacija a nova je kliknuta - cuva se nova
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // Ako ne postoji broj u next, sacuvaj operaciju
  if (!obj.next) {
    return { operation: buttonName };
   
  }

  
  // sacuvaj operaciju i prebaci next u total, ceka se sledeci broj
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
  
}
