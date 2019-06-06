
const socket = io();

//instanciamos DOM
let btn = document.getElementById('btnSend');
let txt = document.getElementById('txtMessage');
let select =document.getElementById('selectUser');

//creamos arreglo de mensajes
let messages=[];

//creamos evento de click en boton de envio
btn.addEventListener('click',function () {
    
    socket.emit('conexion',{
        message : txt.value,
        user:select.value
    });
    
});

socket.on('conexion',(data)=>{

    console.log(data);
    messages.push(data);
    console.log(messages);
    let table = document.getElementById('tableMessage');

    let tableContent = '<tbody>'

    messages.forEach(line => {
        
        tableContent+=`<tr><td>${line.user}</td><td>${line.message}</td></tr>`;

    });
    
    tableContent += '</tbody>'

    console.log(tableContent);

    table.innerHTML=tableContent;

});

