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
  if (modalFormElement.studentNo.value.length != 9) {
    alert('학번은 9글자로 입력해주세요.');
  } else if (modalFormElement.email.value.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i) === null) {
    alert('이메일 양식을 지켜주세요.');
  } else {
    for (const [key, value] of formData) {
      localStorage.setItem(key, value);
      if (key==='userName') setUserName(value);
      if (key==='studentNo') setStudentNo(value);
      if (key==='email') setEmail(value);
    }

    inputModalElement.close();
  }
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};
