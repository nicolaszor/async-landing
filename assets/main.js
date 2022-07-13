const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmBA_wu8xGg1OfOkfW13Q0Q&part=snippet%2Cid&order=date&maxResults=10'

const content = null || document.getElementById("content");
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5594b1aeb6msh9282c6f7ec39323p160503jsn2e546076eabd',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

//fetch('', options)
//    .then(response => response.json())
//    .then(response => console.log(response))
//    .catch(err => console.error(err));


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options) //utilizamos options para pasar la key
    const data = await response.json();
    return data;
}

(async() => { //nos permite que al ejecutar nuestro archivo se ejecute automaticamente nuestra funcion
        try {
            const videos = await fetchData(API);
            let view = `
            ${videos.items.map(video=>`<div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>${video.snippet.title
                    }
                </h3>
            </div>
        </div>`).slice(0,10).join("")} 
        `;
        content.innerHTML = view
    }catch(error){
        console.log(error);
    }
})();