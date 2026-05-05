import {propertyForSaleArr} from './propertyforsaleArr.js'
import {placeholderPropertyObj} from './placeholderProperityArr.js'

function getPropertyHtml(properties = [placeholderPropertyObj]) {
  return properties
    .map(({ image, location, price, comment, roomSizes }) => {
      const totalSize = roomSizes.reduce((total, room) => total + room, 0);

      return `
        <div class="card">
          <img src="${image}" alt="Property at ${location}" />
          <div class="card-info">
            <p class="location">${location}</p>
            <p class="price">$${price.toLocaleString()}</p>
            <p class="comment">${comment}</p>
            <p class="size">Total Size: ${totalSize} m²</p>
          </div>
        </div>
      `;
    })
    .join('');
}

const cardsContainer = document.getElementById('cards-container');
if (cardsContainer) {
  cardsContainer.innerHTML = getPropertyHtml(propertyForSaleArr);
} else {
  console.error('cards-container element not found');
}