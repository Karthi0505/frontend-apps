const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
//---------------------------------------------

async function get_user_details(username) {

    const data = await fetch(APIURL + username);
                 // waits until the request completes...
                 //  Because the await keyword is present, the asynchronous function is paused until the request completes.
    
    const parsed_data = await data.json();
                            //.json of Response interface takes a Response stream and reads it to completion. 
                            //It takes JSON as input and parse it to a JavaScript object

    console.log(parsed_data);

    const data_in_html = `<h1>${parsed_data.login}</h1>
        <h2>Public Repos: ${parsed_data.public_repos}</h2>
        <h2>User ID: ${parsed_data.id}</h2>
        <p>Created at: ${parsed_data.created_at}</p>
        <p>Updated at: ${parsed_data.updated_at}</p>
    `;
    main.innerHTML = data_in_html;
}
get_user_details("Karthi0505");   

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const user_entered_name = search.value;
    if (user_entered_name) {
        get_user_details(user_entered_name);   
        // search.value = ''  //to empty the input field
    }

});
