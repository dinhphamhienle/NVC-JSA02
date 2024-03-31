// For loop

// expression1: gtri khởi tạo
// expression2: đk lặp
// expression3: kết thúc vòng lặp
// for (expression1; expression2; expression3) {
//     console.log ()
// }



// While 

// while (condition)
// let i = 0;
// while (i <= 19) {
//     console.log(i);
//     i++;
// *kt đk -> thực hiện code
// }



// Do - while

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);
// * thực hiện code -> kt đk => thực hiện code 1 lần nếu đk ko đúng


// hiển thị ô để người dùng nhập tuổi

let age;

do {
    age = prompt('vui lòng nhập tuổi của bạn');
} while (age < 6 || age > 90);

//bt1: yc ng dùng nhập 1 số dương n, sau đó tính: tổng từ 1 -> n; in ra màn hình các số chắn từ 1 -> n; tính 1 / 1 + 1 / 2 + ... + 1 / n

let n;

do {
    n = prompt('nhập số n')
} while (n <= 0)

let s = 0;
let p = 0
for (let i = 0; i <= n; i++) {
    s = s + i;
}

for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

for (let i = 1; i <= n; i++) {
    p = p + 1/i;
}

