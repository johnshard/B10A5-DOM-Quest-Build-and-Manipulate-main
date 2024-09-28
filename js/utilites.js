function donationAmount(totalAmount) {
  // get the input value
  const inputAmount = document.getElementById(totalAmount).innerText
  return inputAmount
}

function inputValueAmount(inputValue) {
  const inputAmount = document.getElementById(inputValue).value
  return inputAmount
}

function totalAmountDeduction(inputValue) {
  const totalAmountDeduct = document.getElementById("total-deduction").innerText
  const inputAmount = inputValueAmount(inputValue)
  const newAmount = totalAmountDeduct - inputAmount

  document.getElementById("total-deduction").innerText = newAmount
}
