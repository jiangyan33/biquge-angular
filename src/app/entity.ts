
// 接口返回格式
export default interface APIResult {
    readonly code: number;
    readonly msg: string | null;
    readonly data: any;
}
