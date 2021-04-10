const ADD_POST = 'ADD-POST'
const ON_POST_CHANGE = 'ON-POST-CHANGE'
const ADD_MESSAGE = 'ADD-MESSAGE'
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'

const store = {
  _rerenderEntireTree() {
    console.log(1)
  },

  _state: {
    profilePage: {
      posts: [
        { id: 1, content: 'Me sooo good', date: '09.01.2021' },
        {
          id: 2,
          content:
            'Hello guys its me e  fhf feh e fe fugfeugfehfeghf fe fegefhgcud  ejgfefegjef fegue df hdjdfh fe fe  dhdfhdfiffh v bfuhefiu e hfhofejofe',
          date: '02.01.2021',
        },
        {
          id: 3,
          content: `Happy new year dhdhdfeoeenffkfhjfe dhdjhehedjehejfejhfjfee 3jei3ihe3j3eh3e
    3ek3eje3he3ije3ie3  ejdbeb3gh3uhu fejf4 i4f 4f 4u 4g ufgui fegi efegeehjfege e feu fehuif ufekfehjfeioehefejhfefehfekjhfejkhfejfe  dfjhdfjkfhefuiergfbfd`,
          date: '01.01.2021',
        },
      ],
      postValue: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Marcus' },
        { id: 4, name: 'Elisabet' },
        { id: 5, name: 'Daniel' },
        { id: 6, name: 'Mary' },
      ],

      messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
      ],

      messageValue: '',
    },
  },

  getState() {
    return this._state
  },

  subcribe(observer) {
    this._rerenderEntireTree = observer
  },

  dispatch(action) {
    switch (action.type) {
      case 'ADD-POST':
        const date = new Date()
        const day = +date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const month =
          +date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
        const year = date.getFullYear()
        const dateCurrent = `${day}.${month}.${year}`

        const newPost = {
          id: 4,
          content: this._state.profilePage.postValue,
          date: dateCurrent,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.postValue = ''
        this._rerenderEntireTree(this._state)
        break
      case 'ON-POST-CHANGE':
        this._state.profilePage.postValue = action.newValue
        this._rerenderEntireTree(this._state)
        break
      case 'ADD-MESSAGE':
        const newMessage = {
          id: 5,
          message: this._state.dialogsPage.messageValue,
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.messageValue = ''
        this._rerenderEntireTree(this._state)
        break
      case 'ON-MESSAGE-CHANGE':
        this._state.dialogsPage.messageValue = action.newValue
        this._rerenderEntireTree(this._state)
        break
      default:
        console.error('Action type is uncorrectly')
    }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (value) => ({
  type: ON_POST_CHANGE,
  newValue: value,
})

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const onMessageChangeActionCreator = (value) => ({
  type: ON_MESSAGE_CHANGE,
  newValue: value,
})

export default store
