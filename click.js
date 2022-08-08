var msg ='<div class=\"header\"><a id=\"close\" href="#">close X</a></div>;
    msg +=    '<div><h2>System Maintenance</h2>';
    msg += 'Our servers are being updated between 3 and 4 a.m.';
    msg += 'During this time , there may be minor disruptinons to service.</div>';
var elNode= document.createElement('div');
elNode.setAttribute('id','note');
elNode.innerHTML='msg';
document.body.appendChild(alNode);
function dismissNote(){
    document.body.removeChild(elNode);
}
var elClose = document.getElementById('close');
elClose.addEventListener('click',dismissNode,false);