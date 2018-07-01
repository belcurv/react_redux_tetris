### Redux

No direct method for modifying the store. Reducers can modify the store. We dispatch actions to trigger reducers.

>To change data we need to **dispatch** an action.

To retrieve data, we do not get it from the store. Instead use `store.getState()` which gives us a snapshop of the store - the "state" of the apploication at the time `getState()` was called.

>To obtain store data we need to get the current **state** of the store.

## Provider

To link our React app with a redux store, we tell our app that this store existsusing the `Provider` from the react-redux library.

>`Provider` is a React component from the “react-redux” library. It does one thing: "provides" the store to its child components.

`provider` only makes the store accessible to it’s children. We want our entire app to access the store, so we put our App component within Provider:

```jsx
const store = createStore(todoApp, {})

// Provider is given the store as a prop
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('appRoot')
)
```

## Connect

Once we “provide” the redux store to our app, we can connect our components to it.

`connect` lets us both retrieve data by obtaining the store's current state, or change its state by dispatching actions.

Below we use `connect` to map the stores state and dispatch to the props of a component:

```jsx
import { connect } from 'react-redux';

const TodoItem = ({ todo, destroyTodo }) => (
  <div>
    {todo.text}
    <span onClick={destroyTodo}> x </span>
  </div>
);

const mapStateToProps = (state) => (
  {
    todo: state.todos[0]
  }
);

const mapDispatchToProps = dispatch => (
  {
    destroyTodo: () => (
      dispatch({
        type: 'DESTROY_TODO'
      });
    )
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
```

`mapStateToProps` and `mapDispatchToProps` are both pure functions that are passed the store's "state" and "dispatch" respectively.

>They both return an object, whose keys will then be passed in as the `props` of the component they are connected to.

In the above, `mapStateToProps` returns an object with only one key: `todo`, and `mapDispatchToProps` returns an object with the `destroyTodo` key.

Then we export the "connected" component, which provides `todo` and `destroyTodo` as props to `TodoItem`.

Only components within the `Provider` can be connected.