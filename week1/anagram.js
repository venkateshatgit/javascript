function isAnagram(str1, str2){

    // spliting string at each charachter and making array out of it
    let x = str1.split("").sort() 
    let y = str2.split("").sort();
    
    // comparing two array
    if(JSON.stringify(x) === JSON.stringify(y))
        console.log(`${str1} and ${str2} are anagrams`);
    else
        console.log(`${str1} and ${str2} are not anagrams`)
}


isAnagram("kime", "mike");