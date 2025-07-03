// function getData(dataId){

// setTimeout(() => {
// console.log("Data Id:", dataId)
// }, 3000);                         //settimeout (callbackFun, time)


// }
// getData(1)

function getData (dataId, nextDataId){

    setTimeout(() => {
        console.log("Data1 =", dataId)
        if(nextDataId)
        {
           nextDataId()
        }
        
    }, 2000);
}
getData(1, () => {
 
getData(2, () => {
    getData(3, () => {
        getData(4,() => {
            
        }
    )
    })
})

})