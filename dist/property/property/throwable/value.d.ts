import PropertyInterface from "../property";
export default function Value(data: PropertyInterface & {
    type: string;
}): Error;
