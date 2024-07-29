'use strict'
/*
 kodun daha güvenli ve hatasız yazılmasını sağlamak için kullanılan bir özelliktir. strict mode, JavaScript dilinin bazı
  kurallarını sıkılaştırır ve bazı hatalı kullanım biçimlerini engeller. 
*/

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true; // make a mistake here 
}

if (hasDriversLicense) {
    console.log("I can drive")
}