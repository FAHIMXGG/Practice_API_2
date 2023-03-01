const forbesData = async () => {
    const url = `./js/api.js`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}

const displayData = data => {
    console.log(data)
    const table = document.getElementById('table')
    data.forEach( () =>{
    const tableDiv = document.createElement('tr');
    tableDiv.classList.add('bg-white')
    tableDiv.classList.add('border-b')
    tableDiv.classList.add('dark:bg-gray-800')
    tableDiv.classList.add('dark:border-gray-700')
    tableDiv.innerHTML = `
    <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    ${data.city} 
                                </th>
                                <td class="px-6 py-4">
                                    ${data.rank}
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
    
    `;
    table.appendChild(tableDiv);
   })
}
























forbesData();
