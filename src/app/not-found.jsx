import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>Not Found Page</h2>
            <div>Sorry the page can't be found</div>
            <Link href="/">Go Back Home</Link>
        </div>
    )
}

export default NotFound;