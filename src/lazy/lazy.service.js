class lazyService {
  getServiceData () {
    return fetch('lazy/serviceData.json').then(resp => resp);
  }
}

export default lazyService;
