(function() {
  var socket = io();
  var messages = document.getElementById('message-box');
  var button = document.getElementById('field-submit');
  var input = document.getElementById('field-input');
  function submitMessage() {
    socket.emit('message', input.value);
  }
  button.addEventListener('click', submitMessage);
  input.addEventListener('keydown', function onEnter(e) {
    if (e.keyCode === 13) {
      submitMessage();
      input.value = '';
    }
  });
  socket.on('message', function(msg) {
    var li = document.createElement('li');
    li.innerHTML = msg;
    messages.appendChild(li);
  });
}());