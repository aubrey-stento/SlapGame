let angrySkeleton = {
  name: "Phil",
  items: []
  // activeItem: if you use this then you wont use items from line 3
}

let items = {
  shield: { name: 'Shield', modifier: 2, description: 'I blocked you!' },
  dodge: { name: 'Dodge', modifier: 3, description: 'Im over here!' },
  jump: { name: 'Jump', modifier: 4, description: 'Im up here!' }

}

let health = 100;
let hits = 0;
let myName = 'Phil the Angry Skeleton'

function slap() {
  //check if angrySkeleton has any items
  if (angrySkeleton.items.length > 0) {
    health -= .5
    angrySkeleton.items.pop()
  } else {
    health -= 1
  }
  hits++
  update();
}

function punch() {
  //check if angrySkeleton has any items
  if (angrySkeleton.items.length > 0) {
    health -= 2.5
    angrySkeleton.items.pop()
  } else {
    health -= 5
  }
  hits++
  update();
}

function kick() {
  //check if angrySkeleton has any items
  if (angrySkeleton.items.length > 0) {
    health -= 5
    angrySkeleton.items.pop()
  } else {
    health -= 10
  }
  hits++
  update();

}

function deployshield() {
  //check angryskeletons items to see if he already had this shield
  //if true then return
  //else push the shield into the skeletons array of items
  let shield = angrySkeleton.items.find(item => item.name == "Shield")
  if (shield == undefined) {
    angrySkeleton.items.push(items.shield)
  }
}

function dodge() {
  let dodge = angrySkeleton.items.find(item => item.name == "Dodge")
  if (dodge == undefined) {
    angrySkeleton.items.push(items.dodge)
  }
}

function jump() {
  let jump = angrySkeleton.items.find(item => item.name == "Jump")
  if (jump == undefined) {
    angrySkeleton.items.push(items.jump)
  }
}

function addMods() {
  let totalmods = 0
  for (let i = 0; i < items.length; i++) {
    let item = items[i];

  }
}

function reset() {
  health = 100;
  hits = 0;
  update();
}


function update() {
  document.getElementById('health').innerText = health.toString()
  document.getElementById('hits').innerText = hits.toString()

}
update()
document.getElementById('myName').innerText = myName