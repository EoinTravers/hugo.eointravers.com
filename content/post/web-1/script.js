let current_date = Date(Date.now());
let new_p = document.createElement('p');
new_p.innerHTML = 'Page loaded at ' + current_date;
document.getElementById('contents').append(new_p);
