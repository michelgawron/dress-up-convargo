/* global CONVARGO*/
'use strict';

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

(() => {
    const render = (actors) => {
        const fragment = document.createDocumentFragment();

        // Creating an ul in order to create cards
        const div = document.createElement('ul');
        div.className = "list-group mb-3";

        // Mapping the elements to our table
        const template = actors.map(actor => {
            return `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">${capitalizeFirstLetter(actor.who)}</h6>
            <small class="text-muted">${capitalizeFirstLetter(actor.type)}</small>
          </div>
          <span class="text-muted">${actor.amount} $</span>
        </li>
      `;
        }).join('');

        div.innerHTML += template;
        fragment.appendChild(div);
        document.querySelector('#actors').innerHTML = '';
        document.querySelector('#actors').appendChild(fragment);
    };

    const button = document.querySelector('#compute');

    button.addEventListener('click', function onClick() {
        const trucker = CONVARGO.getTrucker();
        const distance = document.querySelector('#distance').value;
        const volume = document.querySelector('#volume').value;
        const option = document.querySelector('.option').checked;
        const actors = CONVARGO.payActors(trucker, distance, volume, option);

        render(actors);

        return;
    });
})();
