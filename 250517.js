function solution(n, edge) {
    let edgeList = [];
    let checks = [];
    let answer = 0;

    edge.forEach((e) => {
        e.sort((a, b) => a - b);
    });
    edge.forEach(([a, b]) => {
        if (!edgeList[a]) edgeList[a] = [];
        edgeList[a].push(b);
    });
    console.log(edgeList);

    let prevArray = edgeList[1] || [];
    checks[1] = 1;
    prevArray.forEach((e) => {
        checks[e] = 1;
    });

    while (prevArray.length > 0) {
        console.log('prevArray', prevArray);
        console.log('checks', checks);
        let array = [];
        prevArray.forEach((e) => {
            if (edgeList[e]) {
                // && checks[e] !== 1
                edgeList[e].forEach((e2) => {
                    if (checks[e2] !== 1 && !array.includes(e2)) {
                        array.push(e2);
                        checks[e2] = 1;
                    }
                });

                checks[e] = 1;
            }
        });

        if (prevArray.length > 0) answer = prevArray.length;
        prevArray = array;
        console.log('array', array);
    }

    return answer;
}

console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ])
);
