import { database } from './aquariumData.js';
import { mostHolyFish, soldierFish, regularFish } from './holyFish.js';

export const fishList = () => {
    let fishHTML = '';
    
        fishHTML += mostHolyFish();
        fishHTML += soldierFish();
        fishHTML += regularFish();    
    return fishHTML;
}

export const renderFishToDOM = (fishHTML) => {
   const fishList = document.getElementById('fishList');

   if (fishList) {
       fishList.innerHTML = fishHTML;
   } else {
       console.error('Could not find element with id "fishList"');
   }
};