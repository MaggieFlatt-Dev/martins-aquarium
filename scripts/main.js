import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { renderFishToDOM } from './fishList.js'
import { renderTipsToDOM } from './tipList.js'
import { renderLocationsToDOM } from './locationList.js'
import { mostHolyFish } from './holyFish.js'
import { soldierFish } from './holyFish.js'
import { regularFish } from './holyFish.js'


// Generate the fish list
const fishHTML = fishList();
renderFishToDOM(fishHTML);

// Generate the care tips
const tipsHTML = tipList();
renderTipsToDOM(tipsHTML);

// Generate the location list
const locationHTML = locationList();
renderLocationsToDOM(locationHTML);

//invoke and store generated strings
const holyFishHTML = mostHolyFish();
const soldierFishHTML = soldierFish();
const regularFishHTML = regularFish();


                                                                                        