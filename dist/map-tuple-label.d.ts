declare type MapTupleLabel<T extends readonly any[], M extends Record<Exclude<keyof T, keyof any[]>, PropertyKey>> = {
    [K in Exclude<keyof T, keyof any[]> as M[K]]: T[K];
};
export default MapTupleLabel;
