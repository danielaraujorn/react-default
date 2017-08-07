import storageAvailable from 'storage-available'

export function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}
export function setCookie(cname, cvalue, exmili) {
    var d = new Date();
    d.setTime(d.getTime() + exmili);
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function isValid(value){
  if(value!==undefined&&value!==null) return true
  else return false
}
export function getLocal(nome){
  if (storageAvailable('localStorage')) {
    return localStorage.getItem(nome)
  }else return false
}
export function setLocal(nome,valor){
  if (storageAvailable('localStorage')) {
    localStorage.setItem(nome,valor)
  }
}
export function removeLocal(nome){
  if (storageAvailable('localStorage')) {
    localStorage.removeItem(nome)
  }
}
export function getSession(nome){
  if (storageAvailable('sessionStorage')) {
  	return sessionStorage.getItem(nome)
  }else{
    console.log("sessionStorage não está disponível")
    return false
  }
}
export function setSession(nome,valor){
  if (storageAvailable('sessionStorage')) {
    sessionStorage.setItem(nome,valor)
  }else{
    console.log("sessionStorage não está disponível")
  }
}
export function removeSession(nome){
  if (storageAvailable('sessionStorage')) {
    sessionStorage.removeItem(nome)
  }
}

export function createCssClass(name,rules){
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  if(!(style.sheet||{}).insertRule)
      (style.styleSheet || style.sheet).addRule(name, rules);
  else
      style.sheet.insertRule(name+"{"+rules+"}",0);
}
export function validarCaracteres(strToReplace) {
  let strSChar = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
  let strNoSChars = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
  var newStr = "";
  for (var i = 0; i < strToReplace.length; i++) {
      if (strSChar.indexOf(strToReplace.charAt(i)) !== -1) {
          newStr += strNoSChars.substr(strSChar.search(strToReplace.substr(i, 1)), 1);
      } else {
          newStr += strToReplace.substr(i, 1);
      }
  }

  return newStr.replace(/[^a-zA-Z 0-9]/g, '').toUpperCase();
}

export function ascendente(a, b) {
  let comparison = 0;
  if (a.num > b.num) {
    comparison = 1;
  } else if (a.num < b.num) {
    comparison = -1;
  }
  return comparison;
}

export function descendente(a, b) {
  let comparison = 0;
  if (a.num > b.num) {
    comparison = 1;
  } else if (a.num < b.num) {
    comparison = -1;
  }
  return comparison;
}