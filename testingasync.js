// function makeRequest(location){
//     return new Promise ((resolve, reject) => {
//         if(location=== 'tresholdXofYas'){
//             resolve('Google says hi')
//         } else {
//             reject("we aren't close enough to the border to execute.")
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('Processing response')
//         resolve('Extra Information '+response)
//     })
// }

// async function doWork(){
//     try{
//         const response = await makeRequest('tresholdXofYas')
//         console.log('Response Received')
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse)
//     } catch (err){
//         console.log(err)
//     }
// }
// doWork()