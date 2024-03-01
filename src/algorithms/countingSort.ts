import { AnimationArrayType } from "@/lib/types";

function runCountingSort(arr: number[], animations: AnimationArrayType) {
    const n = arr.length;

    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    const count = new Array(max - min + 1).fill(0);
    for (let i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    const output = new Array(n);

    for (let i = n - 1; i >= 0; i--) {
        const index = count[arr[i] - min] - 1;
        animations.push([[i, index], false]);
        output[index] = arr[i];
        count[arr[i] - min]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
        animations.push([[i, arr[i]], true]);
    }
}

export function generateCountingSortArrayAnimation(isSorting: boolean, arr: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isSorting) return;
    if (arr.length <= 1) return;
    const animations: AnimationArrayType = [];
    const auxiliaryArray = arr.slice();
    runCountingSort(auxiliaryArray, animations);
    runAnimation(animations);
}
