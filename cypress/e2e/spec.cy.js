import  cypressCommands  from '../support/commands'

describe('iberia tech test', () => {
  beforeEach(() => {
    cypressCommands.loadLandingPage()
  })

  it('searches for a flight', () => {
    cypressCommands.destination()
    cypressCommands.date()
    cypressCommands.passangers()
    cypressCommands.go()
  }) 
})
