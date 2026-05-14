let x = 1;
do {
    let y = 1;
    let star = "";
    do {
        star += "*"
        y++
    } while (y <= x)
    console.log(star)
    x++
} while ( x <= 4 )