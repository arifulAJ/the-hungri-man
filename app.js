const searchFood= ()=>{
    const foodFor=document.getElementById('inputSearch').value;

  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodFor}`
 
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayFoods(data.meals))
  .catch(error => console.log(error));

}
const displayFoods=foods=>{
  
    const displayUi=document.getElementById('forTheDisplay');
    foods.forEach(food => {
        console.log(food);
     const creatDiv=document.createElement('div');
     creatDiv.className="creatClass";
     creatDiv.innerHTML=`
       <img  src= ${food.strMealThumb}>
        <P id="text"> ${food.strMeal}</P>
     
     
     `
    
     displayUi.appendChild(creatDiv);
   
       
    });
    }