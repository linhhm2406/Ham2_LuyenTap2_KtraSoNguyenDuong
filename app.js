function checkPositiveInteger(number) {
    let conclude;
    if (number === 0) {
        conclude = 'So 0, khong nam trong mien xet so nguyen duong/am';
    } else if (number > 0) {
        conclude = true;
    } else {
        conclude = false;
    }
    return conclude;
}

let input_number = parseInt(prompt('Nhap vao so nguyen'));
let result = checkPositiveInteger(input_number);
alert(result);