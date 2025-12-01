

export default function Header(){



    return(
        <div className="flex justify-between items-center ml-10 mr-10 mb-2">
            <div className='flex flex-row h-15 items-center '>
                <img src="/public/assets/logo/email.png" className="mr-2 w-8 h-8"></img>
                <h1 className="">Smart Email Rewriter</h1>
            </div>
            <div className='flex flex-row items-center '>
                <a href=""><img src="/public/assets/logo/github-sign.png" className="p-2 w-8 h-8 "></img></a>
                <a href="">About</a>
            </div>
        </div>
    )
}
