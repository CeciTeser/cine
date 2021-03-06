import { types } from "../types";
import { TotalResults } from "../../types";
import { apiTmdb } from "../../utils/axios";



type ProcessItems={
    page: number, 
    search: string,  

}

// ----------GET/SEARCH ITEMS FROM API ------------

export const processItems = ({ page, search }: ProcessItems)=> {

    return async (dispatch:any)=>{

        let response;

        dispatch(startItems())

        try {

            if(search){

                response = await apiTmdb.get(`/search/multi?query=${search}&page=${page}`);
                dispatch(okItems (response.data));
                
            
            } 
            else {
                response = await apiTmdb.get(`/discover/movie?page=${page}`);
                dispatch(okItems (response.data))
            }
        }
        catch (err) {
                dispatch(deniedItems(err));
                
            }
        };
    
};


export const startItems =()=> ({
    type: types.itemsInit,
    payload:[],
});

export const okItems =(data: TotalResults)=>({
    type: types.itemsOk,
    payload:data,
});

export const deniedItems =(err:any)=>({
    type: types.itemsError,
    error: {
        message: err,
    }
});








