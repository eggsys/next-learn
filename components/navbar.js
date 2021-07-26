import Link from 'next/link'


export default function navbar() {
    return (
        <div>

            <nav>
                <la>
                    <Link href="./">
                        <a href="">Home</a>
                    </Link>
                </la>
                <la>
                    <Link href="./demo">
                        <a href="">Demo</a>
                    </Link>
                </la>
                <la>Help</la>
                <la>List</la>

            </nav>
        </div>
    )
}