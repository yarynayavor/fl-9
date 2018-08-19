let login = prompt('Enter login: ', 'User');

let passwordCheck = (password) => {
    if (!password) {
        alert('Canceled.');
    } else {
        if (password === 'SuperUser') {
            if (new Date().getHours() < 20) {
                alert('Good day!');
            } else {
                alert('Good evening!');
            }
        } else {
            alert('Wrong password');
        }
    }
}

if (!login) {
    alert('Canceled.');
} else {
    if (login === 'User') {
        let password = prompt('Enter password: ', 'SuperUser');
        passwordCheck(password);
    } else if (login.length < 4) {
        alert('I don\'t know any users having name length less than 4 symbols');
    } else {
        alert('I don\'t know you');
    }
}