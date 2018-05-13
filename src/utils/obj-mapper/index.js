import {isArray} from '../is-array'
import {isObject} from '../is-object'

/**
 * Convert an API object that is not us using a camelCase format to one in camelCase format. 
 * @param {any} apiObj 
 * @example {my_test: 1, my_acc: 'asdasd'} --> {myTest: 1, myAcc: 'asdasd'}
 */
export const apiObjToJsonObj = (apiObj) => {
    let obj = isArray(apiObj) ? [] : Object.create({});

    return Object.keys(apiObj).reduce((acc, key) => {
        const apiVal = apiObj[key];
        const newKey = key.toLowerCase().replace(/_([a-z])/g, (g) => (g[1].toUpperCase())); 

        let convertedVal = null;
        if(isObject(apiVal)) { 
            convertedVal = apiObjToJsonObj(apiVal);
        } else convertedVal = apiVal; 

        obj[newKey] = convertedVal;

        return obj;
    }, obj);
}