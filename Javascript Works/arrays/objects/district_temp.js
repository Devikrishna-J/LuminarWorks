var dataset=[    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},
    {district:"ekm",temparature:31},
    {district:"ekm",temparature:29},
]
var weather_data={};
for(let data of dataset){
    let distName=data.district;
    let curTemp=data.temparature;
    if(distName in weather_data){
        let oldTemp=weather_data[distName];
        if(curTemp>oldTemp){
            weather_data[distName]=curTemp;
        }

    }
    else{
        weather_data[distName]=curTemp;
    }
}
console.log(weather_data);