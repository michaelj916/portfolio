// check for device size ( 768px targets mobile devices and upwards to iPad's )
var responsive = window.matchMedia("(max-width: 768px)");


if (responsive.matches) {
    var firstN = new Blotter.Text("MICHAEL JARRAH", {  // if device is responsive, decrease font size and padding
        family : "'Roboto', sans-serif",
        size : 40,
        weight : 900,
        fill : "#4d4445",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0
    });
}
else {
    var firstN = new Blotter.Text("MICHAEL JARRAH", {  // else increase font size and padding for computers
        family : "arial",
        size : 75,
        weight : 950,
        fill : "#4d4445",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
        paddingBottom: 30
    });
}

// refer 'https://blotter.js.org/#/documentation'
var material = new Blotter.LiquidDistortMaterial();

if (responsive.matches) {
    material.uniforms.uSpeed.value = 0.2;
    material.uniforms.uVolatility.value = 0.05;
    material.uniforms.uSeed.value = 0.5;
}
else {
    material.uniforms.uSpeed.value = 0.2;
    material.uniforms.uVolatility.value = 0.1;
    material.uniforms.uSeed.value = 0.0;
}


var blotter = new Blotter(material, { 
    texts : firstN
});

var elem = document.getElementById("name");
var scope = blotter.forText(firstN);

scope.appendTo(elem);



/* --------------------------------------------------------------------------------------- */

