
const initState = {
  'burgerMenuOpened':false,
  'repos':[{
    'id': "001",
    'name': 'website',
    'description':'new Desc'
  }]
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'ADD_REPO') {
    
  }
  return state
}


export default rootReducer;