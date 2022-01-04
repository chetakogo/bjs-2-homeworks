function parseCount(parseValue) {
    let a = parseInt(parseValue);
    if (isNaN(a) === true) {
        throw new Error ('Невалидное значение');
    } else {
        return a;
      }
}

function validateCount(parseValue) {
    try { 
       let result = parseCount(parseValue)  
       return result
    }
    catch (err) {
        return err;
    }

}


// Задача 2

class Triangle {
    constructor(a, b, c) {
       this.a = a;
       this.b = b;
       this.c = c;
        if (((this.b + this.a) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
       
    }
    
     getPerimeter() {
        
        let perimeter =  this.a + this.b + this.c;
        return  perimeter;
        
    }

    

     getArea () {
    let halfPerimetr =  this.getPerimeter()/ 2;
    let sqare = Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c));
    return Number(sqare.toFixed(3));
    }
   
      
}

function getTriangle (a, b, c) {
    try { 
        let result = new Triangle(a, b, c)  
        return result
     }
     catch (err) {
        let message = "Ошибка! Треугольник не существует";
        return {getArea : () => message, getPerimeter : () => message}
          
    }
}



