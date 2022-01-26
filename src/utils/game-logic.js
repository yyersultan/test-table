
export function canMove(list,i){
    if(i % 3 > 0 && !list[i-1]){
        return i-1;
    }if(i % 3 <  2 && !list[i+1]){
        return i + 1;
    }if(i + 3 < list.length && !list[i + 3]){
        return i + 3;
    }if(i - 3 >= 0 && !list[i - 3]){
        return i - 3
    };
    return -1;
}

export function isEqual(arr1,arr2){
    for(let i = 0;i < arr1.length;i ++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
export function shuffle (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}
export function swap(list,numberI,nullI) {
    list[nullI] = list[numberI];
    list[numberI] = null;
    return list;
}