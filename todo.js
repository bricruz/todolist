const todo = [];
let start = prompt("What do you want to do?");
while (start !== "quit") {
    if (start === "new") {
        let item = prompt("What do you need to do?");
        todo.push(item);
    }
    else if (start === "list") {
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i + 1}${todo[i]}`);
        }
    }
    else if (start === "delete") {
        let del = prompt("What item do you want to delete?");
        todo.splice(del - 1, 1);
    }
    start = prompt("What do you want to do?");
}