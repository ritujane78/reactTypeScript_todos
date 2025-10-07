export class Todo {    
    constructor(private _todoNumber: number,private _todoDescription: string, private _todoAssignee: string){}
    public get todoNumber(): number {
        return this._todoNumber;
    }
    public set todoNumber(value: number) {
        this._todoNumber = value;
    }    
    public get todoDescription(): string {
        return this._todoDescription;
    }
    public set todoDescription(value: string) {
        this._todoDescription = value;
    }
    public get todoAssignee(): string {
        return this._todoAssignee;
    }
    public set todoAssignee(value: string) {
        this._todoAssignee = value;
    }
}