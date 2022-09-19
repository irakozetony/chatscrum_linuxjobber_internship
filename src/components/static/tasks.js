export const taskList = [
    {id: "one", item: "build chatscrum"},
    {id: "two", item: "improve my js"},
    {id: "three", item: "work on django project"},
    {id: "four", item: "play call of duty"},
    {id: "five", item: "code all day"}
]

export const taskColumns = {
    "weekly":{
        name: "Weekly goal",
        items: taskList,
    },
    "daily":{
        name: "Daily target",
        items: [],
    }
}
