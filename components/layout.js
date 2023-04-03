import Sidebar from "../pages/components/Sidebar"

export default function Layout({ children }) {
    return (
        <>
        <div id="app" className="row">
            <aside>
            <Sidebar />
            </aside>
            <main>
                {children}
            </main>
        </div>
        </>
    )
}