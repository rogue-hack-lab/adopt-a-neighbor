import axios from 'axios';

async function getRequestAxiosJson(url, params = {}, headers = {}, timeout = 5000, body = undefined){
    const requestType = {"Content-Type": "application/json"};
    const combinedHeaders = Object.assign(requestType, headers);
    const response = await axios({method, url, params, headers, timeout});
    const { code, data } = response;
    const json = json.parse(data);
    if(code == 200) {
      return { code, data: json };
    } else if (code >= 500) {
      return { code, data, error: 'timeout', errorDetail: 'Request failed with code: ' + code};
    } else {
      return { code, json };
    }
}
