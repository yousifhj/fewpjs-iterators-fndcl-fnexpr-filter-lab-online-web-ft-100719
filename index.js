// Code your solution here

function findMatching(array, string) {
    return array.filter( n => n.toLowerCase() === string.toLowerCase() )
}

function fuzzyMatch(array, string){
    return  array.filter(x => x.toLowerCase().startsWith(string.toLowerCase()))
} 

  function matchName(drivers, string){
    return drivers.filter(x => x.name === string)
}
