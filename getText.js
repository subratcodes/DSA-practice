// const dLinkList=new DoubleLinkList(10);
// let a= dLinkList.append(9)
// let b=dLinkList.prepend(11);
//  console.log(b)
// a=dLinkList.printlist();
// console.log(a)
function getText(index, weekdays) {
    console.log(weekdays);
    if (weekdays[index] !== undefined) {
        return weekdays[index];
    }
    else
        return new Error('Invalid weekday number');
    let a = getText(10, ['Tues', "Sat"]);
}
