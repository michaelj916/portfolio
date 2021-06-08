var text = new Blotter.Text("MICHAEL JARRAH", {
    family : "monospace",
    size : 35,
    weight : 950,
    fill : "#221d1d",
    paddingLeft: 10,
    paddingRight: 10
});

var material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.25;

var blotter = new Blotter(material, { 
    texts : text
});

var elem = document.getElementById("name");
var scope = blotter.forText(text);

scope.appendTo(elem);