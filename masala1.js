function countVowels(text) {
    let soz = text.split(' ');
    let result = {};
    try {
        if(typeof text !== 'string' || text === ' ') {
                throw new Error ('Text string emas');
            } else {
                for (let i of soz){
                    let count = 0;
                    for (let harf of i.split('')){
                        let unlilar = ['a', 'e', 'i', 'o', 'u'];
                        if (unlilar.includes(harf.toLowerCase())) {
                            count++;
                        }
                    }
                    result[i] = count;
                }
                console.log(result)
            } 
    }catch (err) {
         console.log(err)
    }
}

countVowels('Salom Dunyo');