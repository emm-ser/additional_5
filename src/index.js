module.exports = function check(str, bracketsConfig) {
  var openBrackets = [];
    var map = new Map();


    for (var i = 0; i < bracketsConfig.length; i++) {

        openBrackets.push(bracketsConfig[i][0]);
        map.set(bracketsConfig[i][0], bracketsConfig[i][1]);

    }

    var pattern = [];

    for (var i = 0; i < str.length; i++) {
        if (openBrackets.indexOf(str[i]) >= 0) {
            pattern.push(str[i]);
        } else if (str[i] != map.get(pattern.pop())) {
            return false;
        }
    }

    return pattern.length > 0 ? false : true;
}
