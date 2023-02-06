// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


function hello (firstName){
    console.log(`merhaba ${firstName}`)
}

hello(`javascript`)

const helloFuncV1 = (firstName) => {console.log(`mehaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`merhaba ${firstName}`)
helloFuncV2 ("helloFuncV2")

const helloFuncV3 = (firstName , lastName ) =>

console.log(`merhaba ${firstName} ${lastName}`)
helloFuncV3 ("helloFuncV3", "last name info")

const helloFuncV4 = (firstName , lastName ) => {
    let info = `merhaba ${firstName} ${lastName}`
    console.log(info)
    return info 
}

helloFuncV4 ("helloFuncV4", "other info")

