export default function ListElement({subject}){
    return(
        <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
            <span>{subject}</span>
        </li>
    )
}