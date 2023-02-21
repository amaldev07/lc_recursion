// 1155. Number of Dice Rolls With Target Sum
// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/
function numRollsToTarget(n, k, target) {
    let count = recFaces('', target, k, n, 0);
    return count;
};

function recFaces(p, up, faces, n, count) {
    if (up == 0) {
        return count+1;
    }
    let ret = [];
    for (let i = 0; i < (up + 1) && i < faces; i++) {
        let newP = p + (i + 1)
        if ((up - (i + 1)) == 0 && newP.length <= n) {
            count = count + (recFaces(newP, up - (i + 1), faces, n,0));
        } else if (newP.length < n) {
            count = count + (recFaces(newP, up - (i + 1), faces, n,0));
        }
    }
    return count;
}
