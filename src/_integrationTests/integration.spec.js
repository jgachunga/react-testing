/* eslint-disable testing-library/await-async-utils */
import moxios from 'moxios';
import { testStore } from '../Utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    })
    afterEach(() => {
        moxios.uninstall();
    })

    test('Store i supdated correctly', () => {
        const expectedState = [
            {
                title: 'Example Tiltle one',
                body: 'Some body ttext'
            },{
                title: 'Example Tiltle one',
                body: 'Some body ttext'
            },{
                title: 'Example Tiltle one',
                body: 'Some body ttext'
            },
        ];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })

            return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })
        })
    })
})