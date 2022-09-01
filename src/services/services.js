const callAPI = async (method, baseURL, headers, body) => {
    try {
        let response, json;
        switch (method) {
            case 'POST':
                response = await fetch(baseURL, {
                    method: method,
                    headers: headers,
                    body: body
                });
                break;
            case 'GET':
                response = await fetch(baseURL)
                break;
            default:
                break;
        }
        json = await response.json()
        console.log("Log In lib android ios..", method, baseURL, json)
        return json
    } catch (e) {
        console.error(e)
        return e
    }
}
export default callAPI;