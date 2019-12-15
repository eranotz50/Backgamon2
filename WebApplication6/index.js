
var _proxy = null;

function connect() {
    console.log('connect');

    _proxy = $.connection.gameHub;

    _proxy.client.connected = function() {
        console.log('Connection handshake complete.');
    };

    _proxy.client.disconnected = function () {
        console.log('Disconnected.');
    };

    _proxy.client.receive = function(from, msg) {
        console.log('recived message from ' + user + ' -> ' + msg);
    }

    $.connection.hub.start()
        .done(function () {
            console.log('Connected.');
            //_proxy.server.send('test test');
        })
        .fail(function (err) {
            console.log('Connection Failed -> ' + err);
        });
}

function login(user, password) {

    console.log('login ' + user + ' ' + password);

    _proxy.server.login(user, password)
        .done(function(res) {
            console.log('Login result -> ' + res);
        })
        .fail(function (err) {
            console.log('Login Failed -> ' + err);
        });
}

function send(user, message) {

    console.log('send ->' + user + ' -> ' + message);

    _proxy.server.send(user, message)
       .done(function (res) {
            console.log('Send Result -> ' + res);
        })
        .fail(function (err) {
            console.log('Send Failed -> ' + err);
        });
}

function loginApi(user, password) {

    console.log('login API' + user + ' ' + password);

    var req = { User: user, Password: password };
    var url = 'api/Users/Login';

    $.post(url,req)
        .done(function(res) {
            console.log('Login API result -> ' + res);
        })
        .fail(function(err) {
            console.log('Login API failed -> ' + err);
        });
}

function myNeFunc() {

}