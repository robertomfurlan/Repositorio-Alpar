class AutomacaoLuzes {
    static instance;
    rooms = {};
    observers = {};
  
    static getInstance() {
        if (!AutomacaoLuzes.instance) {
            AutomacaoLuzes.instance = new AutomacaoLuzes();
        }
        return AutomacaoLuzes.instance;
    }
  
    toggle(room) {
        this.rooms[room] = !this.rooms[room];
        this.notifyObservers(room);
    }
  
    getState(room) {
        return this.rooms[room] || false;
    }
  
    subscribe(room, callback) {
        if (!this.observers[room]) {
            this.observers[room] = [];
        }
        this.observers[room].push(callback);
    }
  
    notifyObservers(room) {
        if (!this.observers[room]) return;
        this.observers[room].forEach(observer => observer());
    }
  }
  
  AutomacaoLuzes.instance = new AutomacaoLuzes();
  