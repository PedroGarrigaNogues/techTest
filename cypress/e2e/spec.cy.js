import  cypressCommands  from '../support/commands'

describe('Simple Google Test', () => {


  beforeEach(() => {
    cypressCommands.iNavigateToGoogle()
  })

  it('check history issues  ', () => {
    cypressCommands.whenISearchForDogs()
  }) 
})
