export const deepCopyArray = (arr: Array<any>):Array<any> => {
    if (! Array.isArray(arr)) {
      throw new TypeError('Input harus berupa array.');
    }
  
    return arr.map(item => {
        if (Array.isArray(item)) {
            return deepCopyArray(item); // Recursively copy nested arrays
        } else if (item !== null && typeof item === 'object') {
            return deepCopyObject(item); // Copy objects
        }
        return item;
    });
}

export const deepCopyObject = (obj: any) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return deepCopyArray(obj);
    }

    const copy: any = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopyObject(obj[key]);
        }
    }
    return copy;
}

export const isEqual = (array1: number[][], array2: number[][]): boolean => {
    return array1.every((subArray, rowIndex) => {
        const otherSubArray = array2[rowIndex];
        if (subArray.length !== otherSubArray.length) return false;
        return subArray.every((item, colIndex) => item === otherSubArray[colIndex]);
    })
}