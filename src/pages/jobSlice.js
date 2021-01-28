import {createSlice} from '@reduxjs/toolkit';
import {getJobs, setJob} from "../../api/dispatchApi";

const initialState = {
    jobs: [],
    isLoading: false,
    error: null,
    isSaving: false,
}

const jobs = createSlice({
    name: 'jobs',
    initialState: initialState,
    reducers: {
        getJobsSuccess(state, action) {
          console.log("action", action)
          state.jobs = action.payload.jobs
          state.isLoading=false
          state.error=null
        },
        getJobsStart(state, action) {
          state.isLoading=true
        },
        getJobsFailure(state, action) {
          state.isLoading=false
          state.error=action.payload
        },
        setJobUI(state, action) {
            state.jobs.push(action.payload)
        },
        setJobStart(state, action) {
            state.isSaving=true
        },
        setJobFailure(state, action) {
            state.isSaving=false
            state.error=action.payload
        },
        setJobSuccess(state, action) {
            // state.posts.push(action.payload.post) 
            const array = state.jobs.map(job => {
                if (job._id === "fakeID"){
                    return action.payload.job
                } else {
                    return job
                }
            })
            state.jobs=array
            state.isSaving=false
            state.error=null
        },
        // deletePostUI(state, action) {
        //     console.log('this is the delete action ', action)
        //     const array = state.jobs.filter(post => {
        //         if (post._id === action.payload.post_id){
        //             return false
        //         } else {
        //             return true
        //         }
        //     })
        //     state.posts=array
        // },
        // setCommentStart(state, action) {
        //     state.isSaving=true
        // }, 
        // setCommentFailure(state, action) {
        //     state.isSaving=false
        //     state.error=action.payload
        // },
        // setCommentSuccess(state, action) {
        //     // console.log(action)
        //     const array = state.posts.map(post => {
        //         if (post._id === action.payload.post._id){
        //             return action.payload.post
        //         } else {
        //             return post
        //         }
        //     })
        //     state.posts=array
        //     state.isSaving=false
        //     state.error=null
        // },
        // deleteCommentUI(state, action) {
        //     const array = state.posts.map(post => {
        //         if (post._id === action.payload.post_id){
        //             return {
        //                 ...post,
        //                 comments: post.comments.filter((comment) => {
        //                     if (comment._id === action.payload.comment_id) {
        //                         return false
        //                     } else {
        //                         return true
        //                     }
        //                 })
        //             }
        //         } else {
        //             return post
        //         }
        //     })
        //     console.log('this is the delete comment action ', action, array)
        //     state.posts=array
        // }
    },
});

export const {
    getJobsStart,
    getJobsSuccess,
    getJobsFailure,
    setJobUI,
    setJobStart,
    setJobFailure,
    setJobSuccess,
    // deletePostUI,
    // setCommentStart,
    // setCommentFailure,
    // setCommentSuccess,
    // deleteCommentUI,
} = jobs.actions;

export default jobs.reducer;

export const fetchJobs = () => async (dispatch) => {
    try {
      dispatch(getJobsStart())
      const jobs = await getJobs()
      dispatch(getJobsSuccess(jobs))
    } catch (error) {
      dispatch(getJobsFailure(error.toString()))
    } 
}

export const saveJob = (quantity, position, qualifications, duration, location) => async (dispatch) => {
    try {
        dispatch(setJobStart())
        dispatch(setJobSuccess(job))
        // const posts = await getPosts(token)
        // dispatch(getPostsSuccess(posts))
    } catch (error) {
        dispatch(setJobFailure(error.toString()))
    }
}

// export const removePost = (token, post_id) => async (dispatch) => {
//     try {
//         const post = await deletePost(token, post_id)
//         dispatch(deletePostUI({post_id: post_id}))
//     } catch (error) {
//         throw new error
//     }
// }

// export const saveComment = (token, postId, message) => async (dispatch) => {
//     try {
//         dispatch(setCommentStart())
//         const comment = await setComment(token, postId, message)
//         dispatch(setCommentSuccess(comment))
//         // const posts = await getPosts(token)
//         // dispatch(getPostsSuccess(posts))
//     } catch (error) {
//         dispatch(setCommentFailure(error.toString()))
//     }
// }

// export const removeComment = (token, postId, commentId) => async (dispatch) => {
//     try {
//         const comment = await deleteComment(token, postId, commentId)
//         dispatch(deleteCommentUI({post_id: postId, comment_id: commentId}))
//     } catch (error) {
//         throw new error
//     }
// }