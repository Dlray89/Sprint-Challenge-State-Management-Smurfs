1. What problem does the context API help solve?
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!


1. Context API allows youe to manage state and pass it down to certain components you need to add data to. Instead of prop drilling from component to component..Context API allows us to manage our data alot better.

2. the Redux store allows us to store state and use it now or when we need to. The you have the reducers that allow us to talk to the store and tell it what we actually need from it. Actions allows us to talk to the reducers and tell them what action need to be taking from the redux store.

3. Application state is data that need to be use from the entire application while component state is specific to that component. the beauty of state management.

4. Redux-Thunk is the gateway between redux and thunk. While we cant pull any type data from an API using redux thats where thunk comes into play. Thunk allows us to pull data from a server and store it using Redux so we can manage that data.

5. I really enjoy Redux because it allows me to see what data im managing and what soecific data I can render to the ui. I can manage all my data in one place and provide actions to tell what i really what to do with that data.