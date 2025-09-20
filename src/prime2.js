var currentSeed;
var chozoPoints = 0;
var magPoints = 0;
var phazonPoints = 0;
var phenPoints = 0;
var tallonPoints = 0;

var chozoChecks = new Array();
var magmoorChecks = new Array();
var phazonChecks = new Array();
var phendranaChecks = new Array();
var tallonChecks = new Array();

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
        console.log(reader);
        reader.onload = logFile;
        reader.readAsText(file.files[0]);
    }
};

function logFile(event) {
    let str = event.target.result;
    currentSeed = JSON.parse(str);
    chozoPoints = 0;
    magPoints = 0;
    phazonPoints = 0;
    phenPoints = 0;
    tallonPoints = 0;

    calcPoints();
}

function calcPoints() {
    startingItems();

    //Parse Chozo Ruins
    var chozoChecksTemp = currentSeed['levelData']['Chozo Ruins']['rooms'];
    for (i in chozoChecksTemp) {
        if (chozoChecksTemp[i]['pickups']) {
            for (j in chozoChecksTemp[i]['pickups'])
                chozoChecks.push(chozoChecksTemp[i]['pickups'][j]['model']);
        }
    }

    // Assign Points (Chozo Ruins)
    for (i in chozoChecks) {
        if (sevenChecks.includes(chozoChecks[i])) {
            chozoPoints += 7;
        }
        if (fiveChecks.includes(chozoChecks[i])) {
            chozoPoints += 5;
        }
        if (threeChecks.includes(chozoChecks[i])) {
            chozoPoints += 3;
        }
    }

    //Parse Magmoor Caverns
    var magmoorChecksTemp = currentSeed['levelData']['Magmoor Caverns']['rooms'];
    for (i in magmoorChecksTemp) {
        if (magmoorChecksTemp[i]['pickups']) {
            for (j in magmoorChecksTemp[i]['pickups'])
                magmoorChecks.push(magmoorChecksTemp[i]['pickups'][j]['model']);
        }
    }

    // Assign Points (Magmoor Caverns)
    for (i in magmoorChecks) {
        if (sevenChecks.includes(magmoorChecks[i])) {
            magPoints += 7;
        }
        if (fiveChecks.includes(magmoorChecks[i])) {
            magPoints += 5;
        }
        if (threeChecks.includes(magmoorChecks[i])) {
            magPoints += 3;
        }
    }

    //Parse Phazon Mines
    var phazonChecksTemp = currentSeed['levelData']['Phazon Mines']['rooms'];
    for (i in phazonChecksTemp) {
        if (phazonChecksTemp[i]['pickups']) {
            for (j in phazonChecksTemp[i]['pickups'])
                phazonChecks.push(phazonChecksTemp[i]['pickups'][j]['model']);
        }
    }

    // Assign Points (Phazon Mines)
    for (i in phazonChecks) {
        if (sevenChecks.includes(phazonChecks[i])) {
            phazonPoints += 7;
        }
        if (fiveChecks.includes(phazonChecks[i])) {
            phazonPoints += 5;
        }
        if (threeChecks.includes(phazonChecks[i])) {
            phazonPoints += 3;
        }
    }

    //Parse Phendrana Drifts
    var phendranaChecksTemp = currentSeed['levelData']['Phendrana Drifts']['rooms'];
    for (i in phendranaChecksTemp) {
        if (phendranaChecksTemp[i]['pickups']) {
            for (j in phendranaChecksTemp[i]['pickups'])
                phendranaChecks.push(phendranaChecksTemp[i]['pickups'][j]['model']);
        }
    }

    // Assign Points (Phendrana Drifts)
    for (i in phendranaChecks) {
        if (sevenChecks.includes(phendranaChecks[i])) {
            phenPoints += 7;
        }
        if (fiveChecks.includes(phendranaChecks[i])) {
            phenPoints += 5;
        }
        if (threeChecks.includes(phendranaChecks[i])) {
            phenPoints += 3;
        }
    }

    //Parse Tallon Overworld
    var tallonChecksTemp = currentSeed['levelData']['Tallon Overworld']['rooms'];
    for (i in tallonChecksTemp) {
        if (tallonChecksTemp[i]['pickups']) {
            for (j in tallonChecksTemp[i]['pickups'])
                tallonChecks.push(tallonChecksTemp[i]['pickups'][j]['model']);
        }
    }

    // Assign Points (Phendrana Drifts)
    for (i in tallonChecks) {
        if (sevenChecks.includes(tallonChecks[i])) {
            tallonPoints += 7;
        }
        if (fiveChecks.includes(tallonChecks[i])) {
            tallonPoints += 5;
        }
        if (threeChecks.includes(tallonChecks[i])) {
            tallonPoints += 3;
        }
    }

    displayPoints();
}

function points(location, amount) {
    if (location == 'chozo') {
        chozoPoints += amount;
    }
    if (location == 'magmoor') {
        magPoints += amount;
    }
    if (location == 'phazon') {
        phazonPoints += amount;
    }
    if (location == 'phendrana') {
        phenPoints += amount;
    }
    if (location == 'tallon') {
        tallonPoints += amount;
    }
    displayPoints();
}

function displayPoints() {
    if (chozoPoints == 0) {
        document.getElementById('chozoPT').innerHTML = '<span style="color:red">' + chozoPoints + '</span>';
    } else {
        document.getElementById('chozoPT').innerHTML = chozoPoints;
    }
    if (magPoints == 0) {
        document.getElementById('magmoorPT').innerHTML = '<span style="color:red">' + magPoints + '</span>';
    } else {
        document.getElementById('magmoorPT').innerHTML = magPoints;
    }
    if (phazonPoints == 0) {
        document.getElementById('phazonPT').innerHTML = '<span style="color:red">' + phazonPoints + '</span>';
    } else {
        document.getElementById('phazonPT').innerHTML = phazonPoints;
    }
    if (phenPoints == 0) {
        document.getElementById('phendranaPT').innerHTML = '<span style="color:red">' + phenPoints + '</span>';
    } else {
        document.getElementById('phendranaPT').innerHTML = phenPoints;
    }
    if (tallonPoints == 0) {
        document.getElementById('tallonPT').innerHTML = '<span style="color:red">' + tallonPoints + '</span>';
    } else {
        document.getElementById('tallonPT').innerHTML = tallonPoints;
    }
    /*document.getElementById('magmoorPT').innerHTML = magPoints;
    document.getElementById('phazonPT').innerHTML = phazonPoints;
    document.getElementById('phendranaPT').innerHTML = phenPoints;
    document.getElementById('tallonPT').innerHTML = tallonPoints;*/
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    var data = ev.target.id;
    if (ev.target.parentNode.id == 'chozo' || 'magmoor' || 'phazon' || 'phendrana' || 'tallon') {
        if (data.startsWith('suit') || data.startsWith('artifact')) {
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
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    var id = ev.target.id;
    var parent = ev.target.parentNode.id;
    if (id == 'chozo' || id == 'magmoor' || id == 'phazon' || id == 'phendrana' || id == 'tallon' || id == 'starting') {
        ev.target.appendChild(document.getElementById(data));
    } else if (parseInt(id)) {
        ev.target.appendChild(document.getElementById(data));
    } else {
        document.getElementById(parent).appendChild(document.getElementById(data));
    }
    if (id == 'chozo' || id == 'magmoor' || id == 'phazon' || id == 'phendrana' || id == 'tallon') {
        if (data.startsWith('suit') || data.startsWith('artifact')) {
            points(ev.target.id, -7);
        }
        if (data.startsWith('five')) {
            points(ev.target.id, -5);
        }
        if (data.startsWith('three')) {
            points(ev.target.id, -3);
        }
    }
    if (parent == 'chozo' || parent == 'magmoor' || parent == 'phazon' || parent == 'phendrana' || parent == 'tallon') {
        if (data.startsWith('suit') || data.startsWith('artifact')) {
            points(parent, -7);
        }
        if (data.startsWith('five')) {
            points(parent, -5);
        }
        if (data.startsWith('three')) {
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

function returnToPosition() {

}