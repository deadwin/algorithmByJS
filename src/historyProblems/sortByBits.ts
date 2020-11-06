/**1356. 根据数字二进制下 1 的数目排序
 * 2020年11月6日
 * @param arr 
 */
export function sortByBits(arr: number[]): number[] {
    let func = function(num:number):number{
        let str1 = num.toString(2);
        let numOf1 = 0;
        for(let i = 0;i < str1.length;i ++){
            if(str1[i] == "1"){
                numOf1 ++;
            }
        }
        return numOf1;
    }

    let ret = arr.sort((a,b) =>{
        let num1 = func(a);
        let num2 = func(b);
        if(num1 == num2){
            if(a > b){
                return 1;
            }else if(a == b){
                return 0;
            }
            return -1;
        }
        return num1 > num2 ? 1 : -1;
    });

    return ret;
};