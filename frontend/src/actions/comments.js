export const ADD_COMMENT       = 'ADD_COMMENT';
export const EDIT_COMMENT      = 'EDIT_COMMENT';
export const DELETE_COMMENT    = 'DELETE_COMMENT';

export function addComment(){
    return {
        type: ADD_COMMENT
    }
}

export function editComment(){
    return {
        type: EDIT_COMMENT
    }
}

export function deleteComment(){
    return {
        type: DELETE_COMMENT
    }
}