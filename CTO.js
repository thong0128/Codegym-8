function bai1() {
    let a = prompt('Nhập vào số a');
    let b = prompt('Nhập vào số b');
    let result = ((a + b) < 4) ? 'Below' : 'Over';
    document.write(result)
}
function bai2() {
    let login = prompt('Enter:');
    let message = (login =='Employee')?'Hello':(login == 'Director')?'Greeting':(login == '')?'No login':'';
    alert(message);
}