function cTID(s) {
    return charIDToTypeID(s);
}

function sTID(s) {
    return stringIDToTypeID(s);
}

function ungroupLayerset() {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    m_Dsc01.putReference(cTID("null"), m_Ref01);
    executeAction(sTID("ungroupLayersEvent"), m_Dsc01, DialogModes.NO);
}

function groupLayerset() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putClass(stringIDToTypeID('layerSection'));
    desc.putReference(charIDToTypeID('null'), ref);
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    desc.putReference(charIDToTypeID('From'), ref);
    executeAction(charIDToTypeID('Mk  '), desc, DialogModes.NO);
};

groupLayerset();

var newGroup = app.activeDocument.activeLayer.duplicate();
var docWidth = activeDocument.width;
var groupX = newGroup.bounds[0];
if (groupX < 0) {
    newGroup.translate(docWidth, 0);
} else {
    newGroup.translate(-docWidth, 0);
}

ungroupLayerset();
