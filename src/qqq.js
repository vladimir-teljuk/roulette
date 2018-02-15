fibonacci = function(n) {
    var f = [0, 1];
    for (var i = 2; i < n; i++) {
        f[i] = f[i -1] + i[i - 2]
    }
    console.log(f);
}

fibonacci(50);