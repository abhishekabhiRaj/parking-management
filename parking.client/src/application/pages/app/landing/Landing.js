import React, { Suspense } from "react";

const Layout = React.lazy(() => import('application/components/Layout/Layout'));


const Landing = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <div className="content">
                        Hello
                    </div>
                </Layout>
            </Suspense>
        </>
    )
}

export default Landing;