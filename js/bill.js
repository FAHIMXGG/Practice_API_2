const forbesData = async () => {
    const url = `./js/api.js`
    const res = await fetch(url);
    const infos = await res.json();
    displayData(infos);
}

const displayData = infos => {
    console.log(infos)
    const table = document.getElementById('table')
    infos.forEach( (info) =>{
    const tableDiv = document.createElement('tr');
    tableDiv.classList.add('bg-white')
    tableDiv.classList.add('border-b')
    tableDiv.classList.add('dark:bg-gray-800')
    tableDiv.classList.add('dark:border-gray-700')
    tableDiv.innerHTML = `
    <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    ${info.personName} <button onclick = "loadMealDetail(${info.naturalId
                                    })" data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="" type="button">
                                    Toggle modal
                                  </button>
                                </th>
                                <td class="px-6 py-4">
                                    ${info.rank}
                                </td>
                                <td class="px-6 py-4">
                                    ${info.industries[0]}
                                </td>
                                <td  class="px-6 py-4">
                                    ${info.archivedWorth}
                                </td>
                                
    `;
    table.appendChild(tableDiv);
   })
}



const loadMealDetail = phone =>{
    console.log(phone);
    // const modalTitle = document.getElementById('phoneDetailModalLabel');
    // modalTitle.innerText = phone.name;
    // const phoneDetails= document.getElementById('phone-details');
    // phoneDetails.innerHTML = `
    // <img src="${phone.image
    // }" alt="">
    // <p> Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date'}</p>
    // <p>Storage: ${phone.mainFeatures.storage} </p>
    // <p>chipSet: ${phone.mainFeatures.chipSet}</p>
    // <p>displaySize: ${phone.mainFeatures.displaySize}</p>
    // <p></p>
    // <p> others: ${phone.others ? phone.others.Bluetooth : 'none'}</p>
    // `
  }



















forbesData();
