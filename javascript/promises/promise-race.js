//The name of Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected.



// The following creates two promises: one resolves in 1 second and the other resolves in 2 seconds. 
// Because the first promise resolves faster than the second one, 
// the Promise.race() resolves with the value from the first promise:


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});

Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));

 
    

    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The third promise has resolved');
            resolve(10);
        }, 1 * 1000);
    
    });
    
    const p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The fourth promise has rejected');
            reject(20);
        }, 2 * 1000);
    });
    
    
    Promise.race([p3, p4])
        .then(value => console.log(`Resolved: ${value}`))
        .catch(reason => console.log(`Rejected: ${reason}`));

    //Practical JavaScript Promise.race() example    