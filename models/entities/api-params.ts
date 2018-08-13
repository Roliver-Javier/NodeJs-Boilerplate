import { IApiParams } from '../../interfaces/api-params';

export class ApiParams implements IApiParams {
    private className: string;
    private methodName: string;
    private path: string;
    private type: string;
    private version: string;

    constructor(_className: string, _methodName: string, _path: string, _type: string, _version: string) {
        this.className = _className;
        this.methodName = _methodName;
        this.path = _path;
        this.type = _type;
        this.version = _version;
    }

    public get ClassName(): string {
        return this.className;
    }
    public set ClassName(value: string) {
        this.className = value;
    }
    public get MethodName(): string {
        return this.methodName;
    }
    public set MethodName(value: string) {
        this.methodName = value;
    }
    public get Path(): string {
        return this.path;
    }
    public set Path(value: string) {
        this.path = value;
    }
    public get Type(): string {
        return this.type;
    }
    public set Type(value: string) {
        this.type = value;
    }
    public get Version(): string {
        return this.version;
    }
    public set Version(value: string) {
        this.version = value;
    }
}