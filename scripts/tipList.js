import { database } from './aquariumData.js';

export const tipList = () => {
    let tipsHTML = '<article class="tips"><h2>Tips</h2>';

    for (const tip of database.tips) {
        tipsHTML += `
             <section class="tip">
                <h3 class="tip_topic">Topic: ${tip.topic}</h3>
                <p class="tip_text">${tip.text}</p>
            </section>    
        `;
}
tipsHTML += '</article>';
return tipsHTML
};

export const renderTipsToDOM = (tipsHTML) => {
   const tipList = document.getElementById('tipList');

   if (tipList) {
       tipList.innerHTML = tipsHTML;
   } else {
       console.error('Could not find element with id "tipList"');
   }
};