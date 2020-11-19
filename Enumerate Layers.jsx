var doc = app.activeDocument;

function getName(group, i) {
    return group === doc ? i : (group.name) + '.' + i;
}

function renameLayers (group) {
    for (var i = 1; i <= group.layers.length; i++) {
        var layer = group.layers[i - 1];
        layer.name = getName(group, i);
        if (layer.typename !== "ArtLayer") { // layer group
            renameLayers(layer);
        }
    }
}

renameLayers(doc);
