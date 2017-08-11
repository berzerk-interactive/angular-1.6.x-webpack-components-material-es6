class lazyBarCtrl {
  failedFetch () {
    return fetch('lazy/serviceData_fail.json').then(resp => resp);
  }
}

export default lazyBarCtrl;
