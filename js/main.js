const words = [
    'spacejump',
    'apples',
    'graphics',
    'javascript',
    'peaches'
];

// length: 6 = only use words with 6 chars
// length: [6,8] = only use words with between 6 and 8 chars

// upper_case = first means football -> Football
// upper_case = last means football -> footbalL

// strip = vowels means football -> ftbll
// strip = consonants means football -> ooa
const configs = [{
    upper_case:'first',
    length:[6,8]
},{
    upper_case:'last',
    length:[7,9],
    strip:'vowels'
},{
    length:10,
    strip:'consonants'
}];

function applyConfig(words, configs) {
    let result = [];

    configs.forEach(function(item){

        //filtering
        if ('length' in item && item.length) {
            result.push(filterItems(item, words));
        }
    });

    return result;
}

function filterItems(config, words) {
    let result = [];

    // filtering
    words.map(function(word){
        if (Number.isInteger(config.length)) {
            if (word.length == config.length) {
                result.push(word);
            }
        } else {
            if (word.length >= config.length[0] && word.length <= config.length[1]) {
                result.push(word);
            }
        }
    });


    // accepting parameters
    result = result.map(function(item){
        return acceptingParameters(item, config);
    });
    return result;
}

function acceptingParameters(word, config) {
    if ('strip' in config) {
        if (config.strip == 'consonants') word = word.replace(/[aeiou]/ig,'');
        if (config.strip == 'vowels')     word = word.replace(/[bcdfghjklmnopqrstvwxyz]/ig,'');
    }

    if ('upper_case' in config) {
        if (config.upper_case == 'first') word = word.charAt(0).toUpperCase() + word.slice(1);
        if (config.upper_case == 'last')  word = word.slice(word.length -1) + word.charAt(word.length -1).toUpperCase();
        
    }
    return word;   
}