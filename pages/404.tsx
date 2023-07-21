import "../app/globals.css"
import Link from "next/link";

const custom404 = () => {
    return (  
        <section>
            <div className="container mx-auto text-center min-h-screen flex flex-col items-center justify-center">
                <h1>404</h1>
                <h4>That page is missing.</h4>
                <Link href="/" className="btn btn-m btn-prim mt-4">Homepage</Link>
            </div>
        </section>
    );
}
 
export default custom404;