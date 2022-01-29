import api from "./api/api";
import React, { useEffect, useState } from "react";

const Content = () => {

    const [user, setUser] = useState();

    useEffect(() => {
      api
        .get("/")
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    return (
        <>
            <div className="mt-6 bg-gray-200 p-3 2xl:w-5/12 lg:w-6/12 w-11/12 rounded-lg ">
                <div className="flex items-center">    
                    <img className="w-10 rounded-full" src="https://avatars.githubusercontent.com/u/51862966?v=4"/>
                    <div className="pl-2">
                        <h1>{user?.[0].name}</h1>
                    </div>
                </div>
            </div>
 
        </>
    )
  }

export default Content;


