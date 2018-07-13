/**
 * Event bus utility module for pubsub
 * To use, instantiate in a parent module:
 *    const events = new Events();
 * In a subscriber module:
 *    events.on('stateChanged', someFunction);
 * In an event publisher:
 *    app.events.emit('updateState', data ));
*/

class Events {

  static _events = new Set();
  
  /**
   * Subscribe to an event on receipt of 'eventName'.
   * Registers a callback on our _events Set, keyed to the event name.
   * @param   {String}     eventName   Name of the event to listen for
   * @param   {Function}   fn          Callback to fire on hearing the event
  */
  on(eventName, fn) {
    this._events.add({ eventName, fn });
  }

  /**
   * Unsubscribe from a specified event.
   * Removes the associated callback from our events Set.
   * @param   {String}     eventName   Name of event to stop listening for
   * @param   {Function}   fn          Associated callback to unregister
  */
  off(eventName, fn) {
    this._events.forEach(event => {
      if (event.eventName === eventName && event.fn === fn) {
        this._events.delete(event);
      }
    });
  }

  /**
   * Publish an event 'eventName', passing 'data' to all callbacks
   * registered to the event name in our 'events' object
   * @param    {String}    eventName   Name of the event to listen for
   * @param    {Any}       data        Data to pass to the event's callback
  */
  emit(eventName, data) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  }

}

export default Events;
