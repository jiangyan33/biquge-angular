
// 接口返回格式
export default interface APIResult {
    readonly code: number;
    readonly message: string | null;
    readonly data: any;
}
