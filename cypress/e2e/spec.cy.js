import  cypressCommands  from '../support/commands'

describe('Simple Google Test', () => {


  beforeEach(() => {
    cypressCommands.loadLandingPage()
  })

  it('check history issues  ', () => {
    cypressCommands.defineFlight()
  }) 
})
