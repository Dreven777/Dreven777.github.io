const APIKey = '25cecb57';
const listItem = [];

function getResult(array){
    if(array.Search.length > 0){
        const tableID = document.getElementById('table_result');
        array.Search.forEach((element, index) => {
            console.log(element, index);
            if(listItem[index]){
                listItem[index].innerHTML = `
                    <td>${element.Title}</td>
                    <td>${element.Year}</td>
                    <td>${element.Type}</td>
                    <td><img src = "${element.Poster}"</td>
                `;
            }
            else {
                listItem[index] = document.createElement('tr')
                listItem[index].innerHTML = `
                    <td>${element.Title}</td>
                    <td>${element.Year}</td>
                    <td>${element.Type}</td>
                    <td><img src = "${element.Poster}"</td>
                `;
                tableID.appendChild(listItem[index])
            }
        });
    }
}

async function inputMovie(value) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=${APIKey}&page=1`)
            if(response.ok) {
                const responseBody = await response.json();
                getResult(responseBody)
            }
            else return console.log(`Error: ${response.status}`);
      } catch (error) {
        console.error(error);
      }
}

