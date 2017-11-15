var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var pos = 0;
            regex = /\$([+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2}))/gi;
            var match = regex.exec(text);
            var replacedText = ""
            var shouldReplace = false;
            while (match != null) {
                shouldReplace = true
                var nerdMoney = parseFloat(match[1].replace(',',''));
                replacedText = replacedText + text.substr(0, match.index);
                replacedText = replacedText + (nerdMoney/680).toPrecision(3).toString() + " MONEY BUCKETS";
                replacedText = replacedText + text.substr(regex.lastIndex);

                match = regex.exec(text);
            }

            if (shouldReplace) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}