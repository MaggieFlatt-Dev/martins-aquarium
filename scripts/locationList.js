import { database } from './aquariumData.js';

export const locationList = () => {
    let locationsHTML = '<article class ="locations"><h2>Locations</h2>';

    for (const locations of database.locations) {
        locationsHTML += `
             <section class="location">
                <p class="location_name">Name: ${locations.name}</p>
                <p class="location_country">Country: ${locations.country}</p>
                <p class="location_description">Description: ${locations.description}</p>
            </section>    
        `;
}
locationsHTML += '</article>';
return locationsHTML
};

export const renderLocationsToDOM = (locationsHTML) => {
   const locationList = document.getElementById('locationList');

   if (locationList) {
       locationList.innerHTML = locationsHTML;
   } else {
       console.error('Could not find element with id "locationList"');
   }
};