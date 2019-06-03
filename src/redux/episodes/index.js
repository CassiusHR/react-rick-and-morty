const GET_EPISODES_REQUEST ='GET_EPISODES_REQUEST'
const GET_EPISODES_SUCCESS ='GET_EPISODES_SUCCESS'
const GET_EPISODES_FAIL ='GET_EPISODES_FAIL'

export const getEpisodesRequest = () => ({
    type: GET_EPISODES_REQUEST
})

export const getEpisodesSuccess = (episodes) => ({
    type: GET_EPISODES_SUCCESS,
    payload: {
        episodes
    }
})

export const getEpisodesFail = (error) => ({
    type: GET_EPISODES_FAIL,
    payload: {
        error
    }
})

const initialState = {
    entities: [],
    loading: false,
    fetched:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EPISODES_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_EPISODES_SUCCESS: {
            return{
                ...state,
                loading: false,
                fetched: true,
                entities: [
                    ...state.entities,
                    ...action.payload.episodes
                ]
            }
        }
        case GET_EPISODES_FAIL: {
            return {
                ...state,
                loading:false,
                error: action.payload.error
            }
        }
        default: return state
    }
}