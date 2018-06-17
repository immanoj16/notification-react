import { ref } from '../config/constants';
import store from '../reducers';
import { fetchNotifications } from '../actions/notificationActions';
import { fetchAllUsers } from '../actions/userActions';

const authedId = store.getState().users.authedId;

const objectsToListenTo = [
    {
        dbRef: ref.child(`notification/${authedId}`),
        actions: {
            fetch: val => store.dispatch(fetchNotifications(val))
        },
    },
    {
        dbRef: ref.child('users'),
        actions: {
            fetch: val => store.dispatch(fetchAllUsers(val))
        },
    }
];

class ObjectWatcher {
    constructor(snapshot, type) {
        this.type = type;
        this.key = snapshot.key;
        this.ref = type.dbRef;
        this.ref.on('value', this.onChange.bind(this));
    }

    onChange(snapshot) {
        if (!snapshot) return; // this fires when the object is removed. But the child_removed event handles the removal

        this.type.actions.fetch(snapshot.val());
    }

    remove() {
        this.type.actions.remove(this.key);
        this.ref.off('value', this.onChange);
    }
}

class ListWatcher {
    constructor() {
        this.cache = {};
    }

    watchList(ref, type) {
        ref.on('child_added', snap => this.onChildAdded(snap, type));
        ref.on('child_removed', snap => this.onChildRemoved(snap));
    }

    onChildAdded(snapshot, type) {
        this.cache[snapshot.key] = new ObjectWatcher(snapshot, type);
    }

    onChildRemoved(snapshot) {
        this.cache[snapshot.key].remove();
        delete this.cache[snapshot.key];
    }
}

export const firebaseListener = () => {
  console.log(authedId);
  const listWatcher = new ListWatcher();

  objectsToListenTo.forEach(objectToListenTo => {
      listWatcher.watchList(objectToListenTo.dbRef, objectToListenTo);
  });
}
