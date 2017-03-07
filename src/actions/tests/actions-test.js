import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';
import nock from 'nock';
import {expect} from 'chai';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Async Action', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('Calls FETCH_WEATHER action type when fetchWeather has been done', () => {
    nock('http://example.com')
      .get('/weather')
      .reply(200, { body: { weather: ['some stuff'] }})

    const expectedActions = { 
      type: 'FETCH_WEATHER' 
    }
    const store = mockStore({ weather: [] })

    return store.dispatch(actions.fetchWeather())
      .then(() => {
        expect(store.getActions()[0].type).to.equal(expectedActions.type)
      })
  })
})