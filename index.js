//Bài tập 1: Tìm số nguyên dương nhỏ nhất
/*
input: biến sum
output: giá trị i tại biến sum <10000
process: 
        1.duyệt mảng từ i = 0 đến i < 10000, i++
        2. Sau mỗi lần lặp, sum = sum + i
        3.Cho lệnh break khi sum >= 10000
        4.In giá trị ra thẻ kết quả
*/
document.getElementById('btn1').onclick = function(){
    var sum = 0;
    for (var i = 0; i < 10000; i++){
        sum += i;
        if (sum >= 10000){
            document.getElementById('resBT1').innerHTML = 'Giá trị nhỏ nhất là: '+i;
            break;
        }
    }

}


//Bài tập 2: Tính tổng 
/*
input: số x, số n
output: tổng
process: 
        1: i = 1, i <= x, i++
        2: tổng += math.pow(n,i)  
        3: Xuất tổng ra kết quả
*/

document.getElementById('btn2').onclick = function(){
    var x = document.getElementById('input1BT2').value;
    var n = document.getElementById('input2BT2').value;
    var tong = 0;
    for (var i = 1; i <= x; i++){
        tong += Math.pow(n,i); 
    }
    document.getElementById('resBT2').innerHTML = 'Giá trị tổng là: '+ tong;
}


//Bài tập 3: Tính giai thừa
/*
input: n
output: giai thừa
process: 
    1: tạo biến bước nhảy i
    2: i = 1; i <= n; i++
    3: giai thừa *= i
    4: in giai thừa ra kết quả
*/
document.getElementById('btn3').onclick = function(){
    var n = document.getElementById('inputBT3').value;
    var factorial = 1;
    for (var i = 1; i <= n; i++){
        factorial *= i;
    }
    document.getElementById('resBT3').innerHTML = 'Kết quả là: ' + factorial;
}


//Bài tập 4: In thẻ div
/*
input: biến bước nhảy i
output: in thẻ div ra màn hình
process:
         1: Tạo biến lưu thẻ div
         2: i = 1; i <= 10; i++
         3: if i % 2 === 0 => biến div.style.background.color = blue => .innerhtml
         4: if i % 2 !== 0 => biến div.style.background.color = red => .innerhtml
*/

document.getElementById('btn4').onclick = function(){
    for (var i = 1; i <= 10; i++){
        var content = document.createElement('DIV');
        if (i % 2 !== 0){
            content.style.background = 'blue';
            content.innerHTML = 'Div chẵn '+ i;
            document.body.appendChild(content);
            content ++;
        }else{
            content.style.background = 'red';
            content.innerHTML = 'Div lẻ '+ i;
            document.body.appendChild(content);
            content ++;
        }
        
    }
}
