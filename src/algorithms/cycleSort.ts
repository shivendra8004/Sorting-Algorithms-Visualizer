import { AnimationArrayType } from "@/lib/types";

function runCycleSort(arr: number[], animations: AnimationArrayType) {
    const n = arr.length;

    for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
        let item = arr[cycleStart];
        let pos = cycleStart;

        for (let i = cycleStart + 1; i < n; i++) {
            if (arr[i] < item) {
                pos++;
            }
        }

        if (pos === cycleStart) {
            continue;
        }

        while (item === arr[pos]) {
            pos++;
        }

        if (pos !== cycleStart) {
            animations.push([[cycleStart, pos], false]);
            [item, arr[pos]] = [arr[pos], item];
            animations.push([[cycleStart, arr[cycleStart]], true]);
            animations.push([[pos, arr[pos]], true]);
        }

        while (pos !== cycleStart) {
            pos = cycleStart;

            for (let i = cycleStart + 1; i < n; i++) {
                if (arr[i] < item) {
                    pos++;
                }
            }

            while (item === arr[pos]) {
                pos++;
            }

            if (item !== arr[pos]) {
                animations.push([[cycleStart, pos], false]);
                [item, arr[pos]] = [arr[pos], item];
                animations.push([[cycleStart, arr[cycleStart]], true]);
                animations.push([[pos, arr[pos]], true]);
            }
        }
    }
}

export function generateCycleSortArrayAnimation(isSorting: boolean, arr: number[], runAnimation: (animations: AnimationArrayType) => void) {
    if (isSorting) return;
    if (arr.length <= 1) return;
    const animations: AnimationArrayType = [];
    const auxiliaryArray = arr.slice();
    runCycleSort(auxiliaryArray, animations);
    runAnimation(animations);
}
