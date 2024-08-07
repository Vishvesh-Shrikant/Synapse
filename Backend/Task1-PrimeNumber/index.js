const checkPrime=(x)=>{
    let count=0
    for(let i=2;i<=x;i++)
    {
        if(x%i==0)
            count++
    }
    return count==1
}

const binaryConvert=(x)=>{
    let binary=''
    while(x>0)
    {
        binary=(x%2)+binary;
        x=Math.floor(x/2);
    }
    return binary;
}

const factors=(x)=>{
    let fact=[]
    for(let i=1;i<=x;i++)
    {
        if(x%i==0)
        {
            fact.push(i);
        }
    }
    return fact
}


const getList=(start, end)=>{
    let list={}
    let i=0
    for(i=start;i<end;i++)
    {
        if(checkPrime(i))
            list[Number(i)]=binaryConvert(i)
        else
            list[Number(i)]=factors(i)
    }
    return list
}
console.log(getList(2,8))