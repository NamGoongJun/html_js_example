const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');

const inputModalElement = document.querySelector('#inputModal');

const setUserName = (userName) => {
  nameH1Element.textContent = userName;
  connectNameElement.textContent = userName;
};

const localName = localStorage.getItem('userName');
if (localName) setUserName(localName);

const studentNoElement = document.querySelector('span.studentNo');
const setStudentNo = (studentNo) => {
  studentNoElement.textContent = studentNo;
};
const localNo = localStorage.getItem('studentNo');
if (localNo) setStudentNo(localNo);

const emailElement = document.querySelector('span.email');
const setEmail = (email) => {
  emailElement.textContent = email;
};
const localEmail = localStorage.getItem('email');
if (localEmail) setEmail(localEmail);

console.log(inputModalElement);
nameH1Element.onclick = () => {
  inputModalElement.showModal();
};

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);

  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key==='userName') setUserName(value);
    if (key==='studentNo') setStudentNo(value);
    if (key==='email') setEmail(value);
  }

  inputModalElement.close();
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};
