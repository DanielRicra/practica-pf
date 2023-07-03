
function numToBin(number){
    let bin = []
    while (number / 2 >= 1) {
        bin.push(number % 2);
        number = Math.floor(number / 2);
    }
    return bin.reverse().join("");
}

function numToHexa(number){
    let hexa = []
    while(number / 16 > 15){
        aux = number % hexa
        switch(aux){
            case 10:
                hexa.push('A')
                break;
            case 11:
                hexa.push('B')
                break;
            case 12:
                hexa.push('C')
                break;
            case 13:
                hexa.push('D')
                break;
            case 14:
                hexa.push('E')
                break;
            case 15:
                hexa.push('F')
                break;
            default:
                hexa.push(aux)
                break;
        }
        number = Math.floor(number / 16);
    }
    switch(number){
        case 10:
            hexa.push('A')
            break;
        case 11:
            hexa.push('B')
            break;
        case 12:
            hexa.push('C')
            break;
        case 13:
            hexa.push('D')
            break;
        case 14:
            hexa.push('E')
            break;
        case 15:
            hexa.push('F')
            break;
        default:
            hexa.push(number)
            break;
    }
    return hexa.reverse().join("");
}

<<<<<<< HEAD
function Francisco(){
    return {
        name: 'Francisco',
        age: 26,
        nationality: 'Argentino'
    }
}
=======
>>>>>>> 9b5698c0b5b4fb05e31cff5553f37caeb8624a67
