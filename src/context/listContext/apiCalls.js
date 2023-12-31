import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "./ListActions";
import axios from "axios";

//GET LISTS
export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("https://funflix-backend.onrender.com/api/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFailure());
    }
}

//DELETE LISTS
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("https://funflix-backend.onrender.com/api/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
}

//CREATE MOVIES
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axios.post("https://funflix-backend.onrender.com/api/lists", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch (err) {
        dispatch(createListFailure());
    }
}
