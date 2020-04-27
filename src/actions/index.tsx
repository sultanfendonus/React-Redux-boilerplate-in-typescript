import mainApi from '../api/MainApi'

export const getAllPost = () => async (dispatch: any) => {
    try {
        const response = await mainApi.get('/posts');
        dispatch({type: "ALL_POST", payload: response.data});
    } catch (error) {
        console.log(error);
    }
}