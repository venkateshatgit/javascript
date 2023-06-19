function isPalindrome(str){
    let str1 = str.toLowerCase();

    let start = 0, end = str1.length-1;
    let flag = true;
    while(start<=end){

        if(str[start] != str[end]){
            flag = false;
            break;
        }

        start+=1;
        end-=1;
    }

    if(flag)
        console.log(`${str} is palindrome`);
    else
        console.log(`${str} is not a palindrome`);

}

isPalindrome("kauak")