function someFunction() {
    var array = [1, 2, 5, 12, -1,-12,-13, 14 , 15, 15, 15];
        var count_pos = 0;
        var count_neg = 0;
        array.forEach(function (elem) {
            if (elem > 0) {
                count_pos++;
            } else if (elem < 0) {
                count_neg++;
            }
        })
        var count_to_add = count_pos - count_neg;
        if (count_to_add > 0) {
            for (var i = 0; i < count_to_add; i++) {
                array.push((i + 1) * -1);
            }
        } else if (count_to_add < 0) {

            var pos_count = Math.abs(count_to_add);
            for (var i = 0; i < count_to_add; i++) {
                array.push(i + 1);
            }
    }
console.log(array);
}

