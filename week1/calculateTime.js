function calculateTime(n){
    let start=Date.now()
    console.log(`started at ${start}`);

    sum=0;
    for(let i=0; i<=n; ++i){
        sum+=i
    }

    let end=Date.now()
    console.log(`ended at ${end}`);
    console.log(`Total time: ${end-start}ms`);
}

calculateTime(1000000000);