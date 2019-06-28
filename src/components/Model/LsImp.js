class LsImp {
  static fetchFromLS = key => {
    let contacts;
    if (localStorage.getItem(key) === null) {
      contacts = [];
    } else {
      contacts = JSON.parse(localStorage.getItem(key));
    }
    return contacts;
  };
}

export default LsImp;
