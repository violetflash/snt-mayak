const addConditionedStyle = (condition, actualClasses, newClass) => {
    const classes = [...actualClasses];

    if (condition) {
        classes.push(newClass);
    }

    return classes;
};

const getArrayFromDb = (db) => {
    const arr = [];
    for (const key in db) {
        arr.push({ value: db[key] });
    }
    return arr;
};

const addClass = (actualClass, newClass) => [actualClass, newClass].join(' ');

const capitalizer = str => str[0].toUpperCase() + str.slice(1);


const checkLS = (key, field, initial) => (
    localStorage.getItem(key) ?
        JSON.parse(localStorage.getItem(key))[field] :
        initial
);

const getRandomIDsFromArr = (arr, num) => {
    if (!arr) return [];
    const newArr = new Set();
    while (newArr.size !== num)  {
        const elem = arr[Math.floor(Math.random() * arr.length)];
        newArr.add(elem);
    }

    return Array.from(newArr);
};

const getFirstName = name => {
    return name.split(' ')[0];
}


export {
    addClass,
    addConditionedStyle,
    getArrayFromDb,
    capitalizer,
    checkLS,
    getRandomIDsFromArr,
    getFirstName
};
