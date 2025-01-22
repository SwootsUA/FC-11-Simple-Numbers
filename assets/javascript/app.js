for (let i = 0; i < 100; i++) {
    if (isPrime(i)) {
        console.log('Number', i, 'is Simple');
    }
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = number - 1; i > 1; i--) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}