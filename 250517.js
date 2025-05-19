// 프로그래머스

// 가장 먼 노드

// 문제 설명
// n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
// 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 노드의 개수 n은 2 이상 20,000 이하입니다.
// 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
// vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

// 입출력 예
// n	    6
// vertex	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
// return   3

// 입출력 예 설명
// 1번 노드에서 가장 멀리 떨어진 노드는 4,5,6번 노드입니다.

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
