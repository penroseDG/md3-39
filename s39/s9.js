let data = [
    {name: 'Alfreds Futterkiste', country: 'Germany'},
    {name: 'Berglunds snabbköp', country: 'Sweden'},
    {name: 'Island Trading', country: 'UK'},
    {name: 'Königlich Essen', country: 'Germany'},
    {name: 'Laughing Bacchus Winecellars', country: 'Canada'},
    {name: 'Magazzini Alimentari Riuniti', country: 'Italy'},
    {name: 'North/South', country: 'UK'},
    {name: 'Paris spécialités', country: 'France'}
    // Add more data as needed
];
function filterTable() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}
window.onload = function() {
    let table = document.getElementById('myTable');
    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = data[i].name;
        cell2.innerHTML = data[i].country;
    }
};