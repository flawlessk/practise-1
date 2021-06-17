//TASK 1


let A = false;
let B = true;
let C = false;
let D = undefined;
let E = undefined;
let F = true;
let G = 3;
let H = 10;
let I = -3;
let J = 10;

console.log((A && B) || !D); //true
console.log((B && !A || D) !== !F); //true
console.log(C || (!B && !F) && (A || E)); //false
console.log(A && (B == F) || (D || B) && !C); //true
console.log((C || (F == !A) || (E == D)) == (!B || F)); //true
console.log(!C && (J == H)); //true
console.log(A || !B || (H > I)); //true
console.log(((B !== C) || (I > G)) !== (!A && B)); //false
console.log((!A || J == C) && E || (!C == !A)); //true
console.log((A || (H > I) && (J >= H)) !== B || A); //false




//TASK 2

let neo =  "I AM NEO"
const neoSumPoint = 60 + 57 + 72 + 88;
const neoAveragePoint = neoSumPoint / 4;
const neoPercPoint = neoAveragePoint + "%";

let indiana =  "I AM INDIANA"
const indianaSumPoint = 78 + 52 + 66 + 80;
const indianaAveragePoint = indianaSumPoint / 4;
const indianaPercPoint = indianaAveragePoint + "%";

let severus =  "I AM SEVERUS"
const severusSumPoint = 75 + 67 + 54 + 90;
const severusAveragePoint = severusSumPoint / 4;
const severusPercPoint = severusAveragePoint + "%";

let  aladin =  "I AM ALLADIN"
const aladinSumPoint = 80 + 52 + 68 + 76;
const aladinAveragePoint = aladinSumPoint / 4;
const aladinPercPoint = aladinAveragePoint + "%";


console.log(neoSumPoint);
console.log(neoAveragePoint);
console.log(neoPercPoint);

console.log(indianaSumPoint);
console.log(indianaAveragePoint);
console.log(indianaPercPoint);

console.log(severusSumPoint);
console.log(severusAveragePoint);
console.log(severusPercPoint);

console.log(aladinSumPoint);
console.log(aladinAveragePoint);
console.log(aladinPercPoint);

// GPA of each student // ROUNDED


function calculateStudentGpa(a, b, c, d) {
    const units = 4 + 2 + 7 + 5;
    const gradePoints = 4*a +2*b + 7*c + 5*d;
    return (gradePoints / units).toFixed(2);
  }


const neoGpa = calculateStudentGpa(0.5, 0.5, 2, 3);
console.log(neoGpa)

const indianaGpa = calculateStudentGpa(2, 0.5, 1, 2);
console.log(indianaGpa)

const severusGpa = calculateStudentGpa(2, 1, 0.5, 3);
console.log(severusGpa)

const aladinGpa = calculateStudentGpa(2, 0.5, 1, 2);
console.log(aladinGpa)


if(indianaGpa >= aladinGpa && aladinGpa > neoGpa && aladinGpa > severusGpa && indianaGpa > severusGpa) {
    console.log(indiana + " " + "I HAVE THE BEST GPA" + " " + indianaGpa) 
} else (neoGpa > severusGpa && aladinGpa < severusGpa && indianaGpa <= aladinGpa && neoGpa > aladinGpa) 
    console.log(neo + " " + "I HAVE THE BEST GPA" + " " + neoGpa);




if(severusGpa !== aladinGpa && severusGpa > neoGpa && neoGpa > indianaGpa && indianaGpa > aladinGpa) {
    console.log(severus + " " + "I HAVE THE BEST GPA" + " " + severusGpa)
} else if(aladinGpa > neoGpa && indianaGpa < aladinGpa && severusGpa < aladinGpa)
    console.log(aladin + " " + "I HAVE THE BEST GPA" + " " + aladinGpa)
  else (neoGpa > severusGpa && aladinGpa < severusGpa && indianaGpa <= aladinGpa && neoGpa > aladinGpa) 
    console.log(neo + " " + "I HAVE THE BEST GPA" + " " + neoGpa);



    
switch (true) {
    case indianaGpa > neoGpa && indianaGpa > severusGpa && indianaGpa > aladinGpa:
        console.log(indiana + " " + "I HAVE THE BEST GPA" + " " + indianaGpa);
        break;
    case aladinGpa > neoGpa && aladinGpa > severusGpa && aladinGpa > indianaGpa:
        console.log(aladin + " " + "I HAVE THE BEST GPA" + " " + aladinGpa);
        break;
    case severusGpa > neoGpa && severusGpa > aladinGpa && severusGpa > indianaGpa:
        console.log(severus + " " + "I HAVE THE BEST GPA" + " " + severusGpa);
        break;
    case neoGpa > severusGpa && aladinGpa < severusGpa && indianaGpa <= aladinGpa && neoGpa > aladinGpa:
        console.log(neo + " " + "I HAVE THE BEST GPA" + " " + neoGpa);
}




    
// const students = [
// 	{
//   	name: 'indiana',
//     results: [
//     	{
//       	subject: 'მჭერმეტყველება',
//         point: 78
//       },
//       {
//       	subject: 'ჭრა-კერვა',
//         point: 52
//       },
//       {
//       	subject: 'პარაფსიქოლოგია',
//         point: 66
//       },
//       {
//       	subject: 'ვალენტობამცოდნეობა',
//         point: 80
//       }
//     ]
//   },
//   {
//   	name: 'neo',
//     results: [
//     	{
//       	subject: 'მჭერმეტყველება',
//         point: 60
//       },
//       {
//       	subject: 'ჭრა-კერვა',
//         point: 57
//       },
//       {
//       	subject: 'პარაფსიქოლოგია',
//         point: 72
//       },
//       {
//       	subject: 'ვალენტობამცოდნეობა',
//         point: 88
//       }
//     ]
//   },
//   {
//   	name: 'severus',
//     results: [
//     	{
//       	subject: 'მჭერმეტყველება',
//         point: 75
//       },
//       {
//       	subject: 'ჭრა-კერვა',
//         point: 67
//       },
//       {
//       	subject: 'პარაფსიქოლოგია',
//         point: 54
//       },
//       {
//       	subject: 'ვალენტობამცოდნეობა',
//         point: 90
//       }
//     ]
//   },
//   {
//   	name: 'aladin',
//     results: [
//     	{
//       	subject: 'მჭერმეტყველება',
//         point: 80
//       },
//       {
//       	subject: 'ჭრა-კერვა',
//         point: 52
//       },
//       {
//       	subject: 'პარაფსიქოლოგია',
//         point: 68
//       },
//       {
//       	subject: 'ვალენტობამცოდნეობა',
//         point: 76
//       }
//     ]
//   }
// ];
