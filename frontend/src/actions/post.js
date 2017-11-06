export const ADD_POST       = 'ADD_POST';
export const EDIT_POST      = 'EDIT_POST';
export const DELETE_POST    = 'DELETE_POST'

export function addPost(){
    return {
        type: ADD_POST
    }
}

export function editPost(){
    return {
        type: EDIT_POST
    }
}

export function deletePost(){
    return {
        type: DELETE_POST
    }
}