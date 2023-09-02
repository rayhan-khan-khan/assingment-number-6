// const handleCategory = async() => {
//     const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')

// const data = await res.json();
// const tabContainer = document.getElementById('tab-container')

// data.data.news_category.for((category) => {
//     console.log(category);
//     const div = document.createElement('div');
//     div.innerHTML = `
//     // <button class="px-6 py-2 mr-4 rounded-lg text-[18px] text-[#FFF] font-medium bg-[#FF1F3D]">All</button>
//     `;
//     tabContainer.appendChild(div);
// })
// console.log(data.data.news_category);
// };

// handleCategory();



const allButton = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const button = data.data;
    displayJson(button)
    
    
}
const  displayJson =(button) =>{
    console.log(button)
    const allContainer = document.getElementById('all-container')
    for(const news of button){
        // allContainer.slice(0,4)
        const allDiv = document.createElement('div')
        allDiv.innerHTML =`
        <div class="tabs">
        <button class="bg-stone-300 px-6 py-2 rounded">${news.category}</button>
       
      
      </div>
       
        
        `;
       
        allContainer.appendChild(allDiv);
    }

}

allButton();