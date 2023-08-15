import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import styles from "./styles.css"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Signup from "./src/components/Signup";
//import Grocery from "./src/components/Grocery";
import { lazy } from "react";
import { Provider } from "react-redux";
import AppStore from "./src/utils/appStore";
import Carts from "./src/components/Carts"

const Grocery = lazy(() => import("./src/components/Grocery"));

const App =() =>
{
    return(
        <>
            <Provider store ={AppStore}>
                <Header/>
                <Outlet />
            </Provider>
        </>
    )
}

const routerApp = createBrowserRouter(
    [
        {
            path:'/',
            element: <App/>,
            children: [
                {
                    path:'/',
                    element: <Body/>,
                },
                {
                    path: '/About',
                    element: <About />,
                    
                },
                {
                    path: '/Grocery',
                    element: <Suspense fallback = {<h1>Loading...</h1>} ><Grocery /></Suspense>,
                    
                },
                {
                    path: '/ContactUs',
                    element: <ContactUs/>,
                    
                },
                {
                    path: '/',
                    element: <Body/>
                },
                {
                    path: '/restaurants/:resId',
                    element: <RestaurantMenu />,
                },
                {
                    path: '/Signup',
                    element: <Signup/>,
                },
                {
                    path: '/Cart',
                    element:<Carts/>
                }
            ],
            errorElement : <Error/>
        },
        
       
        

    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp} />);
