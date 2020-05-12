 window.onload = function()
	{
    var tab = document.createElement('table');
    tab.border = "black";
    tab.id = 'tb'
    for(var i=0; i<=4; i++){
        var newRow = tab.insertRow(i);
        for(var j=0; j<=4; j++)
		{
            var newCell = newRow.insertCell(j);
            newCell.width = 40;
            newCell.height = 40;
            newCell.id = 'tl';
            var s = i + 1;
            newCell.innerHTML += j + 1 + ':' + s;
		}
        document.body.appendChild(tab);
        let table = document.body.firstElementChild;

        for (let i = 0; i < table.rows.length; i++) 
		{
          let row = table.rows[i];
          row.cells[i].style.backgroundColor = 'red';
        }
    }
 }