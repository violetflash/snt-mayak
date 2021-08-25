const addConditionedStyle = (condition, actualClasses, newClass) => {
    const classes = [...actualClasses];

    if (condition) {
        classes.push(newClass);
    }

    return classes;
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


export {
    addClass,
    addConditionedStyle,
    capitalizer,
    checkLS,
    getRandomIDsFromArr
};
