import { useEffect } from "react"

export const InnerPage = () => {
    useEffect(() => {
        console.log('v.0.0.5')
    }, [])

    return <h1>InnerPage</h1>
}
