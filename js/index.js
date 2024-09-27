//noakhali - donation - amount
const noakhaliAmount = document.getElementById("noakhali-donation-amount")
const feniDonationAmount = document.getElementById("feni-donation-amount")
const quotaDonationAmount = document.getElementById("quota-donation-amount")

/**
 *
 *  1. write amount in the input field
 *  2. click on Donate amount
 *  3. get the top innerText
 *  4. update the text
 */

// Noakhali donation
document.getElementById("btn-noakhali-amount").addEventListener("click", function () {
  donateAmountById("input-noakhali-amount", "noakhali-donation-amount")
  createHistoryComponent("input-noakhali-amount", "Noakhali")
})

// Feni donation
document.getElementById("btn-feni-amount").addEventListener("click", function () {
  donateAmountById("input-feni-amount", "feni-donation-amount")
  createHistoryComponent("input-feni-amount", "Feni")
})

// Quota donation
document.getElementById("btn-quota-amount").addEventListener("click", function () {
  donateAmountById("input-quota-amount", "quota-donation-amount")
  createHistoryComponent("input-quota-amount", "Quote")
})

function donateAmountById(inputValue, totalAmount) {
  // get input value
  const inputAmount = inputValueAmount(inputValue)

  // get the total amount
  const total = donationAmount(totalAmount)

  // Add both number
  const sumAmount = parseFloat(total) + parseFloat(inputAmount)

  // set the text
  document.getElementById(totalAmount).innerText = sumAmount
}
