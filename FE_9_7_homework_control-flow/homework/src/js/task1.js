const LENGHT = 4;
const HOURS = 20;

const login = prompt('Enter login: ', 'User');

if (!login) {
    alert('Canceled.');
} else {
    if (login === 'User') {
        const password = prompt('Enter password: ', 'SuperUser');
        if (!password) {
            alert('Canceled.');
        } else {
            if (password === 'SuperUser') {
                if (new Date().getHours() < HOURS) {
                    alert('Good day!');
                } else {
                    alert('Good evening!');
                }
            } else {
                alert('Wrong password');
            }
        }
    } else if (login.length < LENGHT) {
        alert('I don\'t know any users having name length less than 4 symbols');
    } else {
        alert('I don\'t know you');
    }
}