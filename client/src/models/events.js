/**
 * Event bus utility module for pubsub
 * To use, instantiate in a parent module:
 *    const events = new Events();
 * In a subscriber module:
 *    events.on('stateChanged', someNamedFunction);
 * To unsubscribe:
 *    events.off('stateChanged', someNamedFunction);
 * In an event publisher:
 *    events.emit('updateState', data);
*/

class Events {
  
  /**
   * Subscribe to an event on receipt of 'eventName'.
   * Registers a callback on our _events Set, keyed to the event name.
   * @param   {String}     eventName   Name of the event to listen for
   * @param   {Function}   cb          Callback to fire on hearing the event
  */
  on(eventName, cb) {
    Events.listeners.add({ eventName, cb });
  }
  
  /**
   * Unsubscribe from a specified event.
   * Removes the associated callback from our events Set.
   * @param   {String}     eventName   Name of event to stop listening for
   * @param   {Function}   cb          Associated callback to unregister
  */
  off(eventName, cb) {
    Events.listeners.forEach(event => {
      if (event.eventName === eventName && event.cb === cb) {
        Events.listeners.delete(event);
      }
    });
  }

  /**
   * Emits event 'eventName', which causes all registered callbacks to be
   * called with 'data'.
   * @param    {String}    eventName   Name of the event to listen for
   * @param    {Any}       data        Data to pass to the event's callback
  */
  emit(eventName, data) {
    Events.listeners.forEach(listener => {
      if (listener.eventName === eventName) {
        listener.cb(data);
      }
    });
  }

}

Events.listeners = new Set();

export default Events;
