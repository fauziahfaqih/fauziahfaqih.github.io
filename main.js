var tampil = document.formAngka.isiText;
function ins(num) {
 tampil.value += num;
}
function hapusAll(){
	tampil.value = "";
}
function bcksp(){
	tampil.value = tampil.value.substr(0,tampil.value.length-1);
}
function samaDengan(){
	tampil.value = eval(tampil.value);
}
