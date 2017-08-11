import fetchIntercept from './utils/fetch-interceptor';
let headers = {
  customHeader: 'CUSTOMHEADER'
};
export default ()=>{
  const unregister = fetchIntercept.register({


    request: function (url, config) {
        // Modify the url or config here
        if (typeof config === 'undefined') {
          let config = {
            headers
          };
          return [url, config];
        } else {
          config.headers = headers;
        }

        if (typeof config.body === 'object') {
          console.log(typeof config.body);
          config.body = JSON.stringify(config.body);
        }

        return [url, config];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        console.error('Error fetching', error);
        return Promise.reject(error);
    },

    response: function (response) {
        console.log(`
          ----------------------------------------
          Response interceptor info
          ----------------------------------------
          `);
        console.log(`
          Response.ok = ${response.ok}
          Response.status = ${response.status}
          Response.statusText = ${response.statusText}
          `);

        console.log('from interceptor response object:');
        console.log(response);
        if(response.ok) {
          switch (typeof response) {
            case ('object' || 'array'):
              response = response.json();
              break;
            default:

          }
        } else {
          console.error('Fetch network error');
        }

        // Modify the reponse object
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error
        // The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
        // Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or
        // if anything prevented the request from completing.
        console.error('fetch response net work error');
        return Promise.reject(error);
    }
  });

  // Unregister your interceptor
  // unregister();
};
