export const toObj = (id: number, task: string,  due: number, stats: string) => {
    return {id, task, due, stats}
}

export interface ObjectInterface {
    id: number; 
    task: string;
    due: number;
    stats?: string;
}

export const objToString = (obj: ObjectInterface[]) => {
    return JSON.stringify(obj)
}