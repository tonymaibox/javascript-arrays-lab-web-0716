const app = "I don't do much."

function destructivelyAppendKitten(name){
	kittens.push(name)
}

function destructivelyPrependKitten(name){
	kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
	kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
	kittens.shift(name)
}

function appendKitten(name){
	var newArray = [...kittens, name]
	return newArray
}

function prependKitten(name){
	var newArray = [name, ...kittens]
	return newArray
}

function removeLastKitten(){
	var newArray = kittens
	newArray = newArray.slice(0,-1)
	return newArray
}

function removeFirstKitten(){
	var newArray = kittens
	newArray = newArray.slice(1)
	return newArray
}