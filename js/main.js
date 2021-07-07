// check for device size ( 768px targets mobile devices and upwards to iPad's )
const responsive = window.matchMedia('(max-width: 768px)');


if (responsive.matches) {
    var firstN = new Blotter.Text("MICHAEL JARRAH", {  // if device is responsive, decrease font size and padding
        family : "'Roboto', sans-serif",
        size : 41,
        weight : 900,
        fill : "#4d4445",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 15
    });
}
else {
    var firstN = new Blotter.Text("MICHAEL JARRAH", {  // else increase font size and padding for computers
        family : "arial",
        size : 65,
        weight : 950,
        fill : "#4d4445",
        paddingLeft: 30,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 30
    });
}

// refer 'https://blotter.js.org/#/documentation'
var material = new Blotter.FliesMaterial();

if (responsive.matches) {
    material.uniforms.uSpeed.value = 2;
    material.uniforms.uPointRadius.value = 1;
    material.uniforms.uPointCellWidth.value = 0.02;

    // material.uniforms.uVolatility.value = 0.05;
    // material.uniforms.uSeed.value = 0.5;
}
else {
    material.uniforms.uSpeed.value = 5;
    material.uniforms.uPointRadius.value = 0.8;
    material.uniforms.uPointCellWidth.value = 0.025;
    // material.uniforms.uVolatility.value = 0.1;
    // material.uniforms.uSeed.value = 0.0;
}


var blotter = new Blotter(material, { 
    texts : firstN
});

var elem = document.getElementById("name");
var scope = blotter.forText(firstN);

scope.appendTo(elem);

//  end blotter ------------------------

var colors = ['#74b8c7', '#9ebb9c', '#bfd387', '#f5cff8', '#dca6bf', '#97a8d3', '#d2abee'];
var selected = colors[Math.floor(Math.random() * colors.length)];



function changeBackgroundColor() {
    document.body.style.backgroundColor = selected;
}

window.onload = changeBackgroundColor();