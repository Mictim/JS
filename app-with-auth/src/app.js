import './styles.css';
import { createModal, isValid } from './utils';
import { AppLogic } from './app-logic';
import { authWithEmailAndPassword, getAuthForm } from './auth';

const form = document.getElementById('form');
const input = form.querySelector('#input-question');
const btnSubmit = form.querySelector('#submit');
const select = form.querySelector('#select');
const modalBtn = document.getElementById('modal-btn');


window.addEventListener('load', AppLogic.renderList)
form.addEventListener('submit', submitFormHandler);
modalBtn.addEventListener('click', openModal);
input.addEventListener('input', () => {
    btnSubmit.disabled = !isValid(input.value);
})

function submitFormHandler(event) {
    event.preventDefault();
    console.log(input.value);

    if(isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        btnSubmit.disabled = true;
        //Async request to server to save a question
        AppLogic.create(question).then(() => {
            console.log('Question:', question);
            input.value = '';
            input.className = "";
            btnSubmit.disabled = false;
        });
        
    }

}

function openModal() {
    createModal('Authorization', getAuthForm());
    document.getElementById('auth-form').addEventListener('submit', authFormHandler, {once: true});
}

function authFormHandler(event) {
    event.preventDefault();

    const btn = event.target.querySelector('button');
    const email = event.target.querySelector('#email').value;
    const pwd = event.target.querySelector('#password').value;

    authWithEmailAndPassword(email, pwd)
    .then(AppLogic.fetch)
    .then(renderModalAfterAuth)
    .then(() => btn.disabled = false);
}

function renderModalAfterAuth(content) {
    if(typeof content === 'string') {
        createModal('Error!', content)
    } else {
        createModal('List of Questions', AppLogic.listToHtml(content))
    }
}