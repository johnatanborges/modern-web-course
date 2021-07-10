function purchases(job1, job2) {
    const buyIceCream = job1 || job2;
    const buyTV50 = job1 && job2;
    // const buyTV50 = !!(job1 ^ job2) // xor
    const buyTV50 = job1 != job2;
    const isHealthy = !buyIceCream; // unary operator

    return { buyIceCream, buyTV50, buyTV50, isHealthy };
}

console.log(purchases(true, true));
/*
{
buyIceCream: true,
buyTV50: true,
buyTV50: false,
isHealthy: false
}
*/
