import { AnimationArrayType } from "@/lib/types";

function runHeapSort(array: number[], animations: AnimationArrayType) {
    buildMaxHeap(array, animations);
    for (let i = array.length - 1; i > 0; i--) {
        animations.push([[0, i], false]);
        swap(array, 0, i);
        animations.push([[0, array[0]], true]);
        animations.push([[i, array[i]], true]);
        heapify(array, animations, 0, i);
    }
}

function buildMaxHeap(array: number[], animations: AnimationArrayType) {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        heapify(array, animations, i, array.length);
    }
}

function heapify(array: number[], animations: AnimationArrayType, i: number, length: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        animations.push([[i, largest], false]);
        swap(array, i, largest);
        animations.push([[i, array[i]], true]);
        animations.push([[largest, array[largest]], true]);
        heapify(array, animations, largest, length);
    }
}

function swap(array: number[], i: number, j: number) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export function generateHeapSortArrayAnimation(isSorting: boolean, array: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isSorting) return;
    if (array.length <= 1) return;
    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runHeapSort(auxiliaryArray, animations);
    runAnimation(animations);
}
