function cachingDecoratorNew(func) {
        let cache = [];
        function wrapper(...args) {
            const hash = args.join(',');
            let idx = cache.findIndex((item)=> item.hash === hash );
            if (idx !== -1 ) {
                console.log("Из кэша: " + cache[idx].value);
                return "Из кэша: " + cache[idx].value;
            }

            let result = func(...args);
            cache.push({hash: hash, value: result}) ;
            if (cache.length > 5) {
            cache.shift();
            }
            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;
        }
        return wrapper;

}


function debounceDecoratorNew(func, ms) {
    let timeout, flag;

    return function (...rest) {
        if (flag === 0) {
            func(...rest);
            flag = 1;
        }
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                func(...rest);
                flag = 0;
            }, ms)
        }

}

function debounceDecorator2(func, ms) {
    let timeout, flag;
     function wrapFunc (...rest) {
         wrapFunc.count++
         console.log(wrapFunc.count)
        if (flag === 0) {
            func(...rest);
            flag = 1;
        }

        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...rest);
            flag = 0;

        }, ms)
    }
    wrapFunc.count = 0;

    return wrapFunc

}



