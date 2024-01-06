// 1

// for(i =0; i <= 10; i ++ ){
//     console.log(i)
// }




    
// let i =0;
// while(i <= 9){
    
//     i++;
//     console.log(i)
// }




// // iii


    // let i = 0
    // do {
    // console.log(i)
    // i++
    
    
    // } while (i <= 10)
  
    
// 2.
// for(i =10;i>= 0; i--){
//     console.log(i);
// }



// let i = 11;
// while(i >= 1){
//     i--;
//     console.log(i)
// }


// let i = 10
// do {
// console.log(i)
// i--
// } while (i >= 0)




// for (i = 0; i >= 0; i ++ ){
//     console.log(i)
// }


// 4.
// function pyramid(n){
//     for(i = 1; i<=n ; i++){
//         // let str = " ".repeat(n-i);
//         let str2 = "#".repeat(i*2-1)

//         console.log(  str2  );
//     }
// }

// pyramid(7)



// 5.

// for(i =0; i <=10 ;i++){
//     console.log(`${i}  * ${i}  = ${i*i}`)
// }

// 6.

// console.log("i i^2 i^3")
// for(i =0; i <=10 ;i++){
//     console.log(`${i}   ${i}   ${i*i}`)
// }


// 7.

// for( i = 0; i <= 100; i += 2){
//     console.log(i)
// }


// 8.

// for(var i = 1; i < 100 ; i += 2){
//     console.log(i)
// }



// program to print prime numbers between the two numbers

// take input from the user



//9.


// for (let i = 0; i <= 100; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
           
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }


// 10.
// let i;
//  sum=0;

// for(i=0;i<=100;i++){
//     (sum += i)
// }
// console.log("The sum of all numbers from 0 to 100 is ",sum)


//11.
// let i;
// var arre = [];
// var arro = [];
// sume=0;
// sumo =0;

// for(i =0;i<=100;i++){
//     if(i % 2 ==0){
//         arre = i;
//         sume += arre
//     }else{
//         arro = i;
//         sumo += arro
//     }
// }
// console.log("The sum of all evens from 0 to 100 is ",sume,". And the sum of all odds from 0 to 100 is .",sumo);


// 12.

// let arr=[];
// sume = 0;
// sumo = 0;
// var aare =0;
// var aaro =0;

// for(i =0; i <= 100; i++){
//     if(i % 2 == 0){
//         aare =i;
//         sume += aare
    
       

//     }else{
//         aaro = i;
//         sumo += aaro;
//     }
// }
// arr.push(sumo, sume)

// console.log(arr)

// 14.
// var arr = [];
// for(i =0; i <= 5; i ++){
//     arr = Math.random();
    
//     console.log(arr)
// }


// 15.

// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }

// console.log(makeid(5));



// Exercises: Level 2
// // 1.
// function makeid(length){
//     let result = ' ';
       
//     const characters = "wbvwvbriwbvusbbruvubbvbvbwuvsuvwubsvbwvb7894561230";
//     const charactersLength= characters.length;
//     let counter =0;
//     while(counter < length){
//         result += characters.charAt(Math.floor(Math.random()* charactersLength));
//         counter +=1;
        
//     }
//     return result;
// }

// console.log(makeid(6))


// 2.
// let letters = "0123456789ABCDEF"; 
  
// let colour = '#';

// for(let i =0;i < 7;i++){
//     colour += letters[Math.floor(Math.random()* 16)];
// }
// console.log(colour)



// let letters = "012"; 
  
// let colour = '';
// let colour1 = '';
// let colour2 = '';

// for(let i =0;i < 3;i++){
//     colour += letters[Math.floor(Math.random()* letters.length)];
//     colour1 += letters[Math.floor(Math.random()* letters.length)];
//     colour2 += letters[Math.floor(Math.random()* letters.length)];
// }
// console.log("rgb","(", colour ,colour1,colour2,")" );

// 4.

// const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

// let arr = [];

// let i = 0;

// while (i < countries.length) {
//     i++
//     arr.push(countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length);
//     if(countries == "land"){
//         console.log(countries);
//     }


 

//   console.log(arr); 
// }


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//     ]
//     for (const tech of webTechs) {
//     console.log(tech.toUpperCase())
//     }
//     // HTML CSS JAVASCRIPT REACT NODE MONGODB
//     for (const tech of webTechs) {
//         if(webTechs == "ML"){
//         }

//     }
        


    

// const numbers = [1, 2, 3, 4, 5]
// const newArr = []
// let sum = 0
// for(let i = 0; i < numbers.length; i++){
//   newArr.push( numbers[i] ** 2)

// }

// console.log(newArr)  // [1, 4, 9, 16, 25]

// function longestStringForLoop(arr) {
//     let word = "";
//     for (let i = 0; i < arr.length; i++) {
//       if (word.length < arr[i].length) {
//         word = arr[i];
//       }
//     }
//     return word;
//   }
  
//   function longestStringReduce(arr) {
//     return arr.reduce((a, b) => a.length < b.length ? b : a, "");
//   }
//   console.log(longestStringForLoop(["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY",
//   "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//   ));

//   weather = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY"];
//   ans =[];

//   for(var i = 0; i < weather.length; i++)
// {
//     if(weather[i].indexOf('') )
//     {
//        ans.push(weather[i]);
//        console.log(ans)
//     }
// }



// 12.

// const countries =  [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node",
// 4],["MongoDB", 7]]

// const newArr = []
// for(let i = 0; i < countries.length; i++){
//   newArr.push(countries[i])
// }
// console.log(newArr)



// 13.

// const mernStack =["HTML", "CSS", "JS", "React", "Redux", "Node",
// "Express", "MongoDB"];

// const ans = [];

// for(i =0;i<mernStack.length;i++){
//       ans.push(mernStack[i])
      
// }console.log(ans)



// 14.

// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// const ans = [];
// for (i = fruits.length; i>-1; i--){
//       ans.push(fruits[i])
// }console.log(ans)


// 15.

// var a = ['HTML', 'CSS', 'JS', 'React','Node', 'Express', 'MongoDB'];
// a.forEach(function(entry) {
//   console.log(entry);
// });



// 1.

// function printSortedArray(array) {
//   array.sort();
//   for (const item of array) {
//     console.log(item);
//   }
// }

// printSortedArray( ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']);



// function printSortedArray(array){
//   array.sort();
//   for(const item of array){
//     console.log(item)
//   }
// }

// printSortedArray(['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'])


// 3.
// function printSortedArray(array){
//   array.sort();
//   for(const item of array){
//     console.log(item)
//   }
// }

// printSortedArray(['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'])
// printSortedArray( [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
//   ])


// const countries = [
//   'Afghanistan',
//   'Albania',
//   'Algeria',
//   'Andorra',
//   'Angola',
//   'Antigua and Barbuda',
//   'Argentina',
//   'Armenia',
//   'Australia',
//   'Austria',
//   'Azerbaijan',
//   'Bahamas',
//   'Bahrain',
//   'Bangladesh',
//   'Barbados',
//   'Belarus',
//   'Belgium',
//   'Belize',
//   'Benin',
//   'Bhutan',
//   'Bolivia',
//   'Bosnia and Herzegovina',
//   'Botswana',
//   'Brazil',
//   'Brunei',
//   'Bulgaria',
//   'Burkina Faso',
//   'Burundi',
//   'Cambodia',
//   'Cameroon',
//   'Canada',
//   'Cape Verde',
//   'Central African Republic',
//   'Chad',
//   'Chile',
//   'China',
//   'Colombi',
//   'Comoros',
//   'Congo (Brazzaville)',
//   'Congo',
//   'Costa Rica',
//   "Cote d'Ivoire",
//   'Croatia',
//   'Cuba',
//   'Cyprus',
//   'Czech Republic',
//   'Denmark',
//   'Djibouti',
//   'Dominica',
//   'Dominican Republic',
//   'East Timor (Timor Timur)',
//   'Ecuador',
//   'Egypt',
//   'El Salvador',
//   'Equatorial Guinea',
//   'Eritrea',
//   'Estonia',
//   'Ethiopia',
//   'Fiji',
//   'Finland',
//   'France',
//   'Gabon',
//   'Gambia, The',
//   'Georgia',
//   'Germany',
//   'Ghana',
//   'Greece',
//   'Grenada',
//   'Guatemala',
//   'Guinea',
//   'Guinea-Bissau',
//   'Guyana',
//   'Haiti',
//   'Honduras',
//   'Hungary',
//   'Iceland',
//   'India',
//   'Indonesia',
//   'Iran',
//   'Iraq',
//   'Ireland',
//   'Israel',
//   'Italy',
//   'Jamaica',
//   'Japan',
//   'Jordan',
//   'Kazakhstan',
//   'Kenya',
//   'Kiribati',
//   'Korea, North',
//   'Korea, South',
//   'Kuwait',
//   'Kyrgyzstan',
//   'Laos',
//   'Latvia',
//   'Lebanon',
//   'Lesotho',
//   'Liberia',
//   'Libya',
//   'Liechtenstein',
//   'Lithuania',
//   'Luxembourg',
//   'Macedonia',
//   'Madagascar',
//   'Malawi',
//   'Malaysia',
//   'Maldives',
//   'Mali',
//   'Malta',
//   'Marshall Islands',
//   'Mauritania',
//   'Mauritius',
//   'Mexico',
//   'Micronesia',
//   'Moldova',
//   'Monaco',
//   'Mongolia',
//   'Morocco',
//   'Mozambique',
//   'Myanmar',
//   'Namibia',
//   'Nauru',
//   'Nepal',
//   'Netherlands',
//   'New Zealand',
//   'Nicaragua',
//   'Niger',
//   'Nigeria',
//   'Norway',
//   'Oman',
//   'Pakistan',
//   'Palau',
//   'Panama',
//   'Papua New Guinea',
//   'Paraguay',
//   'Peru',
//   'Philippines',
//   'Poland',
//   'Portugal',
//   'Qatar',
//   'Romania',
//   'Russia',
//   'Rwanda',
//   'Saint Kitts and Nevis',
//   'Saint Lucia',
//   'Saint Vincent',
//   'Samoa',
//   'San Marino',
//   'Sao Tome and Principe',
//   'Saudi Arabia',
//   'Senegal',
//   'Serbia and Montenegro',
//   'Seychelles',
//   'Sierra Leone',
//   'Singapore',
//   'Slovakia',
//   'Slovenia',
//   'Solomon Islands',
//   'Somalia',
//   'South Africa',
//   'Spain',
//   'Sri Lanka',
//   'Sudan',
//   'Suriname',
//   'Swaziland',
//   'Sweden',
//   'Switzerland',
//   'Syria',
//   'Taiwan',
//   'Tajikistan',
//   'Tanzania',
//   'Thailand',
//   'Togo',
//   'Tonga',
//   'Trinidad and Tobago',
//   'Tunisia',
//   'Turkey',
//   'Turkmenistan',
//   'Tuvalu',
//   'Uganda',
//   'Ukraine',
//   'United Arab Emirates',
//   'United Kingdom',
//   'United States',
//   'Uruguay',
//   'Uzbekistan',
//   'Vanuatu',
//   'Vatican City',
//   'Venezuela',
//   'Vietnam',
//   'Yemen',
//   'Zambia',
//   'Zimbabwe'
// ]

 
    // HTML CSS JAVASCRIPT REACT NODE MONGODB
    // for (const tech of countries) {
    //     if(countries == "land"){
    //       return countries.indexof
    //     }

    // }
//   const ans =['joe', 'jane', 'mary'].includes('jane');
//   const a = [];
//       console.log(ans)
//  if(ans == true){
//   a.push(ans[1]);
//  }
//  console.log(a)





// function longestStringForLoop(arr) {
//   let word = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (word.length < arr[i].length) {
//       word = arr[i];
//     }
//   }
//   return word;
// }
// console.log(longestStringForLoop( [ 'Afghanistan',
// 'Albania',
// 'Algeria',
// 'Andorra',
// 'Angola',
// 'Antigua and Barbuda',
// 'Argentina',
// 'Armenia',
// 'Australia',
// 'Austria',
// 'Azerbaijan',
// 'Bahamas',
// 'Bahrain',
// 'Bangladesh',
// 'Barbados',
// 'Belarus',
// 'Belgium',
// 'Belize',
// 'Benin',
// 'Bhutan',
// 'Bolivia',
// 'Bosnia and Herzegovina',
// 'Botswana',
// 'Brazil',
// 'Brunei',
// 'Bulgaria',
// 'Burkina Faso',
// 'Burundi',
// 'Cambodia',
// 'Cameroon',
// 'Canada',
// 'Cape Verde',
// 'Central African Republic',
// 'Chad',
// 'Chile',
// 'China',
// 'Colombi',
// 'Comoros',
// 'Congo (Brazzaville)',
// 'Congo',
// 'Costa Rica',
// "Cote d'Ivoire",
// 'Croatia',
// 'Cuba',
// 'Cyprus',
// 'Czech Republic',
// 'Denmark',
// 'Djibouti',
// 'Dominica',
// 'Dominican Republic',
// 'East Timor (Timor Timur)',
// 'Ecuador',
// 'Egypt',
// 'El Salvador',
// 'Equatorial Guinea',
// 'Eritrea',
// 'Estonia',
// 'Ethiopia',
// 'Fiji',
// 'Finland',
// 'France',
// 'Gabon',
// 'Gambia, The',
// 'Georgia',
// 'Germany',
// 'Ghana',
// 'Greece',
// 'Grenada',
// 'Guatemala',
// 'Guinea',
// 'Guinea-Bissau',
// 'Guyana',
// 'Haiti',
// 'Honduras',
// 'Hungary',
// 'Iceland',
// 'India',
// 'Indonesia',
// 'Iran',
// 'Iraq',
// 'Ireland',
// 'Israel',
// 'Italy',
// 'Jamaica',
// 'Japan',
// 'Jordan',
// 'Kazakhstan',
// 'Kenya',
// 'Kiribati',
// 'Korea, North',
// 'Korea, South',
// 'Kuwait',
// 'Kyrgyzstan',
// 'Laos',
// 'Latvia',
// 'Lebanon',
// 'Lesotho',
// 'Liberia',
// 'Libya',
// 'Liechtenstein',
// 'Lithuania',
// 'Luxembourg',
// 'Macedonia',
// 'Madagascar',
// 'Malawi',
// 'Malaysia',
// 'Maldives',
// 'Mali',
// 'Malta',
// 'Marshall Islands',
// 'Mauritania',
// 'Mauritius',
// 'Mexico',
// 'Micronesia',
// 'Moldova',
// 'Monaco',
// 'Mongolia',
// 'Morocco',
// 'Mozambique',
// 'Myanmar',
// 'Namibia',
// 'Nauru',
// 'Nepal',
// 'Netherlands',
// 'New Zealand',
// 'Nicaragua',
// 'Niger',
// 'Nigeria',
// 'Norway',
// 'Oman',
// 'Pakistan',
// 'Palau',
// 'Panama',
// 'Papua New Guinea',
// 'Paraguay',
// 'Peru',
// 'Philippines',
// 'Poland',
// 'Portugal',
// 'Qatar',
// 'Romania',
// 'Russia',
// 'Rwanda',
// 'Saint Kitts and Nevis',
// 'Saint Lucia',
// 'Saint Vincent',
// 'Samoa',
// 'San Marino',
// 'Sao Tome and Principe',
// 'Saudi Arabia',
// 'Senegal',
// 'Serbia and Montenegro',
// 'Seychelles',
// 'Sierra Leone',
// 'Singapore',
// 'Slovakia',
// 'Slovenia',
// 'Solomon Islands',
// 'Somalia',
// 'South Africa',
// 'Spain',
// 'Sri Lanka',
// 'Sudan',
// 'Suriname',
// 'Swaziland',
// 'Sweden',
// 'Switzerland',
// 'Syria',
// 'Taiwan',
// 'Tajikistan',
// 'Tanzania',
// 'Thailand',
// 'Togo',
// 'Tonga',
// 'Trinidad and Tobago',
// 'Tunisia',
// 'Turkey',
// 'Turkmenistan',
// 'Tuvalu',
// 'Uganda',
// 'Ukraine',
// 'United Arab Emirates',
// 'United Kingdom',
// 'United States',
// 'Uruguay',
// 'Uzbekistan',
// 'Vanuatu',
// 'Vatican City',
// 'Venezuela',
// 'Vietnam',
// 'Yemen',
// 'Zambia',
// 'Zimbabwe'
// ]));

// const arr = ['Albania',
// 'Algeria',
// 'Andorra',
// 'Angola',
// 'Antigua and Barbuda',
// 'Argentina',
// 'Armenia',
// 'Australia',
// 'Austria',
// 'Azerbaijan',
// 'Bahamas',
// 'Bahrain',
// 'Bangladesh',
// 'Barbados',
// 'Belarus',
// 'Belgium',
// 'Belize',
// 'Benin',
// 'Bhutan',
// 'Bolivia',
// 'Bosnia and Herzegovina',
// 'Botswana',
// 'Brazil',
// 'Brunei',
// 'Bulgaria',
// 'Burkina Faso',
// 'Burundi',
// 'Cambodia',
// 'Cameroon',
// 'Canada',
// 'Cape Verde',
// 'Central African Republic',
// 'Chad',
// 'Chile',
// 'China',
// 'Colombi',
// 'Comoros',
// 'Congo (Brazzaville)',
// 'Congo',
// 'Costa Rica',
// "Cote d'Ivoire",
// 'Croatia',
// 'Cuba',
// 'Cyprus',
// 'Czech Republic',
// 'Denmark',
// 'Djibouti',
// 'Dominica',
// 'Dominican Republic',
// 'East Timor (Timor Timur)',
// 'Ecuador',
// 'Egypt',
// 'El Salvador',
// 'Equatorial Guinea',
// 'Eritrea',
// 'Estonia',
// 'Ethiopia',
// 'Fiji',
// 'Finland',
// 'France',
// 'Gabon',
// 'Gambia, The',
// 'Georgia',
// 'Germany',
// 'Ghana',
// 'Greece',
// 'Grenada',
// 'Guatemala',
// 'Guinea',
// 'Guinea-Bissau',
// 'Guyana',
// 'Haiti',
// 'Honduras',
// 'Hungary',
// 'Iceland',
// 'India',
// 'Indonesia',
// 'Iran',
// 'Iraq',
// 'Ireland',
// 'Israel',
// 'Italy',
// 'Jamaica',
// 'Japan',
// 'Jordan',
// 'Kazakhstan',
// 'Kenya',
// 'Kiribati',
// 'Korea, North',
// 'Korea, South',
// 'Kuwait',
// 'Kyrgyzstan',
// 'Laos',
// 'Latvia',
// 'Lebanon',
// 'Lesotho',
// 'Liberia',
// 'Libya',
// 'Liechtenstein',
// 'Lithuania',
// 'Luxembourg',
// 'Macedonia',
// 'Madagascar',
// 'Malawi',
// 'Malaysia',
// 'Maldives',
// 'Mali',
// 'Malta',
// 'Marshall Islands',
// 'Mauritania',
// 'Mauritius',
// 'Mexico',
// 'Micronesia',
// 'Moldova',
// 'Monaco',
// 'Mongolia',
// 'Morocco',
// 'Mozambique',
// 'Myanmar',
// 'Namibia',
// 'Nauru',
// 'Nepal',
// 'Netherlands',
// 'New Zealand',
// 'Nicaragua',
// 'Niger',
// 'Nigeria',
// 'Norway',
// 'Oman',
// 'Pakistan',
// 'Palau',
// 'Panama',
// 'Papua New Guinea',
// 'Paraguay',
// 'Peru',
// 'Philippines',
// 'Poland',
// 'Portugal',
// 'Qatar',
// 'Romania',
// 'Russia',
// 'Rwanda',
// 'Saint Kitts and Nevis',
// 'Saint Lucia',
// 'Saint Vincent',
// 'Samoa',
// 'San Marino',
// 'Sao Tome and Principe',
// 'Saudi Arabia',
// 'Senegal',
// 'Serbia and Montenegro',
// 'Seychelles',
// 'Sierra Leone',
// 'Singapore',
// 'Slovakia',
// 'Slovenia',
// 'Solomon Islands',
// 'Somalia',
// 'South Africa',
// 'Spain',
// 'Sri Lanka',
// 'Sudan',
// 'Suriname',
// 'Swaziland',
// 'Sweden',
// 'Switzerland',
// 'Syria',
// 'Taiwan',
// 'Tajikistan',
// 'Tanzania',
// 'Thailand',
// 'Togo',
// 'Tonga',
// 'Trinidad and Tobago',
// 'Tunisia',
// 'Turkey',
// 'Turkmenistan',
// 'Tuvalu',
// 'Uganda',
// 'Ukraine',
// 'United Arab Emirates',
// 'United Kingdom',
// 'United States',
// 'Uruguay',
// 'Uzbekistan',
// 'Vanuatu',
// 'Vatican City',
// 'Venezuela',
// 'Vietnam',
// 'Yemen',
// 'Zambia',
// 'Zimbabwe'
// ];

// arr.reverse();
// console.log(arr);




// const namesHardest = ['emIly sMith', 'angeliNA Jolie', 'braD piTt'];

// function capitalizeNames(peopleArray) {
//     return peopleArray.toString().toLowerCase().split('').map(function(word) {
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ').split();
// }


// // set the resulting array to this variabble
// const capitalizedNames = capitalizeNames(namesHardest);
// console.log(capitalizeNames);