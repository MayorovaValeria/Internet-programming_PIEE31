function AddPhone() 
{
    console.log(document.body.childNodes);
    let form = document.getElementById('Form');
    var select = document.createElement('select');
    var option = document.createElement('option');
    option.innerHTML = "Домашний";
    select.append(option);
    var option2 = document.createElement('option');
    option2.innerHTML = "Рабочий";
    select.append(option2);
    var option3 = document.createElement('option');
    option3.innerHTML = "Mобильный";
    select.append(option3);
    var text = document.createElement('input');
    text.placeholder = "+7(9XX)XXX-XX-XX";
    var button = document.createElement('button');
    button.textContent = "-";
    button.onclick = Remove;
    var div = document.createElement('div');
    div.append(select, text, button);
    form.append(div);
}

function Remove() 
{
  let parent = this.parentNode;
   parent.remove();
}