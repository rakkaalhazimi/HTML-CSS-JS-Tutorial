var list = ["a", "b"];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];
    console.log(item);
}
// Readonly array
var readonlyList = ["a", "b"];
// Will throw an error
// readonlyList.push("c")
for (var _a = 0, readonlyList_1 = readonlyList; _a < readonlyList_1.length; _a++) {
    var item = readonlyList_1[_a];
    console.log(item);
}
