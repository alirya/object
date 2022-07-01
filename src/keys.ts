export default function Keys<Type extends object>(object : Type) : (keyof Type)[] {

    return Object.keys(object) as (keyof Type)[];
}