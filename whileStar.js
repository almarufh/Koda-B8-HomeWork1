let x = 1;
while ( x <= 4) {
    let y = 1;
    let star = ""
    while ( y <= x) {
        star += "*";
        y++;
    }
    console.log(star)
    x++;
}