function donationAmount(totalAmount) {
  // get the input value
  const inputAmount = document.getElementById(totalAmount).innerText
  return inputAmount
}

function inputValueAmount(inputValue) {
  const inputAmount = document.getElementById(inputValue).value
  console.log(typeof inputAmount)
  return inputAmount
}
