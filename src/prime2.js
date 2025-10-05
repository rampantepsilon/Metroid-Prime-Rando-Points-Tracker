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

var choice;

var loadSeed = function (event) {
    let file = document.getElementById('file-input');
    event.preventDefault();
    if (!file.value.length) {
        return;
    } else {
        /*if (file.value.toString().substring(file.value.length - 5) == '.rdvgame') {
            document.getElementById('seedName').innerHTML = file.value.toString().substring(12, file.value.length - 13);
        }*/ //Changed to later in script (might come back to this)
        let reader = new FileReader();
        reader.onload = logFile;
        reader.readAsText(file.files[0]);
    }
};

function logFile(event) {
    //Remove Input Button Add Reload Button
    document.getElementById('inputButton').innerHTML = `<input type="button" value="Reload Seed" onclick="window.location.reload()" />`

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

    //Set seedName
    if (currentSeed['info']['randovania_version']) {
        document.getElementById('randovania').innerHTML = 'Randovania ' + currentSeed['info']['randovania_version'] + " [Prime 2]"
        document.getElementById('seedName').innerHTML = currentSeed['info']['word_hash']
    } else {
        document.getElementById('randovania').innerHTML = 'Randovania (Unknown) [Prime 2]'
        document.getElementById('seedName').innerHTML = currentSeed['info']['word_hash']
    }

    calcPoints();
}

function calcPoints() {
    startingItems();

    //Get Optional Checks Choice
    var options = document.getElementsByName('1pt');
    for (i = 0; i < options.length; i++) {
        if (options[i].checked) {
            choice = options[i].value;
        }
    }

    //Parse Check Information 10.1.0 and newer
    var tempChecks = currentSeed['game_modifications'][0]['locations']

    for (i in tempChecks) {
        if (tempChecks[i]['node_identifier']['region'] == 'Temple Grounds') {
            templeChecks.push(tempChecks[i]['pickup'])
        }
        if (tempChecks[i]['node_identifier']['region'] == 'Great Temple') {
            greatTempleChecks.push(tempChecks[i]['pickup'])
        }
        if (tempChecks[i]['node_identifier']['region'] == 'Agon Wastes') {
            argonChecks.push(tempChecks[i]['pickup'])
        }
        if (tempChecks[i]['node_identifier']['region'] == 'Torvus Bog') {
            torvusChecks.push(tempChecks[i]['pickup'])
        }
        if (tempChecks[i]['node_identifier']['region'] == 'Sanctuary Fortress') {
            sanctuaryChecks.push(tempChecks[i]['pickup'])
        }
        if (tempChecks[i]['node_identifier']['region'] == 'Sky Temple Grounds') {
            skyTempleChecks.push(tempChecks[i]['pickup'])
        }
        if (tempChecks[i]['node_identifier']['region'] == 'Dark Agon Wastes') {
            dargonChecks.push(tempChecks[i]['pickup'])
        }
        if (tempChecks[i]['node_identifier']['region'] == 'Dark Torvus Bog') {
            dtorvusChecks.push(tempChecks[i]['pickup'])
        }
        if (tempChecks[i]['node_identifier']['region'] == 'Ing Hive') {
            ingChecks.push(tempChecks[i]['pickup'])
        }
    }

    //Assign Points Temple Grounds
    for (i in templeChecks) {
        if (sevenChecks.includes(templeChecks[i])) {
            templePoints += 9
        }
        if (fiveChecks.includes(templeChecks[i])) {
            templePoints += 7
        }
        if (threeChecks.includes(templeChecks[i])) {
            templePoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(templeChecks[i])) {
                templePoints += 3
            }
        }
        //console.log(templeChecks[i], templePoints); //Keep for debugging
    }

    //Assign Points Great Temple Grounds
    for (i in greatTempleChecks) {
        if (sevenChecks.includes(greatTempleChecks[i])) {
            greatTemplePoints += 9
        }
        if (fiveChecks.includes(greatTempleChecks[i])) {
            greatTemplePoints += 7
        }
        if (threeChecks.includes(greatTempleChecks[i])) {
            greatTemplePoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(greatTempleChecks[i])) {
                greatTemplePoints += 3
            }
        }
        //console.log(greatTempleChecks[i], greatTemplePoints); //Keep for debugging
    }

    //Assign Points Agon Wastes
    for (i in argonChecks) {
        if (sevenChecks.includes(argonChecks[i])) {
            argonPoints += 9
        }
        if (fiveChecks.includes(argonChecks[i])) {
            argonPoints += 7
        }
        if (threeChecks.includes(argonChecks[i])) {
            argonPoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(argonChecks[i])) {
                argonPoints += 3
            }
        }
        //console.log(argonChecks[i], argonPoints); //Keep for debugging
    }

    //Assign Points Torvus Bog
    for (i in torvusChecks) {
        if (sevenChecks.includes(torvusChecks[i])) {
            torvusPoints += 9
        }
        if (fiveChecks.includes(torvusChecks[i])) {
            torvusPoints += 7
        }
        if (threeChecks.includes(torvusChecks[i])) {
            torvusPoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(torvusChecks[i])) {
                torvusPoints += 3
            }
        }
        //console.log(torvusChecks[i], torvusPoints); //Keep for debugging
    }

    //Assign Points Sanctuary Fortress
    for (i in sanctuaryChecks) {
        if (sevenChecks.includes(sanctuaryChecks[i])) {
            sanctuaryPoints += 9
        }
        if (fiveChecks.includes(sanctuaryChecks[i])) {
            sanctuaryPoints += 7
        }
        if (threeChecks.includes(sanctuaryChecks[i])) {
            sanctuaryPoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(sanctuaryChecks[i])) {
                sanctuaryPoints += 3
            }
        }
        //console.log(sanctuaryChecks[i], sanctuaryPoints); //Keep for debugging
    }

    //Parse Sky Temple Grounds
    for (i in skyTempleChecks) {
        if (sevenChecks.includes(skyTempleChecks[i])) {
            skyTemplePoints += 9
        }
        if (fiveChecks.includes(skyTempleChecks[i])) {
            skyTemplePoints += 7
        }
        if (threeChecks.includes(skyTempleChecks[i])) {
            skyTemplePoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(skyTempleChecks[i])) {
                skyTemplePoints += 3
            }
        }
        //console.log(skyTempleChecks[i], skyTemplePoints); //Keep for debugging
    }

    //Parse Dark Agon Wastes
    for (i in dargonChecks) {
        if (sevenChecks.includes(dargonChecks[i])) {
            dArgonPoints += 9
        }
        if (fiveChecks.includes(dargonChecks[i])) {
            dArgonPoints += 7
        }
        if (threeChecks.includes(dargonChecks[i])) {
            dArgonPoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(dargonChecks[i])) {
                dArgonPoints += 3
            }
        }
        //console.log(dargonChecks[i], dArgonPoints); //Keep for debugging
    }

    //Parse Dark Torvus Bog
    for (i in dtorvusChecks) {
        if (sevenChecks.includes(dtorvusChecks[i])) {
            dTorvusPoints += 9
        }
        if (fiveChecks.includes(dtorvusChecks[i])) {
            dTorvusPoints += 7
        }
        if (threeChecks.includes(dtorvusChecks[i])) {
            dTorvusPoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(dtorvusChecks[i])) {
                dTorvusPoints += 3
            }
        }
        //console.log(dtorvusChecks[i], dTorvusPoints); //Keep for debugging
    }

    //Parse Ing Hive
    for (i in ingChecks) {
        if (sevenChecks.includes(ingChecks[i])) {
            ingPoints += 9
        }
        if (fiveChecks.includes(ingChecks[i])) {
            ingPoints += 7
        }
        if (threeChecks.includes(ingChecks[i])) {
            ingPoints += 5
        }
        if (choice == 'yes') {
            if (optionalChecks.includes(ingChecks[i])) {
                ingPoints += 3
            }
        }
        //console.log(ingChecks[i], ingPoints); //Keep for debugging
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
            points(ev.target.parentNode.id, 9);
        }
        if (data.startsWith('five')) {
            points(ev.target.parentNode.id, 7);
        }
        if (data.startsWith('three')) {
            points(ev.target.parentNode.id, 5);
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
        if (ptValue.startsWith('one')) {
            if (choice == 'yes') {
                ev.target.appendChild(nodeCopy);
            }
        } else {
            ev.target.appendChild(nodeCopy);
        }
    } else if (parseInt(id)) {
        //ev.target.appendChild(document.getElementById(data));
    } else {
        document.getElementById(parent).appendChild(nodeCopy);
    }
    if (id == 'temple' || 'greatTemple' || 'argon' || 'torvus' || 'sanctuary' || 'skyTemple' || 'dArgon' || 'dTorvus' || 'ing') {
        if (ptValue.startsWith('seven')) {
            points(ev.target.id, -9);
        }
        if (ptValue.startsWith('five')) {
            points(ev.target.id, -7);
        }
        if (ptValue.startsWith('three')) {
            points(ev.target.id, -5);
        }
        if (choice == 'yes') {
            if (ptValue.startsWith('one')) {
                points(ev.target.id, -3);
            }
        }
    }
    if (parent == 'temple' || 'greatTemple' || 'argon' || 'torvus' || 'sanctuary' || 'skyTemple' || 'dArgon' || 'dTorvus' || 'ing') {
        if (ptValue.startsWith('seven')) {
            points(parent, -9);
        }
        if (ptValue.startsWith('five')) {
            points(parent, -7);
        }
        if (ptValue.startsWith('three')) {
            points(parent, -5);
        }
        if (choice == 'yes') {
            if (ptValue.startsWith('one')) {
                points(parent, -3);
            }
        }
    }
}

function startingItems() {
    var list = currentSeed['game_modifications'][0]['starting_equipment']['pickups'];

    for (i in startingItemsList) {
        if (list.includes(startingItemsList[i])) {
            document.getElementById('starting').appendChild(document.getElementById(imgList[i]).cloneNode(true))
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
            points(parent, 9);
        }
        if (data.startsWith('five')) {
            points(parent, 7);
        }
        if (data.startsWith('three')) {
            points(parent, 5);
        }
        if (data.startsWith('one')) {
            points(parent, 3);
        }
    }

    //Remove Element
    document.getElementById(clickedElementId).remove();
}

function pointToggle() {
    var pointPanel = document.getElementById('info');

    if (pointPanel.checkVisibility()) {
        pointPanel.style.display = 'none';
        document.getElementById('locations').classList.add('pointHidden')
        document.getElementById('locations').classList.remove('pointShown')
        document.getElementById('items').classList.add('pointHidden')
        document.getElementById('items').classList.remove('pointShown')
    } else {
        pointPanel.style.display = '';
        document.getElementById('locations').classList.remove('pointHidden')
        document.getElementById('locations').classList.add('pointShown')
        document.getElementById('items').classList.remove('pointHidden')
        document.getElementById('items').classList.add('pointShown')
    }
}

var backgroundOn = true;
function background() {
    if (backgroundOn == false) {
        document.getElementById('background').classList.add('background')
        document.getElementById('background').classList.remove('nobackground')
        backgroundOn = true;
    } else {
        document.getElementById('background').classList.remove('background')
        document.getElementById('background').classList.add('nobackground')
        backgroundOn = false;
    }
}

var scrollStatus = true;
function scrollToggle() {
    if (scrollStatus == true) {
        document.getElementById('itemScroll').classList.add('scrollable')
        document.getElementById('itemScroll').classList.remove('notScrollable')
        scrollStatus = false;
    } else {
        document.getElementById('itemScroll').classList.add('notScrollable')
        document.getElementById('itemScroll').classList.remove('scrollable')
        scrollStatus = true;
    }
}