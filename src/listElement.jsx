export default function ListElement({subject}){

    return(
        <li className="flex items-start gap-2">
            <span>{subject}</span>
        </li>
    )
}