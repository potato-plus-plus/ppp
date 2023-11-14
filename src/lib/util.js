// https://github.com/berezaa/minershaven/blob/d5c8b41ca8ed9f1bd91176ec397e8dff9a259130/src/ReplicatedStorage/MoneyLib.lua#L13
const prefixes = [
    "","k","M","B","T","qd","Qn","sx","Sp","O","N","de","Ud","DD","tdD","qdD","QnD","sxD","SpD","OcD","NvD","Vgn","UVg","DVg","TVg","qtV","QnV","SeV","SPG","OVG","NVG","TGN","UTG","DTG","tsTG","qtTG","QnTG","ssTG","SpTG","OcTG","NoTG","QdDR","uQDR","dQDR","tQDR","qdQDR","QnQDR","sxQDR","SpQDR","OQDDr","NQDDr","qQGNT","uQGNT","dQGNT","tQGNT","qdQGNT","QnQGNT","sxQGNT","SpQGNT", "OQQGNT","NQQGNT","SXGNTL"
]

function numString(number) {
    let exp = Math.floor(Math.log10(number + 1) / 3);
    let base = number / (10 ** (exp*3) );
    let prefix = prefixes[exp] || '';

    base = (base+'').slice(0, 5);
    base += prefix;

    if (prefix != '') base = `(${base})`;

    return base;
}

export {
    numString
}