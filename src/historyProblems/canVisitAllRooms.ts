//841. 钥匙和房间
export function canVisitAllRooms(rooms: number[][]): boolean {
    if(!rooms){
        return false;
    }
    if(rooms.length == 1){
        return true;
    }
    let keys = rooms[0];
    let visitedMap:Set<number> = new Set<number>();
    visitedMap.add(0);
    while(keys.length > 0 && visitedMap.size < rooms.length){
        let key = keys.shift();
        if(!visitedMap.has(key)){
            visitedMap.add(key);
            keys = keys.concat(rooms[key]);
        }
    }
    return visitedMap.size == rooms.length;
};