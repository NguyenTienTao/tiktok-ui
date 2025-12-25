import { BrowserRouter, Route, Routes } from "react-router";
import { Fragment } from "react";
import { DefaultLayout } from "./components/Layout";
import { publicRoutes } from "./routes";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
