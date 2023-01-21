export const toObj = (id: number, task: string,  due: number, stats: string) => {
    return {id, task, due, stats}
}

export interface ObjectInterface {
    id: number; 
    task: string;
    due: number;
    stats?: string;
}

export const objToString = (obj: ObjectInterface[]) => JSON.stringify(obj)

export const containerLen = (arr: ObjectInterface[], tag: string): number => arr.filter((task: ObjectInterface) => task.stats === tag).length