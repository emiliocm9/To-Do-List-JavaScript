const openModal = () => {
  document.getElementById('backdrop').style.display = 'block';
  document.getElementById('exampleModal').style.display = 'block';
  document.getElementById('exampleModal').className += 'show';
};

const openDeleteModal = () => {
  document.getElementById('backdrop').style.display = 'block';
  document.getElementById('exampleModalDelete').style.display = 'block';
  document.getElementById('exampleModalDelete').className += 'show';
};

const customConfirm = (text) => {
  openDeleteModal();
  document.getElementById('modal-body-delete').textContent = text;
};

export { openModal, customConfirm };