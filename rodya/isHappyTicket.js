function isHappyTicket(ticket) {
  let left = 0, right = 0

  for (let i = 0; i < ticket.length; i++){
    if (i < ticket.length / 2){
      left += +ticket[i]
    } else {
      right += +ticket[i]
    }
  }

  return left === right
}

console.log(isHappyTicket('1001'))