function a(){
    console.log('hola desde a');
}
function b(){
    console.log('hola desde b');
}
function main(fn) {
    console.log('hola desde main');
    fn();
}
console.log('\nfuncion main(a):')
main(a);
console.log('\nfuncion main(b):')
main(b);
console.log('\nfuncion main(main):')
main(main);

