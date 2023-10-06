// code your solution here

function superbowlWin(superbowls) {
    let winsArray = []
    let hasWon = false
    superbowls.forEach(theyWonBoolean)
    winsArray.forEach(a =>{
        hasWon = hasWon || a})
    
    console.log(hasWon)
    if (hasWon) {
        const wonYear = superbowls.find((annum) => annum.result === 'W')
        console.log(wonYear)
        return wonYear.year
    } else {
        return undefined
    }
    function theyWonBoolean(superbowl) {
        winsArray.push(superbowl.result === 'W')
    }
}