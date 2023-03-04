const arr = [1, 2, 2, 'abc', 'abc', true, true, false, false, undefined, undefined, NaN, NaN];
//双重for循环去重,使用双重for循环获取前后相邻的数组元素，然后比较相邻数组元素是否相等，如果相等，则判断重复元素，使用splice去重
function removeDuplicate(arr){
    let len=arr.length;
    for(let i=0;i<len;i++)
    {
       for(let j=i+1;j<len;j++)
       {
         if(Object.is(arr[i],arr[j])) //建议使用Object.is，因为可以判断NaN与NaN是否相等
         {
            arr.splice(j,1);//去除重复
            len--;
            j--;
         }
       }
    }
    return arr;
}
/** hash标记去重，本质上利用js对象实现键值对，然后遍历数组将所有元素与元素类型结合并置入到键值对对象的键中，最后通过键判获取并断键值对对象的值是否为空
，如果为空，则将true赋予对应的值，并判断该键即元素数组不为重复元素，否则判断为重复元素 */
function removeDuplicatehash(arr)
{
   let hash={},result=[],type='';
   for(let i=0;i<arr.length;i++)
   {
     type=Object.prototype.toString.call(arr[i]);//获取数据类型
     
     if(!hash[arr[i]+type])
     {
        hash[arr[i]+type]=true;
        result.push(arr[i]);
     }
     
   }
   return result;
}
const resultfor=removeDuplicatehash(arr);
console.log(resultfor);
