// <div class="card bg-base-100 w-full shadow-xl mb-8 border">
//   <div class="card-body">
//     <h2 class="card-title">96500 Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
//     <p class="text-xs">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
//   </div>
// </div>

const historyContent = document.getElementById("history-content")
const inputNoakhaliAmount = inputValueAmount("input-noakhali-amount")

function createHistoryComponent(inputAmount, district) {
  // create div
  const div = document.createElement("div")
  div.classList.add("card", "bg-base-100", "w-full", "shadow-xl", "mt-8", "border")

  const cartDiv = document.createElement("div")
  cartDiv.classList.add("card-body")

  // creating h2
  const h2 = document.createElement("h2")
  h2.classList.add("card-title")
  h2.innerText = `${inputAmount} Taka is Donated for Flood at ${district}, Bangladesh`

  //creating p
  const p = document.createElement("p")
  p.classList.add("text-xs")
  p.innerText = `Date : ${new Date().toUTCString()})`

  // add h2
  cartDiv.appendChild(h2)
  //adding p
  cartDiv.appendChild(p)

  //adding cartChildDiv
  div.appendChild(cartDiv)

  historyContent.appendChild(div)
  console.log(div)
}
