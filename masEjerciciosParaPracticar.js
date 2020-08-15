'use strict'

function createPhoneNumber(arr) {
    var texto_tel = " ";
    var numeros_enteros = false;
    if (arr.length == 10) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= 0 && arr[i] <= 9) {
                numeros_enteros = true;
            }
        }
        if (numeros_enteros == true) {
            texto_tel = "(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9];
        }

        console.log(texto_tel);
        return texto_tel;
    } else {
        return false;
    }
}
// createPhoneNumber([0,1,2,3,4,5,6,7,8,9]);

function isIsogram(str) {
    var new_str = str.toLowerCase();
    var cont = 0;
    var isIso = false;

    if (new_str == null || new_str == '') {
        isIso = true;
    }
    for (var i = 0; i < new_str.length; i++) {
        cont = 0
        var letra = new_str.charAt(i);
        for (var j = 0; j < new_str.length; j++) {
            if (new_str.charAt(j) == letra) {
                cont += 1;
            }
            if (cont <= 1) {
                isIso = true;
            } else {
                return isIso = false;
            }
        }
    }
    return isIso;
}

// console.log(isIsogram(''));

function getCount(str) {
    var string = str.toLowerCase();
    var cont = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') {
            cont++;
        }
    }
    return cont;
}
// console.log(getCount("Cristobal hola"));

function spinWords(str) {
    var arr_words = [];
    arr_words = str.split(" ");
    var new_str = " ";

    // Cliclo para revertir las palabras
    for (var i = 0; i < arr_words.length; i++) {
        if (arr_words[i].length >= 5) {
            arr_words[i] = arr_words[i].split("").reverse();
        }
    }

    // // Cliclo para concatenar las palabras
    for (var j = 0; j < arr_words.length; j++) {
        if (arr_words[j].length >= 5) {
            new_str += arr_words[j].join(" ").replace(/ /g, "") + " ";
        } else {
            new_str += arr_words[j] + " ";
        }
    }

    // console.log(arr_words[0] + " " + arr_words[1].join(" ").replace(/ /g, "") + " " + arr_words[2].join(" "));
    return new_str.trim();
}

// console.log(spinWords("Seriously this is the last one"))
// console.log("ylsuoireS this is the last one");

// Parámetro rest: sirve para poner una cantidad infinita de argumentos
function test(...rest) {
    var edad = false;
    var nivel = false;
    var categoria = " ";
    for (var i = 0; i < rest[0].length; i++) {
        for (var j = 0; j < rest[0][0].length; j++) {
            if (j == 0) {
                if (rest[0][i][j] >= 55) {
                    edad = true;
                }
            } else if (j == 1) {
                if (rest[0][i][j] > 7) {
                    nivel = true;
                }
            }
        }
        if (edad == true && nivel == true) {
            categoria += "Senior ";
            edad = false;
            nivel = false;
        } else {
            categoria += "Open ";
            edad = false;
            nivel = false;
        }
    }
    var arr_categoria = categoria.split(" ");
    arr_categoria.pop(); // Remove the last element
    arr_categoria.shift(); // Remove first element
    return arr_categoria;
}

// console.log(test([[45, 12],[55,21],[19, -2],[104, 20]]));
// Open', 'Senior', 'Open', 'Senior


// ANOTHER SOLUTION:
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

function pigIt(str) {
    var arr = [];
    arr = str.split(" "); // Array´s word
    var new_str = " ";
    var new_arr = [];

    for (var i = 0; i < arr.length; i++) {
        var letra = arr[i].split("")[0]; // First letter each word
        new_arr[i] = arr[i].substring(1);
        if (arr[i] == "!" || arr[i] == "?") {
            new_str += new_arr[i].concat(letra);
        } else {
            new_str += new_arr[i].concat(letra).concat("ay ");
        }

    }
    return new_str.trim();
}

// console.log(pigIt("O tempora o mores !"));
// Oay emporatay oay oresmay !
// console.log(pigIt("Quis custodiet ipsos custodes ?"));
// uisQay ustodietcay psosiay ustodescay ?

function horario(numero) {
    var min;
    var seg;
    var horas;
    var residuo;
    var format = " ";
    if (numero <= 59) {
        if (numero == 0) {
            format = "00:00:00";
        } else if (numero >= 1 && numero < 10) {
            format = "00:00:" + "0" + numero;
        } else {
            format = "00:00:" + numero;
        }
    } else if (numero == 60) {
        min = 60 / numero;
        format = "00:0" + min + ":00";
    } else if (numero == 3600) {
        horas = (3600 / 60) / 60;
        format = "0" + horas + ":00:00";
    } else if (numero == 86400) {
        format = "24:00:00";
    } else if (numero > 60 && numero < 3600) {
        min = numero / 60;
        seg = numero % 60;
        if (Math.floor(min) < 10 && seg >= 10) {
            format = "00:" + "0" + Math.floor(min) + ":" + seg;
        } else if (Math.floor(min) >= 10 && seg < 10) {
            format = "00:" + Math.floor(min) + ":0" + seg;
        } else {
            format = "00:" + Math.floor(min) + ":" + seg;
        }
    } else if (numero >= 3600 && numero <= 359999) {
        horas = numero / 3600;
        residuo = numero % 3600;
        min = residuo / 60;
        seg = residuo % 60;
        if (Math.floor(min) < 10 && seg >= 10 && horas >= 10) {
            format = horas + ":" + "0" + Math.floor(min) + ":" + seg;
        } else if (Math.floor(min) >= 10 && seg < 10 && horas >= 10) {
            format = horas + ":" + Math.floor(min) + ":0" + seg;
        } else if (Math.floor(min) >= 10 && seg >= 10 && horas < 10) {
            format = "0" + horas + ":" + Math.floor(min) + seg;
        } else {
            format = Math.floor(horas) + ":" + Math.floor(min) + ":" + Math.floor(seg);
        }
    } else {
        return false;
    }
    return format;
}

// horario(86400);

function zeroOrder(arr) {
    let cont = 0;
    // Delete zeros in Array
    for (let i = 0; i < arr.length; i++) {
        var ind = arr.indexOf(0);
        console.log(ind);
        if (ind > -1) {
            arr.splice(ind, 1);
            cont++;
        }
    }
    // Add zeros to Array
    for (let j = 0; j < cont; j++) {
        arr.push(0);
    }
    return arr;
}

// zeroOrder([1,0,2,0,4,5,7,0,3,0]);

function numberOfOnes(number) {
    var binario = [];
    var i = 0;
    var cont = 0;

    // Save in array the binary representation
    do {
        if (number % 2 == 0) { //Par
            binario[i] = 0
            i++;
            number = Math.floor(number / 2);
        } else { // Impar
            binario[i] = 1
            i++;
            number = Math.floor(number / 2);
        }
    } while (number >= 1);

    binario.reverse();

    // Counting 1's in binary array
    for (let i = 0; i < binario.length; i++) {
        if (binario[i] == 1) {
            cont++;
        }
    }
    return cont;
}
// numberOfOnes(1234); // 10011010010

function añosPoblacion(p0, percent, aug, p) {
    let per = percent / 100;
    let total = 0.0;
    let count = 0;

    do {
        if (count == 0) {
            total = p0 + p0 * per + aug; // Población total por año
        } else {
            total = total + total * per + aug;
            total = Math.floor(total);
        }
        count++;
    } while (total < p);

    console.log(count);
    return count;
}

//añosPoblacion(1500, 5, 100, 5000);

function findMissingLetter(array) {
    // Verificando si se usa array en minúscula o mayúscula
    var es_minuscula = false;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (var j = 0; j < alphabet.length; j++) {
        if (array[0] == alphabet[j]) {
            es_minuscula = true;
        }
    }

    if (es_minuscula == false) {
        alphabet.splice(0, 26, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }

    console.log(alphabet);

    let primer_letra = array[0];
    let letra_perdida = " ";

    // Búsqueda de letra perdida
    let empiezo = alphabet.indexOf(primer_letra);
    for (var i = 0; i < array.length; i++) {
        if (alphabet[empiezo] == array[i]) {
            empiezo++;
        } else {
            letra_perdida = alphabet[empiezo];
            break;
        }
    }

    console.log(letra_perdida);
    return letra_perdida;
}
// findMissingLetter(["L", "M", "N", "O", "Q"]);

function longest(s1, s2) {
    let nueva_palabra = " ";
    let str = s1 + s2;
    let arr = [];
    let palabra_ordenada = " ";

    for (let i = 0; i < str.length; i++) {
        let letra = str.charAt(i);
        if (nueva_palabra.includes(letra) == false) {
            nueva_palabra += letra;
        }
    }
    nueva_palabra = nueva_palabra.trim(); // Quita espacios vacíos en el string.
    arr = nueva_palabra.split("");
    arr.sort();
    palabra_ordenada = arr.join("");
    return palabra_ordenada;
}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
// abcdef k lm opqwxy

function maxSequence(arr) {
    var iteracion = 0;
    var j = 2;
    var num_enteros = 0;
    var num_max_enteros = 0;
    var arr_mas_enteros = [];
    var len = 0;
    var arr_temp = [];
    var suma = 0;
    var positivo = false;

    do {
        if (iteracion > 0) {
            j = 2;
            j += iteracion;
        }
        for (let i = 0; i < arr.length; i++) {
            var subarr = arr.slice(i, j);
            j++;
            for (let k = 0; k < subarr.length; k++) {
                if (subarr[k] > 0) {
                    num_enteros++;
                }
            }
            if (num_enteros > num_max_enteros) { // If para buscar arr con más num. positivos
                num_max_enteros = num_enteros;
                num_enteros = 0;
                arr_mas_enteros = subarr;
            }
            num_enteros = 0;
        }
        iteracion += 1;


        var negativos = 0
        var cont_posituvos = 0;
        var max = 0;
        // Almacenar el subArray con mayor cantidad de positivos    
        for (var r = 0; r < arr_mas_enteros.length; r++) {
            if (arr_mas_enteros[r] > 0) {
                cont_posituvos++;
            } else {
                negativos = negativos + 1;
                if (negativos == 2) {
                    cont_posituvos = 0;
                    break;
                }
                r = r + 1;
                if (arr_mas_enteros[r] > 0) {
                    cont_posituvos++;
                } else {
                    cont_posituvos = 0;
                    break;
                }
            }
        }

        if (cont_posituvos > max) {
            max = cont_posituvos;
            arr_temp = arr_mas_enteros;
        }

    } while (arr_mas_enteros.length != arr.length - 1);

    // Suma del array temporal
    for (let i = 0; i < arr_temp.length; i++) {
        suma += arr_temp[i];
    }
    console.log(suma);
    console.log(arr_temp);
    return suma;
}

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);  // -1
// maxSequence([1, -3, 4, -1, 2, 1, -5, 4]);      // -2
// maxSequence([1, -3, 4, -1, 2, 1]);              // -4


/////////////////////////////////////////////////////////////////
var maxSequence = function (arr) {
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
    }
    return ans;
}
////////////////////////////////////////////////////////////////
function maxSequence(arr) {
    var max = 0
    for (var i = 0; i < arr.length; i++) {
        for (var sum = 0, j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum > max) max = sum
        }
    }
    return max
}

function getMiddle(str) {
    let length = str.length;
    var ind;
    let letter = " ";

    if (length % 2 != 0) { // Impar
        ind = Math.floor(length / 2);
        letter = str.slice(ind, ind + 1);
    } else {
        ind = length / 2;
        letter = str.slice(ind - 1, ind + 1);
    }

    console.log(letter);
    return letter
}

function findShort(str) {
    let len; // Longitud de la palabra
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            len = arr[i].length;
        } else {
            if (arr[i].length < len) {
                len = arr[i].length;
            }
        }
    }
    console.log(len);
    return len;
}

// findShort("dadasd e efre");

function accum(str) {
    let new_str = " ";
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (j == 0) {
                arr[i] = arr[i].toUpperCase();
                new_str += arr[i];
            } else {
                arr[i] = arr[i].toLowerCase();
                new_str += arr[i];
            }
        }
        new_str += "-";
    }
    new_str = new_str.slice(0, - 1).trim();
    console.log(new_str);
    return new_str;
}
/*
accum("abcd"); // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt"); // "C-Ww-Aaa-Tttt"*/


function arrayPlusArray(arr1, arr2) {
    let total = 0;
    for (let i = 0; i < arr1.length; i++) {
        total += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        total += arr2[j];
    }
    return total;
}

arrayPlusArray([1, 2, 3], [4, 5, 6]) // 21

function count(str) {
    var letra;
    var arr = [];
    var characters = {
        a: 0, b: 0
    }
    var obj = {};

    for (let i = 0; i < str.length; i++) {
        letra = str.charAt(i)
        switch (letra) {
            case 'a': characters.a += 1;
                arr[0] = characters.a;
                for (var a = 0; a < arr.length; ++a) {
                    obj[letra] = arr[a];
                }
                arr.pop();
                break;
            case 'b': (characters.b += 1);
                arr[0] = characters.b;
                for (var b = 0; b < arr.length; ++b) {
                    obj[letra] = arr[b];
                }
                arr.pop();
                break;
        }
    }
    return obj;
}

// count("aba"); // { a: 2, b: 1 }); 
//////// FUNCIÓN PARA PASAR ITEMS DE ARREGLO A UN OBJETO
function toObject(arr) {
    var rv = {};
    var letra = 'a';
    for (var i = 0; i < arr.length; ++i)
        rv[letra] = arr[i];
    console.log(rv);
    return rv;
}

function arrayDiff(a1, a2) {
    var new_arr = [];
    if (a2.length === 0) {
        return a1;
    }
    // For to track down all the items in second array
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if (a1[i] == a2[j]) {
                a1.splice(i, 1, "delete");
            }
        }
    }
    // For to delete all "delete" items 
    let c = 0
    for (let k = 0; k < a1.length; k++) {
        if (a1[k] != "delete") {
            new_arr[c] = a1[k];
            c++;
        }
    }
    return new_arr;
}

// arrayDiff([-2,4,20,3,4,1,-7,7,-13,-17,11,15,0],[15]) 

function alphabetPosition(text) {
    text = text.toLowerCase();
    let letter = " ";
    let letra = " ";
    for (let i = 0; i < text.length; i++) {
        letter = text.charAt(i);
        switch (letter) {
            case 'a':
                letra += 1 + " ";
                break;
            case 'b':
                letra += 2 + " ";
                break;
            case 'c':
                letra += 3 + " ";
                break;
            case 'd':
                letra += 4 + " ";
                break;
            case 'e':
                letra += 5 + " ";
                break;
            case 'f':
                letra += 6 + " ";
                break;
            case 'g':
                letra += 7 + " ";
                break;
            case 'h':
                letra += 8 + " ";
                break;
            case 'i':
                letra += 9 + " ";
                break;
            case 'j':
                letra += 10 + " ";
                break;
            case 'k':
                letra += 11 + " ";
                break;
            case 'l':
                letra += 12 + " ";
                break;
            case 'm':
                letra += 13 + " ";
                break;
            case 'n':
                letra += 14 + " ";
                break;
            case 'o':
                letra += 15 + " ";
                break;
            case 'p':
                letra += 16 + " ";
                break;
            case 'q':
                letra += 17 + " ";
                break;
            case 'r':
                letra += 18 + " ";
                break;
            case 's':
                letra += 19 + " ";
                break;
            case 't':
                letra += 20 + " ";
                break;
            case 'u':
                letra += 21 + " ";
                break;
            case 'v':
                letra += 22 + " ";
                break;
            case 'w':
                letra += 23 + " ";
                break;
            case 'x':
                letra += 24 + " ";
                break;
            case 'y':
                letra += 25 + " ";
                break;
            case 'z':
                letra += 26 + " ";
                break;
        }
    }

    console.log(letra);
    return letra;
}

// alphabetPosition("The sunset sets at twelve o' clock.");
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function solution(str) {
    var new_str = " "
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/^[A-Z]*$/)) {
            new_str += " " + str.charAt(i);

        } else {
            new_str += str.charAt(i)
        }
    }

    console.log(new_str);
    return new_str.trim();
}

// solution("camelCasing");


function highestRank(arr) {
    let count = 0;
    let num_max = 0;
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > temp) {
            num_max = arr[i];
            temp = count;
            count = 0;
        } else {
            count = 0;
        }
    }
    console.log(num_max);
    return num_max;
}

// Función diamond sin formatear el string diam
function diamond(n) {
    let diam = "";
    let format = "*";
    if (n < 0) {
        return null;
    }
    if (n % 2 != 0) {
        // Loop for concat fist part of (*\n) format.
        for (var i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                for (let j = 0; j < i; j++) {
                    diam += format;
                }
                diam += " \n";
            }
        }
        // Loop for concat second part of (*\n) format.
        for (var k = i - 1; k >= 1; k--) {
            if (k % 2 == 0) {
                for (let j = k; j > 1; j--) {
                    diam += format;
                }
                diam += "\n ";
            }
        }
        diam.concat(format).concat("\n");
        console.log(diam);
        return diam;
    } else {
        return null;
    }
}

// diamond(23);

// Función diamond con el string correctamente
function diamond(val) {
    var y, w, shape = '';
    var diam = "";
    var cont = 1;
    var last_count = 2;
    var last_items = Math.round(val / 2);
    if (val < 0) {
        return null;
    } else if (val % 2 == 0) {
        return null;
    } else {
        for (y = 0; y < val * 2 - 1; y++) {
            if (y % 2 == 0) {
                if (y > 0 && y < val * 2 - 1) {
                    if (cont == last_items) {
                        w = y < val ? y : val * 2 - y - 2;;
                        shape += Array((val + last_items - last_count) - w).join(' ') + Array(w + 1).join('*') + '*\n';
                        diam += shape;
                        last_count++;
                    } else {
                        w = y < val ? y : val * 2 - y - 2;
                        shape += Array(val - cont).join(' ') + Array(w + 1).join('*') + '*\n';
                        diam += shape;
                        cont++;
                    }
                } else {
                    w = y < val ? y : val * 2 - y - 2;
                    shape += Array(val - w).join(' ') + Array(w + 1).join('*') + '*\n';
                    diam += shape;
                }
            }
        }
        console.log(shape);
        return shape;
    }
}

// diamond(13);

// Expected: ' *\n***\n *\n', instead got: 
//   ' *\n ***\n  *\n'

function diam(width) {
    var stars = "";
    var num = (width + 1) / 2;

    if (width < 0 || width % 2 == 0) {
        return null;
    }

    for (let i = num - 1; i > -num; i--) {
        for (let j = num - Math.abs(i); j < num; j++) {
            stars += ' '
        }
        for (let j = 0; j < 2 * (num - Math.abs(i)) - 1; j++) { //2*num-(2*Math.abs(i) +1) simplified to 2*(num-Math.abs(i))-1
            stars += "*";
        }
        stars += "\n";
    }
    console.log(stars);
    return stars;
}
// diam(9);


function isSquare(n) {
    let raiz;
    let num;
    let es_perfecto = false;

    raiz = Math.sqrt(n);
    if (Number.isInteger(raiz)) {
        if (raiz % 2 == 0 || raiz % 2 != 0) {
            num = raiz * raiz;
        } else {
            console.log(es_perfecto)
            return es_perfecto;
        }
    }
    if (num == n) {
        es_perfecto = true;
        console.log(es_perfecto);
    } else {
        console.log(es_perfecto)
        return es_perfecto;
    }

    return es_perfecto;
}


function isPositive(arr) {

    // Filter: recorrerá todos los elementos y regresará solo los que cumplan con la condición
    const filtered = arr.filter(n => {
        return n >= 0;
    });

    // Mapeando array a un objeto 
    const obj = filtered.map(n => {
        return { value: n }
    });

    // Filtrando objetos a valores > 2
    const filter_obj = obj.filter(n => {
        return n.value > 2;
    });

    // Mapeando el objeto, y el resultado será un nuevo array
    const to_array = filter_obj.map(n => {
        return n.value;
    });

    console.log(filtered);
    console.log(obj);
    console.log(filter_obj);
    console.log(to_array);
    /*
    let num;
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        num = arr[i];
        if(num > 0) {
            sum += num;
        }
    }
    console.log(sum);
    return sum;
    */
}

function positiveSum(arr) {
    const arr_pos = arr.filter(positive => {
        return positive > 0;
    });
    var sum = 0;
    arr_pos.map(n => {
        return sum += n;
    });
    return sum
}

// positiveSum([1,2,3,-6]);

// Ternary Operator
function even_or_odd(number) {
    return number % 2 == 0 ? "Even" : "Odd";
}
/*
even_or_odd(2)
even_or_odd(0)
even_or_odd(7)
even_or_odd(1)
*/

function solution(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}

// solution(10);

function findOdd(arr) {
    let valor_max = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                count++;
            }
        }
        if(count % 2 != 0) {
            valor_max = arr[i];
            count = 0;
        }
    }
    console.log(valor_max);
    return valor_max;
  }

  // findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);

  function digital_root(n) {
    let suma = 0;
    let arr = [];
    let num_str = "";
    do {
        num_str = n.toString();
        arr = num_str.split("");
        // For para convertir elementos a enteros
        for(let j = 0; j < arr.length; j++) {
            arr[j] = Number(arr[j]);
        }
        console.log(arr);
        for(let i = 0; i < arr.length; i++) {
            suma += arr[i];
        }
        n = suma;
        suma = 0;
    }while(n > 9); // Cuando es True se va a repetir

    console.log(n);
    return n;
  }

  // digital_root(493193);

  function greet(name) {
    let all_lower = name.toLowerCase();
    let toUpper = all_lower.charAt(0).toUpperCase();
    let to_lower = toUpper.toLowerCase();
    let new_name = all_lower.replace(to_lower, toUpper);

    console.log(new_name);
    return "Hello " + new_name + "!";
}

// greet("CRIS");

///////////////////////////////////////////////////
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};


////////////////////////////////////////////////
function likes(names) {
    let len = names.length;
    let msj;
    if(len == 0) {
        msj = 'no one likes this';
    } else if(len == 1) {
        msj = `${names[0]} likes this`
    } else if(len == 2) {
        msj = `${names[0]} and ${names[1]} like this`;
    } else if(len == 3) {
        msj = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        len = len - 2;
        msj = names[0] + ', ' + names[1] + ' and ' + len + ' others like this';
    }
    console.log(msj);
    return msj;
}

// likes(["Max", "John", "faf"]);

///////////////////////////////////////////////
/*
function likes(names) {
    switch(names.length){
      case 0:
        return `no one likes this`;
      case 1: 
        return `${names[0]} likes this`;
      case 2: 
        return `${names[0]} and ${names[1]} like this`;
      case 3: 
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default: 
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }
  */

function findOutlier(arr) {
    let par = 0;
    let inpar = 0;
    let outlier_number;

    // Método para saber si es arreglo de pares ó inpares
    for(let i = 0; i < 3; i++){
        if(arr[i] % 2 == 0 || arr[i] == 0) {
            par++;
        } else {
            inpar++;
        }
    }

    // Arreglo de pares
    if(par > inpar) {
        outlier_number = arr.filter(num => num % 2 != 0);
    } else {  // Arrelgo de inpares
        outlier_number = arr.filter(num => num % 2 == 0) ;
    }

    return Number(outlier_number[0]);
}

// findOutlier([0,1,2]);

function opposite(number) {
    if(number > 0) {
      return -Math.abs(number);
    } else {
      return Math.abs(number);
     }
  }

  // opposite(5);

  function hightAndLow(text) {
    var arr_numbers = [];
    var max = 0;
    var arr = text.split(" ");
    // For to convert string to numbers
    for (var i = 0; i < arr.length; i++) {
        arr_numbers[i] = arr[i];
    }
    for (var i = 0; i < arr_numbers.length; i++) {
        if (arr_numbers[i] > max) {
            max = arr_numbers[i];
        }
    }
    // console.log(arr_number);
    console.log(max);
}
// hightAndLow("1 2 3 4 5");

function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;
    if(walk.length == 10) {
        for(let i = 0; i < walk.length; i++) {
            if(walk[i] === "n") n++;
            if(walk[i] === "s") s++;
            if(walk[i] === "w") w++;
            if(walk[i] === "e") e++;
        }

        if(n > 0 && s > 0 && w > 0 && e > 0 ) {
            for(let i = 0; i < walk.length; i++) {
                if(walk[i] === "n") n++;
                if(walk[i] === "s") s--;
                if(walk[i] === "w") w--;
                if(walk[i] === "e") e++;
            }
            if(n + s + w + e === 10) {
                return true;
            } else {
                return false;
            }
        }

        if(n === 5 && s === 5 || w === 5 && e === 5) {
            if((n + s) === 10 || (w + e) === 10) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n']); // false
isValidWalk([ 'e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w' ]); // true
isValidWalk([ 'n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's' ]); // true