import { AnimationArrayType } from "@/lib/types";

function getMax(arr: number[], animations: AnimationArrayType) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function countSort(arr: number[], exp: number, animations: AnimationArrayType) {
    const output = new Array(arr.length);
    const count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        animations.push([[i, count[index] - 1], false]);
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
        animations.push([[i, arr[i]], true]);
    }
}

export function runRadixSort(arr: number[], animations: AnimationArrayType) {
    const max = getMax(arr, animations);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(arr, exp, animations);
    }
}

export function generateRadixSortArrayAnimation(isSorting: boolean, arr: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isSorting) return;
    if (arr.length <= 1) return;
    const animations: AnimationArrayType = [];
    const auxiliaryArray = arr.slice();
    runRadixSort(auxiliaryArray, animations);
    runAnimation(animations);
}
