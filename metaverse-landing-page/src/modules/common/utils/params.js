import queryString from "query-string";

export const addQueryParams = (url = null, query) => {
    if (url) {
        let search = "?";
        for (const [key, value] of Object.entries(query)) {
            if(Array.isArray(value)){
                search = search + `${key}=${JSON.stringify(value)}&`;
            }else if(value === ""){
                search = search + `${key}=&`;
            }else if (value || value === 0) {
                search = search + `${key}=${value}&`;
            }
        }
        return url + search;
    }
    return "";
};

export const getParamsFromQueryString = (search) => {
    let params = queryString.parse(search);
    let result = {};
    for (const [key, value] of Object.entries(params)) {
        if (key) {
            if(isJSON(value)){
                result[key] = JSON.parse(value);
            } else{
                result[key] = /^\d+$/.test(value) && value[0] != 0 ? parseInt(value) : value;
            }
        }
    }
    return result;
};
function isJSON(str) {
    try {
        return (JSON.parse(str) && !!str);
    } catch (e) {
        return false;
    }
}