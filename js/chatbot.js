const agent = document.querySelector('df-messenger');
var check = 0;
agent.addEventListener('df-response-received', function (event) {


    if (event.detail.response.queryResult.action = "input.welcome" && check == 0) {
        inputHint = agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-messenger-user-input").shadowRoot.querySelector(".input-box-wrapper > input");
        inputHint.placeholder ="Antwort eingeben";}
    });