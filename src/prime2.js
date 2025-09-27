var currentSeed;
var templePoints = 0;
var greatTemplePoints = 0;
var argonPoints = 0;
var torvusPoints = 0;
var sanctuaryPoints = 0;
var skyTemplePoints = 0;
var dArgonPoints = 0;
var dTorvusPoints = 0;
var ingPoints = 0;

var templeChecks = new Array();
var greatTempleChecks = new Array();
var argonChecks = new Array();
var torvusChecks = new Array();
var sanctuaryChecks = new Array();
var skyTempleChecks = new Array();
var dargonChecks = new Array();
var dtorvusChecks = new Array();
var ingChecks = new Array();

var loadSeed = function (event) {
    let file = document.getElementById('file-input');
    event.preventDefault();
    if (!file.value.length) {
        return;
    } else {
        if (file.value.toString().substring(file.value.length - 5) == '.json') {
            document.getElementById('seedName').innerHTML = file.value.toString().substring(12, file.value.length - 13);
        }
        let reader = new FileReader();
        reader.onload = logFile;
        reader.readAsText(file.files[0]);
    }
};

function logFile(event) {
    let str = event.target['result'].replace(/[\r\n]+/g, "");
    currentSeed = JSON.parse(str);
    templePoints = 0;
    greatTemplePoints = 0;
    argonPoints = 0;
    torvusPoints = 0;
    sanctuaryPoints = 0;
    skyTemplePoints = 0;
    dArgonPoints = 0;
    dTorvusPoints = 0;
    ingPoints = 0;

    calcPoints();
}

function calcPoints() {
    console.log(currentSeed);
    /*Come back to this
    startingItems();
    */

    //Parse Temple Grounds
    templeChecks = currentSeed['game_modifications'][0]["locations"]["Temple Grounds"];
    for (i in templeChecks) {
        if (sevenChecks.includes(templeChecks[i])) {
            templePoints += 7
        }
        if (fiveChecks.includes(templeChecks[i])) {
            templePoints += 5
        }
        if (threeChecks.includes(templeChecks[i])) {
            templePoints += 3
        }
        //console.log(templeChecks[i], templePoints); //Keep for debugging
    }

    //Parse Great Temple Grounds
    greatTempleChecks = currentSeed['game_modifications'][0]["locations"]["Great Temple"];
    for (i in greatTempleChecks) {
        if (sevenChecks.includes(greatTempleChecks[i])) {
            greatTemplePoints += 7
        }
        if (fiveChecks.includes(greatTempleChecks[i])) {
            greatTemplePoints += 5
        }
        if (threeChecks.includes(greatTempleChecks[i])) {
            greatTemplePoints += 3
        }
        //console.log(greatTempleChecks[i], greatTemplePoints); //Keep for debugging
    }

    //Parse Agon Wastes
    argonChecks = currentSeed['game_modifications'][0]["locations"]["Agon Wastes"];
    for (i in argonChecks) {
        if (sevenChecks.includes(argonChecks[i])) {
            argonPoints += 7
        }
        if (fiveChecks.includes(argonChecks[i])) {
            argonPoints += 5
        }
        if (threeChecks.includes(argonChecks[i])) {
            argonPoints += 3
        }
        console.log(argonChecks[i], argonPoints); //Keep for debugging
    }

    displayPoints();
}

function points(location, amount) {
    if (location == 'temple') {
        templePoints += amount;
    }
    if (location == 'greatTemple') {
        greatTemplePoints += amount;
    }
    if (location == 'argon') {
        argonPoints += amount;
    }
    if (location == 'torvus') {
        torvusPoints += amount;
    }
    if (location == 'sanctuary') {
        sanctuaryPoints += amount;
    }
    if (location == 'skyTemple') {
        skyTemplePoints += amount;
    }
    if (location == 'dArgon') {
        dArgonPoints += amount;
    }
    if (location == 'dTorvus') {
        dTorvusPoints += amount;
    }
    if (location == 'ing') {
        ingPoints += amount;
    }
    displayPoints();
}

function displayPoints() {
    if (templePoints == 0) {
        document.getElementById('templePT').innerHTML = '<span style="color:red">' + templePoints + '</span>';
    } else {
        document.getElementById('templePT').innerHTML = templePoints;
    }
    if (greatTemplePoints == 0) {
        document.getElementById('greatTemplePT').innerHTML = '<span style="color:red">' + greatTemplePoints + '</span>';
    } else {
        document.getElementById('greatTemplePT').innerHTML = greatTemplePoints;
    }
    if (argonPoints == 0) {
        document.getElementById('argonPT').innerHTML = '<span style="color:red">' + argonPoints + '</span>';
    } else {
        document.getElementById('argonPT').innerHTML = argonPoints;
    }
    if (torvusPoints == 0) {
        document.getElementById('torvusPT').innerHTML = '<span style="color:red">' + torvusPoints + '</span>';
    } else {
        document.getElementById('torvusPT').innerHTML = torvusPoints;
    }
    if (sanctuaryPoints == 0) {
        document.getElementById('sanctuaryPT').innerHTML = '<span style="color:red">' + sanctuaryPoints + '</span>';
    } else {
        document.getElementById('sanctuaryPT').innerHTML = sanctuaryPoints;
    }
    if (skyTemplePoints == 0) {
        document.getElementById('skyTemplePT').innerHTML = '<span style="color:red">' + skyTemplePoints + '</span>';
    } else {
        document.getElementById('skyTemplePT').innerHTML = skyTemplePoints;
    }
    if (dArgonPoints == 0) {
        document.getElementById('dArgonPT').innerHTML = '<span style="color:red">' + dArgonPoints + '</span>';
    } else {
        document.getElementById('dArgonPT').innerHTML = dArgonPoints;
    }
    if (dTorvusPoints == 0) {
        document.getElementById('dTorvusPT').innerHTML = '<span style="color:red">' + dTorvusPoints + '</span>';
    } else {
        document.getElementById('dTorvusPT').innerHTML = dTorvusPoints;
    }
    if (ingPoints == 0) {
        document.getElementById('ingPT').innerHTML = '<span style="color:red">' + ingPoints + '</span>';
    } else {
        document.getElementById('ingPT').innerHTML = ingPoints;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    var data = ev.target.id;
    if (ev.target.parentNode.id == 'temple' || 'greatTemple' || 'argon' || 'torvus' || 'sanctuary' || 'skyTemple' || 'dArgon' || 'dTorvus' || 'ing') {
        if (data.startsWith('seven')) {
            points(ev.target.parentNode.id, 7);
        }
        if (data.startsWith('five')) {
            points(ev.target.parentNode.id, 5);
        }
        if (data.startsWith('three')) {
            points(ev.target.parentNode.id, 3);
        }
    }
}

//Variable Tracker for dropping items (Setting ID high enough to not cause issues)
var dropVarId = 9000000;

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    var id = ev.target.id;
    var parent = ev.target.parentNode.id;

    //Manipulate Clone Data
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = dropVarId;
    nodeCopy.setAttribute('onmousedown', 'returnToPosition(event)')
    dropVarId += 1;
    var ptValue = nodeCopy.getAttribute('points'); //Get points Attribute to Calculate

    if (id == 'temple' || 'greatTemple' || 'argon' || 'torvus' || 'sanctuary' || 'skyTemple' || 'dArgon' || 'dTorvus' || 'ing' || id == 'starting') {
        ev.target.appendChild(nodeCopy);
    } else if (parseInt(id)) {
        //ev.target.appendChild(document.getElementById(data));
    } else {
        document.getElementById(parent).appendChild(nodeCopy);
    }
    if (id == 'temple' || 'greatTemple' || 'argon' || 'torvus' || 'sanctuary' || 'skyTemple' || 'dArgon' || 'dTorvus' || 'ing') {
        if (ptValue.startsWith('seven')) {
            points(ev.target.id, -7);
        }
        if (ptValue.startsWith('five')) {
            points(ev.target.id, -5);
        }
        if (ptValue.startsWith('three')) {
            points(ev.target.id, -3);
        }
    }
    if (parent == 'temple' || 'greatTemple' || 'argon' || 'torvus' || 'sanctuary' || 'skyTemple' || 'dArgon' || 'dTorvus' || 'ing') {
        if (ptValue.startsWith('seven')) {
            points(parent, -7);
        }
        if (ptValue.startsWith('five')) {
            points(parent, -5);
        }
        if (ptValue.startsWith('three')) {
            points(parent, -3);
        }
    }
}

function startingItems() {
    var list = [];
    var artList = [];
    for (var i = 0; i < startingItemsList.length; i++) {
        if (currentSeed['gameConfig']['startingItems'][startingItemsList[i]] == false || currentSeed['gameConfig']['startingItems'][startingItemsList[i]] == 0) {
            list[i] = 0;
        } else {
            list[i] = 1;
        }
    }
    for (var j = 0; j < list.length; j++) {
        if (list[j] == 0) {

        } else {
            document.getElementById('starting').appendChild(document.getElementById(imgList[j]));
        }
    }

    for (var k = 0; k < artifactList.length; k++) {
        if (currentSeed['gameConfig']['artifactTempleLayerOverrides'][artifactList[k]] == false) {
            artList[k] = 0;
        } else {
            artList[k] = 1;
        }
    }
    for (var l = 1; l < artList.length + 1; l++) {
        var variable = 'artifact' + l;
        if (artList[(l - 1)] == 0) {
            document.getElementById('starting').appendChild(document.getElementById(variable));
        } else {
        }
    }
}

function returnToPosition(ev) {
    //Get current click
    const clickedElementId = ev.target.id;

    //Get data for points
    var data = document.getElementById(clickedElementId).getAttribute('points');

    //Adjust Points
    var parent = ev.target.parentNode.id;
    if (parent == 'temple' || 'greatTemple' || 'argon' || 'torvus' || 'sanctuary' || 'skyTemple' || 'dArgon' || 'dTorvus' || 'ing') {
        if (data.startsWith('seven')) {
            points(parent, 7);
        }
        if (data.startsWith('five')) {
            points(parent, 5);
        }
        if (data.startsWith('three')) {
            points(parent, 3);
        }
    }

    //Remove Element
    document.getElementById(clickedElementId).remove();
}