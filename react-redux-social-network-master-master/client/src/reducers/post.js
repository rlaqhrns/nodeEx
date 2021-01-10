import { ADD_COMMENT, ADD_POST, DELETE_POST, GET_POST, GET_POSTS, POST_ERROR, REMOVE_COMMENT, UPDATE_LIKES } from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    error: {},
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                // setting 'payload' first will set new posts first in UI
                //먼저 payload를 설정하면 UI에서 새로운 게시글(posts)가 설정됨 
                posts: [payload, ...state.posts],
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                // return all posts except one matching id
                //일치하는 하나의 id를 제외하고 모든 게시글을 반환 

                posts: state.posts.filter(post => post._id !== payload),
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload.id ? { ...post, likes: payload.likes } : post),
                loading: false
            }
        case ADD_COMMENT:
            return {
                ...state,
                post: { ...state.post, comments: payload },
                loading: false
            }
        case REMOVE_COMMENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    // filter out comment with specific id
                    //특정 id에 해당하는  코멘트를 제거함 
                    comments: state.post.comments.filter(comment => comment._id !== payload)
                },
                loading: false
            }
        default:
            return state;
    }
}