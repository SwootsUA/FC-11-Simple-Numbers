isPrime: for (let number = 2; number < 100; number++) {
    for (let divisor = number - 1; divisor > 1; divisor--) {
        if (number % divisor === 0) {
            continue isPrime;
        }
    }
    console.log('Number', number, 'is Prime');
}
