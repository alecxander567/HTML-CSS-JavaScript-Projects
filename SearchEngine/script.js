const input = document.getElementById("input");
const output = document.getElementById("output");
const search = document.getElementById("search");
const clear = document.getElementById("clear");

const api_key = "AIzaSyCqAYKr66ryhZqW57spN1XR6TDKf_ayUX4";

search.addEventListener("click", ()=>{
    const myInput = input.value.trim();
    if (myInput == "") {
        alert("An input is required!");
        return;
    }

    const cx_id = "c13c3720a05eb47d2";
    const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${cx_id}&q=${encodeURIComponent(myInput)}`;

    fetch (apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);

            const result = data.items;

            if (result && result.length > 0) {
                const outputHtml = result.map(item => `<p><a href="${item.link}"target="_blank">${item.title}</a></p><p>${item.snippet}</p><small>${item.displayLink}</small><br>`).join("");
                output.innerHTML = `<h5><strong>Here are some of the results from your search :</strong></h5><br><br>${outputHtml}`;
            } else {
                output.innerHTML = "No results found.";
            }
        })
});

clear.addEventListener("click", ()=>{
    output.innerHTML = "";
    input.value = "";
});
