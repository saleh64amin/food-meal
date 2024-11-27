document.getElementById('calorie-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // الحصول على القيم من الحقول
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activity-level').value);
  
let height1 = height

console.log("الطول"+height1);


    let idealWeight;

    // تحقق من الجنس واحسب الوزن المثالي
    if (gender === "male") {
        // للرجال
        idealWeight = (height1 - 99) - (height1 - 150) / 4;
    } else if (gender === "female") {
        // للنساء
        idealWeight = height1 - 99 - (height1 - 150) / 2;
    } else if (gender === "brgnet1") {
        // للنساء
        idealWeight = height1 - 99 - (height1 - 150) / 2;
    }else if (gender === "brgnet2") {
        // للنساء
        idealWeight = height1 - 99 - (height1 - 150) / 2;
    }else if (gender === "brgnet3") {
        // للنساء
        idealWeight = height1 - 99 - (height1 - 150) / 2;
    }else if (gender === "mama") {
        // للنساء
        idealWeight = (height1 - 100) - (height1 - 150) / 2 ;
    }




console.log( "الوزن المثالي"+idealWeight);









    // حساب BMR



    let bmr;
    if (gender === 'male') {
      bmr = 30*idealWeight;
    }   else if (gender === 'female') {
        bmr =  idealWeight*35 +50
    } 
    
    
    
    else if (gender === 'brgnet1') {
        bmr =  idealWeight*30 +50
    }  else if (gender === "brgnet2") {
        bmr =  idealWeight*35 +250
    } else if (gender === "brgnet3") {
        bmr =  idealWeight*35 +450
    } else if (gender === "mama") {
        bmr =  idealWeight*40
    } 
  
    // حساب TDEE
    const tdee = bmr ;
    // * activityLevel
    // توزيع الماكروز
    const proteinCalories = tdee * 0.15; // 30% للبروتين
    const fatCalories = tdee * 0.25;    // 25% للدهون
    const carbCalories = tdee - (proteinCalories + fatCalories);
  
    const proteinGrams = proteinCalories / 4; // 1 جرام بروتين = 4 سعرات
    const fatGrams = fatCalories / 9;        // 1 جرام دهون = 9 سعرات
    const carbGrams = carbCalories / 4;     // 1 جرام كربوهيدرات = 4 سعرات
  







    // عرض النتائج
    document.getElementById('calories-result').textContent = `احتياجك اليومي: ${Math.round(tdee)} سعر حراري.`;
    document.getElementById('macros-result').textContent = 
      `البروتين: ${Math.round(proteinGrams)} جم، الدهون: ${Math.round(fatGrams)} جم، الكربوهيدرات: ${Math.round(carbGrams)} جم.`;







































































function distributeExchanges(carbs, protein, fats) {
    // القيم التغذوية لكل بديل
    const dairy = { carbs: 12, protein: 8, fats: 0 };
    const vegetables = { carbs: 5, protein: 2, fats: 0 };
    const bread = { carbs: 15, protein: 2, fats: 0 };
    const fruits = { carbs: 15, protein: 0, fats: 0 };
    const meat = { carbs: 0, protein: 7, fats: 5 };
    const fatsGroup = { carbs: 0, protein: 0, fats: 5 };

    // عدد الحصص الثابتة للألبان والخضراوات
    const dairyServings = 4;
    const vegetableServings = 4;
    const breadServings = 9
    // حساب المغذيات المخصصة للألبان والخضراوات
    const dairyCarbs = dairyServings * dairy.carbs;
    const dairyProtein = dairyServings * dairy.protein;
    const dairyFats = dairyServings * dairy.fats;

    const vegetableCarbs = vegetableServings * vegetables.carbs;
    const vegetableProtein = vegetableServings * vegetables.protein;

    const breadcarb = breadServings * bread.carbs;
    const breadProtein = breadServings * bread.protein;
   

    // طرح المغذيات المخصصة للألبان والخضراوات من الإجمالي
    carbs -= (dairyCarbs + vegetableCarbs + breadcarb);
    protein -= (dairyProtein + vegetableProtein + breadProtein);
    fats -= dairyFats;

    // التأكد من أن الكميات غير سالبة
    carbs = Math.max(0, carbs);
    protein = Math.max(0, protein);
    fats = Math.max(0, fats);

    // توزيع باقي الكربوهيدرات على الخبز والفاكهة
    // const breadServings = Math.floor(protein / bread.protein); // كل بديل خبز يحتوي على 15 كربوهيدرات و2 بروتين و1 دهون
    // carbs -= breadServings * bread.carbs;
    // protein -= breadServings * bread.protein;
    // fats -= breadServings * bread.fats;

    const fruitServings = Math.floor(carbs / fruits.carbs); // كل بديل فاكهة يحتوي على 15 كربوهيدرات

    // توزيع باقي البروتين على اللحوم
    const meatServings = Math.floor(protein / meat.protein); // كل بديل لحوم يحتوي على 7 بروتين و5 دهون
    protein -= meatServings * meat.protein;
    fats -= meatServings * meat.fats;

    // توزيع باقي الدهون على بدائل الدهون
    const fatsServings = Math.floor(fats / fatsGroup.fats); // كل بديل دهون يحتوي على 5 دهون

    // النتائج
    return {
        dairy: dairyServings,
        vegetables: vegetableServings,
        bread: breadServings,
        fruits: fruitServings,
        meat: meatServings,
        fats: fatsServings
    };
}

// طلب القيم من المستخدم
// const carbs = parseFloat(prompt("أدخل كمية الكربوهيدرات (جم):"));
// const protein = parseFloat(prompt("أدخل كمية البروتين (جم):"));
// const fats = parseFloat(prompt("أدخل كمية الدهون (جم):"));

// حساب التوزيع
const results = distributeExchanges(carbGrams, proteinGrams, fatGrams);

// عرض النتائج
console.log("توزيع الحصص:");
console.log(`- الألبان: ${results.dairy} حصص`);
console.log(`- الخضراوات: ${results.vegetables} حصص`);
console.log(`- الخبز: ${results.bread} حصص`);
console.log(`- الفاكهة: ${results.fruits} حصص`);
console.log(`- اللحوم: ${results.meat} حصص`);
console.log(`- الدهون: ${results.fats} حصص`);

document.getElementById("ss").innerHTML=  `- الوزن المثالي: ${idealWeight} `
document.getElementById("bdel").innerHTML = `- الألبان: ${results.dairy} حصص` +" "+  `- الخضراوات: ${results.vegetables} حصص`+" " +`- الخبز: ${results.bread} حصص` +" " + `- الفاكهة: ${results.fruits} حصص` + " " +`- اللحوم: ${results.meat} حصص`  +" " + `- الدهون: ${results.fats} حصص`
  });




  
  

  