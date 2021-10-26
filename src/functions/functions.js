const addConditionedStyle = (condition, actualClasses, newClass) => {
    const classes = [...actualClasses];

    if (condition) {
        classes.push(newClass);
    }

    return classes;
};

const checkImageExist = async (url) => {
    const res = await fetch(url);
    return !/source-404/.test(res.url);
}

const textCutter = (str, amount = 60) => {
    return str.length > amount ? str.slice(0, amount) + "..." : str;
};

const getArrayFromDb = (db) => {
    const arr = [];
    for (const key in db) {
        arr.push({ ...db[key] });
    }
    return arr;
};

const sortOptions = (a, b) => b.id - a.id;

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
};

const getDay = (date) => {
    return date.slice(0, date.indexOf('.'));
}

const getMonth = (date) => {
    const month = date.slice(date.indexOf('.') + 1, date.indexOf('.') + 3);
    switch (month) {
    case '01':
        return 'янв';
    case '02':
        return 'фев';
    case '03':
        return 'мар';
    case '04':
        return 'апр';
    case '05':
        return 'май';
    case '06':
        return 'июн';
    case '07':
        return 'июл';
    case '08':
        return 'авг';
    case '09':
        return 'сен';
    case '10':
        return 'окт';
    case '11':
        return 'ноя';
    case '12':
        return 'дек';
    default:
        return month;
    }
};

export {
    addClass,
    addConditionedStyle,
    getArrayFromDb,
    capitalizer,
    checkLS,
    getRandomIDsFromArr,
    getFirstName,
    checkImageExist,
    textCutter,
    sortOptions,
    getDay,
    getMonth
};
