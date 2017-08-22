import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  const json = response.json();
  console.log('json - - ',json.msg);
  return json;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  console.log('fetch result - - - -',response.status);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  // var request = new Request(url,{
  //   method: 'POST',
  //   mode: 'no-cors',
  //   redirect: 'follow',
  //   headers: new Headers({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Accept': 'application/json',
  //     'token': '123456',
  //     'key': '19',
  //   }),
  //   guard: 'request'
  // });
  return fetch(url,options)
    .then(checkStatus)
    .then(parseJSON);
}
