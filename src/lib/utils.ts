import { AnimationArrayType, SortingAlgorithmType } from "./types";
import { generateBubbleSortArrayAnimation } from "@/algorithms/bubbleSort";
import { generateSelectionSortArrayAnimation } from "@/algorithms/selectionSort";
import { generateIntertionSortArrayAnimation } from "@/algorithms/insertionSort";
import { generateMergeSortArrayAnimation } from "@/algorithms/mergeSort";
import { generateQuickSortArrayAnimation } from "@/algorithms/QuickSort";
import { generateHeapSortArrayAnimation } from "@/algorithms/heapSort";
import { generateRadixSortArrayAnimation } from "@/algorithms/radixSort";
import { generateBucketSortArrayAnimation } from "@/algorithms/bucketSort";
import { generateCycleSortArrayAnimation } from "@/algorithms/cycleSort";
import { generateCountingSortArrayAnimation } from "@/algorithms/countingSort";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;
export function generateRandomNumberFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export const algorithmOptions = [
    { label: "Bubble", value: "bubble" },
    { label: "Quick", value: "quick" },
    { label: "Merge", value: "merge" },
    { label: "Insertion", value: "insertion" },
    { label: "Selection", value: "selection" },
    { label: "Heap", value: "heap" },
    { label: "Radix", value: "radix" },
    { label: "Bucket", value: "bucket" },
    { label: "Cycle", value: "cycle" },
    { label: "Counting", value: "counting" },
];
export function generateAnimationArray(
    selectedAlgorithm: SortingAlgorithmType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
    bucketSize: number
) {
    switch (selectedAlgorithm) {
        case "bubble":
            generateBubbleSortArrayAnimation(isSorting, array, runAnimation);
            break;

        case "selection":
            generateSelectionSortArrayAnimation(isSorting, array, runAnimation);
            break;

        case "insertion":
            generateIntertionSortArrayAnimation(isSorting, array, runAnimation);
            break;

        case "merge":
            generateMergeSortArrayAnimation(isSorting, array, runAnimation);
            break;

        case "quick":
            generateQuickSortArrayAnimation(isSorting, array, runAnimation);
            break;

        case "heap":
            generateHeapSortArrayAnimation(isSorting, array, runAnimation);
            break;

        case "radix":
            generateRadixSortArrayAnimation(isSorting, array, runAnimation);
            break;

        case "bucket":
            generateBucketSortArrayAnimation(isSorting, array, bucketSize, runAnimation);
            break;

        case "cycle":
            generateCycleSortArrayAnimation(isSorting, array, runAnimation);
            break;

        case "counting":
            generateCountingSortArrayAnimation(isSorting, array, runAnimation);
            break;
        default:
            break;
    }
}

export const sortingAlgorithmsData = {
    bubble: {
        title: "Bubble Sort",
        description:
            "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n)",
    },
    insertion: {
        title: "Insertion Sort",
        description:
            "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n)",
    },
    selection: {
        title: "Selection Sort",
        description:
            "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n²)",
    },
    merge: {
        title: "Merge Sort",
        description:
            "Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
        worstCase: "O(n log n)",
        averageCase: "O(n log n)",
        bestCase: "O(n log n)",
    },
    quick: {
        title: "Quick Sort",
        description:
            "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
        worstCase: "O(n²)",
        averageCase: "O(n log n)",
        bestCase: "O(n log n)",
    },
    heap: {
        title: "Heap Sort",
        description:
            "Heap sort uses the heap data structure to sort elements. It involves building a heap from the input data and repeatedly removing the maximum (for max-heap) or minimum (for min-heap) element from the heap and rebuilding the heap until the input is sorted.",
        worstCase: "O(n log n)",
        averageCase: "O(n log n)",
        bestCase: "O(n log n)",
    },
    bucket: {
        title: "Bucket Sort",
        description:
            "Bucket sort divides the input into a finite number of buckets, each of which is then sorted individually, either using a different sorting algorithm or recursively applying bucket sort. After all the elements are placed in the buckets, the buckets are concatenated to produce the final sorted array.",
        worstCase: "O(n²)",
        averageCase: "O(n+k)",
        bestCase: "O(n+k)",
    },
    radix: {
        title: "Radix Sort",
        description:
            "Radix sort sorts the elements by first grouping the individual digits of the same place value. Starting from the least significant digit to the most significant digit, each digit is sorted using stable sort algorithms like counting sort or bucket sort.",
        worstCase: "O(nk)",
        averageCase: "θ(nk)",
        bestCase: "Ω(n+k)",
    },
    cycle: {
        title: "Cycle Sort",
        description:
            "Cycle sort is an in-place, unstable sorting algorithm that is optimal for sorting arrays where the number of writes is significantly more expensive than the number of reads. It reduces the number of memory writes to a minimum.",
        worstCase: "O(n²)",
        averageCase: "O(n²)",
        bestCase: "O(n²)",
    },
    counting: {
        title: "Counting Sort",
        description:
            "Counting sort is a non-comparison based sorting algorithm that sorts elements based on their frequency of occurrence. It works well when the range of input values is relatively small compared to the number of elements.",
        worstCase: "O(n+k)",
        averageCase: "O(n+k)",
        bestCase: "O(n+k)",
    },
};
