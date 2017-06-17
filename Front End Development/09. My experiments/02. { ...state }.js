import _ from 'lodash';
import { FETCH_ALL_NOTES, FETCH_ONE_NOTE, DELETE_ONE_NOTE } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_ONE_NOTE:
      // 148
      return _.omit(state, action.payload);
    case FETCH_ALL_NOTES:
      // 125
      return _.mapKeys(action.payload.data, '_id');
    case FETCH_ONE_NOTE:
      // 144
      const justFetchedOneNote = action.payload.data;
      const newState = { ...state };
      // Stwórz nowy klucz w newState {} o wartości jaka jest zapisana tutaj jjustFetchedOneNote._id
      // czyli ^592c215112340f00115df980^ i do tego klucza ^592c^ przypisz jako jego wartość
      // cały pobrany obiekt justFetchedOneNote

      // Jeśli klucz o dokładnie takim id ^592c^ już istnieje to po prostu go nadpisz
      newState[justFetchedOneNote._id] = justFetchedOneNote;
      return newState;
    default:
      return state;
  }
}

/******************************************************************************/

// return { ...state, [action.payload.data._id]: action.payload.data };
// Make new key on this object using that value [justFetchedPost.id] and set its value to justFetchedPost

// QUESTION
// For the NoteShow component, you are still connecting the entire posts state to the component.
// What is the point of returning { ...state, [action.payload.data.id]: action.payload.data } then in FETCH_POST?
//
// If later you are going to map the entire posts state to the NoteShow component,(as you have done here:
//
// function mapStateToProps({ posts }, ownProps) {
//   return {
//     post: posts[ownProps.match.params.id]
//   };
// }
//
// Wouldn't it be easier to just return { ...state } rather than
// { ...state, [action.payload.data.id]: action.payload.data } when fetchOneNote is called?

// ANSWER
// The purpose of returning  { ...state, [action.payload.data.id]: action.payload.data }
// is to make sure the post we want to show is actually contained in state.
// If you went to the posts/:id route directly, by typing the url in the browser,
// and skipped going to the index route, there would not be any posts in state because
// posts are only fetched in the PostsIndex component.

// QUESTION
// Hi Stephen,
//
// I'm a bit confused, about the reducer for FETCH_POST.
//// Why aren't we returning only a single post instead of returning all the posts?
//// In this case, we only care about one particular post, the one we want to display.

// ANSWER
// Hi Helio,
//
// If only one post was returned, we would lose all the other posts that exist in state.
// Since posts are stored in an object, instead of an array,
// we can refer to it directly with the id, which is in the route params.

//WRAP UP
// Hi Alec,
//
// I watched the wrap up video on React Router and Redux (the updated)
// and he explains what the reducer FETCH_POST is doing here:
//
// return { ...state, [action.payload.data.id]: action.payload.data };
// it actually is not adding another another object to the state,
// he says that if the ID of the post is already contained in the state
// then it will simply go into its place.

//ALL CODE WITH CONSOLE LOGS

// case FETCH_ONE_NOTE:
//   // 144
//   const justFetchedPost = action.payload.data;
//   const newState = { ...state };
//   console.log('newState', newState);
//   console.log('justFetchedPost', justFetchedPost);
//   // Make new key on this object using that value [justFetchedPost.id] and set its value to justFetchedPost
//   // Odszukaj klucz obiektu o id takim jaki został pobrany
//   // z serwera i nadpisz go lub jeśli nie istnieje to go stwórz
//   newState[justFetchedPost._id] = justFetchedPost;
//   console.log('newStateAFTER', newState);
//   return newState;


// const justFetchedPost = action.payload.data;
// const newState = { ...state };
// console.log('newState', newState); // Object {}
// console.log('justFetchedPost', justFetchedPost); //Object {_id: "592c215112340f00115df980", title: "Second post!", content: "Nice! This app has no process types yet!", createDate: "29-May-2017 13:25 GMT"}

// const bawol = 'miś';
//
// newState[bawol] = justFetchedPost; // zapisujemy obiekt justFetchedPost pod kluczem o wartości bawół ('miś') w obiekcie newState
// console.log('newStateAFTER', newState); // Object {miś: Object}
// return newState;

// {
//   posts: {
//     'miś': {
//       _id: '592c215112340f00115df980',
//       title: 'Second post!',
//       content: 'Nice! This app has no process types yet!',
//       createDate: '29-May-2017 13:25 GMT'
//     }
//   },
//   form: {}
// }

//
// var oldState = {
//   posts: {
//     '1': {
//       _id: '1',
//       title: 'First post!',
//       content: 'My excellent first post!',
//       createDate: '29-May-2017 13:25 GMT'
//     },
//     '2': {
//       _id: '2',
//       title: 'Second post!',
//       content: 'Nice! This app!',
//       createDate: '29-May-2017 13:25 GMT'
//     }
//   }
// };
//
//
//
// var actionPayloadData = {
//       _id: '2',
//       title: 'Second post!',
//       content: 'Nice! This app!',
//       createDate: '29-May-2017 13:25 GMT'
//     };
//
// var post = actionPayloadData;
//
//
//     console.log(oldState.posts[1]);
//
//     oldState.posts[1] = post;
//
//     console.log(/---------/);
//
//     console.log(oldState.posts[1]);
