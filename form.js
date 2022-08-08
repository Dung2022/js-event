var elForm, elSelectPackage,elPackageHint,elTerm,elTermHint;
elForm=document.getElementById('formSignup');
elSelectPackage=document.getElementById('package');
elPackageHint=document.getElementById('packageHint');
elTerm=document.getElementById('terms');
elTermHint=document.getElementById('termsHint');

function pakageHint(){
    var pack= this.options[this.selectedIndex].value;
    if(pack=='mothly'){
        elPackageHint.innerHTML='Save $10 if you pay for 1 year!';
    }else {
        elPackageHint.innerHTML='Wise choice!';
    }
}
function chekTerm(event){
    if(!elTerm.checked){
        elPackageHint.innerHTML='You must agree to the terms';
    }
}
elForm.addEventListener('submit',chekTerm,false);
elSelectPackage.addEventListener('change',pakageHint,false);