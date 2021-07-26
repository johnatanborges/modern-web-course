function onlyGoodNews(grade) {
    if(grade >= 7) {
        console.log('Approved with ' + grade);
    }
}

onlyGoodNews(8.1); // Approved with 8.1
onlyGoodNews(6.8);

function ifIsTrue(value) {
    if(value) {
        console.log('It`s true... ' + value);
    }
}

ifIsTrue();
ifIsTrue(null);
ifIsTrue(undefined);
ifIsTrue(NaN);
ifIsTrue('');
ifIsTrue(0);
ifIsTrue(-1); // It`s true... -1
ifIsTrue(' '); // It`s true...
ifIsTrue('?'); // It`s true... ?
ifIsTrue([]); // It`s true...
ifIsTrue([1, 2]); // It`s true... 1,2
ifIsTrue({}); // It`s true... [object Object]
