export default function FromJson<Type>(json: {
    toString: () => string;
}, validator: (object: any) => object is Type, error: ((json: string, object: object) => Error) | undefined, preprocess: (object: object) => any): Type;
