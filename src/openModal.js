const openModal = () => {
  document.getElementById("backdrop").style.display = "block"
  document.getElementById("exampleModal").style.display = "block"
  document.getElementById("exampleModal").className += "show"
}

export default openModal;