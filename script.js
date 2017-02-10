
                 // Append <button> to <body>
function createDiv() {
    var btn = document.createElement("DIV");        // Create a <button> element
    var t = document.createTextNode("CLICK ME");       // Create a text node
    btn.appendChild(t);
    btn.style.backgroundColor = "gray";
    document.getElementById("map_area").appendChild(btn);

}


function createDiv2() {
	var cols=10,
    rows=8,
    wid=40,
    hei=40,
    d=document.createElement('div');
	d.className='cell';
	d.style.width=wid+'px';
	d.style.height=hei+'px';
	for(var i=0; i<cols*rows; i++) {
		d.id = i;
        var c=d.cloneNode(false);
        c.style.top=Math.floor(i/cols)*hei+'px';
        c.style.left=i%cols*wid+'px';
        document.body.appendChild(c);
    }
}