
export function findFriendlyName(userList, payload) {
    for(let i = 0; i < userList.length; i++) {
        if(userList[i].id === payload.whoClicked) {
           return payload.whoClicked = userList[i].friendlyName
        }
    }
    console.log(payload.whoClicked)
    console.log(userList)
    return payload.whoClicked = "Unknown"
}