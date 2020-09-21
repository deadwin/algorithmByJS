/**2020年9月21日
 * 一个未优化的快速排序
 * 快速排序
 * @param arr 
 */
export var quickSort = function(arr:Array<number>){
    let swap = function(arr:Array<number>,a:number,b:number){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp; 
    }
    let partition = function(arr:Array<number>,start:number,end:number){
        let prvotKey = arr[start];
        while(start < end){
            while(start < end && arr[end] >= prvotKey){
                end --;
            }
            console.log(start,end,"aaaa",arr)
            swap(arr,start,end);
            while(start < end && arr[start] <= prvotKey){
                start ++;
            }
            console.log(start,end,"bbbb",arr)
            swap(arr,start,end);
        }
        return start;
    }

    let qSort =(arr:Array<number>,start:number,end:number) =>{
        let pivot;
        if(start < end){
            pivot = partition(arr,start,end);
            console.log(pivot,"pivot")
            qSort(arr,start,pivot - 1);
            qSort(arr,pivot + 1,end);
        }
    };
    qSort(arr,0,arr.length -1);
}
