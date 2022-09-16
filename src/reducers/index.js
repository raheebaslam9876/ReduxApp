import { combineReducers } from 'redux';
const SongReducer = () => {
    return [
        { title: 'Hi there', duration: '3:12' },
        { title: 'Hello', duration: '4:14' },
        { title: 'Here', duration: '5:15' },
    ];
}

const SelectSongReducer = (selectsong = null, action) => {
    if (action.type === 'Song_Selected') {
        return action.payload;
    }
    return selectsong;
}

export default combineReducers({
    songs: SongReducer,
    selectedsong: SelectSongReducer
});