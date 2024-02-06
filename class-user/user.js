"use strict"

class User {
  constructor(usern, password, email) {
    this.usern = usern;
    this.password = password;
    this.email = email;
  }
  login(username, password) {
    if (username === this.usern && password === this.password){
        alert("¡BIENVENIDO!")
    }else{
        alert("USUARIO O CONTRASEÑA INCORRECTA")
    }
  }
  resetPassword(newPassword) {
    this.password = newPassword;
    }
    updateInfo(newEmail) {
    this.email = newEmail;
    }   
    showInfo() {
        alert(`Username: ${this.usern} Password: ${this.password} Email: ${this.email}`);

    }

}

let user = new User("lanarea", "6969", "narea@gmail.com");
//user.login("lanarea", "6969");
user.resetPassword("0609");
user.updateInfo("lanarea@gmail.com")
user.login("lanarea", "0609");
user.showInfo();
