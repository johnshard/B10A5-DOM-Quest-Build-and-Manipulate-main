document.getElementById("donate").addEventListener("click", function () {
  document.getElementById("history-content").classList.add("hidden")
  document.getElementById("donate-content").classList.remove("hidden")
})
document.getElementById("history").addEventListener("click", function () {
  document.getElementById("donate-content").classList.add("hidden")
  document.getElementById("history-content").classList.remove("hidden")
})
