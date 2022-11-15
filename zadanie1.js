let user = {
    имя: 'Olga',
    фамилия: 'Tarelina',
    город: 'Orel'
}
function rekvizit(arg) {
  for (let [key, value] of Object.entries(arg)) {
    console.log(`${key}: ${value}`);
  }
}
rekvizit(user)