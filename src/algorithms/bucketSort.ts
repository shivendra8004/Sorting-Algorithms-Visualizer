import { AnimationArrayType } from "@/lib/types";

function runBucketSort(arr: number[], bucketSize: number, animations: AnimationArrayType) {
    const n = arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < n; i++) {
        const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    let index = 0;
    for (let i = 0; i < bucketCount; i++) {
        const bucket = buckets[i];
        bucket.sort((a: number, b: number) => a - b);
        for (const num of bucket) {
            arr[index] = num;
            animations.push([[index, num], true]);
            index++;
        }
    }
}

export function generateBucketSortArrayAnimation(
    isSorting: boolean,
    arr: number[],
    bucketSize: number,
    runAnimation: (animations: AnimationArrayType) => void
) {
    if (isSorting) return;
    if (arr.length <= 1) return;
    const animations: AnimationArrayType = [];
    const auxiliaryArray = arr.slice();
    runBucketSort(auxiliaryArray, bucketSize, animations);
    runAnimation(animations);
}
